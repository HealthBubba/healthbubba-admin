<?php

namespace App\Enums;

enum Permissions:string {

    case CREATE = 'create';
    case READ = 'read';
    case UPDATE = 'update';
    case DELETE = 'delete';

}