<?php

namespace App\Models\Practitioners;

use App\Models\Doctor;
use Illuminate\Database\Eloquent\Model;

class PractitionerAvailability extends Model {
    

    protected $table = 'doctor_availabilities';

    protected $fillable = ['doctor_id', 'day_of_week', 'start_time', 'end_time', 'is_available'];

    function practitioner(){
        return $this->belongsTo(Doctor::class, 'doctor_id', 'id');
    }

}