<?php

namespace App\Models;

use App\Enums\Role;
use Illuminate\Support\Facades\DB;

class Patient extends User {

    protected $table = 'users';

    protected static function booted(): void {
        static::addGlobalScope('patient', function ($builder) {
            $builder->where('type', Role::PATIENT);
        });
    }

    function medications(){
        return $this->hasMany(PatientMedication::class, 'patient_id', 'id');
    }

    

}