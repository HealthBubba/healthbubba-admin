<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ReconciliationController extends Controller
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
        $response = $this->api()->get('admin/appointments/reconciliation');
        $data = $response->json();

        $ok = is_array($data) && ($data['ok'] ?? false);
        if (!$ok) {
            toast(($data['message'] ?? null) ?: "Could not load reconciliation queue")->error();
        }

        return inertia('Reconciliation', [
            'items' => $ok ? ($data['data']['items'] ?? []) : [],
            'count' => $ok ? ($data['data']['count'] ?? 0) : 0,
        ]);
    }

    function action(Request $request, $appointment)
    {
        $request->validate([
            'action' => 'required|string',
            'amount' => 'nullable|numeric|min:1',
            'notes' => 'nullable|string',
        ]);

        $admin = authenticated();

        $response = $this->api()->post("admin/appointments/{$appointment}/reconcile", [
            'action' => $request->input('action'),
            'amount' => $request->input('amount'),
            'notes' => $request->input('notes'),
            'acted_by_admin_id' => $admin?->id,
            'acted_by_email' => $admin?->email,
        ]);

        $data = $response->json();

        if (is_array($data) && ($data['ok'] ?? false)) {
            toast($data['data']['note'] ?? $data['message'])->success();
            return back();
        }

        toast(($data['message'] ?? null) ?: "Reconciliation failed ({$response->status()})")->error();
        return back();
    }
}
