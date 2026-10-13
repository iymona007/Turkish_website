const placementQuestions = [
 {q:"“Merhaba” so‘zining ma’nosi nima?",a:["Xayr","Salom","Rahmat","Iltimos"],correct:1},
 {q:"“Ben öğrenciyim” tarjimasini toping.",a:["Men o‘qituvchiman","Men uyda edim","Men o‘quvchiman","Men ketyapman"],correct:2},
 {q:"Bo‘sh joyni to‘ldiring: Benim ad___ Ayşe.",a:["ım","ın","ı","lar"],correct:0},
 {q:"“Nasılsın?” savoliga mos javob qaysi?",a:["İyiyim, teşekkürler.","Saat üç.","Bu benim evim.","Güle güle."],correct:0},
 {q:"“Dün okula gittim” qaysi zamonda?",a:["Hozirgi zamon","Kelasi zamon","O‘tgan zamon","Buyruq mayli"],correct:2},
 {q:"“Kitaplarım” so‘zining ma’nosi nima?",a:["Kitoblarim","Kitoblaring","Kitob sotib oldim","Kitoblar"],correct:0},
 {q:"To‘g‘ri variantni tanlang: Yarın seni ara___.",a:["dım","acağım","ıyorum","mışım"],correct:1},
 {q:"“Eğer vaktim olursa, sana yardım ederim.” ma’nosi?",a:["Vaqtim bo‘lmagani uchun ketdim.","Vaqtim bo‘lsa, senga yordam beraman.","Senga yordam berdim.","Vaqtimni yo‘qotdim."],correct:1},
 {q:"“Rağmen” so‘zi odatda qanday ma’no beradi?",a:["Shuning uchun","Garchi ... bo‘lsa ham","Masalan","Oldin"],correct:1},
 {q:"To‘g‘ri variant: Toplantı, müdür gelene kadar ___.",a:["başlamayacak","başlamadı mı","başlayıp","başlamış olsaydı"],correct:0},
 {q:"“Bu konuyu göz ardı etmemeliyiz.” nimani anglatadi?",a:["Bu mavzuni e’tiborsiz qoldirmasligimiz kerak.","Bu mavzuni unutdik.","Bu mavzu juda oson.","Bu mavzuni ko‘chirish kerak."],correct:0},
 {q:"“Söz konusu kararın sonuçları göz önünde bulundurulmalıdır.” jumlasiga eng yaqin ma’no qaysi?",a:["Qaror tezda bekor qilinishi kerak.","Qarorning oqibatlari hisobga olinishi kerak.","Qaror haqida gapirish mumkin emas.","Qaror kecha qabul qilindi."],correct:1},
 {q:"“Evde kimse yokmuş.” ma’nosini toping.",a:["Uyda hech kim yo‘q ekan.","Uyga hamma keldi.","Uyda hech kim bo‘lmaydi.","Uyim juda katta."],correct:0},
 {q:"“Ne kadar erken çıkarsak, o kadar çabuk varırız.” ma’nosi?",a:["Qancha kech chiqsak, shuncha tez yetamiz.","Qancha erta chiqsak, shuncha tez yetib boramiz.","Yetib borolmaymiz.","Erta chiqish shart emas."],correct:1},
 {q:"“İşin içinden çıkamıyorum” iborasi nimani bildiradi?",a:["Ishdan chiqib ketyapman.","Vaziyatni hal qila olmayapman.","Ishni tugatdim.","Ishga kech qoldim."],correct:1},
 {q:"“Her ne kadar yorulmuş olsa da çalışmayı sürdürdü.” ma’nosi?",a:["Charchagan bo‘lsa-da, ishlashda davom etdi.","U ishlashni boshlamadi.","U umuman charchamadi.","Ish tugagani uchun ketdi."],correct:0},
 {q:"“Varsayım” so‘zining ma’nosi qaysi?",a:["Taklifnoma","Taxmin yoki faraz","Natija","Majburiyat"],correct:1},
 {q:"“Bu yaklaşım, sorunun temel nedenlerini kapsamlı biçimde ele almayı gerektirir.” ma’nosi?",a:["Bu yondashuv muammoning asosiy sabablarini keng qamrovda ko‘rib chiqishni talab qiladi.","Bu yondashuv muammoni yashiradi.","Muammoning sababi yo‘q.","Bu ishni ertaga boshlaymiz."],correct:0}
];
const levels = [
 {min:0, max:3, code:"A1", name:"Boshlang‘ich", desc:"Oddiy salomlashish, tanishish va kundalik so‘zlardan boshlash foydali.", progress:17},
 {min:4, max:6, code:"A2", name:"Elementar", desc:"Kundalik vaziyatlar va sodda gap tuzishni mashq qil.", progress:33},
 {min:7, max:9, code:"B1", name:"O‘rta", desc:"Turli mavzularda gapirish va matnlarni tushunishni davom ettir.", progress:50},
 {min:10, max:12, code:"B2", name:"O‘rtadan yuqori", desc:"Murakkabroq matnlar va fikr bildirish ustida ishlash foydali.", progress:67},
 {min:13, max:15, code:"C1", name:"Yuqori", desc:"Nozik ma’nolar, rasmiy uslub va murakkab matnlarni mashq qil.", progress:83},
 {min:16, max:18, code:"C2", name:"Mukammallikka yaqin", desc:"Bu qisqa testdagi natijang juda yuqori. Bilimingni real suhbatlar bilan mustahkamla.", progress:100}
];
const $ = (id) => document.getElementById(id);
let current = 0, score = 0, selected = null, answers = [];

function showSavedResult() {
  const saved = localStorage.getItem("turkcePlacementResult");
  if (!saved) return;
  try {
    const result = JSON.parse(saved);
    $("levelName").textContent = `${result.code} — ${result.name}`;
    $("levelBadge").textContent = result.code;
    $("levelDescription").textContent = result.desc;
    $("levelProgress").style.width = `${result.progress}%`;
    $("scoreText").textContent = `Oxirgi natija: ${result.score}/18 (${result.percent}%)`;
  } catch (_) { localStorage.removeItem("turkcePlacementResult"); }
}
function startQuiz() {
  current = 0; score = 0; selected = null; answers = [];
  $("placementTest").scrollIntoView({behavior:"smooth", block:"start"});
  $("quizArea").hidden = false;
  $("resultArea").hidden = true;
  renderQuestion();
}
function renderQuestion() {
  const item = placementQuestions[current];
  selected = null;
  $("progressLabel").textContent = `${current + 1} / ${placementQuestions.length}`;
  $("quizProgress").style.width = `${(current / placementQuestions.length) * 100}%`;
  $("questionText").textContent = item.q;
  $("answerOptions").innerHTML = "";
  $("nextButton").disabled = true;
  $("nextButton").textContent = current === placementQuestions.length - 1 ? "Natijani ko‘rish →" : "Keyingi savol →";
  item.a.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;
    button.addEventListener("click", () => {
      selected = index;
      document.querySelectorAll(".answer-option").forEach(el => el.classList.remove("selected"));
      button.classList.add("selected");
      $("nextButton").disabled = false;
    });
    $("answerOptions").appendChild(button);
  });
}
function finishQuiz() {
  const level = levels.find(item => score >= item.min && score <= item.max) || levels[0];
  const result = {...level, score, percent:Math.round(score / placementQuestions.length * 100), date:new Date().toISOString()};
  localStorage.setItem("turkcePlacementResult", JSON.stringify(result));
  $("quizArea").hidden = true;
  $("resultArea").hidden = false;
  $("resultLevel").textContent = `${level.code} — ${level.name}`;
  $("resultMessage").textContent = level.desc;
  $("resultScore").textContent = `${score} / ${placementQuestions.length} to‘g‘ri javob (${result.percent}%)`;
  showSavedResult();
}
$("nextButton").addEventListener("click", () => {
  if (selected === null) return;
  answers[current] = selected;
  if (selected === placementQuestions[current].correct) score++;
  current++;
  if (current >= placementQuestions.length) finishQuiz();
  else renderQuestion();
});
$("againButton").addEventListener("click", startQuiz);
$("retakeTop").addEventListener("click", startQuiz);
showSavedResult();
renderQuestion();



(function () {
  const levelName = document.getElementById("dashboardLevelTitle");
  const levelDesc = document.getElementById("dashboardLevelDesc");
  const levelScore = document.getElementById("dashboardLevelScore");
  const levelText = document.getElementById("userLevel");
  const levelCircle = document.getElementById("dashboardLevelCircle");

  function showLevel() {
    const savedResult = localStorage.getItem("turkcePlacementResult");

    if (!savedResult) {
      levelName.textContent = "Hali aniqlanmagan";
      levelDesc.textContent = "Darajangizni aniqlash uchun testni topshiring.";
      levelText.textContent = "—";
      levelCircle.style.strokeDashoffset = 314.16;
      levelScore.textContent = "Test natijasi hali mavjud emas.";
      return;
    }

    try {
      const result = JSON.parse(savedResult);
      const progress = Math.max(
        0,
        Math.min(100, Number(result.progress) || 0)
      );

      levelText.textContent = result.code || "—";
      levelName.textContent =
        (result.code || "") +
        (result.name ? " — " + result.name : "");

      levelDesc.textContent =
        result.desc || "O‘rganishni davom ettiring!";

      levelCircle.style.strokeDashoffset =
        314.16 * (1 - progress / 100);

      levelScore.textContent =
        "Natija: " + (result.score ?? 0) +
        "/18 (" + (result.percent ?? 0) + "%)";

    } catch (error) {
      levelText.textContent = "—";
      levelName.textContent = "Daraja aniqlanmagan";
      levelDesc.textContent = "Testni qayta topshirib ko‘ring.";
      levelCircle.style.strokeDashoffset = 314.16;
      levelScore.textContent = "Natijani o‘qib bo‘lmadi.";
      console.error("Daraja natijasi:", error);
    }
  }

  showLevel();
  window.addEventListener("pageshow", showLevel);
})();


