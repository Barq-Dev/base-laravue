<!DOCTYPE html>
<html lang="en">

<head>
    <title>Masjid Jami' Al-Ma'ruf Samarinda</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="logo.png">

    <link rel="stylesheet" href="{{ asset('theme/home/assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('theme/home/assets/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('theme/home/assets/css/icofont.min.css') }}">
    <link rel="stylesheet" href="{{ asset('theme/home/assets/css/lightcase.css') }}">
    <link rel="stylesheet" href="{{ asset('theme/home/assets/css/swiper.min.css') }}">
    <link rel="stylesheet" href="{{ asset('theme/home/assets/css/style.css') }}">
    <style>
        .jadwal-sholat li {
            font-size: 10pt;
            padding-right: 5px !important;
            padding-left: 5px !important;
            border-color: #fff !important;
        }

    </style>
</head>

<body>

    <!-- preloader start here -->
    <div class="preloader">
        <div class="preloader-inner">
            <div class="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    <!-- preloader ending here -->

    <!-- Header Section Starts Here -->
    @include('home.layouts.partials.header')
    <!-- Header Section Ends Here-->
    
    <!-- Page Header Section Start Here -->
    <section class="page-header bg_img padding-tb">
        <div class="overlay"></div>
        <div class="container">
            <div class="page-header-content-area">
                <h4 class="ph-title">MASJID JAMI AL-MA'RUF SAMARINDA</h4>
            </div>
        </div>
    </section>
    <!-- Page Header Section Ending Here -->

    <footer class="footer-section">
        <div class="footer-top">
            <div class="container">
                <div class="row g-3 justify-content-center g-lg-0">
                    <div class="col-lg-4 col-sm-6 col-12">
                        <div class="footer-top-item lab-item">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="{{ asset('theme/home/assets/images/footer/footer-top/01.png') }}"
                                        alt="Phone-icon">
                                </div>
                                <div class="lab-content">
                                    <span>Phone Number : +88019 339 702 520</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12">
                        <div class="footer-top-item lab-item">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="{{ asset('theme/home/assets/images/footer/footer-top/02.png') }}"
                                        alt="email-icon">
                                </div>
                                <div class="lab-content">
                                    <span>Email : admin@Hafsa.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12">
                        <div class="footer-top-item lab-item">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="{{ asset('theme/home/assets/images/footer/footer-top/03.png') }}"
                                        alt="location-icon">
                                </div>
                                <div class="lab-content">
                                    <span>Address : 30 North West New York 240</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>


    <!-- Banner Section start here -->
    <!-- <section class="banner-section">
        <div class="container">
            <div class="row align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6">
                    <div class="banner-item">
                        <div class="banner-inner">
                            <div class="banner-thumb">
                                <img src="{{ asset('theme/home/assets/images/banner/01.png') }}" alt="Banner-image">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="banner-item">
                        <div class="banner-inner">
                            <div class="banner-content align-middle">
                                <h1><span class="">And Allah Invites To <br class="d-none d-lg-block">
                                        The </span>Home Of Peace</h1>
                                <p>The most beloved actions to Allah are those performed consistently, even if they are
                                    few</p>
                                <a href="#" class="lab-btn mt-3">Donate Now <i class="icofont-heart-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- Banner Section end here -->

    <!-- About section start here -->
    <section class="about-section padding-tb shape-1">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-12">
                    <div class="lab-item">
                        <div class="lab-inner">
                            <div class="lab-content">
                                <div class="header-title text-start m-0">
                                    <h5>SEJARAH SINGKAT</h5>
                                    <h2 class="mb-0">MASJID JAMI AL-MA'RUF</h2>
                                </div>
                                <p style="text-align:justify;">
                                Masjid Jami Alma'ruf Samarinda dibangun diatas sebidang tanah milik Pemerintah Provinsi Kalimantan Timur seluas 4.650 m2 terletak di Kelurahan Sidodadi Kecamatan Samarinda Ulu, dikompleks Perumahan Pegawai Negeri Sipil dan Anggota DPRD Propinsi Kalimantan Timur.
                                Masjid Jami Almaruf Samarinda merupakan salah satu proyek monumental bersejarah berkenaan dengan keberhasilan Provinsi Kalimantan Timur menyelenggarakan MTQ Tingkat Nasional ke IX tahun 1976 di Samarinda, dan sekaligus berhasil menjadi juara umum.
                                </p>
                                <a href="#" class="lab-btn mt-4">Selengkapnya Tentang Sejarah Masjid</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="lab-item">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <div class="about-fg-img">
                                    <img src="{{ asset('logo.png') }}" alt="about-image">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About section end here -->

    {{-- Laporan Section --}}
    <section class="program-section padding-tb pb-5 bg-img"
        style="background: url(assets/images/program/bg.jpg) rgba(5, 21, 57, 0.7); background-blend-mode: overlay;">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header-title">
                        <h2 class="mb-4">Laporan Saldo dan Dana Infaq
                            <hr>
                        </h2>
                    </div>
                </div>
                <div class="col-8">
                    <div class="header-title">
                        <h5 class="mb-4">Laporan Infaq</h5>
                        <div class="bg-white rounded p-4">
                            <table class="table table-sm table-striped table-hover" class="bg-info">
                                <thead class="thead-light">
                                    <th scope="col">Jumlah</th>
                                    <th scope="col">Tgl</th>
                                    <th scope="col">Dari</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>100.000</td>
                                        <td>24/03/2022</td>
                                        <td>Isi Kotak Amal</td>
                                    </tr>
                                    <tr>
                                        <td>100.000</td>
                                        <td>24/03/2022</td>
                                        <td>Isi Kotak Amal</td>
                                    </tr>
                                    <tr>
                                        <td>100.000</td>
                                        <td>24/03/2022</td>
                                        <td>Isi Kotak Amal</td>
                                    </tr>
                                    <tr>
                                        <td>100.000</td>
                                        <td>24/03/2022</td>
                                        <td>Isi Kotak Amal</td>
                                    </tr>
                                    <tr>
                                        <td>100.000</td>
                                        <td>24/03/2022</td>
                                        <td>Isi Kotak Amal</td>
                                    </tr>
                                    <tr>
                                        <td>100.000</td>
                                        <td>24/03/2022</td>
                                        <td>Isi Kotak Amal</td>
                                    </tr>
                                    <tr>
                                        <td>100.000</td>
                                        <td>24/03/2022</td>
                                        <td>Isi Kotak Amal</td>
                                    </tr>
                                    <tr>
                                        <td>100.000</td>
                                        <td>24/03/2022</td>
                                        <td>Isi Kotak Amal</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="header-title">
                        <h5 class="mb-4">Mari Berinfaq</h5>
                        <div class="bg-white rounded p-4">
                            <h6>Saldo :</h6>
                            <h6 class="text-success">204.000.000</h6>
                            <hr>
                            <p>Salurkan Infaq anda melalui :</p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="rekening-tab" data-bs-toggle="tab"
                                        data-bs-target="#rekening" type="button" role="tab" aria-controls="rekening"
                                        aria-selected="true">Rekening</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="qris-tab" data-bs-toggle="tab"
                                        data-bs-target="#qris" type="button" role="tab" aria-controls="qris"
                                        aria-selected="false">QRIS</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="rekening" role="tabpanel"
                                    aria-labelledby="rekening-tab">
                                    <div class="bg-success mt-2 p-3 text-white rounded">
                                        <b>Bank BSI</b> <br>
                                        Kode : 451 <br>
                                        No. Rek : <b>7141141052</b> <br>
                                        <b>YAYASAN MASJID AL MARUF</b> <br>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="qris" role="tabpanel" aria-labelledby="qris-tab">
                                    <img src="QRIS.jpeg" alt="" width="80%">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="progress-item-wrapper text-center">
                        <a href="#" class="lab-btn">Lihat Laporan</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {{-- End Laporan Section --}}

    <!-- Team section start here -->
    <section class="team-section padding-tb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header-title">
                        <h5>بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ</h5>
                        <h2>DAFTAR IMAM <br> MASJID JAMI AL-MA'RUF</h2>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row justify-content-center pb-10">
                        <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                            <div class="card text-center border-none team-item-1">
                                <div class="lab-inner">
                                    <div class="lab-thumb">
                                        <img src="{{asset('theme/home/assets/images/team/01.jpg')}}" class="card-img-top" alt="product">
                                    </div>
                                    <div class="lab-content">
                                        <a href="#">
                                            <h6 class="card-title mb-0">Hamad Bin Jasim</h6>
                                        </a>
                                        <p class="card-text mb-3">Hafiz Quran Scholor</p>
                                        <div class="social-share">
                                            <a href="#" class="m-1 twitter"><i class="icofont-twitter"></i></a>
                                            <a href="#" class="m-1 behance"><i class="icofont-behance"></i></a>
                                            <a href="#" class="m-1 instagram"><i class="icofont-instagram"></i></a>
                                            <a href="#" class="m-1 vimeo"><i class="icofont-vimeo"></i></a>
                                            <a href="#" class="m-1 linkedin"><i class="icofont-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                            <div class="card text-center border-none team-item-1">
                                <div class="lab-inner">
                                    <div class="lab-thumb">
                                        <img src="{{asset('theme/home/assets/images/team/02.jpg')}}" class="card-img-top" alt="product">
                                    </div>
                                    <div class="lab-content">
                                        <a href="#">
                                            <h6 class="card-title mb-0">Sayyida Al-Hijaazi</h6>
                                        </a>
                                        <p class="card-text mb-3">Hafiz Quran Scholor</p>
                                        <div class="social-share">
                                            <a href="#" class="m-1 twitter"><i class="icofont-twitter"></i></a>
                                            <a href="#" class="m-1 behance"><i class="icofont-behance"></i></a>
                                            <a href="#" class="m-1 instagram"><i class="icofont-instagram"></i></a>
                                            <a href="#" class="m-1 vimeo"><i class="icofont-vimeo"></i></a>
                                            <a href="#" class="m-1 linkedin"><i class="icofont-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                            <div class="card text-center border-none team-item-1">
                                <div class="lab-inner">
                                    <div class="lab-thumb">
                                        <img src="{{asset('theme/home/assets/images/team/03.jpg')}}" class="card-img-top" alt="product">
                                    </div>
                                    <div class="lab-content">
                                        <a href="#">
                                            <h6 class="card-title mb-0">Ashraf Al-Maktum</h6>
                                        </a>
                                        <p class="card-text mb-3">Hafiz Quran Scholor</p>
                                        <div class="social-share">
                                            <a href="#" class="m-1 twitter"><i class="icofont-twitter"></i></a>
                                            <a href="#" class="m-1 behance"><i class="icofont-behance"></i></a>
                                            <a href="#" class="m-1 instagram"><i class="icofont-instagram"></i></a>
                                            <a href="#" class="m-1 vimeo"><i class="icofont-vimeo"></i></a>
                                            <a href="#" class="m-1 linkedin"><i class="icofont-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                            <div class="card text-center border-none team-item-1">
                                <div class="lab-inner">
                                    <div class="lab-thumb">
                                        <img src="{{asset('theme/home/assets/images/team/01.jpg')}}" class="card-img-top" alt="product">
                                    </div>
                                    <div class="lab-content">
                                        <a href="#">
                                            <h6 class="card-title mb-0">Ayesha Binte Alif</h6>
                                        </a>
                                        <p class="card-text mb-3">Hafiz Quran Scholor</p>
                                        <div class="social-share">
                                            <a href="#" class="m-1 twitter"><i class="icofont-twitter"></i></a>
                                            <a href="#" class="m-1 behance"><i class="icofont-behance"></i></a>
                                            <a href="#" class="m-1 instagram"><i class="icofont-instagram"></i></a>
                                            <a href="#" class="m-1 vimeo"><i class="icofont-vimeo"></i></a>
                                            <a href="#" class="m-1 linkedin"><i class="icofont-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Team section end here -->

    <!-- Feature Section Start Here -->
    <!-- <section class="feature-section bg-ash padding-tb">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-sm-6 col-12">
                    <div class="lab-item feature-item text-xs-center">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="{{ asset('theme/home/assets/images/feature/01.png') }}" alt="feature-image">
                            </div>
                            <div class="lab-content">
                                <h5>Quran Studies</h5>
                                <p>Lorem ipsum dolor sit, amet is consectetur adipisicing elit.Its expedita porro natus
                                </p>
                                <a href="#" class="text-btn">Sponsor Now!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-12">
                    <div class="lab-item feature-item">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="{{ asset('theme/home/assets/images/feature/02.png') }}" alt="feature-image">
                            </div>
                            <div class="lab-content">
                                <h5>Islamic Classes</h5>
                                <p>Lorem ipsum dolor sit, amet is consectetur adipisicing elit.Its expedita porro natus
                                </p>
                                <a href="#" class="text-btn">Donate Now!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-12">
                    <div class="lab-item feature-item">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="{{ asset('theme/home/assets/images/feature/03.png') }}"
                                    alt="feature-image">
                            </div>
                            <div class="lab-content">
                                <h5>Islamic Awareness</h5>
                                <p>Lorem ipsum dolor sit, amet is consectetur adipisicing elit.Its expedita porro natus
                                </p>
                                <a href="#" class="text-btn">Join Us!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-12">
                    <div class="lab-item feature-item">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="{{ asset('theme/home/assets/images/feature/04.png') }}"
                                    alt="feature-image">
                            </div>
                            <div class="lab-content">
                                <h5>Islamic Services</h5>
                                <p>Lorem ipsum dolor sit, amet is consectetur adipisicing elit.Its expedita porro natus
                                </p>
                                <a href="#" class="text-btn">Get Involved!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- Feature Section End Here -->

    <!-- Program section start Here -->
    <section class="program-section padding-tb bg-img"
        style="background: url(assets/images/program/bg.jpg) rgba(5, 21, 57, 0.7); background-blend-mode: overlay;">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header-title">
                        <h5>Urgent Campaign</h5>
                        <h2 class="mb-4">Free And Complete Guide To All Muslims</h2>
                    </div>
                </div>
                <div class="col-12">
                    <div class="progress-item-wrapper text-center">
                        <div class="progress-item mb-4">
                            <div class="progress-bar-wrapper progress" data-percent="50%">
                                <div class="progress-bar progress-bar-striped progress-bar-animated"></div>
                            </div>
                            <div class="progress-bar-percent d-flex align-items-center justify-content-center">50
                                <sup>%</sup>
                            </div>

                            <ul class="progress-item-status lab-ul d-flex justify-content-between">
                                <li>Raised<span> $24,000</span></li>
                                <li>Gold<span> $34,900</span></li>
                            </ul>
                        </div>
                        <a href="#" class="lab-btn">Donate Now <i class="icofont-heart-alt"></i></a>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- upcoming program -->
    <div class="upcoming-programs">
        <div class="container">
            <div class="row">
                <div class="col-xl-4">
                    <div class="donation-part bg-img">
                        <div class="donation-content">
                            <h5>Help The Poor</h5>
                            <h2>Donations For The
                                Nobel Causes</h2>
                            <p>Give the best quality of security systems and
                                facility of latest technlogy for the people get
                                awesome.</p>
                            <a href="#" class="lab-btn">See All Causes <i class="icofont-heart-alt"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="programs-item-part">
                        <div class="program-desc d-flex justify-content-between">
                            <p>We offer security solutions and cost effective service for our client
                                are safe and secure in any situation.</p>
                            <ul class="lab-ul">
                                <li><a href="#" class="program-next"><i class="icofont-arrow-left"></i></a></li>
                                <li><a href="#" class="program-prev"><i class="icofont-arrow-right"></i></a></li>
                            </ul>
                        </div>
                        <div class="program-item-container">
                            <div class="program-item-wrapper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="program-item">
                                            <div class="lab-inner">
                                                <div class="lab-thumb">
                                                    <a href="#">
                                                        <img src="{{ asset('theme/home/assets/images/program/02.jpg') }}"
                                                            alt="program-image">
                                                    </a>
                                                    <div class="lab-thumb-content">
                                                        <div class="progress-item">
                                                            <ul
                                                                class="progress-item-status lab-ul d-flex justify-content-between mb-2">
                                                                <li>Raised<span> $24,000</span></li>
                                                                <li>Gold<span> $34,900</span></li>
                                                            </ul>
                                                            <div class="progress-bar-wrapper progress"
                                                                data-percent="50%">
                                                                <div
                                                                    class="progress-bar progress-bar-striped progress-bar-animated">
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="progress-bar-percent d-flex align-items-center justify-content-center">
                                                                50 <sup>%</sup> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="lab-content">
                                                    <span>food distribution</span>
                                                    <h5><a href="#">American Muslim: Choosing Remain
                                                            Still This Ramadan</a> </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="program-item">
                                            <div class="lab-inner">
                                                <div class="lab-thumb">
                                                    <a href="#">
                                                        <img src="{{ asset('theme/home/assets/images/program/03.jpg') }}"
                                                            alt="program-image">
                                                    </a>
                                                    <div class="lab-thumb-content">
                                                        <div class="progress-item">
                                                            <ul
                                                                class="progress-item-status lab-ul d-flex justify-content-between mb-2">
                                                                <li>Raised<span> $24,000</span></li>
                                                                <li>Gold<span> $34,900</span></li>
                                                            </ul>
                                                            <div class="progress-bar-wrapper progress"
                                                                data-percent="70%">
                                                                <div
                                                                    class="progress-bar progress-bar-striped progress-bar-animated">
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="progress-bar-percent d-flex align-items-center justify-content-center">
                                                                70 <sup>%</sup> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="lab-content">
                                                    <span>food distribution</span>
                                                    <h5><a href="#">How to Teach The Kids Ramadan
                                                            Isn’t About Food</a> </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Program section end Here -->

    <!-- Faith section start here -->
    <section class="faith-section padding-tb shape-3">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header-title">
                        <h5>بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ</h5>
                        <h2>
                            RUKUN ISLAM
                        </h2>
                    </div>
                </div>
                <div class="col-12">
                    <div class="faith-content">
                    <ul class="nav nav-pills mb-3 align-items-center justify-content-center" id="pills-tab"
                            role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="sahadah-tab" data-bs-toggle="pill" href="#shahadah"
                                    role="tab" aria-controls="sahadah-tab" aria-selected="true">
                                    <img src="{{ asset('theme/home/assets/images/faith/faith-icons/01.png') }}"
                                        alt="faith-icon">
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="salah-tab" data-bs-toggle="pill" href="#prayer"
                                    role="tab" aria-controls="salah-tab" aria-selected="false">
                                    <img src="{{ asset('theme/home/assets/images/faith/faith-icons/02.png') }}"
                                        alt="faith-icon">
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="sawm-tab" data-bs-toggle="pill" href="#ramadan"
                                    role="tab" aria-controls="sawm-tab" aria-selected="false">
                                    <img src="{{ asset('theme/home/assets/images/faith/faith-icons/03.png') }}"
                                        alt="faith-icon">
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="zakat-tab" data-bs-toggle="pill" href="#jakat" role="tab"
                                    aria-controls="zakat-tab" aria-selected="false">
                                    <img src="{{ asset('theme/home/assets/images/faith/faith-icons/04.png') }}"
                                        alt="faith-icon">
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="hajj-tab" data-bs-toggle="pill" href="#hajj" role="tab"
                                    aria-controls="hajj-tab" aria-selected="false">
                                    <img src="{{ asset('theme/home/assets/images/faith/faith-icons/05.png') }}"
                                        alt="faith-icon">
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="shahadah" role="tabpanel"
                                aria-labelledby="sahadah-tab">
                                <div class="lab-item faith-item tri-shape-1 pattern-2">
                                    <div class="lab-inner d-flex align-items-center">
                                        <div class="lab-thumb">
                                            <img src="{{ asset('theme/home/assets/images/faith/01.png') }}"
                                                alt="faith-image">
                                        </div>
                                        <div class="lab-content">
                                            <h4>Dua Kalimat Syahadat </h4>
                                            <p style="text-align:justify;">
                                                Dua kalimat syahadat diucapkan oleh seorang muslim sebagai bukti keyakinannya 
                                                dalam memeluk agama Islam dan ikhlas dalam menjalani syariat yang diwajibkan.
                                                Lafaz dua kalimat syahadat adalah: 
                                                <span>"Asyhadu an-laa ilaaha illallaah Wa asyhadu anna Muhammadan rasuulullaah."</span>
                                                <span>"Saya bersaksi tiada Tuhan Yang berhak disembah Selain Allah dan saya bersaksi bahwa Nabi Muhammad adalah utusan Allah."</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="prayer" role="tabpanel" aria-labelledby="salah-tab">
                                <div class="lab-item faith-item tri-shape-1 pattern-2">
                                    <div class="lab-inner d-flex align-items-center">
                                        <div class="lab-thumb">
                                            <img src="{{ asset('theme/home/assets/images/faith/02.png') }}"
                                                alt="faith-image">
                                        </div>
                                        <div class="lab-content">
                                            <h4>Shalat</h4>
                                            <p style="text-align:justify;">
                                            Dari Abu Hurairah Radhiyallahu Anhu berkata, Rasulullah -shallallahu alaihi wasallam- beliau bersabda:
                                                <span>
                                                    "Sesungguhnya amal yang pertama kali dihisab pada seorang hamba pada hari kiamat adalah sholatnya. 
                                                    Maka, jika sholatnya baik, sungguh ia telah beruntung dan berhasil. Dan jika shalatnya rusak, 
                                                    sungguh ia telah gagal dan rugi. Jika berkurang sedikit dari shalat wajibnya, 
                                                    maka Allah Ta'ala berfirman, 'Lihatlah apakah hamba-Ku memiliki sholat sunnah.' 
                                                    Maka disempurnakanlah apa yang kurang dari sholat wajibnya. Kemudian begitu pula dengan seluruh amalnya." <br>
                                                    (HR. Tirmidzi dan An Nasa'i).
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="ramadan" role="tabpanel" aria-labelledby="sawm-tab">
                                <div class="lab-item faith-item tri-shape-1 pattern-2">
                                    <div class="lab-inner d-flex align-items-center">
                                        <div class="lab-thumb">
                                            <img src="{{ asset('theme/home/assets/images/faith/03.png') }}"
                                                alt="faith-image">
                                        </div>
                                        <div class="lab-content">
                                            <h4>Puasa</h4>
                                            <p style="text-align:justify;">
                                                Rukun Islam yang ketiga adalah menjalankan ibadah puasa wajib pada bulan Ramadhan. 
                                                Puasa artinya adalah menahan diri dari makan, minum, hubungan suami istri, 
                                                dan segala hal yang membatalkannya yang dimulai dari terbitnya fajar sampai terbenamnya matahari. 
                                                Di antara hikmah puasa pada hakikatnya adalah melatih diri kita untuk melawan segala hawa nafsu 
                                                seperti makan berlebihan, amarah, dan syahwat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="jakat" role="tabpanel" aria-labelledby="zakat-tab">
                                <div class="lab-item faith-item tri-shape-1 pattern-2">
                                    <div class="lab-inner d-flex align-items-center">
                                        <div class="lab-thumb">
                                            <img src="{{ asset('theme/home/assets/images/faith/04.png') }}"
                                                alt="faith-image">
                                        </div>
                                        <div class="lab-content">
                                            <h4>Zakat</h4>
                                            <p style="text-align:justify;">
                                                <span>
                                                    “Sesungguhnya, zakat-zakat itu, hanyalah untuk orang-orang fakir, orang-orang miskin, 
                                                    pengurus-pengurus zakat, para mualaf yang dibujuk hatinya, untuk (memerdekakan) budak, 
                                                    orang-orang yang berutang, untuk jalan Allah, dan untuk mereka yang sedang dalam perjalanan,
                                                    sebagai suatu ketetapan yang diwajibkan Allah.” (Qs. At-Taubah:60)
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="hajj" role="tabpanel" aria-labelledby="hajj-tab">
                                <div class="lab-item faith-item tri-shape-1 pattern-2">
                                    <div class="lab-inner d-flex align-items-center">
                                        <div class="lab-thumb">
                                            <img src="{{ asset('theme/home/assets/images/faith/05.png') }}"
                                                alt="faith-image">
                                        </div>
                                        <div class="lab-content">
                                            <h4 style="text-align:justify;">Haji</h4>
                                            <p>
                                                Menunaikan ibadah haji ke Tanah Suci dilakukan setiap bulan haji atau bulan Zulhijah. 
                                                Ibadah haji merupakan kewajiban umat muslim apabila ia mampu dari segi fisik dan biaya. 
                                                Ibadah haji  wajib bagi orang yang mampu karena perjalanan ke Tanah Suci 
                                                membutuhkan banyak persiapan yang memerlukan biaya banyak serta membutuhkan kesiapan fisik 
                                                serta kesiapan batin bagi yang akan menjalaninya.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Faith section end here -->

    <!-- Qoute Section start Here -->
    <div class="qoute-section padding-tb">
        <div class="qoute-section-wrapper">
            <div class="qoute-overlay"></div>
            <div class="container">
                <div class="qoute-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="lab-item qoute-item">
                                <div class="lab-inner d-flex align-items-center">
                                    <div class="lab-thumb">
                                        <span>Hadits Arbain <br>-18-</span>
                                        <i class="icofont-quote-left"></i>
                                    </div>
                                    <div class="lab-content">
                                        <blockquote class="blockquote">
                                            <p style="text-align:justify;">
                                            Dari Abu Dzarr Jundub bin Junadah dan Abu 'Abdirrahman Mu'adz bin Jabal radhiyallahu 'anhuma, 
                                            dari Rasulullah shallallahu 'alaihi wa sallam, beliau bersabda, 
                                            <span>“Bertakwalah kepada Allah di mana pun engkau berada; iringilah perbuatan buruk dengan perbuatan baik, 
                                            maka kebaikan akan menghapuskan keburukan itu; dan pergaulilah manusia dengan akhlak yang baik.”</span>
                                            </p>
                                            <footer class="blockquote-footer bg-transparent">
                                            (HR. Tirmidzi, ia mengatakan haditsnya itu hasan dalam sebagian naskah disebutkan bahwa hadits ini hasan shahih)
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Qoute Section end Here -->

    <!-- Events Section start here -->
    <section class="event-section padding-tb padding-b shape-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header-title">
                        <h5>Event</h5>
                        <h2>Masjid Jami Al-Ma'ruf</h2>
                    </div>
                </div>
                <div class="col-12">
                    <div class="event-content">
                        <div class="event-top tri-shape-2 pattern-2">
                            <!-- <div class="event-top-thumb">
                                <img src="{{ asset('theme/home/assets/images/event/01.jpg') }}" alt="Upcoming-event">
                            </div>
                            <div class="event-top-content">
                                <div class="event-top-content-wrapper">
                                    <h3><a href="#">Helping Hands For Poor People
                                            Marriage Event</a> </h3>
                                    <div class="date-count-wrapper">
                                        <ul class="lab-ul event-date">
                                            <li><i class="icofont-calendar"></i> <span>December 24,2021</span></li>
                                            <li><i class="icofont-location-pin"></i> <span>New York AK United
                                                    States</span></li>
                                        </ul>
                                        <ul class="lab-ul event-count" data-date="July 05, 2021 21:14:01">
                                            <li>
                                                <span class="days">34</span>
                                                <div class="count-text">Hari</div>
                                            </li>
                                            <li>
                                                <span class="hours">09</span>
                                                <div class="count-text">Jam</div>
                                            </li>
                                            <li>
                                                <span class="minutes">32</span>
                                                <div class="count-text">Muni</div>
                                            </li>
                                            <li>
                                                <span class="seconds">32</span>
                                                <div class="count-text">Seco</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> -->
                            <div class="event-bottom">
                                <div class="row justify-content-center">
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="event-item lab-item">
                                            <div class="lab-inner">
                                                <div class="lab-thumb">
                                                    <img src="{{ asset('theme/home/assets/images/event/02.jpg') }}"
                                                        alt="event-image">
                                                </div>
                                                <div class="lab-content">
                                                    <h5><a href="#">I'tikaf Di Malam 10 Hari Terakhir Ramadhan</a> </h5>
                                                    <ul class="lab-ul event-date">
                                                        <li><i class="icofont-calendar"></i> <span>Sabtu, 23-04-2022</span>
                                                        </li>
                                                        <li><i class="icofont-location-pin"></i> <span>Masjid Jami Al-Maruf</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md col-12">
                                        <div class="event-item lab-item">
                                            <div class="lab-inner">
                                                <div class="lab-thumb">
                                                    <img src="{{ asset('theme/home/assets/images/event/03.jpg') }}"
                                                        alt="event-image">
                                                </div>
                                                <div class="lab-content">
                                                    <h5><a href="#">American Muslim: Choosing Remain
                                                            Still This Ramadan</a> </h5>
                                                    <ul class="lab-ul event-date">
                                                        <li><i class="icofont-calendar"></i> <span>December 24,2021</span>
                                                        </li>
                                                        <li><i class="icofont-location-pin"></i> <span>New York AK United
                                                                States</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="event-item lab-item">
                                            <div class="lab-inner">
                                                <div class="lab-thumb">
                                                    <img src="{{ asset('theme/home/assets/images/event/04.jpg') }}"
                                                        alt="event-image">
                                                </div>
                                                <div class="lab-content">
                                                    <h5><a href="#"> How To Teach Kids Ramadan
                                                            Isn’t About Food</a></h5>
                                                    <ul class="lab-ul event-date">
                                                        <li><i class="icofont-calendar"></i> <span>December 24,2021</span>
                                                        </li>
                                                        <li><i class="icofont-location-pin"></i> <span>New York AK United
                                                                States</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Events Section end here -->

    <!-- Footer Section start here -->
    @include('home.layouts.partials.footer')
    <!-- Footer Section end here -->



    <!-- scrollToTop start here -->
    <a href="#" class="scrollToTop"><i class="icofont-bubble-up"></i><span class="pluse_1"></span><span
            class="pluse_2"></span></a>
    <!-- scrollToTop ending here -->


    <script src="{{ asset('theme/home/assets/js/jquery.js') }}"></script>
    <script src="{{ asset('theme/home/assets/js/fontawesome.min.js') }}"></script>
    <script src="{{ asset('theme/home/assets/js/waypoints.min.js') }}"></script>
    <script src="{{ asset('theme/home/assets/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('theme/home/assets/js/swiper.min.js') }}"></script>
    <script src="{{ asset('theme/home/assets/js/circularProgressBar.min.js') }}"></script>
    <script src="{{ asset('theme/home/assets/js/isotope.pkgd.min.js') }}"></script>
    <script src="{{ asset('theme/home/assets/js/lightcase.js') }}"></script>
    <script src="{{ asset('theme/home/assets/js/functions.js') }}"></script>
    <script type="text/javascript">
        var clockElement = document.getElementById('clock');

        function clock() {
            // clockElement.textContent = new Date().toLocaleString();
            var today = new Date();
            var day = ['Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu', 'Ahad'][today.getDay() - 1];
            var time = 'WAKTU ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var date = day + ', ' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
            clockElement.textContent = date;

        }

        setInterval(clock, 1000);
    </script>
</body>

</html>
