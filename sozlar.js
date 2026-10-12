const grid = document.getElementById("wordsGrid");
const searchInput = document.getElementById("search");
const catBox = document.getElementById("categories");
const levelBox = document.getElementById("levels");
const emptyText = document.getElementById("empty");

let activeCat = "all";
let activeLevel = "all";
let saved = JSON.parse(localStorage.getItem("savedWords")) || [];

// Kategoriya tugmalari
const tabs = { all: "Barchasi", ...CATEGORIES, saved: "⭐ Saqlanganlar" };
catBox.innerHTML = Object.entries(tabs).map(([key, name]) =>
  `<button class="cat ${key === "all" ? "active" : ""}" data-cat="${key}">${name}</button>`
).join("");

// Daraja tugmalari
const levelTabs = ["all", "A1", "A2", "B1", "B2"];
levelBox.innerHTML = levelTabs.map(lv =>
  `<button class="cat ${lv === "all" ? "active" : ""}" data-level="${lv}">${lv === "all" ? "Barcha darajalar" : lv}</button>`
).join("");

function render() {
  const q = searchInput.value.toLowerCase().trim();

  const list = WORDS.filter(w => {
    let okCat;
    if (activeCat === "all") okCat = true;
    else if (activeCat === "saved") okCat = saved.includes(w.tr);
    else okCat = w.cat === activeCat;

    const okLevel = activeLevel === "all" || w.level === activeLevel;
    const okSearch = w.tr.toLowerCase().includes(q) || w.uz.toLowerCase().includes(q);
    return okCat && okLevel && okSearch;
  });

  grid.innerHTML = list.map((w, i) => `
    <div class="word-card c${(i % 5) + 1}">
      <span class="level">${w.level}</span>
      <div class="emoji">${w.emoji}</div>
      <h3>${w.tr}</h3>
      <div class="pron">[${w.pron}]</div>
      <div class="uz">${w.uz}</div>
      <div class="card-actions">
        <button class="speak" data-word="${w.tr}">🔊</button>
        <button class="save ${saved.includes(w.tr) ? "saved" : ""}" data-word="${w.tr}">＋</button>
      </div>
    </div>
  `).join("");

  emptyText.hidden = list.length > 0;
}

catBox.addEventListener("click", e => {
  const btn = e.target.closest(".cat");
  if (!btn) return;
  catBox.querySelectorAll(".cat").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeCat = btn.dataset.cat;
  render();
});

levelBox.addEventListener("click", e => {
  const btn = e.target.closest(".cat");
  if (!btn) return;
  levelBox.querySelectorAll(".cat").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeLevel = btn.dataset.level;
  render();
});

searchInput.addEventListener("input", render);

grid.addEventListener("click", e => {
  const speakBtn = e.target.closest(".speak");
  const saveBtn = e.target.closest(".save");

  if (speakBtn) {
    const u = new SpeechSynthesisUtterance(speakBtn.dataset.word);
    u.lang = "tr-TR";
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }

  if (saveBtn) {
    const w = saveBtn.dataset.word;
    saved = saved.includes(w) ? saved.filter(x => x !== w) : [...saved, w];
    localStorage.setItem("savedWords", JSON.stringify(saved));

    if (activeCat === "saved") render();
    else saveBtn.classList.toggle("saved");
  }
});

render();