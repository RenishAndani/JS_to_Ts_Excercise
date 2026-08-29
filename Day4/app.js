"use strict";
function square(n) {
    return function inner() {
        return n ** 2;
    };
}
const sq = square(5);
console.log(sq());
