@extends('home.layouts.app')

@section('content')
    <!--Page Header Start-->
    <section class="page-header clearfix"
        style="background-image: url(https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg);">
        <div class="container">
            <div class="page-header__inner text-center clearfix">
                <ul class="thm-breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="/progress">Inisiatif Progress</a></li>
                    <li>Progress Details</li>
                </ul>
                <h2>Details</h2>
            </div>
        </div>
    </section>
    <!--Page Header End-->
    <!--Start Services Details-->
    <section class="services-details">
        <div class="container">
            <div class="row">
                <!--Start Services Details Sidebar-->
                <div class="col-xl-4 col-lg-4">
                    <div class="services-details__sidebar">
                        <!--Start Services Details Sidebar Single-->
                        <div class="services-details__sidebar-single">
                            <div class="services-details__sidebar-single-services wow fadeInUp animated animated animated"
                                data-wow-delay="0.1s" data-wow-duration="1200m">
                                <div class="title">
                                    <h3>Inisiatif Model</h3>
                                </div>
                                <ul>
                                    <li>
                                        <a href="/model">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!--End Services Details Sidebar Single-->

                        <!--Start Services Details Sidebar Single-->
                        <!-- <div class="services-details__sidebar-single">
                            <div class="services-details__sidebar-single-contact-box text-center wow fadeInUp animated animated animated"
                                data-wow-delay="0.3s" data-wow-duration="1200m"
                                style="background-image:url(assets/images/resources/services-details-contact-box-bg.jpg);">
                                <!-- <div class="icon">
                                    <span class="icon-phone-call-2"></span>
                                </div>
                                <div class="title">
                                    <h2>Selling <br>agriculture<br> products</h2>
                                </div>
                                <p class="phone"><a href="tel:123456789">666 888 0000</a></p>
                                <p>Call Us Anytime</p>
                            </div>
                        </div> 
                        <!--End Services Details Sidebar Single-->

                        <!--Start Services Details Sidebar Single-->
                        <div class="services-details__sidebar-single">
                            <div class="services-details__sidebar-single-btn text-center wow fadeInUp animated animated animated"
                                data-wow-delay="0.5s" data-wow-duration="1200m">
                                <a href="#" class="thm-btn"><span class="icon-pdf"></span> download pdf file</a>
                            </div>
                        </div>
                        <!--End Services Details Sidebar Single-->
                    </div>
                </div>
                <!--End Services Details Sidebar-->

                <!--Start Services Details Content-->
                <div class="col-xl-8 col-lg-8">
                    <div class="services-details__content">
                        <div class="services-details__content-img">
                            <img src="{{$progress->image_thumb}}" alt="" />
                        </div>

                        <!-- <div class="services-details__content-icon">
                            <span class="icon-harvest"></span>
                        </div> -->
                    </div>
                </div>
                <!--End Services Details Content-->

                <h2 class="services-details__content-title">{{$progress->title}}</h2>
                <p class="services-details__content-text1">{!! $progress->content !!}</p>
                @php
                    $prevSlug = $progress->previous()->slug ?? '';
                    $nextSlug = $progress->next()->slug ?? '';
                @endphp
                <div class="projects-details__pagination clearfix">
                    <ul>
                        <li>
                        @if ($prevSlug != null)
                            <div class="previous">
                                <p><a href="{{$prevSlug}}"><span class="icon-right-arrow-2"></span>Previous</a></p>
                            </div>
                        @endif
                        </li>
                        <li>
                        @if ($nextSlug != null)
                            <div class="next">
                                <p><a href="{{$nextSlug}}">Next <span class="icon-right-arrow-2"></span></a></p>
                            </div>
                        @endif
                        </li>
                    </ul>
                </div>
                <br>
                <!--Projects One Start-->
                <section class="projects-one projects-one--two">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="projects-one__carousel owl-carousel owl-theme owl-dot-type1">
                                    @foreach (App\Models\ModelProgress::orderBy('id', 'desc')->take(5)->get() as $item)
                                        <!--Start Single Projects One-->
                                            <div class="services-one__single">
                                                <div class="services-one__single-img">
                                                    <div class="services-one__single-img-inner">
                                                        <img src="{{$item->image_thumb}}" alt="" />
                                                    </div>
                                                    <div class="services-one__single-img-icon">
                                                        <span class="icon-agriculture"></span>
                                                    </div>
                                                </div>
                                                <div class="services-one__single-content text-center">
                                                    <h3><a href="/progress/{{$item->slug}}">{{$item->title}}</a></h3>
                                                    <p>{!! $item->short_content !!}</p>
                                                    <a href="/progress/{{$item->slug}}" class="read-more-btn"><span
                                                            class="icon-right-arrow-2"></span></a>
                                                </div>
                                            </div>
                                        <!--End Single Projects One-->
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!--Projects One End-->
            </div>
        </div>
    </section>
    <!--End Services Details-->
@endsection
