"use strict";
const i1 = document.getElementById("first");
const i2 = document.getElementById("second");
const ans = document.getElementById("ans");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const mulBtn = document.getElementById("mul");
const divBtn = document.getElementById("div");
if (i1 && i2 && ans && addBtn && subBtn && mulBtn && divBtn) {
    addBtn.addEventListener("click", () => {
        let num1;
        let num2;
        if (i1.value && i2.value) {
            num1 = Number(i1.value);
            num2 = Number(i2.value);
            let result = num1 + num2;
            ans.textContent = `${num1} + ${num2} = ${result}`;
        }
        else {
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
        }
        else {
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
        }
        else {
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
        }
        else {
            alert("enter proper number");
            i1.value = "";
            i2.value = "";
        }
    });
}
