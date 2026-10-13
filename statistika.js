
"use strict";

// Saqlangan so'zlar
function getSavedWords() {
    try {
        const words = JSON.parse(
            localStorage.getItem("savedWords") || "[]"
        );

        return Array.isArray(words) ? words : [];
    } catch {
        return [];
    }
}

const savedWords = getSavedWords();

document.getElementById("savedWords").textContent =
    savedWords.length;

// Darslar soni
const totalLessons = Number(localStorage.getItem("totalLessons")) || 3;

const currentLesson = Number(
    localStorage.getItem("currentLesson") || 0
);

const completedLessons = Math.max(
    0,
    Math.min(totalLessons, currentLesson)
);

document.getElementById("lessonProgressText").textContent =
    `${completedLessons} / ${totalLessons}`;

document.getElementById("lessonProgress").style.width =
    `${(completedLessons / totalLessons) * 100}%`;

// Testlar soni
document.getElementById("completedTests").textContent =
    Number(localStorage.getItem("testsDone") || 0);

// Ketma-ket o'rganilgan kunlar
document.getElementById("streakDays").textContent =
    Number(localStorage.getItem("streak") || 0);

// O'rganilgan so'zlar
document.getElementById("learnedWords").textContent =
    JSON.parse(localStorage.getItem("learnedList") || "[]").length;

// Rag'batlantiruvchi matn
const motivation = document.getElementById("motivation");

if (completedLessons === totalLessons) {
    motivation.textContent =
        "Ajoyib! Barcha darslarni tugatdingiz! 🎉";
} else if (completedLessons > 0) {
    motivation.textContent =
        "Zo'r! Davom eting, siz maqsadingizga yaqinlashyapsiz! 🌱";
} else {
    motivation.textContent =
        "Bugun yangi so'z o'rganishni boshlang! 🌱";
}
