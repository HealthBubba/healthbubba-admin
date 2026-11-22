<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ScheduledReviewController extends Controller
{
    /**
     * Sponsored scheduled consultations sitting in Admin Review (doctor
     * declined the offered payout). The list itself is a direct read against
     * the shared appointments table — Admin and backend_service both read
     * the same DB; only the resolve action (with its money/notification side
     * effects) goes through backend_service's HTTP API.
     */
    private function api()
    {
        return Http::baseUrl(env('API_BASE'))
            ->withHeaders(['X-Admin-Api-Key' => env('ADMIN_SERVICE_API_KEY')]);
    }

    function index()
    {
        $appointments = Appointment::where('scheduled_status', 'admin_review')
            ->with(['patient', 'doctor'])
            ->orderBy('doctor_response_deadline')
            ->get();

        $items = $appointments->map(fn (Appointment $appointment) => [
            'appointment_id' => $appointment->appointment_id,
            'date' => $appointment->date,
            'time' => $appointment->time,
            'patient' => $appointment->patient ? [
                'id' => $appointment->patient->id,
                'full_name' => $appointment->patient->full_name,
                'phone' => $appointment->patient->phone,
                'email' => $appointment->patient->email,
            ] : null,
            'doctor' => $appointment->doctor ? [
                'id' => $appointment->doctor->id,
                'full_name' => $appointment->doctor->full_name,
                'phone' => $appointment->doctor->phone,
                'email' => $appointment->doctor->email,
            ] : null,
            'scheduled_payout_amount' => $appointment->scheduled_payout_amount,
            'is_sponsored_consultation' => $appointment->is_sponsored_consultation,
            'sponsor_id' => $appointment->sponsor_id,
            'scheduled_admin_reason' => $appointment->scheduled_admin_reason,
            'doctor_response_deadline' => $appointment->doctor_response_deadline,
        ]);

        return inertia('ScheduledReview', [
            'items' => $items,
        ]);
    }

    function resolve(Request $request, Appointment $appointment)
    {
        $request->validate([
            'action' => 'required|in:negotiate,release',
            'new_payout_amount' => 'required_if:action,negotiate|nullable|numeric|min:1',
            'reason' => 'nullable|string',
            'notify_channels' => 'nullable|array',
            'notify_channels.*' => 'in:push,email,sms',
        ]);

        $response = $this->api()->post("admin/scheduled-consultations/{$appointment->appointment_id}/resolve-review", [
            'action' => $request->input('action'),
            'new_payout_amount' => $request->input('new_payout_amount'),
            'reason' => $request->input('reason'),
            'notify_channels' => $request->input('notify_channels'),
        ]);

        $data = $response->json();

        if (is_array($data) && ($data['ok'] ?? false)) {
            toast($data['message'] ?? 'Case resolved')->success();
            return back();
        }

        toast(($data['message'] ?? null) ?: "Resolve failed ({$response->status()})")->error();
        return back();
    }
}
