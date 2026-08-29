const p = document.createElement("p");

const body = document.getElementsByTagName("body");

p.textContent = " fjrbfierner wrvkjber; wrkhbfv";

p.setAttribute("data-class-info", "random class");
console.log(body);

body[0].appendChild(p);
