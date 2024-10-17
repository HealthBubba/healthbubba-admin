<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AdminResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array {
        return [
            'id' => $this->id,
            'no' => $this->no,
            'picture' => $this->picture,
            'email' => $this->email,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'full_name' => $this->fullname,
            'phone' => $this->phone,
            'is_active' => $this->is_active,
            'created_at' => $this->created_at->format('M jS Y, h:m A'),
            'last_login_at' => $this->last_login_at?->toDayDateTimeString(),
            'role' => $this->access_level->label(),
            'access_level' => $this->access_level,
            'last_login' => $this->last_login_at?->longRelativeDiffForHumans() ?? null,
            'permissions' => $this->permissions()->get(['name'])->pluck('name')
        ];
    }
}
