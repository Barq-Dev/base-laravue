@extends('home.layouts.app')
@section('content')
<!--Page Header Start-->
<!-- <section class="page-header clearfix"
style="background-image: url(https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg);">
<div class="container">
    <div class="page-header__inner text-center clearfix">
        <ul class="thm-breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li>About</li>
        </ul>
        <h2>Tentang Kami</h2>
    </div>
</div>
</section> -->
<!--Page Header End-->
<!--Video One Start-->
<section class="video-one video-one--two jarallax clearfix" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
    style="background-image: url(https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg);">
    <div class="video-one-border"></div>
    <div class="video-one-border video-one-border-two"></div>
    <div class="video-one-border video-one-border-three"></div>
    <div class="video-one-border video-one-border-four"></div>
    <div class="video-one-border video-one-border-five"></div>
    <div class="video-one-border video-one-border-six"></div>

    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="video-one__wrpper">
                    <div class="video-one__left">
                        <h2 class="video-one__title">Intro DDPI Kaltim</h2>
                        <br>
                        <iframe 
                            src="https://www.youtube.com/embed/oZeGc6xsJu8?autoplay=1&mute=1"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="video-one__right">
                        <div class="icon wow zoomIn" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <a title="Video" href="https://www.youtube.com" target="_blank">
                                <span class="icon-play-button-1"></span>
                            </a>
                            <span class="border-animation border-1"></span>
                            <span class="border-animation border-2"></span>
                            <span class="border-animation border-3"></span>
                        </div>
                        <div class="title">
                            <h2>Subscribe Channel Youtube</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--Video One End-->

<!--About Three Start-->
<section class="about-three">
<div class="about-three__shape"></div><!-- /.about-three__shape -->
<div class="container">
    @foreach ($data['about'] as $item)
        <!--Start About Three Img Box-->
        <div class="col-xl-12 col-lg-12">
            <div class="about-three__content-box-inner">
                <div class="sec-title">
                    <h1>{{$item->title}}</h1>
                    <hr>
                </div>
            </div>
            <!-- <div class="about-three__img-box">
                <!-- <img src="theme/home/assets/images/resources/about-3-icon-1-1.png" class="about-three__img-icon"
                    alt="">
                <div class="about-three__img-box-img">
                    <div class="about-three__img-box-img-inner">
                        <img class="center-img" width="90%" height="70%" src="" alt="" />
                    </div>
                </div>
            </div> -->
        </div>
        <!--End About Three Img Box-->

        <img class="center-img" width="50%" height="30%" src="{{$item->image_link}}" alt="" />

        <!--Start About Three Content Box-->
        <div class="col-xl-12 col-lg-12">
            <div class="about-three__content-box">
                <!-- <div class="sec-title">
                    <div class="icon">
                        <img width="5%" src="logo.png" alt="">
                    </div>
                    <span class="sec-title__tagline">Tentang Kami</span>
                    <h2 class="sec-title__title">We Sell High-Quality <br>Organic Products</h2>
                </div> -->
                <div class="about-three__content-box-inner">
                    <p class="text text-justify">
                        <!-- {{strip_tags(htmlspecialchars_decode($item->content))}} -->
                        {!! $item->content !!}
                    </p>

                    <!-- <div class="about-three__products-list">
                        <ul>
                            <li>
                                <div class="icon">
                                    <span class="icon-investment"></span>
                                </div>
                                <h3><a href="#">Natural Products</a></h3>
                                <p>Duis aute irure dolor simply free in voluptate velit.</p>
                            </li>

                            <li>
                                <div class="icon">
                                    <span class="icon-harvest"></span>
                                </div>
                                <h3><a href="#">Healthy Food</a></h3>
                                <p>Duis aute irure dolor simply free in voluptate velit.</p>
                            </li>
                        </ul>
                    </div> -->
                </div>
                <!-- <div class="about-three__content-box-btn">
                    <a href="#" class="thm-btn">Discover more</a>
                </div>
                <div class="about-three__arrow float-bob-y"></div> -->
                <!-- /.about-three__arrow -->
            </div>
        </div>
        <!--End About Three Content Box-->
    @endforeach
</div>
</section>
<!--About Three End-->

<!--Video One Start-->
<!-- <section class="video-one video-one--two jarallax clearfix" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
    style="background-image: url(https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg);">
    <div class="video-one-border"></div>
    <div class="video-one-border video-one-border-two"></div>
    <div class="video-one-border video-one-border-three"></div>
    <div class="video-one-border video-one-border-four"></div>
    <div class="video-one-border video-one-border-five"></div>
    <div class="video-one-border video-one-border-six"></div>

    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="video-one__wrpper">
                    <div class="video-one__left">
                        <h2 class="video-one__title">Intro DDPI Kaltim</h2>
                        <br>
                        <iframe 
                            width="600px" height="320px" 
                            src="https://www.youtube.com/embed/oZeGc6xsJu8?autoplay=1&mute=1"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="video-one__right">
                        <div class="icon wow zoomIn" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <a title="Video" href="https://www.youtube.com" target="_blank">
                                <span class="icon-play-button-1"></span>
                            </a>
                            <span class="border-animation border-1"></span>
                            <span class="border-animation border-2"></span>
                            <span class="border-animation border-3"></span>
                        </div>
                        <div class="title">
                            <h2>Subscribe Channel Youtube</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> -->
<!--Video One End-->



<!--Testimonials One Start-->
<!-- <section class="testimonials-one jarallax clearfix" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
style="background-image: url(theme/home/assets/images/backgrounds/Testimonials-v1-bg.jpg);">
<div class="container">
    <div class="row">
        <!--Start Testimonials One Left
        <div class="col-xl-4">
            <div class="testimonials-one__left">
                <div class="testimonials-one__left-bg"></div>
                <div class="sec-title">
                    <div class="icon">
                        <img src="theme/home/assets/images/resources/sec-title-icon1.png" alt="">
                    </div>
                    <span class="sec-title__tagline">Our testimonials</span>
                    <h2 class="sec-title__title">What They’re <br>Talking About <br> Agriox</h2>
                </div>
            </div>
        </div>
        <!--End Testimonials One Left-->

        <!--Start Testimonials One Right
        <div class="col-xl-8">
            <div class="testimonials-one__right">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="testimonials-one__carousel owl-carousel owl-theme">
                            <!--Start Single Testimonials One
                            <div class="testimonials-one__single">
                                <p class="testimonials-one__single-text">Lorem ipsum is simply free text
                                    dolor not sit amet, consectetur notted adipisicing elit sed do eiusmod
                                    tempor incididunt ut labore et dolore text.</p>
                                <div class="testimonials-one__single-client-info">
                                    <div class="testimonials-one__single-client-info-img">
                                        <div class="testimonials-one__single-client-info-img-inner">
                                            <img src="theme/home/assets/images/testimonial/testimonials-v1-img1.jpg"
                                                alt="" />
                                        </div>
                                        <div class="icon">
                                            <span class="icon-right-quotation-mark"></span>
                                        </div>
                                    </div>
                                    <div class="testimonials-one__single-client-info-title">
                                        <h4>Kevin Martin</h4>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            </div>
                            <!--Start Single Testimonials One

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End Testimonials One Right
    </div>
</div>
</section> -->
<!--Testimonials One End-->


<!--Projects One Start-->
<section class="projects-one projects-one--two">
    <div class="container">
        <div class="sec-title text-center">
            <div class="icon">
                <img width="5%" src="logo.png" alt="">
            </div>
            <h2 class="sec-title__title">Profile Sekretariat</h2>
        </div>
        <div class="row">
            <div class="col-xl-12">
                <div class="projects-two__carousel owl-carousel owl-theme owl-dot-type1">
                    @foreach ($data['teams'] as $item)
                        <!--Start Single Meet Farmers One-->
                            <div class="meet-farmers-one__single">
                                <div class="meet-farmers-one__single-img">
                                    <img src="{{$item->image_thumb}}" alt="" />
                                </div>
                                <div class="meet-farmers-one__single-title text-center">
                                    <p>{{$item->position}}</p>
                                    <h2>{{$item->name}}</h2>
                                    <div class="social-link">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        <!--End Single Meet Farmers One-->
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>
<!--Projects One End-->

<!--Company Logos One Start-->
<section class="company-logos-one">
    <div class="container">
        <div class="thm-swiper__slider swiper-container" 
        data-swiper-options='{
        "spaceBetween": 100, 
        "slidesPerView": 5, 
        "autoplay": { "delay": 5000 }, 
        "breakpoints": {
            "0": {
                "spaceBetween": 20,
                "slidesPerView": 2
            },
            "375": {
                "spaceBetween": 20,
                "slidesPerView": 2
            },
            "575": {
                "spaceBetween": 20,
                "slidesPerView": 3
            },
            "767": {
                "spaceBetween": 30,
                "slidesPerView": 4
            },
            "991": {
                "spaceBetween": 40,
                "slidesPerView": 5
            },
            "1199": {
                "spaceBetween": 40,
                "slidesPerView": 5
            }
        }
        }
    '>
            <div class="swiper-wrapper">
                @foreach ($data['partner'] as $item)
                <div class="swiper-slide">
                    <!-- <div class="col-xl-2 col-lg-6"> -->
                            <div class="sec-title">
                                <div class="icon text-center">
                                    <img width="80%" height="80%" class="rounded" src="{{$item->image_thumb}}" alt="">
                                    <h5>{{$item->name}}</h5>
                                </div>
                                <br>
                            </div>
                        <!-- </div> -->
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</section>
<!--Company Logos One End-->


<!--Cta One Start-->
<!-- <section class="cta-one" style="background-image: url(theme/home/assets/images/backgrounds/cta-v1-bg.jpg);">
<div class="container">
    <div class="row">
        <div class="col-xl-12">
            <div class="cta-one__wrapper">
                <div class="cta-one__left">
                    <div class="cta-one__left-icon">
                        <span class="icon-farm"></span>
                    </div>
                    <div class="cta-one__left-title">
                        <h2>We’re Leader in Agriculture Market</h2>
                    </div>
                </div>
                <div class="cta-one__right">
                    <div class="cta-one__right-btn">
                        <a href="#" class="thm-btn">Discover More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section> -->
<!--Cta One End-->    
@endsection