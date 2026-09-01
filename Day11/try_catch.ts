const btn = document.getElementById("btn") as HTMLButtonElement | null;
const i1 = document.getElementById("i1") as HTMLInputElement | null;
const i2 = document.getElementById("i2") as HTMLInputElement | null;

if (btn && i1 && i2) {
  btn.addEventListener("click", () => {
    try {
      const btn = document.getElementById("btn");

      if (Number(i2.value) === 0) {
        throw new Error("can not be divide by zero");
      }

      const res = Number(i1.value) / Number(i2.value);

      console.log(res);
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  });
}
