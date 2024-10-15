<?php

namespace App\Http\Controllers;

use App\Http\Resources\PatientResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientController extends Controller {
    

    function index(){
        $patients = PatientResource::collection(User::isPatient()->withSerialNo()->paginate());
        return Inertia::render('Patients', compact('patients'));
    }

}
