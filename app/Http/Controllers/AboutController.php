<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Page;
use App\FileUpload;
use Illuminate\Support\Facades\Storage;



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
               'image'=> $about->image,
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
        // $pathToFile= $request->file('image')->store('images','public');

      
        $about=new Page;
        $about->page_id=2;  //page_id=2 for about
        $about->head_intro=$request->input('head_intro');
        $about->head_years=$request->input('head_years');
        $about->head_main=$request->input('head_main');
        $about->head_details=$request->input('head_details');
        $about->image= $request->file('image')? $request->file('image')->store('uploads','public'):null;
        $about->body_title=$request->input('body_title');
        $about->body_icon=$request->input('body_icon');
        $about->body_details=$request->input('body_details');
        $about->body_title_2=$request->input('body_title_2');
        $about->body_icon_2=$request->input('body_icon_2');
        $about->body_details_2=$request->input('body_details_2');
        $about->save();



    return Redirect::route('/');

            
    }

    
    public function downloadFile($file)    {
        $destination = storage_path('/app/public/');
        $pathToFile = $destination.$file;
        return response()->download($pathToFile);
        //return Storage::get("/".$pathToFile);  
    }
       
}
