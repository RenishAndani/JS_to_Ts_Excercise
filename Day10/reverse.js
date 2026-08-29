"use strict";
let s = "Hello World";
let s2 = s.slice(1, s.length - 1);
let strArray = [...s];
let n = strArray.length;
for (let i = 0; i <= n / 2; i++) {
    let temp = strArray[i];
    strArray[i] = strArray[n - 1 - i];
    strArray[n - 1 - i] = temp;
}
s = strArray.join("");
console.log(s);
console.log(`sliced string: ${s2}`);
