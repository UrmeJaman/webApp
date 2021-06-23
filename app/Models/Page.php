<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'page_id',
        'head_intro',
        'head_years',
        'head_main',
        'head_details',
        'image',
        'body_title',
        'body_icon',
        'body_details',
        'body_title_2',
        'body_icon_2',
        'body_details_2',
        
        
        
       
        
    ];


}
