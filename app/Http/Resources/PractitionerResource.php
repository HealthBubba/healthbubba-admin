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
            'phone' => $this->phone,
            'dob' => $this->dob,
            'sex' => $this->sex,
            'weight' => $this->weight,
            'licence_number' => $this->licence_number,
            'licence_number_verified' => $this->licence_number_verified,
            'title' => $this->title,
            'is_doctor_verified' => $this->is_doctor_verified,
            'is_verified' => $this->licence_number_verified && $this->is_doctor_verified,
            'status' => $this->status()
        ];
    }

    function status(){
        if(!$this->is_active) return Status::SUSPENDED->value;
        if($this->is_doctor_verified && $this->licence_number_verified) return Status::VERIFIED->value;
        return Status::PENDING->value;
    }

}
