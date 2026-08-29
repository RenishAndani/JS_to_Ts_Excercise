"use strict";
// loda js dynamiccly
const button = document.getElementById("loadBtn");
button.addEventListener("click", () => {
  const script = document.createElement("script");
  script.src = "./second.js";
  script.onload = () => {
    console.log("second.js successfully loaded");
    greet();
  };
  script.onerror = () => {
    console.log("Failed to load second.js");
  };
  document.body.appendChild(script);
});
