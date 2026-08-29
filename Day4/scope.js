"use strict";
let n = 10;
function greet() {
    let n = 5;
    console.log(n);
}
const a = 1;
// a  = 2; // give error
console.log(n);
const greet2 = () => {
    console.log("Hi there");
};
greet();
greet2();
