<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Barqdev\Autocrud\AutoBase;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    use AutoBase;

    public function __construct()
    {
        $this->model = new Notification;
        $this->searchFields = ['data->title','data->message']; //Fill with searchable searchFields
        $this->request = new Request;
    }

    public function customRequestData($request){

        //if($request->has('file'))
        //    $request['foto'] = $this->upload('foto',$request->file);

        return $request;
    }

    public function callbackAfterStoreOrUpdate($data, $request)
    {
        # code...
        return $data;
    }
}
