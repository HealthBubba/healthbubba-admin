<?php

namespace App\Models;

use App\Enums\Role;

class Doctor extends User {

    protected $table = 'users';

    protected static function booted(): void {
        static::addGlobalScope('doctor', function ($builder) {
            $builder->where('type', Role::DOCTOR);
        });
    }

}