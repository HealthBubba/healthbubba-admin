<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ScheduledPayoutSettingsController extends Controller
{
    /**
     * Node admin-service client. Authenticates the service with the shared key;
     * the acting admin identity is passed per-request in the body.
     */
    private function api()
    {
        return Http::baseUrl(env('API_BASE'))
            ->withHeaders(['X-Admin-Api-Key' => env('ADMIN_SERVICE_API_KEY')]);
    }

    function index()
    {
        // Gated: the matching backend_service release (scheduled-consultation
        // payout settings table + endpoints) is only on whatsapp-integration
        // so far, not yet deployed to production. Remove this short-circuit
        // once that reaches prod — see the whatsapp-integration-prod-gap memory.
        return inertia('ComingSoon', ['title' => 'Payout Settings']);
    }

    function update(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric|min:1',
            'effective_from' => 'nullable|date',
            'reason' => 'nullable|string',
        ]);

        $admin = authenticated();

        $response = $this->api()->post('admin/scheduled-consultations/payout-settings', [
            'amount' => $request->input('amount'),
            'effective_from' => $request->input('effective_from'),
            'reason' => $request->input('reason'),
            'changed_by_admin_id' => $admin?->id,
            'changed_by_name' => $admin?->full_name,
        ]);

        $data = $response->json();

        if (is_array($data) && ($data['ok'] ?? false)) {
            toast($data['message'] ?? 'Payout setting saved')->success();
            return back();
        }

        toast(($data['message'] ?? null) ?: "Save failed ({$response->status()})")->error();
        return back();
    }
}
