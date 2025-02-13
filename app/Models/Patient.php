<?php

namespace App\Models;

use App\Enums\Role;

class Patient extends User {

    protected $table = 'users';

    protected static function booted(): void {
        static::addGlobalScope('patient', function ($builder) {
            $builder->where('type', Role::PATIENT);
        });
    }

}