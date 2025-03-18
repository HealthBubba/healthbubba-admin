<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Qualification extends Model {
    use HasFactory;

    protected $fillable = ['qualification_name', 'is_user_added', 'qualification_id'];
    public $timestamps = false;



}
