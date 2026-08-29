const i1 = document.getElementById("first") as HTMLInputElement;
const i2 = document.getElementById("second") as HTMLInputElement;
const ans = document.getElementById("ans") as HTMLInputElement;

const addBtn = document.getElementById("add") as HTMLButtonElement | null;
const subBtn = document.getElementById("sub") as HTMLButtonElement | null;
const mulBtn = document.getElementById("mul") as HTMLButtonElement | null;
const divBtn = document.getElementById("div") as HTMLButtonElement | null;

if (i1 && i2 && ans && addBtn && subBtn && mulBtn && divBtn) {
  addBtn.addEventListener("click", () => {
    let num1;
    let num2;

    if (i1.value && i2.value) {
      num1 = Number(i1.value);
      num2 = Number(i2.value);

      let result = num1 + num2;
      ans.textContent = `${num1} + ${num2} = ${result}`;
    } else {
      alert("enter proper number");
      i1.value = "";
      i2.value = "";
    }
  });

  subBtn.addEventListener("click", () => {
    let num1;
    let num2;

    if (i1.value && i2.value) {
      num1 = Number(i1.value);
      num2 = Number(i2.value);

      let result = num1 - num2;
      ans.textContent = `${num1} - ${num2} = ${result}`;
    } else {
      alert("enter proper number");
      i1.value = "";
      i2.value = "";
    }
  });

  mulBtn.addEventListener("click", () => {
    let num1;
    let num2;

    if (i1.value && i2.value) {
      num1 = Number(i1.value);
      num2 = Number(i2.value);

      let result = num1 * num2;
      ans.textContent = `${num1} * ${num2} = ${result}`;
    } else {
      alert("enter proper number");
      i1.value = "";
      i2.value = "";
    }
  });

  divBtn.addEventListener("click", () => {
    let num1;
    let num2;

    if (i1.value && i2.value) {
      num1 = Number(i1.value);
      num2 = Number(i2.value);

      let result = num1 / num2;
      ans.textContent = `${num1} / ${num2} = ${result}`;
    } else {
      alert("enter proper number");
      i1.value = "";
      i2.value = "";
    }
  });
}
