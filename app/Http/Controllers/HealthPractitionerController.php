<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HealthPractitionerController extends Controller {
    
    function index(){
        return Inertia::render('HealthPractitioners');
    }

}
