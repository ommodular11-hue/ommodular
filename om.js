
const header = document.querySelector("header");

// Glass effect only

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// hero parallax

window.addEventListener("scroll", () => {

    let y = window.scrollY;

    //document.querySelector(".hero").style.transform =
    //`translateY(${y * 0.15}px)`;

});

var swiper = new Swiper(".mySwiper", {

    loop: true,

    speed: 2000,

    effect: "fade",

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

    fadeEffect: {
        crossFade: true
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }

});

let lastScroll = 0;
window.addEventListener("scroll", () => {

    let currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    if (currentScroll > lastScroll && currentScroll > 200) {
        header.classList.add("hide-header");
    } else {
        header.classList.remove("hide-header");
    }

    lastScroll = currentScroll;
});

const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    // Glass Effect
    if (currentScroll > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    // Hide Header
    if (currentScroll > lastScroll && currentScroll > 150) {
        header.classList.add("hide-header");
    } else {
        header.classList.remove("hide-header");
    }

    lastScroll = currentScroll;
});

const menuBtn = document.querySelector(".menu-btn");
const menuBox = document.querySelector(".menu-box");


menuBtn.addEventListener("click", () => {

    menuBox.classList.toggle("active");

});

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-btn");
    const menuBox = document.querySelector(".menu-box");

    menuBtn.addEventListener("click", () => {
        menuBox.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!menuBox.contains(e.target)) {
            menuBox.classList.remove("active");
        }
    });

});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const searchIcon = document.getElementById("searchIcon");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchIcon.addEventListener("click", () => {
    searchForm.classList.toggle("active");
    searchInput.focus();
});

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchText = searchInput.value.trim();

    if (searchText !== "") {
        console.log("Searching:", searchText);

        // Ahiya tamaro search code muki sako cho

        searchInput.value = "";
        searchForm.classList.remove("active"); // Search bar hide
    }
});

const searchBtn = document.querySelector(".search-btn");
const searchForm = document.querySelector(".search-form");

searchBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
    searchForm.classList.toggle("active");
});

document.addEventListener("click", ()=>{
    searchForm.classList.remove("active");
});