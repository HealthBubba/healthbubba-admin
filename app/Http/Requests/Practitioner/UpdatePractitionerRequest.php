<?php

namespace App\Http\Requests\Practitioner;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePractitionerRequest extends FormRequest
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
            'first_name' => 'nullable|string|max:255',
            'last_name' => 'nullable|string|max:255',
            'phone' => 'nullable|numeric|digits_between:10,11',
            'email' => 'required|email|max:255',
            'dob' => 'nullable|date',
            'sex' => 'nullable|in:male,female',
            'address' => 'nullable|string',
            'picture' => 'nullable|image',
            'bio' => 'nullable|string',
            'title' => 'nullable|string|max:255',
            'years_of_experience' => 'nullable|numeric',
            'clinic_affiliation' => 'nullable|string'
        ];
    }
}
