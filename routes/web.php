<?php

use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('dashboard', [HomeController::class, 'dashboard']);

Route::get('/', function () {
    return redirect('panel');
});

Route::get('panel/{any?}', function () {
    return view('layouts.app');
})->where('any', '.*');