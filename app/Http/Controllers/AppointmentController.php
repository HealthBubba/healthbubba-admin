<?php

namespace App\Http\Controllers;

use App\Enums\AppointmentStatus;
use App\Http\Resources\AppointmentResource;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller {
    
    function index(Request $request){
        // dd($request->all());
        $appointments = Appointment::when($request->status, function($query, $status){
            $query->whereStatus(AppointmentStatus::fromValue($status));
        })
        ->when($request->keyword, function($query, $keyword){
            $query->where('appointment_id', $keyword)
                ->orWhereRelation('patient', 'first_name', 'LIKE', "%$keyword%")
                ->orWhereRelation('doctor', 'first_name', 'LIKE', "%$keyword%")
                ->orWhereRelation('patient', 'last_name', 'LIKE', "%$keyword%")
                ->orWhereRelation('doctor', 'last_name', 'LIKE', "%$keyword%")
                ->orWhereRelation('patient', 'email', 'LIKE', "%$keyword%")
                ->orWhereRelation('doctor', 'email', 'LIKE', "%$keyword%");
        })->with(['transaction'])->latest('date')->paginate();

        // whereStatus(AppointmentStatus::COMPLETED)->
        $stats = [
            'total' => Appointment::count(),
            'completed' => Appointment::whereStatus(AppointmentStatus::COMPLETED)->count(),
            'cancelled' => Appointment::whereStatus(AppointmentStatus::CANCELLED)->count(),
            'revenue' => Appointment::whereIsAppointmentPaid(true)
                            ->withSum('transaction', 'amount')
                            ->get()
                            ->sum('transaction_sum_amount'),
        ];

        return Inertia::render('Appointments', [
            'appointments' => AppointmentResource::collection($appointments),
            'stats' => $stats,
            'status' => $request->status
        ]);
    }

    function show(Request $request, Appointment $appointment){
        $appointment = new AppointmentResource($appointment);
        return Inertia::render('Appointments/Show', [
            'appointment' => $appointment
        ]);
    }
}
