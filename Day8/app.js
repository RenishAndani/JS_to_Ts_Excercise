"use strict";
// constructor function
class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi ${this.name}`);
  }
}
let p1 = new Person("Jon", 25);
let p2 = new Person("Ned", 50);
p1.greet();
p2.greet();
console.log(p1);
console.log("name of p1 object" + p1.name);
if (p1.greet === p2.greet) {
  console.log("both are same");
}
