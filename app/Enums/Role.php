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
            self::ADMIN->value => 'Administrator',
            self::SUPERADMIN->value => 'Super Administrator',
            self::EDITOR->value => 'Editor',
            self::VIEWER->value => 'Viewer',
            self::DOCTOR->value => 'Doctor',
            self::PATIENT->value => 'Patient',
            self::UNSPECIFIED->value => 'Unspecified',
        };
    }

}