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
        $payment_status = match($request->payment_status) {
            'paid' => true,
            'unpaid' => false,
            default => null
        };

        $appointments = Appointment::when($request->status, function($query, $status){
                                    $query->whereStatus(AppointmentStatus::fromValue($status));
                                })
                                // ->when($request->endDate && $request->startDate, function($query) use($request){
                                //     $query->whereBetween('created_at', [$request->startDate, $request->endDate]);
                                // })
                                ->when(
                                    $request->filled('payment_status'), 
                                    fn($query) => $query->where('is_appointment_paid', $payment_status),
                                    fn($query) => $query->where('is_appointment_paid', true),
                                )
                                ->when($request->keyword, function($query, $keyword){
                                    $query->where('appointment_id', $keyword)
                                        ->orWhereRelation('patient', 'first_name', 'LIKE', "%$keyword%")
                                        ->orWhereRelation('doctor', 'first_name', 'LIKE', "%$keyword%")
                                        ->orWhereRelation('patient', 'last_name', 'LIKE', "%$keyword%")
                                        ->orWhereRelation('doctor', 'last_name', 'LIKE', "%$keyword%")
                                        ->orWhereRelation('patient', 'email', 'LIKE', "%$keyword%")
                                        ->orWhereRelation('doctor', 'email', 'LIKE', "%$keyword%");
                                })->with(['transaction'])
                                ->latest('date')
                                ->paginate();

        $stats = [
            'total' => Appointment::whereIsAppointmentPaid(true)->count(),
            'completed' => Appointment::whereStatus(AppointmentStatus::COMPLETED)->count(),
            'open' => Appointment::whereStatus(AppointmentStatus::UPCOMING)->count(),
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
