<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class LicenseController extends Controller
{
    function __invoke(Request $request){
        $data =  $request->only('licenseId', 'newStatus');
            
        $response = Http::baseURL(env('API_BASE'))->put('admin/licenses/update-status', $data);

        $data = $response->json();
        if($data && $data['ok']) {
            toast($data['message'])->success();
            return back();
        }
        
        if(isset($data['ok']) && !$data['ok']) {
            toast($data['message'] ?? 'Invalid request response')->error();
        }else {
            toast("Invalid request response from {$response->effectiveUri()}")->error();
        }
        
        return back();
    }
}
