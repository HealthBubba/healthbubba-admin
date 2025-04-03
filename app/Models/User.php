<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Concerns\Models\HasQuery;
use App\Enums\Role;
use App\Models\Practitioners\PractitionerAvailability;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;

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

    function scopeIsVerified(Builder $query){
        $query->where('is_doctor_verified', true);
    }

    function scopeIsUnverified(Builder $query){
        $query->where('is_doctor_verified', false)->whereNull('doctor_license');
    }

    function scopeIsPendingVerification(Builder $query){
        $query->where('is_doctor_verified', false)->whereNotNull('doctor_license');
    }

    function getFullNameAttribute(){
        return "{$this->first_name} {$this->last_name}";
    }

    function getMedicalRecordsAttribute(){
        return DB::table('user_medical_records')->where('user_id', $this->id)->get();
    }

    function getMedicalConditionsAttribute(){
        return DB::table('user_past_medical_conditions')->where('user_id', $this->id)->get();
    }

    function getSurgeriesAttribute(){
        return DB::table('user_past_surgeries')->where('user_id', $this->id)->get();
    }

    function getFamilyHistoryAttribute(){
        return DB::table('user_family_health_histories')->where('user_id', $this->id)->get();
    }

    function getEmergencyContactsAttribute(){
        return DB::table('user_emergency_contacts')->where('user_id', $this->id)->get();
    }

    function getAllergiesAttribute(){
        return DB::table('user_allergies')->where('user_id', $this->id)->get();
    }

    function patientAppointments(){
        return $this->hasMany(Appointment::class, 'patient_id');
    }

    function doctorsAppointments(){
        return $this->hasMany(Appointment::class, 'doctor_id');
    }

    function prescriptions(){
        return $this->hasMany(PatientMedication::class, 'doctor_id', 'id');
    }

    function payments(){
        return $this->hasMany(Transaction::class, 'user_id');
    }

    function transactions(){
        return $this->hasMany(Transaction::class, 'user_id');
    }
    
    function orders(){
        return $this->hasMany(Order::class, 'user_id');
    }

    function availabilities(){
        return $this->hasMany(PractitionerAvailability::class, 'doctor_id', 'id');
    }

    function medications(){
        return $this->hasMany(PatientMedication::class, 'patient_id', 'id');
    }

}
