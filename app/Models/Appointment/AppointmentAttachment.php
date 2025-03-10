<?php

namespace App\Models\Appointment;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppointmentAttachment extends Model {
    use HasFactory;

    protected $fillable = ['image'];
}
