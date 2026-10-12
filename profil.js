
"use strict";

const nameInput = document.getElementById("nameInput");
const levelSelect = document.getElementById("levelSelect");
const profileName = document.getElementById("profileName");
const message = document.getElementById("message");
const avatar = document.getElementById("avatar");

// Saqlangan profilni yuklash
nameInput.value = localStorage.getItem("profileName") || (JSON.parse(localStorage.getItem("currentUser") || "null") || {}).name || "";
levelSelect.value =
    localStorage.getItem("profileLevel") || "Boshlang'ich";

profileName.textContent =
    nameInput.value.trim() || "Foydalanuvchi";

// Profilni saqlash
document.getElementById("saveBtn").addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (!name) {
        message.textContent = "Iltimos, ismingizni kiriting!";
        message.style.color = "#c0395b";
        return;
    }

    localStorage.setItem("profileName", name);
    localStorage.setItem("profileLevel", levelSelect.value);

    profileName.textContent = name;
    message.textContent = "Profil muvaffaqiyatli saqlandi! ✅";
    message.style.color = "#37835b";
});

// Statistikani chiqarish
function getNumber(key) {
    const value = Number(localStorage.getItem(key) || 0);
    return Number.isFinite(value) && value >= 0 ? value : 0;
}

function getSavedWords() {
    try {
        const words = JSON.parse(
            localStorage.getItem("savedWords") || "[]"
        );
        return Array.isArray(words) ? words.length : 0;
    } catch {
        return 0;
    }
}

document.getElementById("learnedWords").textContent =
    JSON.parse(localStorage.getItem("learnedList") || "[]").length;

document.getElementById("savedWords").textContent =
    getSavedWords();

document.getElementById("completedTests").textContent =
    getNumber("testsDone");

document.getElementById("streakDays").textContent =
    getNumber("streak");
