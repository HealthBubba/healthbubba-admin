<?php

namespace App\Enums;

enum Role:string {

    case DOCTOR = 'doctor';
    case PATIENT = 'patient';
    case DEPENDENT = 'dependent';
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
            self::DEPENDENT => 'Dependent',
            self::UNSPECIFIED => 'Unspecified',
        };
    }

    static function managers(){
        return [self::ADMIN, self::SUPERADMIN, self::EDITOR, self::VIEWER];
    }

    static function options(){
        return [
            self::ADMIN->value => self::ADMIN->label(),
            self::SUPERADMIN->value => self::SUPERADMIN->label(),
            self::EDITOR->value => self::EDITOR->label(),
            self::VIEWER->value => self::VIEWER->label()
        ];
    }

    function permissions(){
        return match($this) {
            self::ADMIN => [Permissions::READ, Permissions::CREATE, Permissions::UPDATE, Permissions::DELETE],
            self::SUPERADMIN => [Permissions::READ, Permissions::CREATE, Permissions::UPDATE, Permissions::DELETE],
            self::EDITOR => [Permissions::READ, Permissions::CREATE, Permissions::UPDATE],
            self::VIEWER => [Permissions::READ],
        }; 
    }

}