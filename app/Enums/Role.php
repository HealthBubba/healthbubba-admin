<?php

namespace App\Enums;

enum Role:string {

    case DOCTOR = 'doctor';
    case PATIENT = 'patient';
    case UNSPECIFIED = 'unspecified';

}