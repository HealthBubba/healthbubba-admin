<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HealthPractitionerController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionController;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function(){
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    Route::withoutMiddleware(HandleInertiaRequests::class)->group(function(){
        Route::get('/trends', [DashboardController::class, 'trends'])->name('dashboard.trends');
    });
    
    Route::prefix('practitioners')->group(function(){
        Route::get('', [HealthPractitionerController::class, 'index'])->name('practitioners');
    
        Route::prefix('{user}')->group(function(){
            Route::get('approve', [HealthPractitionerController::class, 'approve'])->name('practitioners.approve');
            Route::get('disapprove', [HealthPractitionerController::class, 'disapprove'])->name('practitioners.disapprove');
            Route::get('destroy', [HealthPractitionerController::class, 'destroy'])->name('practitioners.destroy');
        });
    });
    
    Route::prefix('users')->group(function(){
        Route::prefix('{user}')->group(function(){
            Route::get('suspend', [ProfileController::class, 'suspend'])->name('users.suspend');
        });
    });
    
    Route::prefix('patients')->group(function(){
        Route::get('/', [PatientController::class, 'index'])->name('patients');
        Route::prefix('{user}')->group(function(){
            Route::get('destroy', [PatientController::class, 'destroy'])->name('patients.destroy');
        });
    });
    
    Route::get('/appointments', [AppointmentController::class, 'index'])->name('appointments');

    Route::prefix('orders')->group(function(){
        Route::get('', [OrderController::class, 'index'])->name('orders');
        Route::prefix('orderItem/{order:order_item_id}')->group(function(){
            Route::prefix('tests')->group(function(){
                Route::post('', [OrderController::class, 'upload'])->name('orders.tests.upload');
            });
            
        });
        Route::prefix('{order}')->group(function(){
            Route::post('status', [OrderController::class, 'status'])->name('orders.tests.status');
        });
    });

    Route::get('/transactions', [TransactionController::class, 'index'])->name('transactions');
    
    Route::prefix('admins')->group(function(){
        Route::get('', [AdminController::class, 'index'])->name('admins');
        Route::post('{admin?}', [AdminController::class, 'update'])->name('admins.update');
    
        Route::prefix('{admin}')->group(function(){
            Route::get('', [AdminController::class, 'edit'])->name('admins.edit');
            Route::post('roles', [AdminController::class, 'roles'])->name('admins.roles');
        });
    
    });
});

// Route::get('/logout', [TransactionController::class, 'index'])->name('logout');
require __DIR__.'/auth.php';
