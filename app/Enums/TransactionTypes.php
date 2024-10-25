<?php

namespace App\Enums;

enum TransactionTypes:string {
    case MEDICATION = 'medication';
    case TEST = 'test';   
    case APPOINTMENT = 'appointment';   
    case ORDERS = 'orders';

    function label(){
        return match ($this) {
            self::MEDICATION => "Medication",
            self::TEST => 'Test',
            self::APPOINTMENT => 'Appointments',
            self::ORDERS => 'Orders'
        };
    }
}

