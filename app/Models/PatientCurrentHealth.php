<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PatientCurrentHealth extends Model
{
    protected $table = 'patient_current_health';

    protected $fillable = [
        'user_id',
        'physical_activity_level',
        'current_medical_conditions',
        'smokes',
        'drinks'
    ];

    protected $casts = [
        'smokes' => 'boolean',
        'drinks' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
} 