<?php

namespace App\Http\Controllers;

use App\Http\Resources\AppointmentResource;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    function index(Request $request){
        $appointments = Appointment::withSerialNo()->latest('date')->paginate();
        $stats = [
            'total' => Appointment::count(),
            'completed' => Appointment::whereIsAppointmentPaid(true)->count(),
            'cancelled' => Appointment::whereStatus(true)->count(),
            'revenue' => Appointment::whereStatus(true)->count(),
        ];

        return Inertia::render('Appointments', [
            'appointments' => AppointmentResource::collection($appointments),
            'stats' => $stats
        ]);
    }
}
