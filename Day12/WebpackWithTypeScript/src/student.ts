export class Student {
  constructor(
    public id: number,
    public name: string,
    public marks: number,
  ) {}

  getResult(): string {
    return this.marks >= 40 ? "Pass" : "Fail";
  }
}
