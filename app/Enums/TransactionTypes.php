<?php

namespace App\Enums;

enum TransactionTypes:string {
    case MEDICATION = 'medication';
    case TEST = 'test';   
    case APPOINTMENT = 'appointment';   
}

