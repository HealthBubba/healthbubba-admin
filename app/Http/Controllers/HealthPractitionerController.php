<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Http\Resources\PractitionerResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\HtmlString;
use Inertia\Inertia;

class HealthPractitionerController extends Controller {
    
    function index(Request $request){
        $users = User::whereType(Role::DOCTOR)
                    ->when($request->keyword, function($query, $keyword) {
                        $query->where('first_name', 'LIKE', "%$keyword%")
                            ->orWhere('last_name', 'LIKE', "%$keyword%")
                            ->orWhere('email', 'LIKE', "%$keyword%");
                    })
                    ->when($request->status, function($query, $filter) {
                        match ($filter) {
                            'verified' => $query->where('is_doctor_verified', true)->where('is_active', true),
                            'pending' => $query->where('is_doctor_verified', false)->where('is_active', true),
                            default => null
                        };
                    })->withSerialNo()->latest()->paginate();

        return Inertia::render('HealthPractitioners', [
            'users' => PractitionerResource::collection($users)
        ]);
    }

    function approve(User $user) {
        $user->is_doctor_verified = true;
        $user->save();

        // Dispatch approval message if neccessary
        notify('Your Account is Now Verified')
            ->greeting("Dear {$user->fullname}")
            ->line('Congratulations! We are pleased to inform you that your account has been successfully verified on the Health Bubba platform.')
            ->line("As a verified doctor, you can now:")
            ->line("• Access Patient Consultations: Start accepting and managing appointments through our secure platform.")
            ->line("• Set Your Availability: Define your schedule and consultation fees to suit your preferences.")
            ->line("• Earn Flexibly: Participate in our pay-as-you-go model or opt for in-house positions based on your consultations and reviews.")
            ->line("• Utilize Advanced Tools: Leverage our integrated features, including telemedicine, emergency flow connections, and more, to provide top-notch care to patients.")
            ->line('We are excited to have you as part of our mission to make healthcare accessible, efficient, and patient-centric.')
            ->line(new HtmlString("If you have any questions or need assistance, feel free to reach out to our support team at <a href='mailto:support@healthbubba.com'>support@healthbubba.com</a>."))
            ->line('Thank you for joining Health Bubba. Together, let’s transform healthcare delivery!')
            ->salutation('Warm regards, The Health Bubba Team')
            ->sendNow($user, ['mail']);

        toast('Health practitioner account verified successfully!')->success();
        return back();
    }
    
    function disapprove(User $user) {
        $user->is_doctor_verified = false;
        $user->save();

        // Dispatch disapproval message if neccessary
    
        toast('Health practitioner account verified successfully!')->success();
        return back();
    }

    function destroy(User $user){
        try {
            $user->delete();
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        }
        toast('Health practitioner account deleted successfully!')->success();
        return back();
    }

}
