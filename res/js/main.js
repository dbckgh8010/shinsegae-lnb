$(document).ready(function() {
    $('.slide__inner').slick({           
        dots: true,            
        appendDots: $('.section1 .dot__wrap'),  
        infinite: true,             
        slidesToShow: 1,            
        slidesToScroll: 1,   
        autoplay: true,           
        autoplaySpeed: 3000,  
        pauseOnHover: false,
        prevArrow: $('.section1 .prev'), 
        nextArrow: $('.section1 .next')
    });

    $('.section1 .pause').on('click', function() {
        $('.slide__inner').slick('slickPause')
        $(this).css({display:'none'});
        $('.section1 .play') .css({display:'block'});
    });
    $('.section1 .play').on('click', function() {
        $('.slide__inner').slick('slickPlay')
        $(this).css({display:'none'});
        $('.section1 .pause') .css({display:'block'});
    });

    $('.wine_inner .tab_slide').slick({      
        infinite: true,             
        slidesToShow: 1,
        variableWidth: true,
        focusOnSelect: true,                     
        prevArrow: $('.wine_inner .tab_wrap .prev'), 
        nextArrow: $('.wine_inner .tab_wrap .next')
    });
});