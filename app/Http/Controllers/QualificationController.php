<?php

namespace App\Http\Controllers;

use App\Http\Resources\QualificationResource;
use App\Models\Qualification;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QualificationController extends Controller
{
    function index(Request $request){
        $qualifications = Qualification::query()
                            ->when($request->keyword, fn($query, $keyword) => $query->where('qualification_name', 'LIKE', "%$keyword%"))
                            ->latest('qualification_id')
                            ->paginate();

        return Inertia::render('Qualifications/Index', [
            'qualifications' => QualificationResource::collection($qualifications)
        ]);
    }

    function update(Request $request, Qualification $qualification) {
        $validated = $request->validate([
            'qualification_name' => 'required|string|unique:qualifications,qualification_name'
        ]);

        $qualification = $qualification?->fill($validated) ?? new Qualification($validated);
        $qualification->save();

        toast('Qualification updated successfully')->success();

        return back();
    }
}
