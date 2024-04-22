document.addEventListener("DOMContentLoaded", function () {

    let intro = document.getElementById("intro"),
        header = document.getElementById("header"),
        navToggle = document.getElementById("nav_toggle"),
        navLinks = document.querySelectorAll("#nav a");

    let introHeight = intro.offsetHeight,
        scrollOffset = window.pageYOffset;


    checkScroll(scrollOffset);

    window.addEventListener("scroll", function () {
        scrollOffset = window.pageYOffset;
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introHeight) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }


    let scrollElements = document.querySelectorAll("[data-scroll]");
    scrollElements.forEach(function (element) {
        element.addEventListener("click", function (event) {
            event.preventDefault();

            let blockId = this.getAttribute("data-scroll"),
                blockOffset = document.querySelector(blockId).offsetTop;

            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });
            this.classList.add("active");

            window.scrollTo({
                top: blockOffset,
                behavior: "smooth"
            });
        });
    });


    let logo = document.getElementById("logo");
    logo.addEventListener("click", function () {
        nav.classList.remove("active");
        navToggle.classList.remove("active");
    });


    navToggle.addEventListener("click", function (event) {
        event.preventDefault();
        this.classList.toggle("active");
        nav.classList.toggle("active");
    });


    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            nav.classList.remove("active");
            navToggle.classList.remove("active");
        });
    });


    let collapseElements = document.querySelectorAll("[data-collapse]");
    collapseElements.forEach(function (element) {
        element.addEventListener("click", function (event) {
            event.preventDefault();
            this.classList.toggle("active");
        });
    });



});