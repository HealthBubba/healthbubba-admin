<?php

namespace App\Http\Requests\Medication;

use Illuminate\Foundation\Http\FormRequest;

class MedicationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array {
        return [
            'medication_name' => 'required|string',
            'medication_desc' => 'nullable|string',
            'medication_category' => 'required|exists:medication_categories,category_id',
            'medication_pic' => 'nullable|image',
            'medication_price' => 'required|numeric'
        ];
    }
}
