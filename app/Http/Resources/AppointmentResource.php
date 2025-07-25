<?php

namespace App\Http\Resources;

use App\Http\Resources\Appointment\AppointmentAttachmentResource;
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
        [$hour, $minute, $second] = $this->time ? explode(':', $this->time) : [0, 0, 0]; 
        return [
            'id' => $this->appointment_id,
            'patient' => new PatientResource($this->patient),
            'doctor' => new PractitionerResource($this->doctor),
            'transaction' => new TransactionResource($this->whenLoaded('transaction')),
            'payment_status' => $this->is_appointment_paid,
            'date' => Date::parse("{$this->date} {$this->time}")->format('jS F, Y'),
            'time' => Date::createFromTime($hour, $minute, $second)->format('h:m A'),
            'status' => $this->status,
            'complain' => $this->complain,
            'height' => $this->height,
            'is_physical_appointment' => $this->is_physical_appointment,
            'meeting_id' => $this->meeting_id,
            'external_meeting_id' => $this->external_meeting_id,
            'doctor_attendee_id' => $this->doctor_attendee_id,
            'patient_attendee_id' => $this->patient_attendee_id,
            'is_patient_joined' => $this->is_patient_joined,
            'is_doctor_joined' => $this->is_doctor_joined,
            'weight' => $this->weight,
            'attachments' => AppointmentAttachmentResource::collection($this->attachments)
        ];
    }
}
