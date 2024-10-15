<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model {
    use HasFactory, HasUuids;

    protected $fillable = [];

    function patient(){
        return $this->belongsTo(User::class, 'patient_id');
    }

    function doctors(){
        return $this->belongsTo(User::class, 'doctor_id');
    }
}
