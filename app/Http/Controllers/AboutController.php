<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Page;
use App\FileUpload;



class AboutController extends Controller
{
    public function index()    {

        $data=Page::where('page_id',2)->latest( 'created_at')->take(1)->get()
        ->transform(function ($about){
            return [
                'id'=> $about->id,
               

               'head_intro'=> $about->head_intro,
               'head_years'=>$about->head_years,
               'head_main'=>  $about->head_main,
               'head_details'=>$about->head_details,
               'product'=> $about->image,
               'body_title'=>$about->body_title,
               'body_icon'=>$about->body_icon,
               'body_details'=>$about->body_details,
               'body_title_2'=>$about->body_title_2,
               'body_icon_2'=>$about->body_icon_2,
               'body_details_2'=>$about->body_details_2,
                
            ]; });

            
        return Inertia::render('About/Index',[
            'about'=>$data[0],
        ]);

        
            
    }

    public function create()    {
        return Inertia::render('About/Create');
            
    }
    public function store(Request $request)    {


      
        $about=new Page;
        $about->page_id=2;  //page_id=2 for about
        $about->head_intro=$request->input('head_intro');
        $about->head_years=$request->input('head_years');
        $about->head_main=$request->input('head_main');
        $about->head_details=$request->input('head_details');
        $about->image= $request->input('image');
        $about->body_title=$request->input('body_title');
        $about->body_icon=$request->input('body_icon');
        $about->body_details=$request->input('body_details');
        $about->body_title_2=$request->input('body_title2');
        $about->body_icon_2=$request->input('body_icon2');
        $about->body_details_2=$request->input('body_details2');
        $about->save();



    return Redirect::route('/');

            
    }

       
}
