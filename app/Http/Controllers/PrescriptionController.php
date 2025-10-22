<?php

namespace App\Http\Controllers;

use Beganovich\Snappdf\Snappdf;
use Illuminate\Http\Request;

class PrescriptionController extends Controller {
    
    function index(Request $request){
        return view('prescriptions');
    }

    function download(Request $request) {
        $snappdf = new Snappdf();
        $pdf = $snappdf->setHtml(view('documents.prescriptions')->render())
            ->addChromiumArguments('--no-sandbox')
            ->addChromiumArguments('--headless')
            ->addChromiumArguments('--user-data-dir=C:\Temp\snappdf-chrome-profile')
            ->generate();

        $filename = 'prescription.pdf';

        return response()->streamDownload(function () use($pdf){
            echo  $pdf;
        }, $filename, [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'attachment; filename="'.$filename.'"',
            ]);
    }

}
