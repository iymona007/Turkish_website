"use strict";

// ===== 1) Qo'lda yozilgan boshlang'ich darslar (A1) =====
const baseLessons = [
  {
    name: "Salomlashuv",
    desc: "Turk tilida salomlashish juda muhim. Bu darsda asosiy salomlashuv iboralarini o'rganamiz.",
    words: [
      { tr: "Merhaba", pron: "merhaba", uz: "Salom" },
      { tr: "Günaydın", pron: "gyunaydin", uz: "Xayrli tong" },
      { tr: "İyi akşamlar", pron: "iyi akshamlar", uz: "Xayrli kech" },
      { tr: "Hoşça kal", pron: "hoshcha kal", uz: "Xayr bo'l" }
    ]
  },
  {
    name: "Minnatdorchilik",
    desc: "Rahmat aytish va kechirim so'rashni o'rganamiz.",
    words: [
      { tr: "Teşekkür ederim", pron: "teshekkür ederim", uz: "Rahmat" },
      { tr: "Lütfen", pron: "lyutfen", uz: "Iltimos" },
      { tr: "Özür dilerim", pron: "ozyur dilerim", uz: "Kechirasiz" },
      { tr: "Rica ederim", pron: "rija ederim", uz: "Arzimaydi" }
    ]
  },
  {
    name: "Oila",
    desc: "Oila a'zolarining nomlarini o'rganamiz.",
    words: [
      { tr: "Anne", pron: "anne", uz: "Ona" },
      { tr: "Baba", pron: "baba", uz: "Ota" },
      { tr: "Kardeş", pron: "kardesh", uz: "Aka-uka, opa-singil" },
      { tr: "Aile", pron: "aile", uz: "Oila" }
    ]
  }
].map((l) => ({
  ...l,
  level: "A1",
  icon: "",
  words: l.words.map((w) => ({ ...w, level: "A1" }))
}));

// ===== 2) Qolgan darslar so'z bazalaridan avtomatik tuziladi =====
const SIZE = { A1: 4, A2: 5, B1: 6, B2: 7 }; // daraja oshgani sari dars uzunroq
const baseTr = new Set(
  baseLessons.flatMap((l) => l.words.map((w) => w.tr.toLowerCase()))
);

function collect() {
  const seen = new Set(baseTr);
  const items = [];
  const add = (list, source, cats, icon) =>
    (list || []).forEach((w) => {
      if (!w || Array.isArray(w) || !w.tr || !w.uz || !w.level) return;
      const k = w.tr.trim().toLowerCase();
      if (seen.has(k)) return;
      seen.add(k);
      items.push({ ...w, source, catName: (cats && cats[w.cat]) || w.cat || "Umumiy", icon });
    });
  add(WORDS, "data", typeof CATEGORIES !== "undefined" ? CATEGORIES : {}, "");
  add(typeof SAMIMIY_WORDS !== "undefined" ? SAMIMIY_WORDS : [], "samimiy",
      typeof SAMIMIY_CATEGORIES !== "undefined" ? SAMIMIY_CATEGORIES : {}, "💬 ");
  add(typeof RASMIY_WORDS !== "undefined" ? RASMIY_WORDS : [], "rasmiy",
      typeof RASMIY_CATEGORIES !== "undefined" ? RASMIY_CATEGORIES : {}, "🏛️ ");
  return items;
}

function buildGeneratedLessons() {
  const groups = new Map();
  collect().forEach((w) => {
    const key = `${w.level}|${w.source}|${w.cat}`;
    if (!groups.has(key)) groups.set(key, { level: w.level, icon: w.icon, name: w.catName, words: [] });
    groups.get(key).words.push(w);
  });

  const out = [];
  groups.forEach((g) => {
    const size = SIZE[g.level] || 5;
    const chunks = [];
    for (let i = 0; i < g.words.length; i += size) chunks.push(g.words.slice(i, i + size));
    // Oxirgi bo'lak juda kichik bo'lsa, oldingisiga qo'shiladi
    if (chunks.length > 1 && chunks[chunks.length - 1].length < 3) {
      chunks[chunks.length - 2].push(...chunks.pop());
    }
    chunks.forEach((words, i) => {
      out.push({
        level: g.level,
        name: `${g.icon}${g.name}${chunks.length > 1 ? ` (${i + 1})` : ""}`,
        desc: `${g.level} daraja. Bu darsda ${words.length} ta so'z va ularning misol gaplari bor.`,
        words
      });
    });
  });
  return out;
}

const LEVELS = ["A1", "A2", "B1", "B2"];
const allLessons = [...baseLessons, ...buildGeneratedLessons()].sort(
  (a, b) => LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level)
);

// ===== 3) Daraja bo'yicha filtr =====
let filter = localStorage.getItem("lessonFilter") || "mine";

function activeLevel() {
  return filter === "mine" ? getTargetLevel() : filter;
}

function currentList() {
  if (filter === "all") return allLessons;
  const lv = activeLevel();
  const list = allLessons.filter((l) => l.level === lv);
  return list.length ? list : allLessons;
}

let lessons = currentList();

// ===== 4) HTML elementlari =====
const titleEl = document.getElementById("lessonTitle");
const descEl = document.getElementById("lessonDesc");
const wordsEl = document.getElementById("lessonWords");
const barEl = document.getElementById("progressBar");
const textEl = document.getElementById("progressText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Daraja tanlash (JS o'zi qo'shadi, HTML o'zgartirish shart emas)
const style = document.createElement("style");
style.textContent = `
  .lv-filter{margin-bottom:12px}
  .lv-filter select{padding:8px 12px;border-radius:10px;border:1px solid #ddd;font-size:14px;background:#fff}
  .lv-badge{font-size:12px;background:#ffe3e3;color:#c0392b;border-radius:8px;padding:2px 8px;margin-left:8px;vertical-align:middle}
  .lw-ex{display:block;margin-top:8px;font-size:13px;color:#444}
  .lw-exuz{display:block;margin-top:2px;color:#888}
  .lw-exuz.hide{filter:blur(5px);cursor:pointer;user-select:none}
  .lesson-word .ex-speak{width:auto;height:auto;background:none;border:0;padding:0 4px;font-size:14px;box-shadow:none}
`;
document.head.appendChild(style);

const filterBox = document.createElement("div");
filterBox.className = "lv-filter";
filterBox.innerHTML = `
  <select id="lvSel">
    <option value="mine">Mening darajam (${getTargetLevel()})</option>
    <option value="A1">A1 darslari</option>
    <option value="A2">A2 darslari</option>
    <option value="B1">B1 darslari</option>
    <option value="B2">B2 darslari</option>
    <option value="all">Barcha darslar</option>
  </select>`;
titleEl.parentElement.insertBefore(filterBox, titleEl);
const lvSel = document.getElementById("lvSel");
lvSel.value = filter;

// ===== 5) Saqlangan ma'lumotlar =====
let current = Number(localStorage.getItem("currentLesson") || 0);
if (!Number.isInteger(current) || current < 0 || current >= lessons.length) current = 0;

let liked = [];
try {
  const saved = JSON.parse(localStorage.getItem("savedWords") || "[]");
  liked = Array.isArray(saved) ? saved : [];
} catch (error) {
  liked = [];
}

// ===== 6) Yordamchi =====
function shuffleWords(words) {
  const result = [...words];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function say(text, rate = 1) {
  if (!("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "tr-TR";
  u.rate = rate;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

// ===== 7) Darsni ekranga chiqarish =====
function showLesson() {
  const lesson = lessons[current];
  const hardLevel = lesson.level === "B1" || lesson.level === "B2"; // gap tarjimasi yashirin

  titleEl.innerHTML = `${current + 1}-dars: ${esc(lesson.name)}<span class="lv-badge">${lesson.level}</span>`;
  descEl.textContent = lesson.desc;

  wordsEl.innerHTML = shuffleWords(lesson.words).map(w => `
    <div class="lesson-word">
      <button type="button" class="heart ${liked.includes(w.tr.toLowerCase()) ? "liked" : ""}"
        data-word="${esc(w.tr)}">❤️</button>

      <div class="lw-text">
        <b>${w.emoji ? w.emoji + " " : ""}${w.tr}</b>
        <small>[${w.pron}]</small>
        <span>${w.uz}</span>
        ${w.ex ? `
          <span class="lw-ex">${w.ex}
            <button type="button" class="speak-btn ex-speak" data-say="${esc(w.ex)}" title="Gapni eshitish">🔊</button>
            <span class="lw-exuz ${hardLevel ? "hide" : ""}" ${hardLevel ? 'title="Tarjimani ko\'rish uchun bosing"' : ""}>${w.exUz || ""}</span>
          </span>` : ""}
      </div>

      <button type="button" class="speak-btn" data-word="${esc(w.tr)}">🔊</button>
    </div>
  `).join("");

  textEl.textContent = `${current + 1} / ${lessons.length}`;
  barEl.style.width = `${((current + 1) / lessons.length) * 100}%`;
  prevBtn.disabled = current === 0;
  nextBtn.textContent = current === lessons.length - 1 ? "Yakunlash ✓" : "Keyingi";

  localStorage.setItem("currentLesson", current);
  localStorage.setItem("totalLessons", lessons.length);
  if (typeof markLearned === "function") lesson.words.forEach(w => markLearned(w.tr));
}

// ===== 8) Daraja o'zgartirilsa =====
lvSel.addEventListener("change", () => {
  filter = lvSel.value;
  localStorage.setItem("lessonFilter", filter);
  lessons = currentList();
  current = 0;
  showLesson();
  window.scrollTo(0, 0);
});

// ===== 9) Keyingi / oldingi =====
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

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    showLesson();
    window.scrollTo(0, 0);
  }
});

// ===== 10) Ovoz, yurakcha, gap tarjimasi =====
wordsEl.addEventListener("click", event => {
  const speak = event.target.closest(".speak-btn");
  const heart = event.target.closest(".heart");
  const hidden = event.target.closest(".lw-exuz.hide");

  if (speak) say(speak.dataset.say || speak.dataset.word);

  if (hidden) hidden.classList.remove("hide");

  if (heart) {
    const word = heart.dataset.word.toLowerCase();
    liked = liked.includes(word) ? liked.filter(item => item !== word) : [...liked, word];
    localStorage.setItem("savedWords", JSON.stringify(liked));
    heart.classList.toggle("liked", liked.includes(word));
  }
});

// ===== 11) Boshlash =====
showLesson();