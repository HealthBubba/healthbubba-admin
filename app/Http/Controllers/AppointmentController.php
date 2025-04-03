<?php

namespace App\Http\Controllers;

use App\Http\Resources\AppointmentResource;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    function index(Request $request){
        $appointments = Appointment::when($request->status, function($query, $status){
            $query->whereStatus($status);
        })
        ->when($request->keyword, function($query, $keyword){
            $query->where('appointment_id', $keyword)
                ->orWhereRelation('patient', 'first_name', 'LIKE', "%$keyword%")
                ->orWhereRelation('doctor', 'first_name', 'LIKE', "%$keyword%")
                ->orWhereRelation('patient', 'last_name', 'LIKE', "%$keyword%")
                ->orWhereRelation('doctor', 'last_name', 'LIKE', "%$keyword%")
                ->orWhereRelation('patient', 'email', 'LIKE', "%$keyword%")
                ->orWhereRelation('doctor', 'email', 'LIKE', "%$keyword%");
        })->latest('date')->paginate();
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

    function show(Request $request, Appointment $appointment){
        $appointment = new AppointmentResource($appointment);
        return Inertia::render('Appointments/Show', [
            'appointment' => $appointment
        ]);
    }
}
