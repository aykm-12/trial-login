<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AttendanceController;

// ここが '/users' になっているか、'/interns' になっているか確認
Route::get('/interns', [AttendanceController::class, 'index']);
Route::post('/checkin', [AttendanceController::class, 'checkIn']);
