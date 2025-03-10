<?php

namespace App\Http\Resources;

use App\Enums\Status;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

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
            'phone' => $this->phone,
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
            'consultations' => $this->doctorsAppointments()->count()
        ];
    }

    function status(){
        if(!$this->is_active) return Status::SUSPENDED->value;
        // && $this->licence_number_verified
        if($this->is_doctor_verified) return Status::VERIFIED->value;
        return Status::PENDING->value;
    }

}
