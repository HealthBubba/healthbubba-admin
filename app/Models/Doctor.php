<?php

namespace App\Models;

use App\Enums\Role;
use App\Models\Practitioners\PractitionerAvailability;
use App\Models\Specialties\Specialty;
use App\Models\Specialties\UserSpecialty;

class Doctor extends User {

    protected $table = 'users';

    protected static function booted(): void {
        static::addGlobalScope('doctor', function ($builder) {
            $builder->where('type', Role::DOCTOR);
        });
    }

    function availabilities(){
        return $this->hasMany(PractitionerAvailability::class, 'doctor_id', 'id');
    }

    function specialties(){
        return $this->belongsToMany(Specialty::class, 'user_specialties', 'user_id', 'specialty_id');
    }

    function doctorSpecialties(){
        return $this->hasMany(UserSpecialty::class, 'user_id', 'id');
    }

}