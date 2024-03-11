document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("header");
    var menu = document.querySelector(".menu");

    menu.addEventListener("mouseover", function() {
        header.classList.add("open");
    });

    menu.addEventListener("mouseout", function() {
        header.classList.remove("open");
    });
});