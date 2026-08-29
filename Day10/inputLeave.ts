const i1 = document.getElementById("i1") as HTMLInputElement | null;
const i2 = document.getElementById("i2") as HTMLInputElement | null;
const dropdown = document.getElementById("fruits") as HTMLSelectElement | null;

i1?.addEventListener("blur", () => {
  const upperValue = i1.value.toUpperCase();
  console.log(upperValue);
  i1.value = upperValue;
});

i2?.addEventListener("mousedown", () => {
  i2.style.backgroundColor = "red";
});

i2?.addEventListener("mouseup", () => {
  i2.style.backgroundColor = "green";
});

dropdown?.addEventListener("change", (e: Event) => {
  const target = e.target as HTMLSelectElement;
  alert(`you selected a ${target.value}`);
});
