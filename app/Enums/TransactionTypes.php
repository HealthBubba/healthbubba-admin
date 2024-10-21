<?php

namespace App\Enums;

enum TransactionTypes:string {
    case MEDICATION = 'medication';
    case TEST = 'test';   
    case APPOINTMENT = 'appointment';   

    function label(){
        return match ($this) {
            self::MEDICATION => "Medication",
            self::TEST => 'Test',
            self::APPOINTMENT => 'Appointments'
        };
    }
}

