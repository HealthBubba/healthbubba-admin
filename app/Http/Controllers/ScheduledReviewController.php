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
        // Gated: production's appointments table doesn't have scheduled_status
        // yet (whatsapp-integration not deployed to prod). This would 500 on a
        // live query otherwise. Remove this short-circuit once that reaches
        // prod — see the whatsapp-integration-prod-gap memory.
        return inertia('ComingSoon', ['title' => 'Scheduled Review']);
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
