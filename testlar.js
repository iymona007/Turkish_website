const TOTAL = 10;

// 1. So'zlarni olish (massiv bo'lsa obyektga aylantiramiz)
function getWords(source) {
  if (!Array.isArray(source)) return [];

  return source.map((w) => {
    if (Array.isArray(w)) {
      const [tr, pron, uz, cat, level, emoji, ex, exUz] = w;
      return { tr, pron, uz, cat, level, emoji, ex, exUz };
    }
    return w;
  });
}

// SAMIMIY_WORDS va RASMIY_WORDS bu fayldan OLDIN yuklangan bo'lishi kerak
const samimiyWords = getWords(
  typeof SAMIMIY_WORDS !== "undefined" ? SAMIMIY_WORDS : []
);
const rasmiyWords = getWords(
  typeof RASMIY_WORDS !== "undefined" ? RASMIY_WORDS : []
);

// 2. Ikkala bazani birlashtirish (takrorlarsiz)
const allWords = [...samimiyWords, ...rasmiyWords]
  .filter((w) => w.tr && w.uz && w.level)
  .filter((w) => ["A1", "A2", "B1", "B2"].includes(w.level))
  .filter(
    (w, i, arr) =>
      arr.findIndex(
        (x) => x.tr.trim().toLowerCase() === w.tr.trim().toLowerCase()
      ) === i
  );

// 3. HTML elementlari
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const qCount = document.getElementById("qCount");
const qScore = document.getElementById("qScore");
const qBar = document.getElementById("qBar");
const qWord = document.getElementById("qWord");
const qLabel = document.getElementById("qLabel");
const qSpeak = document.getElementById("qSpeak");
const optionsEl = document.getElementById("options");
const feedback = document.getElementById("feedback");
const qNext = document.getElementById("qNext");
const levelSelect = document.getElementById("levelSelect");
const dirSelect = document.getElementById("dirSelect");

// 4. Test holati
let questions = [];
let index = 0;
let score = 0;
let answered = false;

// 5. Aralashtirish
function shuffle(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Savol yo'nalishiga qarab to'g'ri javob matni
const answerOf = (w, dir) => (dir === "tr-uz" ? w.uz : w.tr);

// 6. Testni boshlash
function startQuiz() {
  const level = levelSelect?.value || "all";
  const dir = dirSelect?.value || "mix";

  const pool =
    level === "all" ? allWords : allWords.filter((w) => w.level === level);

  if (pool.length < 4) {
    alert(`${level} darajasida test tuzish uchun so'zlar yetarli emas.`);
    return;
  }

  const total = Math.min(TOTAL, pool.length);

  questions = shuffle(pool)
    .slice(0, total)
    .map((w) => ({
      ...w,
      dir: dir === "mix" ? (Math.random() < 0.5 ? "tr-uz" : "uz-tr") : dir,
    }));

  index = 0;
  score = 0;
  answered = false;

  quizBox.hidden = false;
  resultBox.hidden = true;

  showQuestion();
}

// 7. Savolni ko'rsatish
function showQuestion() {
  const q = questions[index];
  const total = questions.length;
  const toUz = q.dir === "tr-uz";

  answered = false;

  qWord.textContent = toUz ? q.tr : q.uz;
  qLabel.textContent = toUz
    ? "Bu so'zning tarjimasi nima?"
    : "Bu so'zning turkchasi qaysi?";

  // O'zbekcha → turkcha savolda ovoz tugmasi javobdan keyin ko'rinadi
  qSpeak.style.visibility = toUz ? "visible" : "hidden";

  qCount.textContent = `${index + 1} / ${total}`;
  qScore.textContent = `⭐ ${score}`;
  qBar.style.width = `${(index / total) * 100}%`;

  feedback.textContent = "";
  feedback.className = "";
  qNext.disabled = true;
  qNext.textContent = index === total - 1 ? "Natija" : "Keyingi";

  // Noto'g'ri variantlar: javoblari bir-biridan farqli bo'lsin
  const others = allWords.filter((w) => w.tr !== q.tr && w.uz !== q.uz);

  const unique = (arr) =>
    arr.filter(
      (w, i, a) =>
        a.findIndex((x) => answerOf(x, q.dir) === answerOf(w, q.dir)) === i
    );

  let wrong = unique(
    shuffle(others.filter((w) => w.level === q.level))
  ).slice(0, 3);

  // Shu darajada yetmasa, boshqa darajalardan to'ldiramiz
  if (wrong.length < 3) {
    const extra = unique(shuffle(others)).filter(
      (w) => !wrong.some((x) => answerOf(x, q.dir) === answerOf(w, q.dir))
    );
    wrong = [...wrong, ...extra.slice(0, 3 - wrong.length)];
  }

  const choices = shuffle([q, ...wrong]);

  optionsEl.innerHTML = "";

  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = answerOf(choice, q.dir);
    button.dataset.answer = answerOf(choice, q.dir);
    optionsEl.appendChild(button);
  });
}

// 8. Javobni tekshirish
optionsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".option");
  if (!btn || answered) return;

  answered = true;
  qSpeak.style.visibility = "visible";

  const current = questions[index];
  const correct = answerOf(current, current.dir);

  optionsEl.querySelectorAll(".option").forEach((button) => {
    button.disabled = true;
    if (button.dataset.answer === correct) button.classList.add("correct");
  });

  if (btn.dataset.answer === correct) {
    score++;
    feedback.textContent = "To'g'ri! ✅";
    feedback.className = "ok";

    // O'rganilgan so'zni eslab qolish (statistika uchun)
    if (typeof markLearned === "function") {
      markLearned(current.tr);
    } else {
      try {
        const learned = JSON.parse(localStorage.getItem("learnedList") || "[]");
        const key = current.tr.toLowerCase();
        if (!learned.includes(key)) {
          learned.push(key);
          localStorage.setItem("learnedList", JSON.stringify(learned));
        }
      } catch (error) {
        console.warn("O'rganilgan so'z saqlanmadi:", error);
      }
    }
  } else {
    btn.classList.add("wrong");
    feedback.textContent = `Noto'g'ri ❌ To'g'ri javob: ${correct}`;
    feedback.className = "no";
  }

  qScore.textContent = `⭐ ${score}`;
  qNext.disabled = false;
});

// 9. Turkcha talaffuzni eshitish
qSpeak.addEventListener("click", () => {
  if (!questions[index]) return;

  if (!("speechSynthesis" in window)) {
    feedback.textContent =
      "Brauzeringiz ovozli o'qishni qo'llab-quvvatlamaydi.";
    return;
  }

  const utterance = new SpeechSynthesisUtterance(questions[index].tr);
  utterance.lang = "tr-TR";

  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
});

// 10. Keyingi savol
qNext.addEventListener("click", () => {
  if (index < questions.length - 1) {
    index++;
    showQuestion();
  } else {
    showResult();
  }
});

// 11. Natijani ko'rsatish
function showResult() {
  quizBox.hidden = true;
  resultBox.hidden = false;

  const total = questions.length;
  const percent = Math.round((score / total) * 100);

  document.getElementById("resTitle").textContent = `${score} / ${total} to'g'ri`;
  document.getElementById("resText").textContent = `Natijangiz: ${percent}%`;

  let emoji = "💪";
  if (percent >= 80) emoji = "🎉";
  else if (percent >= 50) emoji = "👍";

  document.getElementById("resEmoji").textContent = emoji;

  // Topshirilgan testlar sonini saqlash
  try {
    const done = Number(localStorage.getItem("testsDone")) || 0;
    localStorage.setItem("testsDone", done + 1);
  } catch (error) {
    console.warn("Test natijasi saqlanmadi:", error);
  }

  qBar.style.width = "100%";
}

// 12. Qayta boshlash va sozlamalar o'zgarganda
document.getElementById("restart").addEventListener("click", startQuiz);
levelSelect?.addEventListener("change", startQuiz);
dirSelect?.addEventListener("change", startQuiz);

// 13. Testni ishga tushirish
if (allWords.length < 4) {
  console.error(
    "So'zlar topilmadi. So'z bazasi fayllarini testlar.js dan oldin ulang."
  );
} else {
  startQuiz();
}