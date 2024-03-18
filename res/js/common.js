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

const topBtn = document.querySelector(".top");

/*버튼 클릭 시 제일 상단으로 이동*/
topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });  
}
