<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Date;

class AppointmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->appointment_id,
            'no' => $this->no,
            'patient' => new PatientResource($this->patient),
            'doctor' => new PractitionerResource($this->doctor),
            'payment_status' => $this->is_appointment_paid,
            'date' => Date::parse("{$this->date} {$this->time}")->toDayDateTimeString(),
            'status' => $this->status,
        ];
    }
}
