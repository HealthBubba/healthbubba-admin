<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProfileChangeController extends Controller
{
    private function api()
    {
        return Http::baseUrl(env('API_BASE'))
            ->withHeaders(['X-Admin-Api-Key' => env('ADMIN_SERVICE_API_KEY')]);
    }

    function index()
    {
        $response = $this->api()->get('admin/profile-change-requests', ['status' => 'pending']);
        $data = $response->json();

        $ok = is_array($data) && ($data['ok'] ?? false);
        if (!$ok) {
            toast(($data['message'] ?? null) ?: "Could not load profile change requests")->error();
        }

        return inertia('ProfileChanges', [
            'items' => $ok ? ($data['data'] ?? []) : [],
        ]);
    }

    function approve(Request $request, $id)
    {
        $admin = authenticated();

        $response = $this->api()->post("admin/profile-change-requests/{$id}/approve", [
            'reviewed_by' => $admin?->id,
        ]);

        return $this->handle($response, 'Change approved and applied');
    }

    function reject(Request $request, $id)
    {
        $request->validate(['note' => 'nullable|string']);

        $admin = authenticated();

        $response = $this->api()->post("admin/profile-change-requests/{$id}/reject", [
            'reviewed_by' => $admin?->id,
            'note' => $request->input('note'),
        ]);

        return $this->handle($response, 'Change rejected');
    }

    private function handle($response, $fallback)
    {
        $data = $response->json();

        if (is_array($data) && ($data['ok'] ?? false)) {
            toast($data['message'] ?? $fallback)->success();
            return back();
        }

        toast(($data['message'] ?? null) ?: "Action failed ({$response->status()})")->error();
        return back();
    }
}
