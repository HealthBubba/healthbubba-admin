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
            'is_follow_up' => $this->is_follow_up,
            'follow_up_parent_id' => $this->follow_up_parent_id,
            'follow_up_status' => $this->follow_up_status,
            'is_urgent_consultation' => $this->is_urgent_consultation,
            'is_patient_joined' => $this->is_patient_joined,
            'is_doctor_joined' => $this->is_doctor_joined,
            'urgent_request_status' => $this->urgent_request_status,
            'urgent_request_expiry' => $this->urgent_request_expiry,
            'appointment_fee' => $this->appointment_fee,
            'urgent_consultation_fee' => $this->urgent_consultation_fee,
            'is_physical' => $this->is_physical_appointment,
            'height' => $this->height,
            'weight' => $this->weight,
            'attachments' => AppointmentAttachmentResource::collection($this->attachments)
        ];
    }
}
