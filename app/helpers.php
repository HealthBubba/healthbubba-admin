<?php

use App\Library\AcademicYears;
use App\Library\Toast;
use App\Library\Uploader;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;

if(!function_exists('status')) {
    function status($status, $message = '', $data = []){
        $state = [$status, $message, $data];
        return [...$state, $state];
    }
}

if(!function_exists('authenticated')){
    function authenticated($relations = []) : Admin | null {
        return Admin::with($relations)->find(Auth::id());
    }
}


if(!function_exists('toast')) {
    function toast($message, $title = null){
        return new Toast($message, $title);
    }
}

if(!function_exists('jsonify')) {
    function jsonify(array $arr = []) : object {
        return json_decode(json_encode($arr));
    }
}

if (!function_exists('randomDate')) {
    function randomDate($sStartDate, $sEndDate){
        $fMin = strtotime($sStartDate);
        $fMax = strtotime($sEndDate);

        $fVal = mt_rand($fMin, $fMax);

        return Date::parse($fVal);
    }
}

if(!function_exists('upload')) {
    function upload() {
        return new Uploader;
    }
}




