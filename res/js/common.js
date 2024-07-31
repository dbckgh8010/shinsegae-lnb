document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header");
    const menu = document.querySelector(".menu");
    let headerHeight = header.offsetHeight;

    menu.addEventListener("mouseenter", function() {
        header.classList.add("open");
    });

    menu.addEventListener("mouseleave", function() {
        header.classList.remove("open");
    });

    window.onscroll = function() {
        let windowTop = window.scrollY;
        if (windowTop >= headerHeight) {
            header.classList.add("scroll");
        }
        else {
            header.classList.remove("scroll");
        }
    };
});

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.top').fadeIn(200);
        } else {
            $('.top').fadeOut(200);
        }
    });

    $('.top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    });

});
