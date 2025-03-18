<?php

namespace App\Models;

use App\Enums\Role;
use App\Models\Practitioners\PractitionerAvailability;

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

}