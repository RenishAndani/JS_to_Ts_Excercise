"use strict";
const child = document.querySelector(".child");
if (child) {
    const parent = child.parentElement;
    if (parent) {
        const relativeToViewportTop = parent.getBoundingClientRect().top;
        const absoluteToDocumentTop = parent.getBoundingClientRect().top + window.scrollY;
        console.log("Parent distance from viewport top:", relativeToViewportTop, "px");
        console.log("Parent distance from document top:", absoluteToDocumentTop, "px");
    }
}
