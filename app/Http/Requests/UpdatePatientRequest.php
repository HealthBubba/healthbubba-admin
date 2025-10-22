<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePatientRequest extends FormRequest
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
    public function rules(): array
    {
        return [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'nullable|numeric',
            'dob' => 'nullable|date',
            'sex' => 'nullable|in:Male,Female',
            'address' => 'nullable|string',
            'bio' => 'nullable|string',
            'weight' => 'nullable|numeric',
            'weight_unit' => 'nullable|string',
            'height' => 'nullable|numeric',
            'height_unit' => 'nullable|string',
            'height_in_inches' => 'nullable|string',
            'blood_type' => 'nullable|string',
            'genotype' => 'nullable|string',
        ];
    }
}
