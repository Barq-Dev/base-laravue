<?php

namespace App\Traits;

use Exception;
use PhpOffice\PhpWord\Settings;
use PhpOffice\PhpWord\IOFactory;
use Symfony\Component\Process\Process;
use PhpOffice\PhpWord\TemplateProcessor;

trait OfficeTrait
{

    public function convertWordToPDF($path, $data, $output)
    {
        /* Set the PDF Engine Renderer Path */
        $domPdfPath = base_path('vendor/dompdf/dompdf');
        \PhpOffice\PhpWord\Settings::setPdfRendererPath($domPdfPath);
        \PhpOffice\PhpWord\Settings::setPdfRendererName('DomPDF');

        /*@ Reading doc file */
        $template = new TemplateProcessor(public_path($path));

        /*@ Replacing variables in doc file */
        foreach ($data as $key => $value) {
            $template->setValue($key, $value);
        }

        /*@ Save Temporary Word File With New Name */
        $saveDocPath = public_path("$output.docx");
        $template->saveAs($saveDocPath);

        $this->execute('/Applications/LibreOffice.app/Contents/MacOS/soffice 
        --headless --convert-to pdf ' . public_path("files/$output.docx") . ' --outdir ' . public_path("/"));

        // // Load temporarily create word file
        // $Content = \PhpOffice\PhpWord\IOFactory::load($saveDocPath); 

        // //Save it into PDF
        // $savePdfPath = public_path("$output.pdf");

        // /*@ If already PDF exists then delete it */
        // if ( file_exists($savePdfPath) ) {
        //     unlink($savePdfPath);
        // }

        // //Save it into PDF
        // $PDFWriter = \PhpOffice\PhpWord\IOFactory::createWriter($Content,'PDF');
        // $PDFWriter->save($savePdfPath); 
        echo 'File has been successfully converted';

        /*@ Remove temporarily created word file */
        if (file_exists($saveDocPath)) {
            unlink($saveDocPath);
        }
    }

    public static function execute($cmd): string
    {
        $process = Process::fromShellCommandline($cmd);

        $processOutput = '';

        $captureOutput = function ($type, $line) use (&$processOutput) {
            $processOutput .= $line;
        };

        $process->setTimeout(null)
            ->run($captureOutput);

        if ($process->getExitCode()) {
            $exception = new Exception($cmd . " - " . $processOutput);
            report($exception);

            throw $exception;
        }

        return $processOutput;
    }
}
