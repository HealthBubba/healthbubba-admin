<?php

namespace App\Http\Controllers;

use App\Http\Resources\PractitionerResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HealthPractitionerController extends Controller {
    
    function index(){
        $users = PractitionerResource::collection(User::isDoctor()->withSerialNo()->paginate());
        return Inertia::render('HealthPractitioners', compact('users'));
    }

    function destroy(User $user){
        $user->delete();
        toast('User account deleted successfully!')->success();
        return back();
    }

}
