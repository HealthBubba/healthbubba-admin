<?php

namespace App\Models;

use App\Models\Medication\MedicationCategory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medication extends Model
{
    use HasFactory;

    protected $fillable = ['medication_id', 'medication_name', 'medication_desc', 'medication_category_id'];
    protected $primaryKey = 'medication_id';

    public $timestamps = false;

    function category(){
        return $this->belongsTo(MedicationCategory::class, 'medication_category_id', 'category_id');
    }


}
