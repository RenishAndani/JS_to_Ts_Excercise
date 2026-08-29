"use strict";
const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const dropdown = document.getElementById("fruits");
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
dropdown?.addEventListener("change", (e) => {
    const target = e.target;
    alert(`you selected a ${target.value}`);
});
