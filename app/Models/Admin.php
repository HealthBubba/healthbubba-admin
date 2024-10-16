<?php

namespace App\Models;

use App\Concerns\Models\HasQuery;
use App\Enums\Role;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model {
    use HasFactory, HasQuery;

    protected $fillable = ['firstname', 'lastname', 'email', 'phone', 'is_active', 'access_level', 'last_login_at', 'created_at'];

    protected $timestamps = false;

    protected $casts = [
        'created_at' => 'date',
        'last_login_at' => 'date',
        'access_level' => Role::class
    ];
}
