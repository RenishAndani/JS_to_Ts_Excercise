"use strict";
let btn = document.getElementById("btn");
let template = document.getElementById("model");
const clone = template.content.cloneNode(true);
btn.addEventListener("click", () => {
    document.body.appendChild(clone);
});
