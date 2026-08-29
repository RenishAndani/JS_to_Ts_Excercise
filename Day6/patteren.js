"use strict";
let s = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        s = s + "* ";
    }
    s = s + "\n";
}
console.log(s);
