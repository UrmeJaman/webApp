<?php

namespace App\Http\Controllers;
use App\Models\Page;


use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


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

            
        
                return Inertia::render('vue/app',[
                    'about'=>$data[0],
                ]);
   
                
}

}
