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

    $('.wine_product .tab__list').slick({
        infinite: true,
        slidesToShow: 1,
        variableWidth: true,
        focusOnSelect: true,
        prevArrow: $('.wine__inner .tab .prev'), 
        nextArrow: $('.wine__inner .tab .next')
    });

    $('.wine__wrap .product').each(function() {
        $(this).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.wine__inner .product__arrow .prev'),
            nextArrow: $('.wine__inner .product__arrow .next')
        });
    });

    function showActiveTabProducts() {
        $('.product').hide();
        var activeTab = $('.wine_product .tab__list .slick-active').data('tab');
        $('#' + activeTab).show();
        $('#' + activeTab).slick('setPosition');
    }

    showActiveTabProducts();

    $('.wine_product .tab__list').on('afterChange', function(event, slick, currentSlide) {
        showActiveTabProducts();
    });

    $('.wine_product .tab__list').on('click', '.wine_product .list__name', function() {
        showActiveTabProducts();
    });

    $('.wine_product .tab__list').slick('setPosition');
    $('.wine__wrap .product').slick('setPosition');

    $('.section5 .promotion__list').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        prevArrow: $('.promotion__arrow .prev'),
        nextArrow: $('.promotion__arrow .next')
    });
});

