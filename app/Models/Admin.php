<?php

namespace App\Models;

use App\Concerns\Models\HasQuery;
use App\Enums\Role;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model {
    use HasFactory, HasQuery;

    protected $fillable = ['firstname', 'lastname', 'email', 'phone', 'password', 'is_active', 'access_level', 'last_login_at', 'created_at'];

    protected $hidden = ['password'];

    public $timestamps = false;

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

    function getFullNameAttribute(){
        return "{$this->firstname} {$this->lastname}";
    }
}
