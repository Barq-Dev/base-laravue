<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Exports\ViewExport;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class HomeController extends Controller
{

    public function index($menu = null, $submenu = null)
    {
        $data = [];

        switch ($menu) {
            case 'about':
                // $data['about'] = About::orderBy('id', 'desc')->take(1)->get();
                // $data['partner'] = Partner::all();
                // $data['struktur'] = Struktur::all();

                return view('home.pages.about.index', compact('data'));
                break;

            case 'blog':
                $slug = $submenu;

                // if ($slug) {
                //     $data['article'] = Article::whereSlug($slug)->first();
                //     if (!$data['article'])
                //         return "404 Not Found";

                //     return view('home.pages.blog.details', compact('data'));
                // }
                // $data['articles'] = $slug ? Article::whereSlug($slug)->first() : Article::orderBy('id', 'desc')->get();

                return view('home.pages.blog.index', compact('data'));
                break;


            case 'contact':
                // $data['contact'] = Contact::orderBy('id', 'desc')->take(1)->get();

                // return view('home.pages.contact.index', compact('data'));
                break;

            default:
                // This is Home
                // $data['articles'] = Article::orderBy('id', 'desc')->take(5)->get();
                // $data['sliders'] = Slider::all();

                return view('home.home', compact('data'));
                break;
        }
    }

    public function dashboard()
    {
        return $this->getDataGrafik(request()->type);
    }

    public function getDataGrafik($type)
    {
        $data = [];

        switch ($type) {
            case 'counters':
                $count = [];


                // $count['article'] = Article::count() ?? 0;
                $count['users'] = User::count();

                $data = [

                    [
                        'name' => "Users",
                        'icon' => "mdi-account-group-outline",
                        'color' => "blue lighten-2",
                        'link' => "users",
                        'value' => $count['users'],
                    ],
                    [
                        'name' => "Articles",
                        'icon' => "mdi-post",
                        'color' => "blue lighten-2",
                        'link' => "post",
                        'value' => 24,
                    ],
                    [
                        'name' => "Comments",
                        'icon' => "mdi-comment-multiple",
                        'color' => "blue lighten-2",
                        'link' => "comments",
                        'value' => 14,
                    ],
                    [
                        'name' => "Media",
                        'icon' => "mdi-image-multiple",
                        'color' => "blue lighten-2",
                        'link' => "media",
                        'value' => 53,
                    ],
                ];

                // Additional Counter By Role
                // if (request()->role == 'admin')
                //     $data = array_merge($data, [
                //         [
                //             'name' => "Satuan",
                //             'icon' => "military_tech",
                //             'color' => "secondary",
                //             'link' => "satuan",
                //             // 'value' => Satuan::count(),
                //             'value' => 10,
                //         ],
                //         [
                //             'name' => "T. Penahanan",
                //             'icon' => "mdi-home-city",
                //             'color' => "secondary",
                //             'link' => "tempat-tahanan",
                //             'value' => 1,
                //         ],
                //         [
                //             'name' => "T. Penyimpanan",
                //             'icon' => "mdi-home",
                //             'color' => "secondary",
                //             'link' => "tempat-penyimpanan",
                //             'value' => 2,
                //         ],
                //         [
                //             'name' => "Users",
                //             'icon' => "mdi-account",
                //             'color' => "secondary",
                //             'link' => "users",
                //             'value' => 3,
                //         ]
                //     ]);

                break;

            default:
                # code...
                break;
        }

        return $data;
    }

    public function pieChartData($labels, $data, $colors = null)
    {
        $defaultColors = [
            '#FFC107', '#FF9800', '#FF5722', '#4CAF50', '#8BC34A',
            '#2196F3', '#3F51B5', '#03A9F4', '#00BCD4', '#009688',
            '#00E676', '#EEFF41'
        ];

        $result['labels'] = $labels ?? ['', ''];
        $result['datasets'] = [
            [
                'data' => $data ?? [0, 0],
                'backgroundColor' => $colors ?? $defaultColors,
                'reverse' => true
            ]
        ];
        return $result;
    }

    public function laravolt($type = null, $parent_name = null)
    {
        switch ($type) {
            case 'provinsi':
                $model = DB::table("indonesia_provinces");
                break;

            case 'kota':
                $model = DB::table("indonesia_cities");
                if ($parent_name) {
                    $model
                        ->join('indonesia_provinces', 'indonesia_cities.province_code', '=', 'indonesia_provinces.code')
                        ->where('indonesia_provinces.name', $parent_name)
                        ->select('indonesia_cities.*', 'indonesia_provinces.name as province_name');
                } else {
                    $model->get();
                }

                break;

            case 'kecamatan':
                $model = DB::table("indonesia_districts")
                    ->join('indonesia_cities', 'indonesia_districts.city_code', '=', 'indonesia_cities.code')
                    ->where('indonesia_cities.name', $parent_name)
                    ->select('indonesia_districts.*', 'indonesia_cities.name as city_name');
                break;

            default:
                $model = DB::table("indonesia_villages")
                    ->join('indonesia_districts', 'indonesia_villages.district_code', '=', 'indonesia_districts.code')
                    ->where('indonesia_districts.name', $parent_name)
                    ->select('indonesia_villages.*', 'indonesia_districts.name as village_name');
                break;
        }

        return $model->pluck('name');
    }

    public function getMonth($num = null)
    {
        return [
            1 => 'Januari',
            2 => 'Februari',
            3 => 'Maret',
            4 => 'April',
            5 => 'Mei',
            6 => 'Juni',
            7 => 'Juli',
            8 => 'Agustus',
            9 => 'September',
            10 => 'Oktober',
            11 => 'November',
            12 => 'Desember',
        ][$num];
    }
}
