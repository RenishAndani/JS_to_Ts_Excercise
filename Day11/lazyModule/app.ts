// app.ts

const button = document.getElementById("loadMath") as HTMLButtonElement | null;
const result = document.getElementById("result") as HTMLParagraphElement | null;

if (button) {
  button.addEventListener("click", async () => {
    console.log("Loading math.js...");

    // Lazy load the module
    const math = await import("./math.js");

    const answer = math.add(10, 20);

    if (result) {
      result.textContent = `10 + 20 = ${answer}`;
    }

    console.log("Addition completed");
  });
}
