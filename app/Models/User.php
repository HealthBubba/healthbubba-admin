<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Concerns\Models\HasQuery;
use App\Enums\Role;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class User extends Model {
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
            'type' => Role::class
        ];
    }

    function scopeIsPatient(){
        $this->where('type', Role::PATIENT);
    }

    function scopeIsDoctor(){
        $this->where('type', Role::DOCTOR);
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

}
