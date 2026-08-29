const box = document.getElementById("scrollBox") as HTMLDivElement;

const scrollToBtn = document.getElementById("scrollToBtn") as HTMLButtonElement;
const scrollByBtn = document.getElementById("scrollByBtn") as HTMLButtonElement;

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
