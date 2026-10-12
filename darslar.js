
"use strict";

// 1) Darslar ma'lumoti
const lessons = [
  {
    title: "1-dars: Salomlashuv",
    desc: "Turk tilida salomlashish juda muhim. Bu darsda asosiy salomlashuv iboralarini o'rganamiz.",
    words: [
      { tr: "Merhaba", pron: "merhaba", uz: "Salom" },
      { tr: "Günaydın", pron: "gyunaydin", uz: "Xayrli tong" },
      { tr: "İyi akşamlar", pron: "iyi akshamlar", uz: "Xayrli kech" },
      { tr: "Hoşça kal", pron: "hoshcha kal", uz: "Xayr bo'l" }
    ]
  },
  {
    title: "2-dars: Minnatdorchilik",
    desc: "Rahmat aytish va kechirim so'rashni o'rganamiz.",
    words: [
      { tr: "Teşekkür ederim", pron: "teshekkür ederim", uz: "Rahmat" },
      { tr: "Lütfen", pron: "lyutfen", uz: "Iltimos" },
      { tr: "Özür dilerim", pron: "ozyur dilerim", uz: "Kechirasiz" },
      { tr: "Rica ederim", pron: "rija ederim", uz: "Arzimaydi" }
    ]
  },
  {
    title: "3-dars: Oila",
    desc: "Oila a'zolarining nomlarini o'rganamiz.",
    words: [
      { tr: "Anne", pron: "anne", uz: "Ona" },
      { tr: "Baba", pron: "baba", uz: "Ota" },
      { tr: "Kardeş", pron: "kardesh", uz: "Aka-uka, opa-singil" },
      { tr: "Aile", pron: "aile", uz: "Oila" }
    ]
  }
];

// 2) HTML elementlarini olish
const titleEl = document.getElementById("lessonTitle");
const descEl = document.getElementById("lessonDesc");
const wordsEl = document.getElementById("lessonWords");
const barEl = document.getElementById("progressBar");
const textEl = document.getElementById("progressText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// 3) Saqlangan ma'lumotlar
let current = Number(localStorage.getItem("currentLesson") || 0);

if (!Number.isInteger(current) || current < 0 || current >= lessons.length) {
  current = 0;
}

let liked = [];

try {
  const saved = JSON.parse(localStorage.getItem("savedWords") || "[]");
  liked = Array.isArray(saved) ? saved : [];
} catch (error) {
  liked = [];
}

// 4) So'zlarni tasodifiy aralashtirish
function shuffleWords(words) {
  const result = [...words];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

// 5) Darsni ekranga chiqarish
function showLesson() {
  const lesson = lessons[current];

  titleEl.textContent = lesson.title;
  descEl.textContent = lesson.desc;

  // Har safar so'zlar boshqa tartibda chiqadi
  const shuffledWords = shuffleWords(lesson.words);

  wordsEl.innerHTML = shuffledWords.map(w => `
    <div class="lesson-word">
      <button
        type="button"
        class="heart ${liked.includes(w.tr.toLowerCase()) ? "liked" : ""}"
        data-word="${w.tr}"
      >❤️</button>

      <div class="lw-text">
        <b>${w.tr}</b>
        <small>[${w.pron}]</small>
        <span>${w.uz}</span>
      </div>

      <button
        type="button"
        class="speak-btn"
        data-word="${w.tr}"
      >🔊</button>
    </div>
  `).join("");

  textEl.textContent = `${current + 1} / ${lessons.length}`;

  barEl.style.width =
    `${((current + 1) / lessons.length) * 100}%`;

  prevBtn.disabled = current === 0;

  nextBtn.textContent =
    current === lessons.length - 1
      ? "Yakunlash ✓"
      : "Keyingi";

  localStorage.setItem("currentLesson", current);
  lesson.words.forEach(w => markLearned(w.tr));
}

// 6) Keyingi dars
nextBtn.addEventListener("click", () => {
  if (current < lessons.length - 1) {
    current++;
    showLesson();
    window.scrollTo(0, 0);
  } else {
    localStorage.setItem("currentLesson", "0");

    alert("Tabriklaymiz! Barcha darslarni tugatdingiz 🎉");

    window.location.href = "dashboard.html";
  }
});

// 7) Oldingi dars
prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    showLesson();
    window.scrollTo(0, 0);
  }
});

// 8) Ovoz va yurakcha
wordsEl.addEventListener("click", event => {
  const speak = event.target.closest(".speak-btn");
  const heart = event.target.closest(".heart");

  // Turkcha so'zni ovoz chiqarib o'qish
  if (speak) {
    const utterance = new SpeechSynthesisUtterance(
      speak.dataset.word
    );

    utterance.lang = "tr-TR";

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }

  // So'zni saqlash yoki saqlashdan chiqarish
  if (heart) {
    const word = heart.dataset.word.toLowerCase();

    if (liked.includes(word)) {
      liked = liked.filter(item => item !== word);
    } else {
      liked.push(word);
    }

    localStorage.setItem("savedWords", JSON.stringify(liked));

    heart.classList.toggle("liked", liked.includes(word));
  }
});

// 9) Darsni boshlash
showLesson();
