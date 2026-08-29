function square(n: number): Function {
  return function inner(): number {
    return n ** 2;
  };
}

const sq = square(5);

console.log(sq());
