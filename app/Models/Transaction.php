<?php

namespace App\Models;

use App\Concerns\Models\HasQuery;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory, HasQuery;

    public $timestamps = false;


}
