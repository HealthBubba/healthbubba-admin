<?php

namespace App\Enums;

enum Role:string {

    case DOCTOR = 'doctor';
    case PATIENT = 'patient';
    case UNSPECIFIED = 'unspecified';

    case ADMIN = 'admin';
    case SUPERADMIN = 'super_admin';
    case EDITOR = 'editor';
    case VIEWER = 'viewer';

    function label(){
        return match ($this) {
            self::ADMIN => 'Administrator',
            self::SUPERADMIN => 'Super Administrator',
            self::EDITOR => 'Editor',
            self::VIEWER => 'Viewer',
            self::DOCTOR => 'Doctor',
            self::PATIENT => 'Patient',
            self::UNSPECIFIED => 'Unspecified',
        };
    }

}