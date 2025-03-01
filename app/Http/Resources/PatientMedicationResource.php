<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PatientMedicationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'doctor' => $this->doctor,
            'patient' => $this->patient,
            'medication_name' => $this->medication_name,
            'medication' => $this->medication,
            'administration_route_id' => $this->administration_route_id,
            'notes' => $this->notes,
            'dosage' => $this->dosage,
            'duration_start_time' => $this->duration_start_time,
            'duration_end_time' => $this->duration_end_time,
            'to_be_taken' => $this->to_be_taken,
            'frequency' => $this->frequency,
        ];
    }
}
