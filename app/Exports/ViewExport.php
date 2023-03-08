<?php

namespace App\Exports;

use Illuminate\Contracts\View\View;
// use Maatwebsite\Excel\Concerns\Exportable;
// use Maatwebsite\Excel\Concerns\WithHeadings;
// use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class ViewExport implements FromView, ShouldAutoSize, WithEvents
{
    // use Exportable;

    protected $export;
    protected $view;
    protected $data;

    public function __construct($export, $view = null)
    {
        $this->export = $export;
        $this->view = $view;
    }
    public function collection()
    {
        return $this->data;
    }
    public function view(): View
    {
        return view($this->export['view'] ?? $this->view ?? 'exports.index', [
            'export' => $this->export,
        ]);
    }
    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $workSheet = $event->sheet->getDelegate();
                $event->sheet->getDelegate()->getStyle('A2:C3')
                    ->getAlignment()
                    ->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
                // $workSheet->freezePane('C2'); // freezing here
            },
        ];
    }
}
