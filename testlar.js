// 1) Savollar bazasi
const bank = [
  { tr: "merhaba",         uz: "salom" },
  { tr: "teşekkür ederim", uz: "rahmat" },
  { tr: "lütfen",          uz: "iltimos" },
  { tr: "günaydın",        uz: "xayrli tong" },
  { tr: "kitap",           uz: "kitob" },
  { tr: "arkadaş",         uz: "do'st" },
  { tr: "aile",            uz: "oila" },
  { tr: "ev",              uz: "uy" },
  { tr: "iyi",             uz: "yaxshi" },
  { tr: "özür dilerim",    uz: "kechirasiz" },
];

const TOTAL = 5;

// 2) Elementlar
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const qCount = document.getElementById("qCount");
const qScore = document.getElementById("qScore");
const qBar = document.getElementById("qBar");
const qWord = document.getElementById("qWord");
const qSpeak = document.getElementById("qSpeak");
const optionsEl = document.getElementById("options");
const feedback = document.getElementById("feedback");
const qNext = document.getElementById("qNext");

// 3) Holat
let questions = [];
let index = 0;
let score = 0;

// Massivni aralashtirish
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// 4) Testni boshlash
function startQuiz() {
  questions = shuffle(bank).slice(0, TOTAL);
  index = 0;
  score = 0;
  quizBox.hidden = false;
  resultBox.hidden = true;
  showQuestion();
}

// 5) Savolni ko'rsatish
function showQuestion() {
  const q = questions[index];

  qWord.textContent = q.tr;
  qCount.textContent = `${index + 1} / ${TOTAL}`;
  qScore.textContent = `⭐ ${score}`;
  qBar.style.width = (index / TOTAL) * 100 + "%";
  feedback.textContent = "";
  feedback.className = "";
  qNext.disabled = true;
  qNext.textContent = index === TOTAL - 1 ? "Natija" : "Keyingi";

  // 1 ta to'g'ri + 3 ta noto'g'ri javob
  const wrong = shuffle(bank.filter(w => w.uz !== q.uz)).slice(0, 3);
  const choices = shuffle([q, ...wrong]);

  optionsEl.innerHTML = choices.map(c =>
    `<button class="option" data-uz="${c.uz}">${c.uz}</button>`
  ).join("");
}

// 6) Javob tanlash
optionsEl.addEventListener("click", e => {
  const btn = e.target.closest(".option");
  if (!btn) return;

  const correct = questions[index].uz;
  const buttons = optionsEl.querySelectorAll(".option");

  buttons.forEach(b => {
    b.disabled = true;
    if (b.dataset.uz === correct) b.classList.add("correct");
  });

  if (btn.dataset.uz === correct) {
    score++;
    markLearned(questions[index].tr);
    feedback.textContent = "To'g'ri! ✅";
    feedback.className = "ok";
  } else {
    btn.classList.add("wrong");
    feedback.textContent = "Noto'g'ri ❌";
    feedback.className = "no";
  }

  qScore.textContent = `⭐ ${score}`;
  qNext.disabled = false;
});

// 7) Ovoz
qSpeak.addEventListener("click", () => {
  const u = new SpeechSynthesisUtterance(questions[index].tr);
  u.lang = "tr-TR";
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
});

// 8) Keyingi savol yoki natija
qNext.addEventListener("click", () => {
  if (index < TOTAL - 1) {
    index++;
    showQuestion();
  } else {
    showResult();
  }
});

// 9) Natija
function showResult() {
  quizBox.hidden = true;
  resultBox.hidden = false;

  const percent = Math.round((score / TOTAL) * 100);
  document.getElementById("resTitle").textContent = `${score} / ${TOTAL} to'g'ri`;
  document.getElementById("resText").textContent = `Natijangiz: ${percent}%`;

  let emoji = "💪";
  if (percent >= 80) emoji = "🎉";
  else if (percent >= 50) emoji = "👍";
  document.getElementById("resEmoji").textContent = emoji;

  // Topshirilgan testlar sonini saqlash
  const done = Number(localStorage.getItem("testsDone")) || 0;
  localStorage.setItem("testsDone", done + 1);
}

document.getElementById("restart").addEventListener("click", startQuiz);

// 10) Boshlash
startQuiz();