<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()    {
        return Inertia::render('Blog');
            
}
}
