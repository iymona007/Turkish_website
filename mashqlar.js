const levelInfo = document.getElementById("levelInfo");
const area = document.getElementById("practiceArea");
const tabBtns = document.querySelectorAll(".ptab");

const myLevel = getUserLevel();
const target = getTargetLevel();
const lvIdx = LEVEL_ORDER.indexOf(target); // 0=A1, 1=A2, 2=B1, 3=B2

// ===== 1) Barcha so'zlar bazasi: data.js + samimiy.js + rasmiy.js =====
function buildBank() {
  const seen = new Set();
  const out = [];
  const add = (list) =>
    (list || []).forEach((w) => {
      if (!w || Array.isArray(w) || !w.tr || !w.uz || !w.level) return;
      const k = w.tr.trim().toLowerCase();
      if (seen.has(k)) return;
      seen.add(k);
      out.push(w);
    });
  add(WORDS);
  add(typeof SAMIMIY_WORDS !== "undefined" ? SAMIMIY_WORDS : []);
  add(typeof RASMIY_WORDS !== "undefined" ? RASMIY_WORDS : []);
  return out;
}
const BANK = buildBank();

// ===== 2) Qiyinlik darajalari =====
const CFGS = [
  { pairs: 5,  qs: 6,  opts: 4, rate: 0.8, sentence: false, cloze: false, strict: false, emoji: true,  hint: "pron",
    note: "oddiy so'zlar, sekin talaffuz, 4 ta variant" },
  { pairs: 6,  qs: 8,  opts: 4, rate: 0.9, sentence: false, cloze: false, strict: false, emoji: true,  hint: "pron",
    note: "ko'proq savol, o'xshash variantlar" },
  { pairs: 8,  qs: 10, opts: 5, rate: 1.0, sentence: true,  cloze: false, strict: false, emoji: false, hint: "first",
    note: "gaplarni eshitib tushunish, rasmsiz, 5 ta variant" },
  { pairs: 10, qs: 12, opts: 6, rate: 1.1, sentence: true,  cloze: true,  strict: true,  emoji: false, hint: "len",
    note: "tez nutq, 6 ta variant, gapdagi bo'shliqni to'ldirish, turkcha harflar aniq bo'lishi shart" },
];
const CFG = CFGS[lvIdx];

// Shu darajadagi so'zlar; yetmasa qo'shni darajalardan to'ldiriladi
function getPool() {
  let p = BANK.filter((w) => w.level === target);
  const need = Math.max(CFG.qs, CFG.pairs) * 2;
  for (let i = lvIdx - 1; p.length < need && i >= 0; i--)
    p = p.concat(BANK.filter((w) => w.level === LEVEL_ORDER[i]));
  for (let i = lvIdx + 1; p.length < need && i < LEVEL_ORDER.length; i++)
    p = p.concat(BANK.filter((w) => w.level === LEVEL_ORDER[i]));
  return p;
}

// ===== Yordamchi funksiyalar =====
function mix(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function speakTR(text, rate = CFG.rate) {
  if (!("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "tr-TR";
  u.rate = rate;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

function learn(tr) {
  if (typeof markLearned === "function") markLearned(tr);
}

// Turkcha harflarsiz yozilganini ham to'g'ri deb qabul qilish (ş=s, ı=i, ğ=g ...)
function norm(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/\s+/g, " ")
    .trim();
}

const lc = (s) => s.trim().toLocaleLowerCase("tr-TR");
const letters = (s) => s.replace(/\s/g, "").length;

// Noto'g'ri variantlar: avval shu kategoriya va daraja bo'yicha (o'xshash)
function distractors(q, n, key) {
  const seen = new Set([q[key]]);
  const cands = mix(BANK.filter((w) => w.tr !== q.tr && w[key]))
    .map((w) => ({ w, s: (w.cat === q.cat ? 2 : 0) + (w.level === q.level ? 1 : 0) }))
    .sort((a, b) => b.s - a.s);
  const out = [];
  for (const { w } of cands) {
    if (seen.has(w[key])) continue;
    seen.add(w[key]);
    out.push(w);
    if (out.length === n) break;
  }
  return out;
}

// Gapdagi so'zni "_____" bilan almashtirish (faqat so'z o'zgarmagan bo'lsa)
function clozeOf(w) {
  if (!w.ex) return null;
  const s = w.ex.toLocaleLowerCase("tr-TR");
  const t = w.tr.toLocaleLowerCase("tr-TR");
  const i = s.indexOf(t);
  if (i < 0) return null;
  const before = w.ex[i - 1] || "";
  const after = w.ex[i + t.length] || "";
  if (/\p{L}/u.test(before) || /\p{L}/u.test(after)) return null;
  return w.ex.slice(0, i) + "_____" + w.ex.slice(i + t.length);
}

// ===== Daraja haqida ma'lumot =====
const stars = "★".repeat(lvIdx + 1) + "☆".repeat(LEVEL_ORDER.length - 1 - lvIdx);
const diffLine = `<br>Qiyinlik: <b>${stars}</b> (${CFG.note})`;

if (!myLevel) {
  levelInfo.innerHTML =
    `Darajangiz hali aniqlanmagan. <a href="daraja.html">Daraja testini topshiring</a>, ` +
    `shunda mashqlar sizga mos so'zlardan tuziladi. Hozircha <b>A1</b> so'zlari beriladi.` + diffLine;
} else {
  levelInfo.innerHTML =
    `Sizning darajangiz: <b>${myLevel}</b>. Mashqlar <b>${target}</b> darajadagi so'zlardan tuzilgan. ` +
    `<a href="daraja.html">Testni qayta topshirish</a>` + diffLine;
}

// ===== Yakuniy ekran =====
function finish(title, detail, again) {
  const done = Number(localStorage.getItem("practiceDone")) || 0;
  localStorage.setItem("practiceDone", done + 1);

  area.innerHTML = `
    <div class="result">
      <div class="result-emoji">🎉</div>
      <h2>${title}</h2>
      <p>${detail}</p>
      <div class="result-buttons">
        <button class="btn btn-red" id="againBtn">Yana mashq qilish</button>
        <a href="dashboard.html" class="btn btn-light">Dashboard</a>
      </div>
    </div>`;
  document.getElementById("againBtn").addEventListener("click", again);
}

// ===== 1) JUFTLASH =====
function startMatch() {
  const seenUz = new Set();
  const words = mix(getPool())
    .filter((w) => !seenUz.has(w.uz) && seenUz.add(w.uz))
    .slice(0, CFG.pairs);
  const left = mix(words);
  const right = mix(words);
  let selected = null;
  let done = 0;
  let mistakes = 0;

  area.innerHTML = `
    <div class="match-grid">
      <div class="match-col">
        ${left.map(w => `<button class="match-item" data-side="tr" data-id="${w.tr}">${w.tr}</button>`).join("")}
      </div>
      <div class="match-col">
        ${right.map(w => `<button class="match-item" data-side="uz" data-id="${w.tr}">${w.uz}</button>`).join("")}
      </div>
    </div>
    <p class="match-info">Turkcha so'zni, so'ng uning tarjimasini tanlang (${words.length} ta juftlik)</p>`;

  area.querySelectorAll(".match-item").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("done")) return;

      if (!selected) {
        selected = btn;
        btn.classList.add("picked");
        return;
      }

      if (selected.dataset.side === btn.dataset.side) {
        selected.classList.remove("picked");
        selected = btn;
        btn.classList.add("picked");
        return;
      }

      if (selected.dataset.id === btn.dataset.id) {
        selected.classList.remove("picked");
        selected.classList.add("done");
        btn.classList.add("done");
        speakTR(btn.dataset.id);
        done++;
        learn(btn.dataset.id);
        selected = null;

        if (done === words.length) {
          setTimeout(() => {
            finish("Barcha juftliklar topildi!", `Xatolar soni: ${mistakes}`, startMatch);
          }, 600);
        }
      } else {
        mistakes++;
        const first = selected;
        first.classList.remove("picked");
        first.classList.add("wrong");
        btn.classList.add("wrong");
        selected = null;
        setTimeout(() => {
          first.classList.remove("wrong");
          btn.classList.remove("wrong");
        }, 400);
      }
    });
  });
}

// ===== 2) ESHITIB TOPISH =====
function startListen() {
  const pool = getPool();
  const has = (w) => w.ex && w.exUz;
  const qs = CFG.sentence
    ? [...mix(pool.filter(has)), ...mix(pool.filter((w) => !has(w)))].slice(0, CFG.qs)
    : mix(pool).slice(0, CFG.qs);
  let i = 0;
  let score = 0;

  function show() {
    const q = qs[i];
    const sentence = CFG.sentence && has(q);
    const key = sentence ? "exUz" : "uz";
    const spoken = sentence ? q.ex : q.tr;
    const options = mix([q, ...distractors(q, CFG.opts - 1, key)]);
    const correctIdx = options.indexOf(q);
    const label = sentence
      ? "Gapni eshiting va tarjimasini tanlang"
      : "So'zni eshiting va tarjimasini tanlang";

    area.innerHTML = `
      <p class="q-label">${label} (${i + 1} / ${qs.length})</p>
      <button class="speak-btn big" id="listenBtn">🔊</button>
      <button class="speak-btn" id="slowBtn" title="Sekinroq">🐢</button>
      <div class="options">
        ${options.map((o, n) => `<button class="option" data-i="${n}">${o[key]}</button>`).join("")}
      </div>
      <p class="p-feedback" id="pf"></p>
      <div class="p-actions" style="justify-content:flex-end">
        <button class="btn btn-red" id="nextBtn" disabled>${i === qs.length - 1 ? "Natija" : "Keyingi"}</button>
      </div>`;

    const pf = document.getElementById("pf");
    const nextBtn = document.getElementById("nextBtn");

    document.getElementById("listenBtn").addEventListener("click", () => speakTR(spoken));
    document.getElementById("slowBtn").addEventListener("click", () => speakTR(spoken, 0.6));
    speakTR(spoken);

    area.querySelectorAll(".option").forEach(btn => {
      btn.addEventListener("click", () => {
        area.querySelectorAll(".option").forEach(b => {
          b.disabled = true;
          if (Number(b.dataset.i) === correctIdx) b.classList.add("correct");
        });

        const shown = sentence ? `${q.ex} = ${q.exUz}` : `${q.tr} = ${q.uz}`;
        if (Number(btn.dataset.i) === correctIdx) {
          score++;
          learn(q.tr);
          pf.textContent = `To'g'ri! ✅ ${shown}`;
          pf.className = "p-feedback ok";
        } else {
          btn.classList.add("wrong");
          pf.textContent = `Noto'g'ri ❌ ${shown}`;
          pf.className = "p-feedback no";
        }
        nextBtn.disabled = false;
      });
    });

    nextBtn.addEventListener("click", () => {
      if (i < qs.length - 1) {
        i++;
        show();
      } else {
        finish(`${score} / ${qs.length} to'g'ri`, "Eshitib tushunish mashqi tugadi.", startListen);
      }
    });
  }

  show();
}

// ===== 3) YOZIB TARJIMA =====
function hintText(q) {
  if (CFG.hint === "pron") return `Talaffuzi: [${q.pron}]`;
  if (CFG.hint === "first") return `Birinchi harf: ${q.tr[0]} • harflar soni: ${letters(q.tr)}`;
  return `Harflar soni: ${letters(q.tr)}`;
}

function startType() {
  const pool = getPool();
  const qs = CFG.cloze
    ? [...mix(pool.filter(clozeOf)), ...mix(pool.filter((w) => !clozeOf(w)))].slice(0, CFG.qs)
    : mix(pool).slice(0, CFG.qs);
  let i = 0;
  let score = 0;

  function show() {
    const q = qs[i];
    const cloze = CFG.cloze ? clozeOf(q) : null;
    let checked = false;

    const prompt = cloze
      ? `<p class="q-label">Bo'sh joyga mos turkcha so'zni yozing (${i + 1} / ${qs.length})</p>
         <div class="big-word" style="font-size:22px">${cloze}</div>
         <p class="match-info">Ma'nosi: ${q.uz}</p>`
      : `<p class="q-label">Turkchasini yozing (${i + 1} / ${qs.length})</p>
         <div class="big-word">${CFG.emoji ? q.emoji + " " : ""}${q.uz}</div>`;

    area.innerHTML = `
      ${prompt}
      <input class="type-input" id="typeInput" placeholder="Turkcha yozing..." autocomplete="off">
      <p class="p-feedback" id="pf"></p>
      <div class="p-actions">
        <button class="btn btn-light" id="hintBtn">💡 Maslahat</button>
        <button class="btn btn-red" id="checkBtn">Tekshirish</button>
      </div>`;

    const input = document.getElementById("typeInput");
    const pf = document.getElementById("pf");
    const checkBtn = document.getElementById("checkBtn");
    input.focus();

    document.getElementById("hintBtn").addEventListener("click", () => {
      pf.textContent = hintText(q);
      pf.className = "p-feedback";
    });

    function check() {
      if (checked) {
        if (i < qs.length - 1) {
          i++;
          show();
        } else {
          finish(`${score} / ${qs.length} to'g'ri`, "Yozma mashq tugadi.", startType);
        }
        return;
      }

      const val = input.value;
      if (!val.trim()) return;
      checked = true;
      input.readOnly = true;

      const exact = lc(val) === lc(q.tr);
      const loose = norm(val) === norm(q.tr);

      if (exact || (!CFG.strict && loose)) {
        score++;
        learn(q.tr);
        pf.textContent = exact ? "To'g'ri! ✅" : `To'g'ri! ✅ Aniq yozilishi: ${q.tr}`;
        pf.className = "p-feedback ok";
      } else if (loose) {
        pf.textContent = `Deyarli! Turkcha harflar bilan yozing: ${q.tr}`;
        pf.className = "p-feedback no";
      } else {
        pf.textContent = `Noto'g'ri ❌ To'g'ri javob: ${q.tr}`;
        pf.className = "p-feedback no";
      }

      speakTR(q.tr);
      checkBtn.textContent = i === qs.length - 1 ? "Natija" : "Keyingi";
    }

    checkBtn.addEventListener("click", check);
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") check();
    });
  }

  show();
}

// ===== Tablar =====
const modes = { match: startMatch, listen: startListen, type: startType };

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    modes[btn.dataset.mode]();
  });
});

startMatch();
