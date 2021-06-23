<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()    {

        $data=Blog::all()
        
        ->transform(function ($blogs){
            return [
                'id'=> $blogs->id,
                'title' => $blogs->title,
                'details' => $blogs->details,
                
            ]; });
            return Inertia::render('Blog/Index', [
               
                'blogs' => $data,
        
    ]);
            
}




public function create()
{
    return Inertia::render('Blog/Create');
        
        
    
 }

public function store(Request $request)
{
    // Request::validate([
        
    //     'user_id' => ['required'],
       
    //     'title' => ['max:300'],
    //     'details' => ['max:300'],
    // ]);

    
$blog= new Blog;
$blog->user_id=1;
$blog->title=$request->input('title');
$blog->details=$request->input('description');
$blog->save();

    return Redirect::route('/blog')->with('success', 'blog created.');


   
}




// public function show($service)
// {
//     $data = Auth::user()->account->expenses()
//     ->where('vendor_id',$service)
//     ->where('expense_type', 5)
//     ->orderBy('created_at', 'DESC')
//     ->paginate(25)
//     ->transform(function ($service){
//         return [
//             'id' => $service->id,
//             'quantity' => $service->quantity,
//             'unitprice' => $service->unitprice,
//             'total' => $service->net_amount,
//             'paid' => $service->paid_amount,
//             'due' => $service->due_amount,
//             'size' => $service->size,
//             'unitprice' => $service->unit_price,
//             'supplier_id' => $service->vendor_id,
//             'supplier' => $service->getSupplier->name,
//             'created_at' => date_format( $service->created_at, 'd-m-Y'),
//         ];
//     });
    
//     return Inertia::render('GoBag/VendorEdit', [
        
//         'services' => $data,
//         ]);

// }


// public function edit(Expense $service)
// {
//     return Inertia::render('GoBag/Edit', [
//         'expense' => [
//             'id' => $service->id,
//             'invoice_number' => $service->invoice_number,
//             'quantity' => $service->quantity,
//             'unit_price' => $service->unit_price,
//             'net_amount' => $service->net_amount,
//             'date' => $service->created_at,
//             'expense_type' => $service->expense_type,
//             'paid_amount' => $service->paid_amount,
//             'due_amount' => $service->due_amount,
//             'deleted_at' => $service->deleted_at,
//             'supplier' => $service->getSupplier->name,
//             'is_all_paid' => $service->is_all_paid,
//             'note'=>$service->note,
//             'created_at' => date_format( $service->created_at, 'd-m-Y'),
//             'payments' => $service->payments()->get()->map->only([
//                 'id', 
//                 'paid_amount',
//                 'payment_type',
//                 'note', 
//                 'created_at',
//             ]),
//         ],
//         'pay_types' => Auth::user()->account->cost_types()
//             ->orderBy('name')
//             ->filter(Request::only('search', 'trashed'))
//             ->paginate(50)
//             ->only('id', 'name'),
//     ]);
// }


// public function update(Expense $expense)
// {
//     Request::validate([
//         'net_amount' => ['required', 'max:10'],
//         'paid_amount' => ['required', 'max:10'],
//         'due_amount' => ['required', 'max:10'],
//     ]);

//     DB::beginTransaction();

//     // Add new payment
//     try {
//         $expense->update([
//             'paid_amount' => Request::get('total_paid'),
//             'due_amount' => Request::get('due_amount'),
//             'is_all_paid' => Request::get('is_all_paid') ,
//         ]);

//         $payment = Auth::user()->account->payments()->create([
//             'expense_id' => Request::get('expense_id'), // type = 5
//             'net_amount' => Request::get('net_amount'),
//             'payment_type' => Request::get('pay_type'),
//             'paid_amount' => Request::get('paid_amount'),
//             'note' => Request::get('note'),
//             'created_at' => Request::get('created_at'),
//             'is_all_paid' => Request::get('is_all_paid') ,
//         ]);
//     } 
//     catch(ValidationException $e){
//         DB::rollback();
//         return Redirect::route('gobag.index')
//             ->withErrors( $e->getErrors() )
//             ->withInput();
//     }
//     catch(\Exception $e){
//         DB::rollback();
//         throw $e;
//     }
//     DB::commit();
   
//     return Redirect::route('gobag.index')->with('success', 'বাকি পরিষোধ হয়েছে.');
// }


// public function destroy(Expense $expense)
// {
//     $expense->delete();
//     return Redirect::route('gobag.index')->with('success', 'Entry removed.');
// }
}
