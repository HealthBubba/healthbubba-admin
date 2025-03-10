<?php

namespace App\Http\Resources;

use App\Http\Resources\Medication\MedicationCategoryResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MedicationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {   
        return [
            'id' => $this->medication_id,
            'category' => $this->medication_category_id ? new MedicationCategoryResource($this->category) : null,
            'name' => $this->medication_name, 
            'description' => $this->medication_desc,
            'picture' => $this->medication_pic,
            'price' => $this->medication_price
        ];
    }
}
