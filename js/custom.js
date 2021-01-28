$(document).ready(function() {
    // 스크롤 이벤트
    new WOW().init();

    // 메뉴 하단부 라인 생성
    $('ul#menu').on('click', 'li', function(e) {
        $('ul#menu').children().removeClass();
        $(this).addClass('on');
    });

    // // 첫 페이지 언어 : 영어로 설정
    // $('.kor').hide();
    //
    // // 언어 전환
    // $('ul#lang li a').removeAttr("href");
    // $('ul#lang li:first-child').click(function() {
    //   $('.kor').css({'display':'block'});
    //   $('.eng').css({'display':'none'});
    // });
    // $('ul#lang li:last-child').click(function() {
    //   $('.kor').css({'display':'none'});
    //   $('.eng').css({'display':'block'});
    // });

    // 스크롤 시 메뉴바 배경 생성, lang 컬러 변경
    var ht = $(window).height();
    var scroll = $(document).scrollTop();
    $(window).scroll(function() {
        if($(this).scrollTop() >= ht) {
            $('ul#lang li:first-child, ul#lang li a').addClass('on');
            $('.hd-bg').css({'opacity':'1'});
        } else {
            $('ul#lang li:first-child, ul#lang li a').removeClass('on');
            $('.hd-bg').css({'opacity':'0'});
        }
    });

    // 트리거 클릭했을때 모양 변경, 메뉴 나오기
    $('.trigger').click(function(){
        $('.trigger').toggleClass('on');
        $('ul#menu').toggleClass('open');
    });

    // 트리거 메뉴 클릭했을 때
    $('ul#menu li').click(function() {
        $('.trigger').removeClass('on');
        $('ul#menu').removeClass('open');
    });

    // 상단이동 버튼
    $(window).scroll(function() {
        if($(this).scrollTop() > 900) {
            $('.upBtn').css({'display':'block'});
        } else {
            $('.upBtn').css({'display':'none'});
        }
    });

    $('.upBtn').click(function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 100);
    });

    // 슬라이드
    var mySwiper = new Swiper('.swiper-container', {
        effect:'fade',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 3000
        }
    });


    // 연혁 클릭했을 때
    $('.ab-item, .ab-click').click(function() {
        $('.item-20, .item-19, .c-line, .dot, .ab-mon, .ab-info, .flag, .frontbox').toggleClass('on');
    });

    /* ===== 이미지 변경 ===== */
    var tmpDate = new Date();
    // 헤더 관련 이미지
    $(".itemImg").attr("src", "/imgs/favicon.png?"+tmeDate.getTime());
    $(".itemImg").attr("src", "/imgs/hd-bg.jpg?"+tmeDate.getTime());
    $(".itemImg").attr("src", "/imgs/logo-white.png?"+tmeDate.getTime());
    $(".itemImg").attr("src", "/imgs/up.png?"+tmeDate.getTime());

    // 슬라이드 이미지
    $(".itemImg").attr("src", "/imgs/slide1.jpg?"+tmeDate.getTime());
    $(".itemImg").attr("src", "/imgs/slide2.jpg?"+tmeDate.getTime());
    $(".itemImg").attr("src", "/imgs/slide3.jpg?"+tmeDate.getTime());

    // TECHNOLOGY 이미지
    $(".itemImg").attr("src", "/imgs/tech1.jpeg?"+tmeDate.getTime());
    $(".itemImg").attr("src", "/imgs/tech2.jpeg?"+tmeDate.getTime());
    $(".itemImg").attr("src", "/imgs/tech3.jpeg?"+tmeDate.getTime());

    // TEAM 이미지
    $(".itemImg").attr("src", "/imgs/ceo.jpg?"+tmeDate.getTime());
    $(".itemImg").attr("src", "/imgs/cto.jpg?"+tmeDate.getTime());
    $(".itemImg").attr("src", "/imgs/Staff1.jpg?"+tmeDate.getTime());
    $(".itemImg").attr("src", "/imgs/Staff2.jpg?"+tmeDate.getTime());

    // MEDIA 이미지
    $(".itemImg").attr("src", "/imgs/media1.jpg?"+tmeDate.getTime());
    $(".itemImg").attr("src", "/imgs/media2.jpg?"+tmeDate.getTime());
    $(".itemImg").attr("src", "/imgs/media3.jpg?"+tmeDate.getTime());
    $(".itemImg").attr("src", "/imgs/media4.jpg?"+tmeDate.getTime());
    $(".itemImg").attr("src", "/imgs/media5.jpg?"+tmeDate.getTime());

    // 푸터 관련 이미지
    $(".itemImg").attr("src", "/imgs/ft-bg.jpg?"+tmeDate.getTime());
});
