const stone = document.getElementById("stone")! as HTMLButtonElement;
const paper = document.getElementById("paper")! as HTMLButtonElement;
const scior = document.getElementById("scior")! as HTMLButtonElement;
const play = document.getElementById("play")! as HTMLButtonElement;

let playerChoice: string = "";

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
