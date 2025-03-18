<?php

namespace App\Http\Controllers;

use App\Http\Resources\SpecialtyResource;
use App\Models\Specialties\Specialty;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class SpecialtyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request) {
        $specialties = Specialty::query()
                            ->when($request->keyword, fn($query, $keyword) => $query->where('specialty_name', 'LIKE', "%$keyword%"))
                            ->with(['practitioners'])
                            ->latest('specialty_id')
                            ->paginate();

        return Inertia::render('Specialties/Index', [
            'specialties' => SpecialtyResource::collection($specialties)
        ]);
    }

    function update(Request $request, Specialty $specialty) {
        $validated = $request->validate([
            'specialty_name' => ['required', 'string', Rule::unique('specialties', 'specialty_name')->ignore($specialty?->specialty_id, 'specialty_id')]
        ]);

        $specialty = $specialty?->fill($validated) ?? new Specialty($validated);
        $specialty->save();

        toast('Specialty updated successfully')->success();

        return back();
    }

    function destroy(Specialty $specialty) {
        $specialty->delete();
        toast('Specialty Deleted Successfully')->success();
        return back();
    }

}
