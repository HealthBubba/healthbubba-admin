<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Http\Resources\PatientResource;
use App\Models\Patient;
use App\Models\User;
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
        // $totalDeletedPatients = 

        return Inertia::render('Patients/Index', [
            'patients' => PatientResource::collection($patients),
            'totalPatients' => $totalPatients
        ]);
    }

    function show(Request $request, User $user) {
        $transactions = $user->transactions()->whereStatus('confirmed');

        return Inertia::render('Patients/Details', [
            'patient' => new PatientResource($user),
            'transactions' => $transactions->count(),
            'amount_spent' => $transactions->sum('amount')
        ]);
    }

    function destroy(User $user){
        try {
            $user->delete();
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        }
        toast('Patient account deleted successfully!')->success();
        return back();
    }

}
