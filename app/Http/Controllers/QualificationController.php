<?php

namespace App\Http\Controllers;

use App\Http\Resources\QualificationResource;
use App\Models\Qualification;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
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
            'qualification_name' => ['required', 'string', Rule::unique('qualifications', 'qualification_name')->ignore($qualification?->qualification_id, 'qualification_id')]
        ]);

        $qualification = $qualification?->fill($validated) ?? new Qualification($validated);
        $qualification->save();

        toast('Qualification updated successfully')->success();

        return back();
    }

    function destroy(Qualification $qualification) {
        $qualification->delete();
        toast('Qualification Deleted Successfully')->success();
        return back();
    }
}
