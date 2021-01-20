$(document).ready(function() {
    // 스크롤 이벤트
    new WOW().init();

    // 메뉴 하단부 라인 생성
    $('ul#menu').on('click', 'li', function(e) {
        $('ul#menu').children().removeClass();
        $(this).addClass('on');
    });

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
        $(this).toggleClass('on');
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
        $('.item-20, .item-19, .c-line, .dot, .ab-txt, .flag, .frontbox').toggleClass('on');
    });
});
