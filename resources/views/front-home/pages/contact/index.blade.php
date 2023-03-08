@extends('home.layouts.app')

@section('content')
    <!--Page Header Start-->
    <section class="page-header clearfix"
        style="background-image: url(https://cdn.pixabay.com/photo/2020/11/28/02/17/lagoon-5783445_960_720.jpg);">
        <div class="container">
            <div class="page-header__inner text-center clearfix">
                <ul class="thm-breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li>Contact</li>
                </ul>
                <h2>Contact Us</h2>
            </div>
        </div>
    </section>
    <!--Page Header End-->


    <!--Start Contact Page-->
    <section class="contact-page">
        <div class="container">
            <div class="row">
                <!--Start Contact Page Left-->
                <div class="col-xl-4 col-lg-4">
                    <div class="contact-page__left">
                        <div class="sec-title">
                            <span class="sec-title__tagline">Contact now</span>
                            <h2 class="sec-title__title">Get in Touch <br>with Us</h2>
                        </div>
                        <p class="contact-page__left-text">We are committed to providing our customers with
                            exceptional service while offering our employees the best training.</p>
                        <div class="contact-page__social-link">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--End Contact Page Right-->

                <!--Start Contact Page Right-->
                <div class="col-xl-8 col-lg-8">
                    <div class="contact-page__right">
                        <form action="{{ route('message.store')}}" class="comment-one__form contact-form-validated" novalidate="novalidate" method="POST">
                            @csrf
                            
                            <div class="row">
                                <div class="col-xl-6 col-lg-6">
                                    <div class="comment-form__input-box">
                                        <input type="text" placeholder="Masukkan Nama" name="name">
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6">
                                    <div class="comment-form__input-box">
                                        <input type="email" placeholder="Masukkan Email" name="email">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-12 col-lg-12">
                                    <div class="comment-form__input-box">
                                        <textarea name="message" placeholder="Masukkan Pesan"></textarea>
                                    </div>
                                    <button type="submit" class="thm-btn comment-form__btn">Kirim Pesan</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!--End Contact Page Right-->
            </div>
        </div>
    </section>
    <!--End Contact Page-->
    <!--Start Contact Page Contact Info-->
    <section class="contact-page__contact-info clearfix">
        <div class="auto-container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="contact-page__contact-info-wrapper">
                        <!-- <div class="contact-page__contact-info-title">
                            <h2>Detail Kontak</h2>
                        </div> -->

                        @foreach ($data['contact'] as $item)
                            <div class="contact-page__contact-info-list">
                                <ul>
                                    <div class="col-xl-6">
                                        <li>
                                            <div class="icon">
                                                <span class="icon-map"></span>
                                            </div>
                                            <div class="title">
                                                <span>Kunjungi Kami</span>
                                                <p>{{$item->address}}</p>
                                            </div>
                                        </li>
                                    </div>

                                    <li>
                                        <div class="icon">
                                            <span class="icon-email-1"></span>
                                        </div>
                                        <div class="title">
                                            <span>Kirim Email</span>
                                            <p><a href="">{{$item->email}}</a></p>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="icon phone">
                                            <span class="icon-phone-call-2"></span>
                                        </div>
                                        <div class="title">
                                            <span>Hubungi Kami</span>
                                            <p><a href="">{{$item->phone}} /<br> {{$item->handphone}}</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--End Contact Page Contact Info-->


    <!--Contact Page Google Map Start-->
    <section class="contact-page-google-map">
        
        <iframe class="contact-page-google-map__one"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15958.6847424502!2d117.1499697!3d-0.4920622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb7d588360ade3a3!2sDewan%20Daerah%20Perubahan%20Iklim!5e0!3m2!1sen!2sid!4v1645690514011!5m2!1sen!2sid"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" allowfullscreen></iframe>
    </section>
    <!--Contact Page Google Map End-->
@endsection
