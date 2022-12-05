<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FilmsController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/register', [UserController::class, 'store']);



Route::get('/getuser', [UserController::class, 'getUser']);
// CATEGORY
Route::get('/getcategory', [CategoryController::class, 'index']);
Route::post('/createcategory', [CategoryController::class, 'store']);
Route::post('/updatecategory/{id}', [CategoryController::class, 'update']);

// FILMS
Route::get('/getfilms', [FilmsController::class, 'index']);
Route::post('/createfilms', [FilmsController::class, 'store']);
Route::post('/updatefilms/{id}', [FilmsController::class, 'update']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
