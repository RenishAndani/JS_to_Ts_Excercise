let c = 0;
let turn: number = 0;
let space: number = 0;
let s: string = "";

for (let i = 1; i <= 24; i++) {
  c++;
  if (turn == 0) {
    for (let j = 1; j <= 17; j++) {
      s = s + "o";
    }
    s = s + "\n";
    if (c == 3) {
      turn = 1;
      c = 0;
    }
  } else if (turn == 1) {
    for (let k = 1; k <= space; k++) {
      s = s + " ";
    }
    for (let j = 1; j <= 4; j++) {
      s = s + "o";
    }
    s = s + "\n";
    if (c == 3) {
      turn = 0;
      c = 0;
      space = space + 6 > 17 ? 0 : space + 6;
    }
  }
}

console.log(s);
