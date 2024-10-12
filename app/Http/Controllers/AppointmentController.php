<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    function index(){
        return Inertia::render('Appointments');
    }
}
