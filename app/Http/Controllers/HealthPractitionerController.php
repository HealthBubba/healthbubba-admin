<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Http\Requests\Practitioner\UpdatePractitionerRequest;
use App\Http\Resources\AppointmentResource;
use App\Http\Resources\PatientMedicationResource;
use App\Http\Resources\PractitionerResource;
use App\Http\Resources\TransactionResource;
use App\Models\Doctor;
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
                    })
                    ->when($request->endDate && $request->startDate, function($query) use($request){
                        $query->whereBetween('created_at', [$request->startDate, $request->endDate]);
                    })->withSerialNo()->latest()->paginate();

                    
        return Inertia::render('HealthPractitioners/Index', [
            'users' => PractitionerResource::collection($users),
            'totalDoctors' => Doctor::count()
        ]);
    }

    function show(Doctor $user) {
        return Inertia::render('HealthPractitioners/Show', [
            'user' => new PractitionerResource($user)
        ]);
    }

    function edit(Doctor $user) {
        return Inertia::render('HealthPractitioners/Edit', [
            'user' => new PractitionerResource($user)
        ]);
    }

    function transactions(Doctor $user) {
        $transactions = $user->transactions()->paginate();
        return Inertia::render('HealthPractitioners/Transactions', [
            'user' => new PractitionerResource($user),
            'transactions' => TransactionResource::collection($transactions)
        ]);
    }

    function consultations(User $user) {
        $consultations = $user->doctorsAppointments()->paginate();
        return Inertia::render('HealthPractitioners/Consultations', [
            'user' => new PractitionerResource($user),
            'consultations' => AppointmentResource::collection($consultations)
        ]);
    }

    function prescriptions(User $user) {
        $prescriptions = $user->prescriptions()->paginate();
        return Inertia::render('HealthPractitioners/Prescriptions', [
            'user' => new PractitionerResource($user),
            'prescriptions' => PatientMedicationResource::collection($prescriptions)
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
    
        toast('Health practitioner account unverified successfully!')->success();
        return back();
    }

    function upload(Request $request, User $user) {
        $request->validate([
            'licence' => 'required|file|mimes:jpg,pdf,png,jpeg',
        ]);

        $uploadedFileUrl = cloudinaryUpload($request->file('licence')->getRealPath());

        $user->doctor_license = $uploadedFileUrl;
        $user->save();

        toast("Doctor licence uploaded successfully")->success();
        return back();
    }

    function update(UpdatePractitionerRequest $request, User $user) {
        $validated = $request->validated();
        $validated['picture'] = $request->hasFile('picture') ? cloudinaryUpload($request->file('picture')->getRealPath()) : null;

        $user->fill($validated);
        $user->save();

        toast("Doctor profile updated successfully")->success();
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
