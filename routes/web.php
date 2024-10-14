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
        Route::get('suspend', [HealthPractitionerController::class, 'suspend'])->name('practitioners.suspend');
        Route::get('destroy', [HealthPractitionerController::class, 'destroy'])->name('practitioners.destroy');
    });
});
Route::get('/patients', [PatientController::class, 'index'])->name('patients');
Route::get('/appointments', [AppointmentController::class, 'index'])->name('appointments');
Route::get('/orders', [OrderController::class, 'index'])->name('orders');
Route::get('/transactions', [TransactionController::class, 'index'])->name('transactions');

Route::prefix('admins')->group(function(){
    Route::get('', [AdminController::class, 'index'])->name('admins');
});

// Route::get('/logout', [TransactionController::class, 'index'])->name('logout');
require __DIR__.'/auth.php';
