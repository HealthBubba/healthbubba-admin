<?php

namespace App\Models;

use App\Concerns\Models\HasQuery;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Appointment extends Model {
    use HasFactory, HasUuids, HasQuery;

    protected $fillable = [];

    public $timestamps = false;

    function patient(){
        return $this->belongsTo(User::class, 'patient_id', 'id');
    }

    function doctors(){
        return $this->belongsTo(User::class, 'doctor_id', 'id');
    }

    function scopeWithSerialNo(Builder $query){
        return $query->select('*')->addSelect(DB::raw('ROW_NUMBER() OVER (ORDER BY appointment_id) AS no'));
    }

    function scopeIsCompleted(Builder $query){
        return $query->where('status', true);
    }

    function scopeIsPending(Builder $query){
        return $query->where('status', false);
    }
}
