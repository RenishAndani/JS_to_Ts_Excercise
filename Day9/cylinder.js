"use strict";
class Cylinder {
    radius;
    height;
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    get volume() {
        const calculatedVolume = Math.PI * Math.pow(this.radius, 2) * this.height;
        return parseFloat(calculatedVolume.toFixed(4));
    }
}
const radius = 5;
const height = 12;
const myCylinder = new Cylinder(radius, height);
console.log(`Radius: ${radius}`);
console.log(`Height: ${height}`);
console.log(`Volume: ${myCylinder.volume}`);
