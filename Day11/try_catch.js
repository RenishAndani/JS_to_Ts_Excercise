"use strict";
const btn = document.getElementById("btn");
const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
if (btn && i1 && i2) {
    btn.addEventListener("click", () => {
        try {
            const btn = document.getElementById("btn");
            if (Number(i2.value) === 0) {
                throw new Error("can not be divide by zero");
            }
            const res = Number(i1.value) / Number(i2.value);
            console.log(res);
        }
        catch (err) {
            if (err instanceof Error) {
                alert(err.message);
            }
        }
    });
}
