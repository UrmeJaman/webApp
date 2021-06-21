<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CaseStudyController extends Controller
{
    public function index()    {
        return Inertia::render('CaseStudy');
            
}
}
