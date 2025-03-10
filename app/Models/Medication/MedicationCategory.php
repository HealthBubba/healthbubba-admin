<?php

namespace App\Models\Medication;

use App\Models\Medication;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicationCategory extends Model
{
    use HasFactory;

    protected $fillable = ['category_id', 'category_name'];

    protected $primaryKey = 'category_id';

    function catgeories(){
        return $this->hasMany(Medication::class, 'medication_category_id', 'category_id');
    }
}
