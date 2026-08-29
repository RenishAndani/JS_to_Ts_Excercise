let computerChoice = "";

play.addEventListener("click", () => {
  let n = Math.random() * 3;
  if (n > 2) {
    computerChoice = "scior";
  } else if (n > 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "stone";
  }

  console.log(computerChoice);

  if (playerChoice === computerChoice) {
    alert("Draw");
  } else if (
    (playerChoice! === "paper" && computerChoice === "stone") ||
    (playerChoice! === "stone" && computerChoice === "scior") ||
    (playerChoice! === "scior" && computerChoice === "paper")
  ) {
    alert("You win");
  } else {
    alert("You lose");
  }
});
