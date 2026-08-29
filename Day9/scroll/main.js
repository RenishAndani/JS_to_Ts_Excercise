"use strict";
const box = document.getElementById("scrollBox");
const scrollToBtn = document.getElementById("scrollToBtn");
const scrollByBtn = document.getElementById("scrollByBtn");
scrollToBtn.addEventListener("click", () => {
    box.scrollTo({
        top: 300,
        left: 200,
        behavior: "smooth",
    });
});
scrollByBtn.addEventListener("click", () => {
    box.scrollBy({
        top: 100,
        left: 100,
        behavior: "smooth",
    });
});
