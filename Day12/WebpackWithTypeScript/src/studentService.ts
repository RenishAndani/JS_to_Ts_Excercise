import { Student } from "./student.js";

export function createStudents(): Student[] {
  const students: Student[] = [
    new Student(1, "Rahul", 85),
    new Student(2, "Priya", 72),
    new Student(3, "Amit", 35),
  ];

  return students;
}

export function printStudents(students: Student[]): void {
  students.forEach((student) => {
    console.log(`${student.id}. ${student.name} - ${student.marks} - ${student.getResult()}`);
  });
}
