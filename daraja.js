const PER_LEVEL = 4;               // har bir darajadan nechta savol
const TOTAL = PER_LEVEL * 4;

// Elementlar
const introBox = document.getElementById("introBox");
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const qCount = document.getElementById("qCount");
const qLevel = document.getElementById("qLevel");
const qBar = document.getElementById("qBar");
const qWord = document.getElementById("qWord");
const qSpeak = document.getElementById("qSpeak");
const optionsEl = document.getElementById("options");
const feedback = document.getElementById("feedback");
const qNext = document.getElementById("qNext");

// Holat
let questions = [];
let index = 0;
let scores = { A1: 0, A2: 0, B1: 0, B2: 0 };

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// Testni boshlash: avval oson (A1), keyin qiyin (A2) savollar
function startTest() {
  questions = ["A1", "A2", "B1", "B2"].flatMap(l =>
    shuffle(WORDS.filter(w => w.level === l)).slice(0, PER_LEVEL));
  index = 0;
  scores = { A1: 0, A2: 0, B1: 0, B2: 0 };

  introBox.hidden = true;
  resultBox.hidden = true;
  quizBox.hidden = false;
  showQuestion();
}

function showQuestion() {
  const q = questions[index];

  qWord.textContent = q.tr;
  qCount.textContent = `${index + 1} / ${TOTAL}`;
  qLevel.textContent = q.level;
  qBar.style.width = (index / TOTAL) * 100 + "%";
  feedback.textContent = "";
  feedback.className = "";
  qNext.disabled = true;
  qNext.textContent = index === TOTAL - 1 ? "Natija" : "Keyingi";

  // noto'g'ri variantlar
  const wrong = shuffle(WORDS.filter(w => w.uz !== q.uz)).slice(0, 3);
  const choices = shuffle([q, ...wrong]);

  optionsEl.innerHTML = choices.map(c =>
    `<button class="option" data-uz="${c.uz}">${c.uz}</button>`
  ).join("");
}

// Javob tanlash
optionsEl.addEventListener("click", e => {
  const btn = e.target.closest(".option");
  if (!btn) return;

  const q = questions[index];
  optionsEl.querySelectorAll(".option").forEach(b => {
    b.disabled = true;
    if (b.dataset.uz === q.uz) b.classList.add("correct");
  });

  if (btn.dataset.uz === q.uz) {
    scores[q.level]++;
    feedback.textContent = "To'g'ri! ✅";
    feedback.className = "ok";
  } else {
    btn.classList.add("wrong");
    feedback.textContent = "Noto'g'ri ❌";
    feedback.className = "no";
  }
  qNext.disabled = false;
});

// Ovoz
qSpeak.addEventListener("click", () => {
  const u = new SpeechSynthesisUtterance(questions[index].tr);
  u.lang = "tr-TR";
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
});

// Keyingi
qNext.addEventListener("click", () => {
  if (index < TOTAL - 1) {
    index++;
    showQuestion();
  } else {
    showResult();
  }
});

// Natija
function showResult() {
  quizBox.hidden = true;
  resultBox.hidden = false;

  let level = "A0";
  let text = "Hech qisi yo'q, endi boshlaysiz! Darslarni 1-darsdan o'rganing.";

  const msgs = {
    A1: "Siz oddiy so'zlar va iboralarni bilasiz. A2 ga tayyorlaning!",
    A2: "Ajoyib! Siz kundalik muloqot uchun yetarli so'zlarni bilasiz.",
    B1: "Zo'r! Siz o'rta darajadasiz, murakkabroq gaplarni tushunasiz.",
    B2: "Mukammal! Siz turk tilini yuqori darajada bilasiz.",
  };
  for (const l of ["A1", "A2", "B1", "B2"]) {
    if (scores[l] >= 3) { level = l; text = msgs[l]; } else break;
  }

  document.getElementById("resLevel").textContent = level;
  document.getElementById("resTitle").textContent = `Sizning darajangiz: ${level}`;
  document.getElementById("resText").textContent = text;
  document.getElementById("resDetail").textContent =
    ["A1", "A2", "B1", "B2"].map(l => `${l}: ${scores[l]} / ${PER_LEVEL}`).join("  •  ");

const totalCorrect = Object.values(scores).reduce(
  (sum, score) => sum + score,
  0
);

const percent = Math.round((totalCorrect / TOTAL) * 100);

const progress = Math.round(
  (scores[level] / PER_LEVEL) * 100
);

const result = {
  code: level,
  name: level === "A0" ? "Boshlang‘ich" : level,
  desc: text,
  score: totalCorrect,
  percent: percent,
  progress: progress
};

localStorage.setItem("userLevel", level);
localStorage.setItem(
  "turkcePlacementResult",
  JSON.stringify(result)
);

}

document.getElementById("startBtn").addEventListener("click", startTest);
document.getElementById("restart").addEventListener("click", startTest);