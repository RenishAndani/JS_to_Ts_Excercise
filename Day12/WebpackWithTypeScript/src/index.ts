import { createStudents } from "./studentService.js";
import { getGrade } from "./utils.js";

const button = document.getElementById("showStudents");
const output = document.getElementById("output");

if (button && output) {
  button.addEventListener("click", () => {
    const students = createStudents();

    output.innerHTML = "";

    students.forEach((student) => {
      const p = document.createElement("p");

      p.textContent =
        `${student.name} - Marks: ${student.marks} - ` +
        `Result: ${student.getResult()} - ` +
        `Grade: ${getGrade(student.marks)}`;

      output.appendChild(p);
    });
  });
}
