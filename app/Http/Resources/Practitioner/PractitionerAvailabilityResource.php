<?php

namespace App\Http\Resources\Practitioner;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Date;

class PractitionerAvailabilityResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'doctor_id' => $this->doctor_id,
            'day_of_week' => $this->day_of_week,
            'start_time' => $this->start_time ? Date::parse($this->start_time)->format('h:m A') : '',
            'end_time' => $this->end_time ? Date::parse($this->end_time)->format('h:m A') : '',
            'is_available' => $this->is_available
        ];
    }
}
