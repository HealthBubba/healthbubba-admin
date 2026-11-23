<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class NoShowFlagController extends Controller
{
    /**
     * Doctor no-shows on scheduled consultations flagged for Admin judgement
     * (dismiss, or suspend the doctor). Same hybrid pattern as
     * ScheduledReviewController: direct read against the shared appointments
     * table for the list, backend_service's HTTP API for actions.
     */
    private function api()
    {
        return Http::baseUrl(env('API_BASE'))
            ->withHeaders(['X-Admin-Api-Key' => env('ADMIN_SERVICE_API_KEY')]);
    }

    function index()
    {
        // Gated: production's appointments table doesn't have
        // no_show_flag_status yet (whatsapp-integration not deployed to
        // prod). This would 500 on a live query otherwise. Remove this
        // short-circuit once that reaches prod — see the
        // whatsapp-integration-prod-gap memory.
        return inertia('ComingSoon', ['title' => 'Flagged No-Shows']);
    }

    function dismiss(Request $request, Appointment $appointment)
    {
        $admin = authenticated();

        $response = $this->api()->post("admin/scheduled-consultations/{$appointment->appointment_id}/dismiss-no-show-flag", [
            'admin_id' => $admin?->id,
        ]);

        return $this->handle($response, 'Flag dismissed');
    }

    function suspend(Request $request, Appointment $appointment)
    {
        $request->validate([
            'days' => 'nullable|integer|min:1|max:365',
            'reason' => 'nullable|string',
            'message_to_doctor' => 'nullable|string',
            'notify' => 'nullable|boolean',
        ]);

        $admin = authenticated();

        $response = $this->api()->post("admin/doctors/{$appointment->doctor_id}/suspend", [
            'days' => $request->input('days', 7),
            'reason' => $request->input('reason'),
            'message_to_doctor' => $request->input('message_to_doctor'),
            'notify' => $request->boolean('notify', true),
            'linked_appointment_id' => $appointment->appointment_id,
            'admin_id' => $admin?->id,
        ]);

        return $this->handle($response, 'Doctor suspended');
    }

    private function handle($response, $fallback)
    {
        $data = $response->json();

        if (is_array($data) && ($data['ok'] ?? false)) {
            toast($data['message'] ?? $fallback)->success();
            return back();
        }

        toast(($data['message'] ?? null) ?: "Action failed ({$response->status()})")->error();
        return back();
    }
}
