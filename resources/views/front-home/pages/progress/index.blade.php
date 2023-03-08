@extends('home.layouts.app')

@section('content')
    <!--Page Header Start-->
    <section class="page-header clearfix"
        style="background-image: url(https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg);">
        <div class="container">
            <div class="page-header__inner text-center clearfix">
                <ul class="thm-breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li>Inisiatif Progress</li>
                </ul>
                <h2>Inisiatif Progress</h2>
            </div>
        </div>
    </section>
    <!--Page Header End-->

    <!--Services One Start-->
    <section class="services-one">
        <div class="services-one__bg wow slideInDown" data-wow-delay="100ms" data-wow-duration="2500ms"></div>
        <div class="container">
            <!-- <div class="sec-title text-center">
                <!-- <div class="icon">
                    <img wid src="logo.png" alt="">
                </div>
                <span class="sec-title__tagline">What we’re doing</span>
                <h2 class="sec-title__title">Services We Offer</h2>
            </div> -->
            <div class="row">
                @foreach ($progresss as $item)
                <!--Start Single Services One-->
                <div class="col-xl-3 col-lg-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                    <div class="services-one__single">
                        <div class="services-one__single-img">
                            <div class="services-one__single-img-inner">
                                <img src="{{$item->image_thumb}}" alt="" />
                            </div>
                            <!-- <div class="services-one__single-img-icon">
                                <span class="icon-agriculture"></span>
                            </div> -->
                        </div>
                        <div class="services-one__single-content text-center">
                            <h3><a href="/progress/{{$item->slug}}">{{$item->title}}</a></h3>
                            <p>{!! $item->short_content !!}</p>
                            <a href="/progress/{{$item->slug}}" class="read-more-btn"><span
                                    class="icon-right-arrow-2"></span></a>
                        </div>
                    </div>
                </div>
                <!--End Single Services One-->
                @endforeach
            </div>
        </div>
    </section>
    <!--Services One End-->
@endsection
