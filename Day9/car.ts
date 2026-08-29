class Car {
  name: string;
  model: string;
  weight: number;
  color: string;
  constructor(name: string, model: string, weight: number, color: string) {
    this.name = name;
    this.model = model;
    this.weight = weight;
    this.color = color;
  }

  start(): void {
    console.log("car starting...");
  }

  drive(): void {
    console.log("car running...");
  }

  brake(): void {
    console.log("car brake...");
  }

  stop(): void {
    console.log("car stop...");
  }
}

let c1 = new Car("abc", "a1", 1250, "white");
c1.drive();
console.log(c1.color);

let c2 = new Car("bce", "p1", 1200, "black");
c2.brake();
console.log(c2.model);
