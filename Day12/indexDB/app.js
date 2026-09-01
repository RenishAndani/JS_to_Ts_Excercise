"use strict";
// ------------------------------------
// HTML ELEMENTS
// ------------------------------------
const studentForm = document.getElementById("studentForm");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const courseInput = document.getElementById("courseInput");
const studentTableBody = document.getElementById("studentTableBody");
// ------------------------------------
// DATABASE
// ------------------------------------
let db;
let editingId = null;
const request = indexedDB.open("studentDB", 1);
// ------------------------------------
// CREATE OBJECT STORE
// ------------------------------------
request.onupgradeneeded = (event) => {
    const database = event.target.result;
    database.createObjectStore("students", {
        keyPath: "id",
        autoIncrement: true,
    });
};
// ------------------------------------
// DATABASE OPENED
// ------------------------------------
request.onsuccess = () => {
    db = request.result;
    console.log("Database opened");
    loadStudents();
};
// ------------------------------------
// CREATE / UPDATE
// ------------------------------------
studentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const age = Number(ageInput.value);
    const course = courseInput.value;
    const transaction = db.transaction("students", "readwrite");
    const store = transaction.objectStore("students");
    // UPDATE
    if (editingId !== null) {
        const student = {
            id: editingId,
            name: name,
            age: age,
            course: course,
        };
        store.put(student);
        transaction.oncomplete = () => {
            editingId = null;
            studentForm.reset();
            loadStudents();
        };
    }
    // CREATE
    else {
        const student = {
            name: name,
            age: age,
            course: course,
        };
        store.add(student);
        transaction.oncomplete = () => {
            studentForm.reset();
            loadStudents();
        };
    }
});
// ------------------------------------
// READ
// ------------------------------------
function loadStudents() {
    const transaction = db.transaction("students", "readonly");
    const store = transaction.objectStore("students");
    const request = store.getAll();
    request.onsuccess = () => {
        studentTableBody.innerHTML = "";
        const students = request.result;
        students.forEach((student) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.course}</td>

                <td>
                    <button onclick="editStudent(${student.id})">
                        Edit
                    </button>

                    <button onclick="deleteStudent(${student.id})">
                        Delete
                    </button>
                </td>
            `;
            studentTableBody.appendChild(row);
        });
    };
}
// ------------------------------------
// GET ONE STUDENT
// ------------------------------------
function editStudent(id) {
    const transaction = db.transaction("students", "readonly");
    const store = transaction.objectStore("students");
    const request = store.get(id);
    request.onsuccess = () => {
        const student = request.result;
        if (!student) {
            return;
        }
        nameInput.value = student.name;
        ageInput.value = student.age;
        courseInput.value = student.course;
        editingId = student.id;
    };
}
// ------------------------------------
// DELETE
// ------------------------------------
function deleteStudent(id) {
    const transaction = db.transaction("students", "readwrite");
    const store = transaction.objectStore("students");
    store.delete(id);
    transaction.oncomplete = () => {
        loadStudents();
    };
}
