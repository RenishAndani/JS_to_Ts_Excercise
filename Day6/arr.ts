let arr = [1, 2, 3, 40, 11, 13];

let min = arr[0];

for (const el of arr) {
  if (el < min) {
    min = el;
  }
}

console.log("Minimum number is : " + min);

//map sqare of number

let square = arr.map((n, i, arr) => {
  return n * n;
});

console.log("square number: " + square);

// filter number grater than 5

let number = arr.filter((val, idx, arr) => {
  return val > 5;
});

console.log("number gt 5 arr: " + number);

// reduce sum

let sum = arr.reduce((pn, cn, ci, arr) => {
  return pn + cn;
});

console.log("sum of array: " + sum);

function findMax1(arr: number[]) {
  let max = arr[0];

  for (const val of arr) {
    if (max < val) {
      max = val;
    }
  }

  return max;
}

let max = findMax1(arr);
console.log("max using fn: ", max);

function findMax2(arr: number[]) {
  let max = arr[0];
  let min = arr[0];

  for (const val of arr) {
    if (max < val) {
      max = val;
    }
    if (min > val) {
      min = val;
    }
  }

  return [max, min];
}

let [max2, min2] = findMax2(arr);
console.log("Destuctring max min is :" + max2 + " " + min2);

// No duplicate add
let noDuplicate = [1, 2, 3];

function addItemToArray(val: number) {
  for (const el of noDuplicate) {
    if (val === el) {
      return;
    }
  }

  noDuplicate.push(val);
}

addItemToArray(3);
addItemToArray(4);

console.log("noDuplicate array: " + noDuplicate);
