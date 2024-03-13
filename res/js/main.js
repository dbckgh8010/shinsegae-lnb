$('.slider__inner').slick({
    infinite: true,
    dots: true,
    appendDots: $('.section1 .dot'),
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    prevArrow: $('.section1 .prev'),
    nextArrow: $('.section1 .next')
});
$('.section1 .pause').on('click',function(){
    $('.slider__inner').slick('slickPause');
    $(this).css({display:'none'});
    $('.section1 .play').css({display:'block'});
});
$('.section1 .play').on('click',function(){
    $('.slider__inner').slick('slickPlay')
    $(this).css({display:'none'});
    $('.section1 .pause').css({display:'block'});
});