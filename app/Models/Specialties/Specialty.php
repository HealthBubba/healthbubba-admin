<?php

namespace App\Models\Specialties;

use App\Models\Specialties\UserSpecialty;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specialty extends Model
{
    use HasFactory;

    protected $fillable = ['specialty_id', 'specialty_name'];

    public $primaryKey = 'specialty_id';
    public $timestamps = false;

    function practitioners(){
        return $this->hasMany(UserSpecialty::class, 'specialty_id', 'specialty_id');
    }
}
