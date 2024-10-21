<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PatientMedication extends Model
{
    use HasFactory;

    protected $fillable = ['doctor_id', 'patient_id', 'medication_name', 'medication_id', 'category', 'administration_route_id', 'dosage', 'notes', 'duration_start_time', 'duration_end_time', 'frequency', 'to_be_taken'];

    function patient(){
        return $this->belongsTo(User::class, 'patient_id', 'id');
    }

    function doctor(){
        return $this->belongsTo(User::class, 'doctor_id', 'id');
    }
}
