@extends('home.layouts.app')

@section('content')
<!--News Details Start-->
<section class="news-details">
    <div class="container">
        <div class="row">
            <!--Start News Details Laft-->
            <div class="col-xl-8 col-lg-7">
                <div class="news-details__left">
                    <!--Start Single Blog One-->
                    <div class="blog-one__single">
                        <div class="blog-one__single-img">
                            <img src="{{$article->image_link}}" alt="" />
                        </div>

                        <div class="blog-one__single-content blog-details">
                            <h2>{{$article->title}}</h2>
                            <p>{!! $article->content !!}</p>
                        </div>
                    </div>
                    <!--End Single Blog One-->
                    
                    <div class="col-xl-12 col-lg-12">
                        <div class="tag-social-link">
                            <div class="col-xl-6 col-lg-6">
                                <div class="tag-social-link__tag">
                                    <div class="title">
                                        <h4>Tags</h4>
                                    </div>
                                    <div class="tag-social-link__tag-list">
                                        <ul>
                                            <!-- @foreach ($article as $item)   -->
                                            <li>
                                                <a href="#">{{$article->tags->first()->name}}</a>
                                            </li>
                                            <!-- @endforeach -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="tag-social-link__social-links">
                                    <ul class="meta-info">
                                        <li><a href="#"><i class="far fa-clock"></i> {{date('d-m-Y', strtotime($article->date))}}</a></li>
                                        <li><a href="#"><i class="far fa-user-circle"></i> {{!empty($article->users) ? $article->users->name:''}}</a></li>
                                        <li><a href="#"><i class="far fa-comments"></i> 2 Comments</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="news-details__pagenation">
                        <div class="row">
                            <!--Start Single News Details Pagenation-->
                            @php
                                $prevSlug = $article->previous()->slug ?? '';
                                $nextSlug = $article->next()->slug ?? '';
                            @endphp
                            <div class="col-xl-6">
                                @if ($prevSlug != null)
                                <a href="{{$prevSlug}}">
                                    <div class="news-details__pagenation-single active">
                                        <h2>{{$prevSlug}}</h2>
                                    </div>
                                </a>
                                @endif
                            </div>
                            <!--End Single News Details Pagenation-->

                            <!--Start Single News Details Pagenation-->
                            <div class="col-xl-6">
                                @if ($nextSlug != null)
                                <a href="{{$nextSlug}}">
                                    <div class="news-details__pagenation-single active">
                                        <h2>{{$nextSlug}}</h2>
                                    </div>
                                </a>
                                @endif
                            </div>
                            <!--End Single News Details Pagenation-->
                        </div>
                    </div>
                    

                    <!--Start Comment One -->
                    <!-- <div class="comment-one">
                        <h3 class="comment-one__title">2 Comments</h3>
                        <div class="comment-one__single">
                            <div class="comment-one__image">
                                <img src="assets/images/blog/comment-img1.jpg" alt="">
                            </div>
                            <div class="comment-one__content">
                                <div class="comment-one__content-top">
                                    <div class="comment-one__content-text">
                                        <h3>Kevin Martin</h3>
                                    </div>
                                    <div class="comment-one__content-btn">
                                        <a href="#" class="thm-btn">Reply</a>
                                    </div>
                                </div>
                                <p>It has survived not only five centuries, but also the leap into electronic
                                    typesetting unchanged. It was popularised in the sheets containing lorem
                                    ipsum is simply free text.</p>
                            </div>
                        </div>
                        <div class="comment-one__single">
                            <div class="comment-one__image">
                                <img src="assets/images/blog/comment-img2.jpg" alt="">
                            </div>
                            <div class="comment-one__content">
                                <div class="comment-one__content-top">
                                    <div class="comment-one__content-text">
                                        <h3>Sarah Albert</h3>
                                    </div>
                                    <div class="comment-one__content-btn">
                                        <a href="#" class="thm-btn">Reply</a>
                                    </div>
                                </div>
                                <p>It has survived not only five centuries, but also the leap into electronic
                                    typesetting unchanged. It was popularised in the sheets containing lorem
                                    ipsum is simply free text.</p>
                            </div>
                        </div>
                    </div> -->
                    <!--End Comment One -->
                    <br>
                    <div class="news-details__comment-form">
                        <h3 class="comment-form__title">Leave a Comment</h3>
                        <form action="assets/inc/sendemail.php" class="comment-one__form contact-form-validated"
                            novalidate="novalidate">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6">
                                    <div class="comment-form__input-box">
                                        <input type="text" placeholder="Your name" name="name">
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6">
                                    <div class="comment-form__input-box">
                                        <input type="email" placeholder="Email address" name="email">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6">
                                    <div class="comment-form__input-box">
                                        <input type="text" placeholder="Phone number" name="phone">
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6">
                                    <div class="comment-form__input-box">
                                        <input type="text" placeholder="Subject" name="Subject">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-12 col-lg-12">
                                    <div class="comment-form__input-box">
                                        <textarea name="message" placeholder="Write message"></textarea>
                                    </div>
                                    <button type="submit" class="thm-btn comment-form__btn">Submit
                                        comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!--End News Sidebar Laft-->



            <!--Start News Sidebar Sidebar-->
            <div class="col-xl-4 col-lg-5">
                <div class="sidebar">
                    <!-- <div class="sidebar__single sidebar__search wow fadeInUp animated animated animated"
                        data-wow-delay="0.1s" data-wow-duration="1200m">
                        <form action="#" class="sidebar__search-form">
                            <input type="search" placeholder="Search here">
                            <button type="submit"><span class="icon-search"></span></button>
                        </form>
                    </div> -->

                    <div class="sidebar__single sidebar__latest-posts wow fadeInUp animated animated animated"
                        data-wow-delay="0.2s" data-wow-duration="1200m">
                        <div class="title">
                            <h2>Latest Posts</h2>
                        </div>
                        <ul class="sidebar__latest-posts-list">
                            @foreach (App\Models\Article::orderBy('id', 'desc')->take(3)->get() as $item)
                            @if ($item->status == 'Published')
                                <li class="footer-widget__news-list-item">
                                    <div class="footer-widget__news-list-item-img">
                                        <a title="{{$item->title}}" href="/blog/{{$item->slug}}">
                                            <img class="rounded" src="{{ $item->image_link }}" alt="" width="75" height="55" />
                                        </a>
                                    </div>
                                    <div class="title">
                                        <p>
                                            <a title="{{$item->title}}" href="/blog/{{$item->slug}}">{{date('d-M-Y', strtotime($item->date))}}</a>
                                        </p>
                                        <h5>
                                            <a title="{{$item->title}}" href="/blog/{{$item->slug}}">{{ $item->short_title }}</a>
                                        </h5>
                                    </div>
                                </li>
                            @endif
                            @endforeach
                        </ul>
                    </div>


                    <div class="sidebar__single sidebar__categories wow fadeInUp animated animated animated"
                        data-wow-delay="0.3s" data-wow-duration="1200m">
                        <div class="title">
                            <h2>Kategori</h2>
                        </div>
                        <ul class="sidebar__categories-list">
                            @foreach (App\Models\Category::all()->sortBy('name') as $item)
                                <li>
                                    <a href="#">
                                        {{$item->name}}
                                        <span class="icon-right-arrow-angle"></span>
                                    </a>
                                </li>
                            @endforeach
                        </ul>
                    </div>

                    <div class="sidebar__single sidebar__tag wow fadeInUp animated animated animated"
                        data-wow-delay="0.4s" data-wow-duration="1200m">
                        <div class="title">
                            <h2>Tags</h2>
                        </div>
                        <ul class="sidebar__tag-list">
                            @foreach (App\Models\Tags::all()->sortBy('name') as $item)
                                <li><a href="#">{{$item->name}}</a></li>
                            @endforeach
                        </ul>
                    </div>

                    <!-- <div class="sidebar__single sidebar__recent-comments wow fadeInUp animated animated animated"
                        data-wow-delay="0.5s" data-wow-duration="1200m">
                        <div class="title">
                            <h2>Recent Comments</h2>
                        </div>
                        <ul class="sidebar__recent-comments-list">
                            <li class="sidebar__recent-comments-list-item">
                                <div class="icon">
                                    <span class="icon-chat"></span>
                                </div>
                                <div class="text">
                                    <p>A wordpress commenter on <br>launch new mobile app</p>
                                </div>
                            </li>

                            <li class="sidebar__recent-comments-list-item">
                                <div class="icon">
                                    <span class="icon-chat"></span>
                                </div>
                                <div class="text">
                                    <p>John doe on template: <br><span>comments</span></p>
                                </div>
                            </li>

                            <li class="sidebar__recent-comments-list-item">
                                <div class="icon">
                                    <span class="icon-chat"></span>
                                </div>
                                <div class="text">
                                    <p>A wordpress commenter on <br>launch new mobile app</p>
                                </div>
                            </li>

                            <li class="sidebar__recent-comments-list-item">
                                <div class="icon">
                                    <span class="icon-chat"></span>
                                </div>
                                <div class="text">
                                    <p>John doe on template: <br><span>comments</span></p>
                                </div>
                            </li>
                        </ul>
                    </div> -->
                </div>
            </div>
            <!--End News Details Sidebar-->
        </div>
    </div>
</section>
<!--News Details End-->

@endsection
