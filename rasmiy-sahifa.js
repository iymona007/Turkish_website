const PAGE_WORDS = typeof SAMIMIY_WORDS !== "undefined" ? SAMIMIY_WORDS : RASMIY_WORDS;
const PAGE_CATS = typeof SAMIMIY_CATEGORIES !== "undefined" ? SAMIMIY_CATEGORIES : RASMIY_CATEGORIES;

const grid = document.getElementById("wordsGrid");
const searchInput = document.getElementById("search");
const catBox = document.getElementById("categories");
const emptyText = document.getElementById("empty");

let activeCat = "all";
let saved = JSON.parse(localStorage.getItem("savedWords")) || [];

// Kategoriya tugmalari
const tabs = { all: "Barchasi", ...PAGE_CATS, saved: "⭐ Saqlanganlar" };
catBox.innerHTML = Object.entries(tabs).map(([key, name]) =>
  `<button class="cat ${key === "all" ? "active" : ""}" data-cat="${key}">${name}</button>`
).join("");

function render() {
  const q = searchInput.value.toLowerCase().trim();

  const list = PAGE_WORDS.filter(w => {
    let okCat;
    if (activeCat === "all") okCat = true;
    else if (activeCat === "saved") okCat = saved.includes(w.tr);
    else okCat = w.cat === activeCat;

    const okSearch = w.tr.toLowerCase().includes(q) || w.uz.toLowerCase().includes(q) || (w.ex || "").toLowerCase().includes(q);
    return okCat && okSearch;
  });

  grid.innerHTML = list.map((w, i) => `
    <div class="word-card c${(i % 5) + 1}">
      <span class="level">${w.level}</span>
      <div class="emoji">${w.emoji}</div>
      <h3>${w.tr}</h3>
      <div class="pron">[${w.pron}]</div>
      <div class="uz">${w.uz}</div>
      ${w.ex ? `<div class="ex"><p class="ex-tr">${w.ex} <button class="speak ex-speak" data-word="${w.ex}" title="Gapni eshitish">🔊</button></p><p class="ex-uz">${w.exUz}</p></div>` : ""}
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