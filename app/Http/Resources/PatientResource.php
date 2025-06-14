<?php

namespace App\Http\Resources;

use App\Enums\Status;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Date;

class PatientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array {
        $appointments = $this->patientAppointments;
        return [
            'no' => $this->no,
            'id' => $this->id,
            'picture' => $this->picture,
            'email' => $this->email,
            'full_name' => $this->fullname,
            'phone' => "{$this->country_code}{$this->phone}",
            'dob' => $this->dob,
            'sex' => $this->sex,
            'weight' => $this->weight,
            'title' => $this->title,
            'status' => $this->status(),
            'email_verified' => $this->email_verified,
            'is_active' => $this->is_active,
            'role' => $this->type,
            'appointments' => $appointments,
            'requests' => $appointments->count() + $this->orders->count(),
            'next_appointment_date' => $appointments->where('date', '>', now())->first('date'),
            'transactions_sum' => $this->payments->sum('amount'),
            'transactions_count' => $this->transactions()->whereStatus('confirmed')->count(),
            'joined_date' => Date::parse($this->created_at)->format('jS M, Y'),
            'surgeries' => $this->surgeries,
            'medical_conditions' => $this->medical_conditions,
            'allergies' => $this->allergies,
            'family_history' => $this->family_history,
            'medical_records' => $this->medical_records,
            'emergency_contacts' => $this->emergency_contacts,
        ];
    }

    function status(){
        if(!$this->is_active) return Status::SUSPENDED->value;
        return Status::ACTIVE->value;
    }
}
