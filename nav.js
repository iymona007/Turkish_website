const authBox = document.querySelector(".auth");
const user = JSON.parse(localStorage.getItem("currentUser"));

if (authBox && user) {
  authBox.innerHTML = `
    <a href="dashboard.html" class="login" id="navName"></a>
    <a href="#" class="btn btn-red" id="navLogout">Chiqish</a>
  `;

  document.getElementById("navName").textContent = "👤 " + user.name;

  document.getElementById("navLogout").addEventListener("click", e => {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
  });
}

// O'rganilgan so'zni eslab qolish (statistika uchun)
function markLearned(tr) {
  try {
    const list = JSON.parse(localStorage.getItem("learnedList") || "[]");
    const k = String(tr).toLowerCase();
    if (!list.includes(k)) { list.push(k); localStorage.setItem("learnedList", JSON.stringify(list)); }
  } catch (e) {}
}
