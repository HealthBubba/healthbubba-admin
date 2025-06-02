<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Http\Resources\AppointmentResource;
use App\Http\Resources\OrderResource;
use App\Http\Resources\PatientMedicationResource;
use App\Http\Resources\PatientResource;
use App\Http\Resources\TransactionResource;
use App\Models\Patient;
use App\Models\User;
use App\Models\PatientCurrentHealth;
use App\Models\PatientPastCondition;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class PatientController extends Controller {
    

    function index(Request $request){
        $patients = User::whereType(Role::PATIENT)
                        ->when($request->keyword, function($query, $keyword) {
                            $query->where('first_name', 'LIKE', "%$keyword%")
                                ->orWhere('last_name', 'LIKE', "%$keyword%")
                                ->orWhere('phone', 'LIKE', "%$keyword%")
                                ->orWhere('email', 'LIKE', "%$keyword%");
                        })
                        ->when($request->status, function($query, $filter) {
                            match ($filter) {
                                'active' => $query->where('is_active', true),
                                'suspended' => $query->where('is_active', false),
                                default => null
                            };
                        })
                        ->when($request->endDate && $request->startDate, function($query) use($request){
                            $query->whereBetween('created_at', [$request->startDate, $request->endDate]);
                        })
                        ->withSerialNo()->latest()->paginate();

        $totalPatients = Patient::count();

        return Inertia::render('Patients/Index', [
            'patients' => PatientResource::collection($patients),
            'totalPatients' => $totalPatients
        ]);
    }

    function show(Request $request, User $user) {
        $user->load(['currentHealth', 'pastCondition']);
        $currentHealth = $user->currentHealth;
        $pastConditions = $user->pastCondition;
        
        return Inertia::render('Patients/Details', [
            'patient' => new PatientResource($user),
            'currentHealth' => $currentHealth,
            'pastConditions' => $pastConditions,
        ]);
    }

    function edit(Request $request, User $user) {
        return Inertia::render('Patients/Edit', [
            'patient' => new PatientResource($user),
        ]);
    }

    function verifyEmail(Request $request, User $user) {
        $user->email_verified = true;
        $user->save();

        toast('Patient Email address verified successfully!')->success();
        return back();
    }

    function transactions(Request $request, User $user) {
        $transactions = $user->transactions()->whereStatus('confirmed')->paginate();

        return Inertia::render('Patients/Transactions', [
            'patient' => new PatientResource($user),
            'transactions' => TransactionResource::collection($transactions),
        ]);
    }

    function appointments(Request $request, User $user) {
        $appointments = $user->patientAppointments()->paginate();

        return Inertia::render('Patients/Appointments', [
            'patient' => new PatientResource($user),
            'appointments' => AppointmentResource::collection($appointments),
        ]);
    }

    function records(Request $request, User $user) {
        return Inertia::render('Patients/MedicalRecords', [
            'patient' => new PatientResource($user),
        ]);
    }

    function conditions(Request $request, User $user) {
        return Inertia::render('Patients/MedicalConditions', [
            'patient' => new PatientResource($user),
        ]);
    }

    function prescriptions(Request $request, User $user) {
        $prescriptions = $user->medications()->paginate();

        return Inertia::render('Patients/Prescriptions', [
            'patient' => new PatientResource($user),
            'prescriptions' => PatientMedicationResource::collection($prescriptions),
        ]);
    }

    function orders(Request $request, User $user) {
        $orders = $user->orders()->with(['items.result', 'user'])->when($request->status, function($query, $status){
                                $query->whereStatus($status);
                            })
                            ->when($request->type, function($query, $type){
                                $query->whereType($type);
                            })
                            ->when($request->keyword, function($query, $keyword){
                                $query->where('reference', $keyword);
                            })
                            ->latest()
                            ->paginate();

        return Inertia::render('Patients/Orders', [
            'patient' => new PatientResource($user),
            'orders' => $orders,
        ]);
    }

    public function destroy(User $user){
        try {
            $user->delete();
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        }
        toast('Patient account deleted successfully!')->success();
        return back();
    }

    public function healthInformation(Request $request, User $user) {
        $user->load(['currentHealth', 'pastCondition']);
        $currentHealth = $user->currentHealth;
        $pastConditions = $user->pastCondition;

        return Inertia::render('Patients/HealthInformation', [
            'patient' => new PatientResource($user),
            'currentHealth' => $currentHealth,
            'pastConditions' => $pastConditions,
        ]);
    }

}
