<?php

namespace App\Models\Specialties;

use App\Models\Doctor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSpecialty extends Model
{
    use HasFactory;

    function doctor(){
        return $this->belongsTo(Doctor::class, 'user_id');
    }

    function specialty(){
        return $this->hasOne(Specialty::class, 'specialty_id', 'specialty_id');
    }
}
