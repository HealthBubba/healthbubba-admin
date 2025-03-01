<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medication extends Model
{
    use HasFactory;

    protected $fillable = ['medication_id', 'medication_name', 'medication_desc', 'medication_category_id'];
    protected $primaryKey = 'medication_id';


}
