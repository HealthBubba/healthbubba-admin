<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class License extends Model
{
    use HasFactory;

    protected $fillable = ['qualification_id', 'file_name', 'license_image', 'expiration_date', 'user_id', 'status'];

    protected $casts = [
        'expiration_date' => 'datetime'
    ];

    function qualification(){
        return $this->belongsTo(Qualification::class, 'qualification_id');
    }

    function owner(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
