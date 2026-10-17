"use strict";

// Ulash tartibi: rasmiy.js -> samimiy.js -> saved-rasmiy-test.js
// Test sahifaning pastiga qo'shiladi. Aniq joyga qo'yish uchun: <div id="wtMount"></div>
(function () {
  document.getElementById("wtRoot")?.remove();
  document.getElementById("wtStyle")?.remove();

  const style = document.createElement("style");
  style.id = "wtStyle";
  style.textContent = `#wtRoot{--c:#e30a17;max-width:620px;margin:30px auto;background:#fff;color:#1f2937;border-radius:22px;padding:22px;box-shadow:0 8px 30px rgba(0,0,0,.08);font-family:Arial,sans-serif;box-sizing:border-box}
#wtRoot .tabs{display:flex;gap:10px;margin-bottom:18px}
#wtRoot .tab{flex:1;padding:13px;border:1px solid #e5e7eb;border-radius:12px;background:#fff;color:#1f2937;font-weight:700;cursor:pointer}
#wtRoot .tab.on{background:var(--c);color:#fff;border-color:var(--c)}
#wtRoot .head{display:flex;justify-content:space-between;align-items:center}
#wtRoot h2{color:var(--c);margin:0;font-size:22px}
#wtRoot .ring{width:60px;height:60px;border-radius:50%;border:5px solid var(--c);display:flex;align-items:center;justify-content:center;font-weight:700}
#wtRoot .chips{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0 0}
#wtRoot .chip{padding:7px 14px;border-radius:20px;border:1px solid #d1d5db;background:#f3f4f6;color:#1f2937;cursor:pointer}
#wtRoot .chip.on{background:var(--c);color:#fff;border-color:var(--c)}
#wtRoot #info{color:#6b7280;font-size:14px;margin:14px 0 0}
#wtRoot #word{font-size:26px;text-align:center;margin:22px 0 6px}
#wtRoot #prog{text-align:center;color:#6b7280;margin:0 0 10px}
#wtRoot .opt{display:block;width:100%;box-sizing:border-box;text-align:left;padding:13px 15px;margin:8px 0;border:1px solid #e5e7eb;border-radius:11px;background:#f8fafc;color:#1f2937;font-size:15px;cursor:pointer}
#wtRoot .ok{background:#dcfce7}
#wtRoot .bad{background:#fee2e2}
#wtRoot #fb{min-height:22px;font-weight:700}
#wtRoot .main{width:100%;padding:13px;border:0;border-radius:12px;background:var(--c);color:#fff;font-weight:700;cursor:pointer;margin-top:10px}
#wtRoot .main:disabled{opacity:.45;cursor:default}`;
  document.head.appendChild(style);

  const root = document.createElement("div");
  root.id = "wtRoot";
  root.innerHTML = `
  <div class="tabs">
    <button class="tab on" data-cat="r" type="button">📘 Rasmiy test</button>
    <button class="tab" data-cat="s" type="button">💗 Samimiy test</button>
  </div>
  <div class="head"><h2 id="title"></h2><div class="ring" id="ring">0%</div></div>
  <div class="chips" id="srcChips"></div>
  <div class="chips" id="cntChips"></div>
  <p id="info"></p>
  <h3 id="word"></h3>
  <p id="prog"></p>
  <div id="opts"></div>
  <div id="fb"></div>
  <button class="main" id="start" type="button">Testni boshlash</button>
  <button class="main" id="next" type="button" hidden disabled>Keyingi savol</button>
  `;
  (document.getElementById("wtMount") || document.body).appendChild(root);

const BASE = {
  r: typeof RASMIY_WORDS !== "undefined" ? RASMIY_WORDS : [],
  s: typeof SAMIMIY_WORDS !== "undefined" ? SAMIMIY_WORDS : []
};
const THEME = {
  r: { color: "#e30a17", title: "📘 Rasmiy so‘zlar testi" },
  s: { color: "#db2777", title: "💗 Samimiy so‘zlar testi" }
};
const $ = id => root.querySelector("#" + id);
const norm = s => String(s ?? "").trim().toLocaleLowerCase("tr");
const normUz = s => norm(s).replace(/[?!.,'‘’ʻ`]/g, "").replace(/\s+/g, " ").trim();
const shuffle = a => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };

let cat = "r", source = "all", limit = 0;
let qs = [], idx = 0, score = 0, answered = false;

function savedSet() {
  try { return new Set((JSON.parse(localStorage.getItem("savedWords")) || []).map(norm)); }
  catch (e) { return new Set(); }
}

function chips(id, items, get, set) {
  const c = $(id); c.innerHTML = "";
  items.forEach(([v, label]) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "chip" + (String(get()) === String(v) ? " on" : ""); b.textContent = label;
    b.onclick = () => { set(v); refresh(); };
    c.appendChild(b);
  });
}

function refresh() {
  root.style.setProperty("--c", THEME[cat].color);
  root.querySelectorAll(".tab").forEach(t => t.classList.toggle("on", t.dataset.cat === cat));
  $("title").textContent = THEME[cat].title;
  chips("srcChips", [["saved", "⭐ Saqlanganlar"], ["all", "📚 Hamma so‘zlar"]], () => source, v => source = v);
  chips("cntChips", [[10, "10 ta"], [20, "20 ta"], [50, "50 ta"], [0, "Hammasi"]], () => limit, v => limit = v);
  const total = BASE[cat].length, sv = BASE[cat].filter(w => savedSet().has(norm(w.tr))).length;
  $("info").textContent = `Bazada ${total} ta so‘z, saqlangan ${sv} ta.`;
}

function pool() {
  const saved = savedSet(), seen = new Set(), out = [];
  BASE[cat].forEach(w => {
    const k = norm(w.tr);
    if (seen.has(k) || (source === "saved" && !saved.has(k))) return;
    seen.add(k); out.push(w);
  });
  const list = shuffle(out);
  return limit > 0 ? list.slice(0, limit) : list;
}

function reset() {
  qs = []; idx = 0; score = 0; answered = false;
  $("word").textContent = ""; $("prog").textContent = ""; $("opts").innerHTML = ""; $("fb").textContent = "";
  $("ring").textContent = "0%";
  $("start").hidden = false; $("start").textContent = "Testni boshlash";
  $("next").hidden = true;
  refresh();
}

$("start").onclick = () => {
  if (!BASE[cat].length) { $("fb").textContent = "⚠️ So‘z bazasi topilmadi. rasmiy.js / samimiy.js ulanganini tekshir."; return; }
  qs = pool(); idx = 0; score = 0;
  if (!qs.length) { $("fb").textContent = "Saqlangan so‘z yo‘q. Avval ＋ bilan saqla yoki «Hamma so‘zlar» ni tanla."; return; }
  $("fb").textContent = ""; $("start").hidden = true; $("next").hidden = false; show();
};

function show() {
  if (idx >= qs.length) return finish();
  answered = false;
  const w = qs[idx], right = normUz(w.uz);
  $("word").textContent = w.tr;
  $("prog").textContent = `Savol ${idx + 1} / ${qs.length}`;
  $("fb").textContent = ""; $("opts").innerHTML = "";
  $("next").disabled = true;
  $("next").textContent = idx === qs.length - 1 ? "🏆 Natija" : "Keyingi savol";

  const wrong = [];
  shuffle(BASE[cat]).forEach(x => {
    const t = normUz(x.uz);
    if (wrong.length < 3 && x.uz && t !== right && !wrong.some(y => normUz(y.uz) === t)) wrong.push(x);
  });
  shuffle([w, ...wrong]).forEach(o => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "opt"; b.textContent = o.uz;
    b.dataset.ok = normUz(o.uz) === right ? "1" : "0";
    b.onclick = () => {
      if (answered) return; answered = true;
      const ok = b.dataset.ok === "1"; if (ok) score++;
      $("opts").querySelectorAll(".opt").forEach(x => { x.disabled = true; if (x.dataset.ok === "1") x.classList.add("ok"); });
      if (!ok) b.classList.add("bad");
      $("fb").textContent = ok ? "✅ To‘g‘ri!" : `❌ To‘g‘ri javob: ${w.uz}`;
      $("ring").textContent = Math.round(score / (idx + 1) * 100) + "%";
      $("next").disabled = false;
    };
    $("opts").appendChild(b);
  });
}

function finish() {
  const pct = Math.round(score / qs.length * 100);
  $("word").textContent = pct >= 80 ? "🏆 Ajoyib!" : pct >= 50 ? "👏 Yaxshi!" : "💪 Yana mashq qilamiz!";
  $("prog").textContent = `${qs.length} ta savoldan ${score} tasi to‘g‘ri`;
  $("opts").innerHTML = ""; $("fb").textContent = "";
  $("ring").textContent = pct + "%";
  $("next").hidden = true;
  $("start").hidden = false; $("start").textContent = "🔄 Qayta ishlash";
}

$("next").onclick = () => { if (answered) { idx++; show(); } };
root.querySelectorAll(".tab").forEach(t => t.onclick = () => { cat = t.dataset.cat; reset(); });

reset();
})();
