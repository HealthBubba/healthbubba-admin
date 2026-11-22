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
        $response = $this->api()->get('admin/scheduled-consultations/payout-settings');
        $data = $response->json();

        $ok = is_array($data) && ($data['ok'] ?? false);
        if (!$ok) {
            toast(($data['message'] ?? null) ?: "Could not load payout settings")->error();
        }

        return inertia('PayoutSettings', [
            'current' => $ok ? ($data['data']['current'] ?? null) : null,
            'history' => $ok ? ($data['data']['history'] ?? []) : [],
        ]);
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
