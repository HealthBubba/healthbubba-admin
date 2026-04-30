<?php

namespace App\Enums;

enum TransactionTypes:string {
    case MEDICATION = 'medication';
    case TEST = 'test';   
    case APPOINTMENT = 'appointment';   
    case ORDERS = 'orders';
    case AI_SUBSCRIPTION = 'ai_subscription';
    case WALLET_TRANSFER = 'wallet_transfer';

    function label(){
        return match ($this) {
            self::MEDICATION => "Medication",
            self::TEST => 'Test',
            self::APPOINTMENT => 'Consultations',
            self::ORDERS => 'Orders',
            self::AI_SUBSCRIPTION => 'AI Subscription',
            self::WALLET_TRANSFER => 'Wallet Transfer',
            default => null
        };
    }
}

