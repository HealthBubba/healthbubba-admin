<?php

namespace App\Http\Resources;

use App\Enums\Status;
use App\Http\Resources\Practitioner\PractitionerAvailabilityResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Date;

class PractitionerResource extends JsonResource
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
            'full_name' => $this->fullname,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'phone' => "{$this->country_code}{$this->phone}",
            'dob' => $this->dob,
            'sex' => $this->sex,
            'type' => $this->type,
            'licence_number' => $this->licence_number,
            'licence_number_verified' => $this->licence_number_verified,
            'doctor_license' => $this->doctor_license,
            'other_document' => $this->other_document,
            'role' => $this->type,
            'title' => $this->title,
            'is_doctor_verified' => $this->is_doctor_verified,
            'is_verified' => $this->licence_number_verified && $this->is_doctor_verified,
            'status' => $this->status(),
            'is_active' => $this->is_active,
            'earnings' => $this->transactions()->where('transactions.status', Status::CONFIRMED)->sum('amount'),
            'consultations' => $this->doctorsAppointments()->count(),
            'availabilities' => PractitionerAvailabilityResource::collection($this->availabilities),
            'specialties' => $this->specialties,
            'doctor_signature' => $this->doctor_signature,
            'doctor_signature_file_name' => $this->doctor_signature_file_name,
            'doctor_signature_date' => Date::parse($this->doctor_signature_date)->format('jS F, Y h:i A'),
            'signature_verified' => $this->isSignature_verified,
        ];
    }

    function status(){
        if(!$this->is_active) return Status::SUSPENDED->value;
        if($this->is_doctor_verified) return Status::VERIFIED->value;
        if($this->licenses()->exists() || $this->doctor_signature) {
            return Status::PENDING->value;
        }
        return Status::UNVERIFIED->value;
    }

}
