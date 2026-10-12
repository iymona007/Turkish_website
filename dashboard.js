// 1) Bugungi so'zlar
const todayList = [...wordsForUser()].sort(() => Math.random() - 0.5).slice(0, 5);

// 2) Salomlashuv (vaqtga qarab)
const cu = JSON.parse(localStorage.getItem("currentUser") || "null");
const userName = cu ? cu.name : "Do'st";
const hour = new Date().getHours();
let hello = "Assalomu alaykum";
if (hour < 12) hello = "Xayrli tong";
else if (hour >= 18) hello = "Xayrli kech";
document.getElementById("greeting").textContent = `${hello}, ${userName}! 👋`;

// 3) Kunlik ketma-ketlik (streak)
function updateStreak() {
  const today = new Date().toDateString();
  const last = localStorage.getItem("lastVisit");
  let streak = Number(localStorage.getItem("streak")) || 0;

  if (last !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    streak = last === yesterday ? streak + 1 : 1;
    localStorage.setItem("lastVisit", today);
    localStorage.setItem("streak", streak);
  }
  return streak;
}

// 4) Statistikani yozish
const savedWords = JSON.parse(localStorage.getItem("savedWords")) || [];
document.getElementById("statWords").textContent = todayList.length;
document.getElementById("statSaved").textContent = savedWords.length;
document.getElementById("statStreak").textContent = updateStreak();

// 5) So'z kartalarini chizish
const colors = ["c1", "c2", "c3", "c4", "c5"];
const box = document.getElementById("todayWords");

box.innerHTML = todayList.map((w, i) => `
  <div class="today-card ${colors[i]}">
    <h4>${w.tr}</h4>
    <p>${w.uz}</p>
    <button data-word="${w.tr}">🔊</button>
  </div>
`).join("");

// 6) Ovoz
box.addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const u = new SpeechSynthesisUtterance(btn.dataset.word);
  u.lang = "tr-TR";
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
});
document.getElementById("statTests").textContent = localStorage.getItem("testsDone") || 0;

// Chiqish
const logoutLink = document.getElementById("logoutLink");
if (logoutLink) logoutLink.addEventListener("click", e => {
  e.preventDefault();
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
});
