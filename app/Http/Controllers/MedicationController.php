<?php

namespace App\Http\Controllers;

use App\Http\Requests\Medication\MedicationRequest;
use App\Http\Resources\Medication\MedicationCategoryResource;
use App\Http\Resources\MedicationResource;
use App\Models\Medication;
use App\Models\Medication\MedicationCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MedicationController extends Controller {
    

    function index(Request $request) {
        $medications = Medication::latest('medication_id')->paginate();
        $categories = MedicationCategory::all();

        return Inertia::render('Medications/Index', [
            'medications' => MedicationResource::collection($medications),
            'categories' => MedicationCategoryResource::collection($categories)
        ]);
    }

    function store(MedicationRequest $request){
        $validated = $request->validated();
        $validated['medication_category_id'] = $validated['medication_category'];

        Medication::create($validated);

        toast('Medication Created Successfully', 'Success')->success();
        return back();
    }
    
    function update(MedicationRequest $request, Medication $medication){
        $validated = $request->validated();
        $validated['medication_category_id'] = $validated['medication_category'];
        $validated['medication_pic'] = $request->hasFile('medication_pic') ? $medication->medication_pic : $medication->medication_pic;

        $medication->update($validated);

        toast('Medication Updated Successfully', 'Success')->success();
        return back();
    }
    
    function destroy(Medication $medication){
        $medication->delete();
        
        toast('Medication deleted Successfully', 'Success')->success();
        return back();
    }

}
