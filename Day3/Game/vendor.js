"use strict";
const stone = document.getElementById("stone");
const paper = document.getElementById("paper");
const scior = document.getElementById("scior");
const play = document.getElementById("play");
let playerChoice = "";
stone.addEventListener("click", () => {
    playerChoice = "stone";
    console.log(playerChoice);
});
paper.addEventListener("click", () => {
    playerChoice = "paper";
    console.log(playerChoice);
});
scior.addEventListener("click", () => {
    playerChoice = "scior";
    console.log(playerChoice);
});
