"use strict";
let count = 3;
const API_URL = "http://localhost:3000/users";
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const usersContainer = document.getElementById("users");
let editingUserId = null;
// ==========================
// READ
// ==========================
async function getUsers() {
    const response = await fetch(API_URL);
    const users = await response.json();
    displayUsers(users);
}
// ==========================
// DISPLAY USERS
// ==========================
function displayUsers(users) {
    if (usersContainer) {
        usersContainer.innerHTML = "";
    }
    users.forEach((user) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p>
                <strong>${user.name}</strong>
                - ${user.email}

                <button onclick="editUser('${user.id}')">
                    Edit
                </button>

                <button onclick="deleteUser('${user.id}')">
                    Delete
                </button>
            </p>
        `;
        if (usersContainer) {
            usersContainer.appendChild(div);
        }
    });
}
// ==========================
// CREATE / UPDATE
// ==========================
if (form && nameInput && emailInput && submitBtn) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const name = nameInput.value;
        const email = emailInput.value;
        // CREATE
        if (editingUserId === null) {
            await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: count,
                    name: name,
                    email: email,
                }),
            });
            count++;
        }
        // UPDATE
        else {
            await fetch(`${API_URL}/${editingUserId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                }),
            });
            editingUserId = null;
            submitBtn.textContent = "Add User";
        }
        form.reset();
        getUsers();
    });
}
// ==========================
// EDIT
// ==========================
async function editUser(id) {
    const response = await fetch(`${API_URL}/${id}`);
    const user = await response.json();
    if (nameInput && emailInput) {
        nameInput.value = user.name;
        emailInput.value = user.email;
    }
    editingUserId = id;
    if (submitBtn) {
        submitBtn.textContent = "Update User";
    }
}
// ==========================
// DELETE
// ==========================
async function deleteUser(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    getUsers();
}
// ==========================
// CANCEL EDIT
// ==========================
if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
        if (form) {
            form.reset();
            editingUserId = null;
            if (submitBtn) {
                submitBtn.textContent = "Add User";
            }
        }
    });
}
// ==========================
// INITIAL LOAD
// ==========================
getUsers();
