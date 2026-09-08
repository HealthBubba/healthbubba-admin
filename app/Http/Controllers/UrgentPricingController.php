<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class UrgentPricingController extends Controller
{
    private function api()
    {
        return Http::baseUrl(env('API_BASE'))
            ->withHeaders(['X-Admin-Api-Key' => env('ADMIN_SERVICE_API_KEY')]);
    }

    function index()
    {
        $response = $this->api()->get('admin/urgent-consultation-pricing/catalog');
        $data = $response->json();

        $ok = is_array($data) && ($data['ok'] ?? false);
        if (!$ok) {
            toast(($data['message'] ?? null) ?: "Could not load pricing catalog")->error();
        }

        return inertia('UrgentPricing', [
            'catalog' => $ok ? ($data['data'] ?? []) : [
                'pricing' => [],
                'time_periods' => [],
                'practitioner_types' => [],
            ],
        ]);
    }

    function update(Request $request)
    {
        $request->validate([
            'pricing' => 'required|array|min:1',
            'pricing.*.practitioner_type' => 'required|string',
            'pricing.*.time_period' => 'required|string',
            'pricing.*.patient_fee_in_naira' => 'required|numeric|min:1',
            'pricing.*.doctor_payout_in_naira' => 'required|numeric|min:0',
        ]);

        $response = $this->api()->put('admin/urgent-consultation-pricing/catalog', [
            'pricing' => $request->input('pricing'),
        ]);
        $data = $response->json();

        if (is_array($data) && ($data['ok'] ?? false)) {
            toast($data['message'] ?? 'Pricing updated')->success();
            return back();
        }

        toast(($data['message'] ?? null) ?: "Update failed ({$response->status()})")->error();
        return back();
    }
}
