$(document).ready(function() {
    // 스크롤 이벤트
    new WOW().init();

    // 메뉴 하단부 라인 생성
    $('ul#menu').on('click', 'li', function(e) {
        $('ul#menu').children().removeClass();
        $(this).addClass('on');
    });

    // 스크롤 시 메뉴바 배경 생성
    var ht = $(window).height();
    $(window).scroll(function() {
        if(matchMedia("screen and (min-width:769px)").matches) {
            if($(this).scrollTop() > ht) {
                $('.hd-bg').css({'opacity':'1'});
            } else {
                $('.hd-bg').css({'opacity':'0'});
            }
        } else if (matchMedia("screen and (min-width:481px) and (max-width:768px)").matches) {
            if($(this).scrollTop() > ht) {
                $('.hd-bg').css({'opacity':'1'});
            } else {
                $('.hd-bg').css({'opacity':'0'});
            }
        } else if (matchMedia("screen and (max-width:480px)").matches) {
            if($(this).scrollTop() > ht) {
                $('.hd-bg').css({'opacity':'1'});
            } else {
                $('.hd-bg').css({'opacity':'0'});
            }
        }
    });

    // 트리거 모양 변경
    $('.trigger').click(function(){
        $(this).toggleClass('on');
        $('.hd-bg').toggleClass('on');
        $('.menu-bg, ul#menu').toggleClass('open');
    });

    // 트리거 메뉴 클릭했을 때
    $('ul#menu li').click(function() {
        $('.trigger').removeClass('on');
        $('.menu-bg, ul#menu').removeClass('open');
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
