<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HealthPractitionerController;
use App\Http\Controllers\MedicationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QualificationController;
use App\Http\Controllers\SpecialtyController;
use App\Http\Controllers\TransactionController;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function(){
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    Route::withoutMiddleware(HandleInertiaRequests::class)->group(function(){
        Route::prefix('trends')->group(function(){
            Route::get('', [DashboardController::class, 'trends'])->name('dashboard.trends');
            Route::get('revenue', [DashboardController::class, 'revenueTrends'])->name('dashboard.trends.revenue');
            Route::get('consultants', [DashboardController::class, 'consultantTrends'])->name('dashboard.trends.consultants');
        });
    });

    Route::prefix('qualifications')->group(function(){
        Route::get('', [QualificationController::class, 'index'])->name('qualifications');
        Route::post('{qualification?}', [QualificationController::class, 'update'])->name('qualifications.update');
        Route::prefix('{qualification}')->group(function(){
            Route::get('delete', [QualificationController::class, 'destroy'])->name('qualifications.destroy');
        });
    });

    Route::prefix('specialties')->group(function(){
        Route::get('', [SpecialtyController::class, 'index'])->name('specialties');
        Route::post('{specialty?}', [SpecialtyController::class, 'update'])->name('specialties.update');
        Route::prefix('{specialty}')->group(function(){
            Route::get('delete', [SpecialtyController::class, 'destroy'])->name('specialties.destroy');
        });
    });
    
    Route::prefix('practitioners')->group(function(){
        Route::get('', [HealthPractitionerController::class, 'index'])->name('practitioners');
    
        Route::prefix('{user}')->group(function(){
            Route::get('', [HealthPractitionerController::class, 'show'])->name('practitioners.show');
            Route::get('edit', [HealthPractitionerController::class, 'edit'])->name('practitioners.edit');
            Route::post('update', [HealthPractitionerController::class, 'update'])->name('practitioners.update');
            Route::get('transactions', [HealthPractitionerController::class, 'transactions'])->name('practitioners.transactions');
            Route::get('consultations', [HealthPractitionerController::class, 'consultations'])->name('practitioners.consultations');
            Route::get('prescriptions', [HealthPractitionerController::class, 'prescriptions'])->name('practitioners.prescriptions');
            Route::post('upload', [HealthPractitionerController::class, 'upload'])->name('practitioners.upload');
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
            Route::get('', [PatientController::class, 'show'])->name('patients.show');
            Route::get('verify-email', [PatientController::class, 'verifyEmail'])->name('patients.verify-email');
            Route::get('orders', [PatientController::class, 'orders'])->name('patients.orders');
            Route::get('transactions', [PatientController::class, 'transactions'])->name('patients.transactions');
            Route::get('edit', [PatientController::class, 'edit'])->name('patients.edit');
            Route::get('appointments', [PatientController::class, 'appointments'])->name('patients.appointments');
            Route::get('prescriptions', [PatientController::class, 'prescriptions'])->name('patients.prescriptions');
            Route::get('records', [PatientController::class, 'records'])->name('patients.records');
            Route::get('conditions', [PatientController::class, 'conditions'])->name('patients.conditions');
            Route::get('destroy', [PatientController::class, 'destroy'])->name('patients.destroy');
        });
    });
    
    Route::prefix('appointments')->group(function(){
        Route::get('', [AppointmentController::class, 'index'])->name('appointments');
        Route::prefix('{appointment:appointment_id}')->group(function(){
            Route::get('', [AppointmentController::class, 'show'])->name('appointments.show');
        });
    });

    Route::prefix('orders')->group(function(){
        Route::get('', [OrderController::class, 'index'])->name('orders');
        Route::prefix('orderItem/{order:order_item_id}')->group(function(){
            Route::prefix('tests')->group(function(){
                Route::post('', [OrderController::class, 'upload'])->name('orders.tests.upload');
                Route::prefix('{testResult}')->group(function(){
                    Route::get('delete', [OrderController::class, 'deleteResult'])->name('orders.tests.delete');
                });
            });
            
        });
        Route::prefix('{order}')->group(function(){
            Route::post('status', [OrderController::class, 'status'])->name('orders.tests.status');
        });
    });

    Route::prefix('medications')->group(function(){
        Route::get('', [MedicationController::class, 'index'])->name('medications');
        Route::post('', [MedicationController::class, 'store'])->name('medications.store');
        Route::prefix('{medication:medication_id}')->group(function(){
            Route::get('', [MedicationController::class, 'show'])->name('medications.show');
            Route::post('', [MedicationController::class, 'update'])->name('medications.update');
        });
    });

    Route::prefix('transactions')->group(function(){
        Route::get('', [TransactionController::class, 'index'])->name('transactions');
        Route::prefix('{transaction:transaction_reference}')->group(function(){
            Route::get('', [TransactionController::class, 'show'])->name('transactions.show');
            Route::get('delete', [TransactionController::class, 'destroy'])->name('transactions.destroy');
        }); 
    });
    
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
