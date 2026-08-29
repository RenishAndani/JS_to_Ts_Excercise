let obj1: any = {
  names: "Jon",
  weapon: "long claw sword",
  kingdom: "winterfell",
  age: 25,
};

let { names, weapon, ...obj4 } = obj1;

let obj2 = { names };
let obj3 = { weapon };

console.log(obj1);

console.log(obj2);
console.log(obj3);
console.log(obj4);

/// Dynamic key
let key = "surname";

obj1[key] = "snow";

console.log(obj1);
