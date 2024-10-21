<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestPackage extends Model
{
    use HasFactory;

    protected $fillable = ['test_package_id', 'test_package_name', 'test_package_desc', 'test_package_price', 'test_id'];
}
