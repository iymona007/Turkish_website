const levelInfo = document.getElementById("levelInfo");
const area = document.getElementById("practiceArea");
const tabBtns = document.querySelectorAll(".ptab");

const myLevel = getUserLevel();
const target = getTargetLevel();
const pool = wordsForUser();

// ===== Yordamchi funksiyalar =====
function mix(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function speakTR(text) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "tr-TR";
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
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

// ===== Daraja haqida ma'lumot =====
if (!myLevel) {
  levelInfo.innerHTML =
    `Darajangiz hali aniqlanmagan. <a href="daraja.html">Daraja testini topshiring</a>, ` +
    `shunda mashqlar sizga mos so'zlardan tuziladi. Hozircha <b>A1</b> so'zlari beriladi.`;
} else {
  levelInfo.innerHTML =
    `Sizning darajangiz: <b>${myLevel}</b>. Mashqlar <b>${target}</b> darajadagi so'zlardan tuzilgan. ` +
    `<a href="daraja.html">Testni qayta topshirish</a>`;
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
  const words = mix(pool).slice(0, 6);
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
    <p class="match-info">Turkcha so'zni, so'ng uning tarjimasini tanlang</p>`;

  area.querySelectorAll(".match-item").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("done")) return;

      // birinchi tanlov
      if (!selected) {
        selected = btn;
        btn.classList.add("picked");
        return;
      }

      // bir tomondagi boshqa tugma bosildi: tanlovni almashtirish
      if (selected.dataset.side === btn.dataset.side) {
        selected.classList.remove("picked");
        selected = btn;
        btn.classList.add("picked");
        return;
      }

      // juftlik tekshiruvi
      if (selected.dataset.id === btn.dataset.id) {
        selected.classList.remove("picked");
        selected.classList.add("done");
        btn.classList.add("done");
        speakTR(btn.dataset.id);
        done++; markLearned(btn.dataset.id);
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
  const qs = mix(pool).slice(0, 6);
  let i = 0;
  let score = 0;

  function show() {
    const q = qs[i];
    const wrong = mix(WORDS.filter(w => w.uz !== q.uz)).slice(0, 3);
    const options = mix([q, ...wrong]);

    area.innerHTML = `
      <p class="q-label">So'zni eshiting va tarjimasini tanlang (${i + 1} / ${qs.length})</p>
      <button class="speak-btn big" id="listenBtn">🔊</button>
      <div class="options">
        ${options.map(o => `<button class="option" data-uz="${o.uz}">${o.uz}</button>`).join("")}
      </div>
      <p class="p-feedback" id="pf"></p>
      <div class="p-actions" style="justify-content:flex-end">
        <button class="btn btn-red" id="nextBtn" disabled>${i === qs.length - 1 ? "Natija" : "Keyingi"}</button>
      </div>`;

    const pf = document.getElementById("pf");
    const nextBtn = document.getElementById("nextBtn");

    document.getElementById("listenBtn").addEventListener("click", () => speakTR(q.tr));
    speakTR(q.tr);

    area.querySelectorAll(".option").forEach(btn => {
      btn.addEventListener("click", () => {
        area.querySelectorAll(".option").forEach(b => {
          b.disabled = true;
          if (b.dataset.uz === q.uz) b.classList.add("correct");
        });

        if (btn.dataset.uz === q.uz) {
          score++; markLearned(q.tr);
          pf.textContent = `To'g'ri! ✅ ${q.tr} = ${q.uz}`;
          pf.className = "p-feedback ok";
        } else {
          btn.classList.add("wrong");
          pf.textContent = `Noto'g'ri ❌ ${q.tr} = ${q.uz}`;
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
function startType() {
  const qs = mix(pool).slice(0, 6);
  let i = 0;
  let score = 0;

  function show() {
    const q = qs[i];
    let checked = false;

    area.innerHTML = `
      <p class="q-label">Turkchasini yozing (${i + 1} / ${qs.length})</p>
      <div class="big-word">${q.emoji} ${q.uz}</div>
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
      pf.textContent = `Talaffuzi: [${q.pron}]`;
      pf.className = "p-feedback";
    });

    function check() {
      if (checked) {
        // keyingi savolga o'tish
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

      const exact = val.trim().toLowerCase() === q.tr.toLowerCase();
      const ok = exact || norm(val) === norm(q.tr);

      if (ok) {
        score++; markLearned(q.tr);
        pf.textContent = exact ? "To'g'ri! ✅" : `To'g'ri! ✅ Aniq yozilishi: ${q.tr}`;
        pf.className = "p-feedback ok";
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