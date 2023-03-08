@extends('home.layouts.app')

@section('content')
    <!--Page Header Start-->
    <section class="page-header clearfix"
        style="background-image: url(https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg);">
        <div class="container">
            <div class="page-header__inner text-center clearfix">
                <ul class="thm-breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="/model">Model</a></li>
                    <li>Model Details</li>
                </ul>
                <h2>Model Details</h2>
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
                                        <a href="/model-berjalan">
                                            Berjalan 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/model-selesai">
                                            Selesai 
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
                            <img src="{{$model->image_thumb}}" alt="" />
                        </div>

                        <!--Projects Details Information Start-->
                        <div class="projects-details__information">
                            <ul>
                                <li>
                                    <h5><b>Status</b></h5>
                                    <p>{{$model->status}}</p>
                                </li>

                                <li>
                                    <h5><b>Tanggal</b></h5>
                                    <p>{{date('d-m-Y', strtotime($model->date))}}</p>
                                </li>

                                <li>
                                    <h5><b>Intervensi</b></h5>
                                    <p>{{$model->intervensi}}</p>
                                </li>

                                <li>
                                    <h5><b>Dana</b></h5>
                                    <p>{{$model->dana}}</p>
                                </li>

                                <li>
                                    <h5><b>Reduksi</b></h5>
                                    <p>{{$model->reduksi}}</p>
                                </li>
                            </ul>
                        </div>
                        <br>
                        <!--Projects Details Information End-->

                        <!-- <div class="services-details__content-icon">
                            <span class="icon-harvest"></span>
                        </div> -->
                    </div>
                </div>
                <!--End Services Details Content-->

                <h2 class="services-details__content-title">{{$model->title}}</h2>
                <p class="services-details__content-text1">{!! $model->content !!}</p>

                <!--Projects Details Information Start-->
                <div class="projects-details__information">
                    <ul>

                        <li>
                            <h5><b>Provinsi</b></h5>
                            <p>{{$model->provinsi}}</p>
                        </li>

                        <li>
                            <h5><b>Kota</b></h5>
                            <p>{{$model->kota}}</p>
                        </li>

                        <li>
                            <h5><b>Kecamatan</b></h5>
                            <p>{{$model->kecamatan}}</p>
                        </li>

                        <li>
                            <h5><b>Kelurahan</b></h5>
                            <p>{{$model->kelurahan}}</p>
                        </li>
                    </ul>
                </div>
                <!--Projects Details Information End-->
                @php
                    $prevSlug = $model->previous()->slug ?? '';
                    $nextSlug = $model->next()->slug ?? '';
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
                        <!-- <div class="sec-title text-center">
                            <div class="icon">
                                <img width="5%" src="logo.png" alt="">
                            </div>
                            <h2 class="sec-title__title">Inisiatif Model</h2>
                        </div> -->
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="projects-one__carousel owl-carousel owl-theme owl-dot-type1">
                                    @foreach (App\Models\ModelProject::orderBy('id', 'desc')->take(5)->get() as $item)
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
                                                    <h3><a href="/model/{{$item->slug}}">{{$item->short_title}}</a></h3>
                                                    <p>{!! $item->short_content !!}</p>
                                                    <a href="/model/{{$item->slug}}" class="read-more-btn"><span
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
