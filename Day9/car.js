"use strict";
class Car {
    name;
    model;
    weight;
    color;
    constructor(name, model, weight, color) {
        this.name = name;
        this.model = model;
        this.weight = weight;
        this.color = color;
    }
    start() {
        console.log("car starting...");
    }
    drive() {
        console.log("car running...");
    }
    brake() {
        console.log("car brake...");
    }
    stop() {
        console.log("car stop...");
    }
}
let c1 = new Car("abc", "a1", 1250, "white");
c1.drive();
console.log(c1.color);
let c2 = new Car("bce", "p1", 1200, "black");
c2.brake();
console.log(c2.model);
