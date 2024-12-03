<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Http\Resources\PatientResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientController extends Controller {
    

    function index(Request $request){
        $patients = User::whereType(Role::PATIENT)
                        ->when($request->keyword, function($query, $keyword) {
                            $query->where('first_name', 'LIKE', "%$keyword%")
                                ->orWhere('last_name', 'LIKE', "%$keyword%")
                                ->orWhere('email', 'LIKE', "%$keyword%");
                        })
                        ->when($request->status, function($query, $filter) {
                            match ($filter) {
                                'active' => $query->where('is_active', true),
                                'suspended' => $query->where('is_active', false),
                                default => null
                            };
                        })
                        ->withSerialNo()->latest()->paginate();

        return Inertia::render('Patients', [
            'patients' => PatientResource::collection($patients)
        ]);
    }

    function destroy(User $user){
        $user->delete();
        toast('Patient account deleted successfully!')->success();
        return back();
    }

}
