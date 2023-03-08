<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Broadcast;

use App\Http\Controllers\{
  ActivityController,
  AttachmentController,
  NotificationController,
  DataController,
  HomeController,
  RoleController,
  UserController,

  // Autocrud Import

	// #Autocrud Import#
};

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('auth', [UserController::class, 'store']);
Route::post('dashboard', [HomeController::class, 'dashboard']);

// Route::get('sekolah', [SekolahController::class, 'index'])->name('sekolah.index');
Route::middleware('auth:sanctum')->group(function () {
  Route::get('export/{type?}/{model?}/{id?}', [DataController::class, 'export']);

  Route::resource('users', UserController::class);
  Route::get('auth', [UserController::class, 'isAuth']);
  Route::get('users/notify/{id?}', [UserController::class, 'notify']);

  Route::get('markAsRead/{id?}', [UserController::class, 'markAsRead']);
  Route::get('notifications', [UserController::class, 'notifications']);
  Route::resource('notification', NotificationController::class);
  Route::resource('role', RoleController::class);
  Route::get('permissions', [RoleController::class, 'permissions']);

  Route::post('import/{model?}', [DataController::class, 'import']);

  Route::get('laravolt/{type?}/{parent_name?}', [HomeController::class, 'laravolt']);

  Route::resource('attachment', AttachmentController::class);

  // Autocrud

	// #Autocrud#
});
