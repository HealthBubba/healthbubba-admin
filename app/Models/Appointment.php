<?php

namespace App\Models;

use App\Concerns\Models\HasQuery;
use App\Models\Appointment\AppointmentAttachment;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Enums\AppointmentStatus;

class Appointment extends Model {
    use HasFactory, HasUuids, HasQuery;

    protected $fillable = ['patient_id', 'doctor_id', 'appointment_id'];

    public $timestamps = false;

    protected $casts = [
        'status' => AppointmentStatus::class
    ];

    function scopeWithSerialNo(Builder $query){
        return $query->select('*')->addSelect(DB::raw('ROW_NUMBER() OVER (ORDER BY appointment_id) AS no'));
    }

    function scopeIsCompleted(Builder $query){
        return $query->where('status', true);
    }

    function scopeIsPending(Builder $query){
        return $query->where('status', false);
    }

    
    function patient(){
        return $this->belongsTo(User::class, 'patient_id', 'id');
    }

    function doctor(){
        return $this->belongsTo(User::class, 'doctor_id', 'id');
    }

    function transaction(){
        return $this->hasOne(Transaction::class, 'model_id', 'appointment_id');
    }

    function attachments(){
        return $this->hasMany(AppointmentAttachment::class, 'appointment_id', 'appointment_id');
    }
}
