<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HealthPractitionerController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

Route::prefix('practitioners')->group(function(){
    Route::get('', [HealthPractitionerController::class, 'index'])->name('practitioners');

    Route::prefix('{user}')->group(function(){
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
Route::get('/orders', [OrderController::class, 'index'])->name('orders');
Route::get('/transactions', [TransactionController::class, 'index'])->name('transactions');

Route::prefix('admins')->group(function(){
    Route::get('', [AdminController::class, 'index'])->name('admins');
    Route::post('', [AdminController::class, 'update'])->name('admins.store');

    Route::prefix('{admin}')->group(function(){
        Route::get('', [AdminController::class, 'edit'])->name('admins.edit');
        Route::post('', [AdminController::class, 'update'])->name('admins.update');
    });

});

// Route::get('/logout', [TransactionController::class, 'index'])->name('logout');
require __DIR__.'/auth.php';
