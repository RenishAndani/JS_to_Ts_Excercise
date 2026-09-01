// ------------------------------------
// Get HTML elements
// ------------------------------------

const nameInput = document.getElementById("nameInput") as HTMLInputElement;

const themeSelect = document.getElementById("themeSelect") as HTMLSelectElement;

const saveBtn = document.getElementById("saveBtn") as HTMLButtonElement;

const clearLocalBtn = document.getElementById("clearLocalBtn") as HTMLButtonElement;

const clearSessionBtn = document.getElementById("clearSessionBtn") as HTMLButtonElement;

const deleteCookieBtn = document.getElementById("deleteCookieBtn") as HTMLButtonElement;

const nameDisplay = document.getElementById("nameDisplay") as HTMLParagraphElement;

const lastVisit = document.getElementById("lastVisit") as HTMLParagraphElement;

// ------------------------------------
// SAVE PREFERENCES
// ------------------------------------

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;

  const theme = themeSelect.value;

  // Save name in localStorage

  localStorage.setItem("username", name);

  // Save theme in sessionStorage

  sessionStorage.setItem("theme", theme);

  // Create/update last visit cookie

  const now = new Date().toLocaleString();

  document.cookie = `lastVisit=${encodeURIComponent(now)}; max-age=86400; path=/`;

  // Update display immediately

  nameDisplay.textContent = `Welcome, ${name}`;

  lastVisit.textContent = `Last visit: ${now}`;
});

// ------------------------------------
// RESTORE NAME FROM localStorage
// ------------------------------------

const savedName = localStorage.getItem("username");

if (savedName) {
  nameInput.value = savedName;

  nameDisplay.textContent = `Welcome, ${savedName}`;
}

// ------------------------------------
// RESTORE THEME FROM sessionStorage
// ------------------------------------

const savedTheme = sessionStorage.getItem("theme");

if (savedTheme) {
  themeSelect.value = savedTheme;
}

// ------------------------------------
// READ LAST VISIT FROM COOKIE
// ------------------------------------

function getCookie(name: string): string | null {
  const cookies = document.cookie.split("; ");

  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");

    if (key === name) {
      return decodeURIComponent(value);
    }
  }

  return null;
}

const savedLastVisit = getCookie("lastVisit");

if (savedLastVisit) {
  lastVisit.textContent = `Last visit: ${savedLastVisit}`;
}

// ------------------------------------
// CLEAR LOCAL STORAGE
// ------------------------------------

clearLocalBtn.addEventListener("click", () => {
  localStorage.removeItem("username");

  nameInput.value = "";

  nameDisplay.textContent = "";
});

// ------------------------------------
// CLEAR SESSION STORAGE
// ------------------------------------

clearSessionBtn.addEventListener("click", () => {
  sessionStorage.removeItem("theme");

  themeSelect.value = "light";
});

// ------------------------------------
// DELETE COOKIE
// ------------------------------------

deleteCookieBtn.addEventListener("click", () => {
  document.cookie = "lastVisit=; max-age=0; path=/";

  lastVisit.textContent = "";
});
