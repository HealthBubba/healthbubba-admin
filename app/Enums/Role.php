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

    static function options(){
        return [
            self::ADMIN->value => self::ADMIN->label(),
            self::SUPERADMIN->value => self::SUPERADMIN->label(),
            self::EDITOR->value => self::EDITOR->label(),
            self::VIEWER->value => self::VIEWER->label()
        ];
    }

}