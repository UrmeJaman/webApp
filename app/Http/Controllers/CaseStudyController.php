<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Page;
class CaseStudyController extends Controller
{
    public function index()    {



        $data=Page::where('page_id',3)->latest( 'created_at')->take(1)->get()
        ->transform(function ($casestudy){
            return [
                'id'=> $casestudy->id,
               

               'head_intro'=> $casestudy->head_intro,
             
               'product'=> $casestudy->image,
               'body_title'=>$casestudy->body_title,
               
            ]; });

            

            
        
        return Inertia::render('CaseStudy/Index',[
            'casestudy'=>$data[0],
        ]);
            
    }

    public function create()    {
        return Inertia::render('CaseStudy/Create');
    }
      
    public function store(Request $request)    {
            $casestudy=new Page;
            $casestudy->page_id=3;  //page_id=3 for casestudy
            $case->head_intro=$request->input('head_intro');
            
            $casestudy->image= $request->input('image');
            $casestudy->body_title=$request->input('body_title');
        
            $casestudy->save();

            return Redirect::route('/');
                
        }
    
}
