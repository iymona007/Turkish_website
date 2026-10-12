// Boshlash tugmasi: kirgan foydalanuvchini dashboardga olib boradi
const startLink = document.getElementById("startLink");
if (startLink && localStorage.getItem("currentUser")) startLink.href = "dashboard.html";

// "Qanday ishlaydi?" bo'limiga silliq o'tish
document.documentElement.style.scrollBehavior = "smooth";
