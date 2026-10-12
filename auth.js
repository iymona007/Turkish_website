function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

const errorEl = document.getElementById("error");

// ===== RO'YXATDAN O'TISH =====
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;

    if (password.length < 6) {
      errorEl.textContent = "Parol kamida 6 ta belgidan iborat bo'lsin";
      return;
    }
    if (password !== password2) {
      errorEl.textContent = "Parollar bir xil emas";
      return;
    }

    const users = getUsers();
    if (users.some(u => u.email === email)) {
      errorEl.textContent = "Bu email bilan hisob allaqachon bor";
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify({ name, email }));

    window.location.href = "dashboard.html";
  });
}

// ===== KIRISH =====
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

    const user = getUsers().find(u => u.email === email && u.password === password);

    if (!user) {
      errorEl.textContent = "Email yoki parol noto'g'ri";
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify({ name: user.name, email: user.email }));
    window.location.href = "dashboard.html";
  });
}