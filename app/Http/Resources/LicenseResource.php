<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Date;

class LicenseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'file_name' => $this->file_name,
            'license_image' => $this->license_image,
            'status' => $this->status,
            'expiration_date' => $this->expiration_date ? Date::parse($this->expiration_date)->format('jS F Y') : null,
            'expires_at' => $this->expiration_date,
            'qualification' => new QualificationResource($this->qualification),
            'owner' => new PractitionerResource($this->owner),
        ];
    }
}
