"use strict";
let div = document.getElementById("div");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
p1.textContent = "This is paragraph 1";
p2.textContent = "This is paragraph 2";
p3.textContent = "This is paragraph 3";
div.append(p1, p2, p3);
