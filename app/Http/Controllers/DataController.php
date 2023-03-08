<?php

namespace App\Http\Controllers;

use App\Exports\ViewExport;
use App\Imports\DataImport;
use App\Traits\OfficeTrait;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;
use Maatwebsite\Excel\Facades\Excel;


class DataController extends Controller
{
    use OfficeTrait;

    public function word2pdf()
    {
        $surat = request()->surat;
        $data = [];
        $filename = 'SURAT_NAMA SISWA_NISN';

        switch ($surat) {
            case 'srps':
                $data = [
                    'nama_siswa' => 'Naira Hilya',
                    'kepala_sekolah' => 'Nurdiah'
                ];

                $filename = strtoupper($surat) . "_NAIRA_1419221";

                break;
        }

        $this->convertWordToPDF("files/$surat.docx", $data, $filename);
    }

    public function export($type, $model = null, $id = null)
    {
        $modelClass = "App\\Models\\" . str_replace('-', '', ucwords($model, '-'));

        switch ($type) {
            case 'excel':
                return (new $modelClass)->export();
                // return Excel::download(new ViewExport((new $modelClass)->export(), "exports.index"), "$model.xlsx");
                break;
            case 'pdf':
                $pdf = PDF::loadView('exports.index', ['export' => (new $modelClass)->export(10)])->setPaper('a4', 'landscape');
                $pdf->getDomPDF()->set_option("enable_php", true);

                return $pdf->download("$model.pdf");
                break;

            default:
                # code...
                break;
        }
    }

    public function import($model, Request $request)
    {

        $data = $this->getData($model);
        Excel::import(new DataImport($data['model'], $data['headers']), $request->file('file_import'));
        return response()->json(['Data Berhasil Diimport!']);
    }

    public function getData($modelClass)
    {
        $columnExceptions = ['id', 'created_at', 'updated_at'];
        $modelClass = "App\\Models\\" . str_replace('-', '', ucwords($modelClass, '-'));
        $model = new $modelClass;
        $tableColumns = $model->getTableColumns();
        $headers = $columnExceptions ? array_diff($tableColumns, $columnExceptions) : $tableColumns;

        return [
            'model' => $model,
            'headers' => $headers
        ];
    }
}
