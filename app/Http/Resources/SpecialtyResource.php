<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SpecialtyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'practitioners' => $this->practitioners,
            'practitioners_count' => $this->practitioners->count(),
            'specialty_id' => $this->specialty_id,
            'specialty_name' => $this->specialty_name,
            'short_preview' => $this->short_preview,
            'full_description' => $this->full_description,
            'image' => $this->image,
        ];
    }
}
