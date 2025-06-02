<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PatientPastCondition extends Model
{
    protected $table = 'patient_past_condition';

    protected $fillable = [
        'user_id',
        'is_under_treatment',
        'treatment_conditions',
        'last_medical_checkup_date',
        'had_general_health_change',
        'general_health_change_explanation',
        'is_taking_medications',
        'medications',
        'has_allergies',
        'allergies',
        'had_surgeries',
        'surgeries',
        'has_heart_or_bp_issues',
        'has_asthma',
        'has_family_medical_history',
        'family_medical_conditions',
        'has_seizure_history',
        'has_children',
        'menstrual_history',
        'immunization_history'
    ];

    protected $casts = [
        'treatment_conditions' => 'array',
        'family_medical_conditions' => 'array',
        'allergies' => 'array',
        'immunization_history' => 'array',
        'medications' => 'array',
        'surgeries' => 'array',
        'is_under_treatment' => 'boolean',
        'had_general_health_change' => 'boolean',
        'is_taking_medications' => 'boolean',
        'has_allergies' => 'boolean',
        'had_surgeries' => 'boolean',
        'has_heart_or_bp_issues' => 'boolean',
        'has_asthma' => 'boolean',
        'has_family_medical_history' => 'boolean',
        'has_seizure_history' => 'boolean',
        'has_children' => 'boolean',
        'last_medical_checkup_date' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
} 