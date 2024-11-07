<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Concerns\Models\HasQuery;
use App\Enums\Role;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Illuminate\Notifications\Notifiable;

class User extends Authenticatable {
    use HasFactory, Notifiable, HasQuery;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public $timestamps = false;

    protected $appends = ['full_name'];

    protected function casts(): array     {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_active' => 'boolean',
            'is_doctor_verified' => 'boolean',
            'type' => Role::class
        ];
    }

    function scopeIsPatient(Builder $query){
        $query->where('type', Role::PATIENT);
    }

    function scopeIsDoctor(Builder $query){
        $query->where('type', Role::DOCTOR);
    }

    function getFullNameAttribute(){
        return "{$this->first_name} {$this->last_name}";
    }

    function patientAppointments(){
        return $this->hasMany(Appointment::class, 'patient_id');
    }

    function doctorsAppointments(){
        return $this->hasMany(Appointment::class, 'doctor_id');
    }

    function payments(){
        return $this->hasMany(Transaction::class, 'user_id');
    }

    function transactions(){
        return $this->through('doctorsAppointments')->has('transaction');
    }

}
