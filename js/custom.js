$(document).ready(function() {
    // 스크롤 이벤트
    new WOW().init();
    
    // 메뉴 하단부 라인 생성
    $('ul#menu').on('click', 'li', function(e) {
        $('ul#menu').children().removeClass();
        $(this).addClass('on');
    });
    
    // 트리거 모양 변경
    $('.trigger').click(function(){
        $(this).toggleClass('on');
        $('.menu-bg, ul#menu, ul#lang').toggleClass('open');
    });
    
    // 트리거 메뉴 클릭했을 때
    $('ul#menu li').click(function() {
        $('.trigger').removeClass('on');
        $('.menu-bg, ul#menu, ul#lang').removeClass('open');
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
    var slider = $('.slider');
    slider.bxSlider({
        mode: "fade",
        maxSliders:3,
        auto:true,
        slideWidth:10000,
        mveSliders:1,
        pager:true
    });
    
    // 연혁 클릭했을 때
    $('.ab-item, .ab-click').click(function() {
        $('.item-20, .item-19, .c-line, .dot, .ab-txt, .flag, .frontbox').toggleClass('on');
    });
});



// 슬라이드 블릿
//    $('.bullet span:nth-child(1)').click(function() {
//        $('.imgs>img').eq(0).css({'opacity':'1'});
//    });
//    $('.bullet span:nth-child(2)').click(function() {
//        $('.imgs>img').eq(1).css({'opacity':'1'});
//    });
//    $('.bullet span:nth-child(3)').click(function() {
//        $('.imgs>img').eq(2).css({'opacity':'1'});
//    });


// 슬라이드
//function start(){
//   $('.imgs>img').css({'opacity':'0'});
//   setInterval(function() { slide(); } ,4000);
//}
//
//var now = 0;
//var imgs = 2;
//function slide(){
//   now = now == imgs?0:now+=1;
//   $('.imgs>img').eq(now-1).css({'opacity':'0'});
//   $('.imgs>img').eq(now).css({'opacity':'1'});
//}
//start();