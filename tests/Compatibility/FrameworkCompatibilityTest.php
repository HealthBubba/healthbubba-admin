<?php

use App\Library\Uploader;
use App\Models\Appointment;
use Cloudinary\Cloudinary;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\UploadedFile;
use Inertia\Testing\AssertableInertia;
use Psr\Http\Client\ClientInterface;
use Psr\Http\Message\RequestInterface;
use Ramsey\Uuid\Uuid;
use Tests\TestCase;

uses(TestCase::class);

beforeEach(function () {
    config([
        'cloudinary.cloud_url' => 'cloudinary://test-key:test-secret@test-cloud',
    ]);

    $this->withoutVite();
});

it('renders the login page with the upgraded Inertia adapter', function () {
    $this->get('/login')
        ->assertOk()
        ->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Auth/Login')
            ->where('auth.user', null)
            ->where('canResetPassword', true));
});

it('redirects unauthenticated dashboard requests to login', function () {
    $this->get('/')->assertRedirect('/login');
});

it('preserves version 4 appointment identifiers', function () {
    $id = (new Appointment)->newUniqueId();

    expect(Uuid::fromString($id)->getVersion())->toBe(4);
});

it('configures the Cloudinary SDK from the existing cloud URL', function () {
    $client = cloudinary();

    expect($client)->toBeInstanceOf(Cloudinary::class)
        ->toBe(app(Cloudinary::class))
        ->and($client->configuration->cloud->cloudName)->toBe('test-cloud')
        ->and($client->configuration->cloud->apiKey)->toBe('test-key');
});

it('uploads prescriptions using a path or uploaded file and returns the secure URL', function (bool $usePath) {
    $file = UploadedFile::fake()->create('prescription.pdf', 1, 'application/pdf');
    $url = 'https://res.cloudinary.com/test-cloud/image/upload/doctor_documents/prescription.jpg';
    $sentRequest = null;

    $http = Mockery::mock(ClientInterface::class);
    $http->shouldReceive('sendRequest')->once()
        ->andReturnUsing(function (RequestInterface $request) use (&$sentRequest, $url) {
            $sentRequest = $request;

            return new Response(200, ['Content-Type' => 'application/json'], json_encode([
                'secure_url' => $url,
                'public_id' => 'doctor_documents/prescription',
            ]));
        });

    cloudinary()->setHttpClient($http);

    expect(cloudinaryUpload($usePath ? $file->getRealPath() : $file))->toBe($url);
    expect($sentRequest->getMethod())->toBe('POST')
        ->and((string) $sentRequest->getUri())->toBe('https://api.cloudinary.com/v1_1/test-cloud/image/upload')
        ->and((string) $sentRequest->getBody())->toContain('doctor_documents', 'jpg', 'test-key');
})->with([
    'path' => true,
    'uploaded file' => false,
]);

it('returns secure URLs for single and multiple cloud uploads', function (bool $multiple) {
    $files = [
        UploadedFile::fake()->create('first.jpg', 1, 'image/jpeg'),
        UploadedFile::fake()->create('second.jpg', 1, 'image/jpeg'),
    ];
    $url = 'https://res.cloudinary.com/test-cloud/image/upload/image.jpg';
    $http = Mockery::mock(ClientInterface::class);
    $http->shouldReceive('sendRequest')->times($multiple ? 2 : 1)
        ->andReturnUsing(fn () => new Response(200, ['Content-Type' => 'application/json'], json_encode([
            'secure_url' => $url,
        ])));
    cloudinary()->setHttpClient($http);

    $previousLocation = $_ENV['STORAGE_LOCATION'] ?? null;
    $_ENV['STORAGE_LOCATION'] = 'cloud';

    try {
        $result = Uploader::upload($multiple ? $files : $files[0]);

        expect($multiple ? json_decode($result, true) : $result)
            ->toBe($multiple ? [$url, $url] : $url);
    } finally {
        if ($previousLocation === null) {
            unset($_ENV['STORAGE_LOCATION']);
        } else {
            $_ENV['STORAGE_LOCATION'] = $previousLocation;
        }
    }
})->with([
    'single file' => false,
    'multiple files' => true,
]);

it('deletes cloud uploads through the SDK', function () {
    $http = Mockery::mock(ClientInterface::class);
    $http->shouldReceive('sendRequest')->once()
        ->withArgs(function (RequestInterface $request) {
            expect($request->getMethod())->toBe('POST')
                ->and($request->getUri()->getPath())->toBe('/v1_1/test-cloud/image/destroy')
                ->and((string) $request->getBody())->toContain('avatar');

            return true;
        })
        ->andReturn(new Response(200, ['Content-Type' => 'application/json'], '{"result":"ok"}'));
    cloudinary()->setHttpClient($http);

    Uploader::deleteFile('https://res.cloudinary.com/test-cloud/image/upload/avatar');
});
