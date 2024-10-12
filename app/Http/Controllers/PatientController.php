<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientController extends Controller {
    

    function index(){
        return Inertia::render('Patients');
    }

}
