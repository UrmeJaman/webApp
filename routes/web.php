<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\CaseStudyController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Auth\LoginController;


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

//auth
Route::get('login', [LoginController::class, 'showLoginForm'])
    ->name('login')
    ->middleware('guest');
Route::post('login', [LoginController::class, 'login'])
    ->name('login.attempt')
    ->middleware('guest');
Route::post('logout', [LoginController::class, 'logout'])
    ->name('logout');

Route::get('/', [Controller::class, 'index'])->name('/');


 Route::get('/caseStudy', [CaseStudyController::class, 'index'])
    ->name('case');
Route::get('/contact', [ContactController::class, 'index'])
    ->name('contact');
Route::get('/service', [ServiceController::class, 'index'])
    ->name('service');
    

    //blog
   

Route::get('/blog', [BlogController::class, 'index'])
    ->name('/blog');
Route::get('/blog/create', [BlogController::class, 'create'])
    ->name('blog.create');
    // ->middleware('auth');
Route::post('/blog', [BlogController::class, 'store'])
    ->name('blog.store');
    // ->middleware('auth');;


//about
Route::get('/about', [AboutController::class, 'index'])
    ->name('about');
Route::get('/about/create', [ABoutController::class, 'create'])
    ->name('about.create');
    Route::post('/about', [AboutController::class, 'store'])
    ->name('about.store');
// Route::get('/about/data',[AboutController::class, 'showAbout']);
    
//casestudy
Route::get('/casestudy', [CaseStudyController::class, 'index'])
    ->name('casestudy');
Route::get('/casestudy/create', [CaseStudyController::class, 'create'])
    ->name('casestudy.create');
    Route::post('/casestudy', [CaseStudyController::class, 'store'])
    ->name('casestudy.store');
