<?php

namespace App\Http\Controllers;

use App\Http\Requests\AttachmentRequest;
use App\Models\Attachment;
use Barqdev\Autocrud\AutoBase;
use Illuminate\Http\Request;

class AttachmentController extends Controller
{
    use AutoBase;

    public function __construct()
    {
        $this->model = new Attachment;
        $this->searchFields = []; //Fill with searchable searchFields
        $this->request = new AttachmentRequest;
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
