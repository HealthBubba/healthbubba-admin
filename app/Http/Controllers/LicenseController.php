<?php

namespace App\Http\Controllers;

use App\Http\Resources\LicenseResource;
use App\Models\License;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class LicenseController extends Controller
{

    function index(){
        $licenses = License::when(request('status'), function($query, $filter) {
                                $query->where('status', $filter);
                            })
                            ->when(request('keyword'), function($query, $keyword) {
                                $query->whereRelation('owner', 'first_name', 'LIKE', "%$keyword%")
                                        ->orWhereRelation('owner', 'last_name', 'LIKE', "%$keyword%")
                                        ->orWhereRelation('qualification', 'qualification_name', 'LIKE', "%$keyword%");
                            })
                            ->with(['qualification', 'owner'])->latest()->paginate();

        $all = License::count();

        $statusCounts = License::selectRaw("
            COUNT(CASE WHEN status = 'under review' THEN 1 END) as under_review,
            COUNT(CASE WHEN status = 'verified' THEN 1 END) as verified,
            COUNT(CASE WHEN status = 'expired' THEN 1 END) as expired,
            COUNT(CASE WHEN status = 'rejected' THEN 1 END) as rejected
        ")->first();

        return inertia('Licenses/Index', [
            'licenses' => LicenseResource::collection($licenses),
            'status' => $statusCounts,
            'all' => $all,
            'keyword' => request('keyword'),
            'current_status' => request('status'),
        ]);
    }

    function update(Request $request){
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

    function destroy(License $license) {
        $license->delete();
        toast('License deleted successfully')->success();
        return back();
    }
}
