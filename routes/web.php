<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\CaseStudyController;
use App\Http\Controllers\ContactController;


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

Route::get('/', [Controller::class, 'index']);
Route::get('/about', [AboutController::class, 'index'])
    ->name('about');
 Route::get('/blog', [BlogController::class, 'index'])
    ->name('blog');
 Route::get('/caseStudy', [CaseStudyController::class, 'index'])
    ->name('case');
Route::get('/contact', [ContactController::class, 'index'])
    ->name('contact');
Route::get('/service', [ServiceController::class, 'index'])
    ->name('service');