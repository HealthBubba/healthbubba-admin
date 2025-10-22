<?php

namespace App\Enums;

enum Status:string {

    case SUSPENDED = 'suspended';
    case VERIFIED = 'verified';
    case PENDING = 'pending';
    case IS_PENDING = 'PENDING';
    case UNVERIFIED = 'unverified';
    case ACTIVE = 'active';
    case COMPLETED = 'completed';
    case CONFIRMED = 'confirmed';
    case FAILED = 'failed';
    
}