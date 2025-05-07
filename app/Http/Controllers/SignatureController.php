<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SignatureController extends Controller {
    
    function status(Request $request, User $user){
        $data =  $request->only('status', 'reason');
            
        $response = Http::baseURL(env('API_BASE'))->put('/admin/signature/update-status', [
            'isVerified' => $request->status,
            'reason' => $request->reason,
            'userId' => $user->id
        ]);

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
