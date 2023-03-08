@extends('home.layouts.app')

@section('content')
    <!--Page Header Start-->
    <section class="page-header clearfix"
        style="background-image: url(https://cdn.pixabay.com/photo/2015/05/31/12/12/coffee-791439_960_720.jpg);">
        <div class="container">
            <div class="page-header__inner text-center clearfix">
                <ul class="thm-breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li>News</li>
                </ul>
                <h2>Latest News</h2>
            </div>
        </div>
    </section>
    <!--Page Header End-->
    
    <!--Blog One Start-->
    <section class="blog-one blog-one--news">
        <div class="blog-one__bg wow slideInDown" data-wow-delay="100ms" data-wow-duration="2500ms"></div>
        <div class="container">
            <div class="row">
                @foreach ($articles as $item)
                @if ($item->status == 'Published')
                    <!--Start Single Blog One-->
                    <div class="col-xl-4 col-lg-4  wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="blog-one__single">
                            <div class="blog-one__single-img">
                                <img src="{{$item->image_thumb}}" alt="" />
                                <div class="date-box">
                                    <span>{{date('d-m-Y', strtotime($item->date))}}</span>
                                </div>
                                <div class="overlay-icon">
                                    <a href="/blog/{{$item->slug}}"><span class="icon-plus"></span></a>
                                </div>
                            </div>

                            <div class="blog-one__single-content">
                                <ul class="meta-info">
                                    <li><a href="#"><i class="far fa-user-circle"></i>{{!empty($article->users) ? $article->users->name:''}}</a></li>
                                    <li><a href="#"><i class="far fa-comments"></i>2 Comments</a></li>
                                </ul>
                                <h2 title="{{$item->title}}"><a href="/blog/{{$item->slug}}">{{$item->short_title }}</a></h2>
                                <p><a href="/blog/{{$item->slug}}">{{$item->short_subtitle}}</a></p>
                            </div>
                        </div>
                    </div>
                    <!--End Single Blog One-->
                @endif
                @endforeach
            </div>
        </div>
    </section>
    <!--Blog One End-->
@endsection
