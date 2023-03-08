<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;


class DataImport implements ToCollection, WithHeadingRow
{
    protected $model,$headers;    

    public function __construct($model, $headers)
    {
        $this->model = $model;
        $this->headers = $headers;
    }
    public function collection(Collection $rows){       
        
        $this->model->import($rows, $this->headers);
    }
}