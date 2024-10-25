<?php

namespace App\Models;

use App\Concerns\Models\HasQuery;
use App\Enums\Role;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Admin extends Authenticatable {
    use HasFactory, Notifiable, HasQuery, HasRoles;

    protected $fillable = ['firstname', 'lastname', 'email', 'phone', 'password', 'is_active', 'access_level', 'last_login_at', 'created_at'];

    protected $hidden = [
        'password',
        'remember_token',
    ];


    public $timestamps = false;
    protected $guard_name = 'web';

    protected $casts = [
        'created_at' => 'date',
        'last_login_at' => 'date',
        'is_active' => 'boolean',
        'access_level' => Role::class
    ];

    protected $attributes = [
        'is_active' => true,
        'access_level' => Role::ADMIN
    ];

    

    protected static function booted(){
        static::created(function(Admin $admin) {
            $admin->assignRole($admin->access_level->value);
        });

        static::updated(function(Admin $admin) {
            $admin->assignRole($admin->access_level->value);
        });
    }

    function getFullNameAttribute(){
        return "{$this->firstname} {$this->lastname}";
    }

}
