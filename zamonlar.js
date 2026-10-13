
"use strict";

// 1. Turk tili zamonlari
const TIMES = [
  {
    id: 1,
    name: "Hozirgi zamon",
    tr: "Şimdiki zaman",
    level: "A1",
    icon: "⏳",
    description: "Hozir sodir bo‘layotgan yoki davom etayotgan ish-harakatni bildiradi.",
    rule: "Fe’l negizi + -(ı/i/u/ü)yor",
    examples: [
      { tr: "Ben Türkçe öğreniyorum.", uz: "Men turk tilini o‘rganyapman." },
      { tr: "O kitap okuyor.", uz: "U kitob o‘qiyapti." },
      { tr: "Biz yemek yapıyoruz.", uz: "Biz ovqat tayyorlayapmiz." }
    ],
    note: "Masalan: gelmek → geliyor (kelmoqda), okumak → okuyor (o‘qiyapti)."
  },
  {
    id: 2,
    name: "Aniq o‘tgan zamon",
    tr: "Belirli geçmiş zaman",
    level: "A1",
    icon: "📖",
    description: "So‘zlovchi sodir bo‘lganini biladigan ish-harakatni bildiradi.",
    rule: "Fe’l negizi + -dı/-di/-du/-dü yoki -tı/-ti/-tu/-tü",
    examples: [
      { tr: "Ben dün geldim.", uz: "Men kecha keldim." },
      { tr: "O kitap okudu.", uz: "U kitob o‘qidi." },
      { tr: "Biz film izledik.", uz: "Biz film tomosha qildik." }
    ],
    note: "Qo‘shimcha fe’lning oxirgi tovushi va unlisiga qarab tanlanadi."
  },
  {
    id: 3,
    name: "Noaniq o‘tgan zamon",
    tr: "Belirsiz geçmiş zaman",
    level: "A2",
    icon: "🕰️",
    description: "Eshitilgan, bilib olingan yoki natijasi orqali anglangan voqeani bildiradi.",
    rule: "Fe’l negizi + -mış/-miş/-muş/-müş",
    examples: [
      { tr: "O eve gitmiş.", uz: "U uyga ketgan ekan." },
      { tr: "Ali uyumuş.", uz: "Ali uxlab qolgan ekan." },
      { tr: "Yemek güzel olmuş.", uz: "Ovqat yaxshi chiqibdi." }
    ],
    note: "Bu zamon ko‘pincha o‘zbekchaga «ekan», «-ibdi» shaklida tarjima qilinadi."
  },
  {
    id: 4,
    name: "Kelasi zamon",
    tr: "Gelecek zaman",
    level: "A1",
    icon: "🚀",
    description: "Kelajakda bajariladigan ish-harakatni bildiradi.",
    rule: "Fe’l negizi + -(y)acak/-(y)ecek",
    examples: [
      { tr: "Ben yarın geleceğim.", uz: "Men ertaga kelaman." },
      { tr: "O kitap okuyacak.", uz: "U kitob o‘qiydi." },
      { tr: "Biz çalışacağız.", uz: "Biz ishlaymiz." }
    ],
    note: "Masalan: gelmek → gelecek, okumak → okuyacak."
  },
  {
    id: 5,
    name: "Keng zamon",
    tr: "Geniş zaman",
    level: "A2",
    icon: "🔄",
    description: "Odatlar, takrorlanadigan ishlar va umumiy haqiqatlarni bildiradi.",
    rule: "Fe’l negizi + -(ı/i/u/ü)r yoki -ar/-er",
    examples: [
      { tr: "Her gün kitap okurum.", uz: "Har kuni kitob o‘qiyman." },
      { tr: "Ben kahve içerim.", uz: "Men qahva ichaman." },
      { tr: "Güneş doğudan doğar.", uz: "Quyosh sharqdan chiqadi." }
    ],
    note: "Keng zamon qo‘shimchasi fe’lga qarab o‘zgaradi: gelirim, okurum, yazarım."
  },
  {
    id: 6,
    name: "Hikoya zamonlari",
    tr: "Hikâye birleşik zamanları",
    level: "B1",
    icon: "📚",
    description: "O‘tgan zamondagi holat yoki davom etgan ish haqida gapirishda ishlatiladi.",
    rule: "Zamon shakli + idi (-dı/-di...)",
    examples: [
      { tr: "Ben çalışıyordum.", uz: "Men ishlayotgan edim." },
      { tr: "Çocuk uyuyordu.", uz: "Bola uxlayotgan edi." },
      { tr: "Eskiden burada yaşardım.", uz: "Ilgari bu yerda yashardim." }
    ],
    note: "Masalan, geliyordum — kelayotgan edim; yapardım — qilardim."
  },
  {
    id: 7,
    name: "Rivoyat zamonlari",
    tr: "Rivayet birleşik zamanları",
    level: "B1",
    icon: "🗣️",
    description: "Boshqa birovdan eshitilgan yoki bilvosita ma’lum bo‘lgan holatni ifodalashi mumkin.",
    rule: "Zamon shakli + imiş (-mış/-miş...)",
    examples: [
      { tr: "Çalışıyormuş.", uz: "Ishlayotgan ekan." },
      { tr: "Çok güzelmiş.", uz: "Juda chiroyli ekan." },
      { tr: "Her gün gelirmiş.", uz: "Har kuni kelar ekan." }
    ],
    note: "Ma’no kontekstga qarab o‘zgarishi mumkin."
  },
  {
    id: 8,
    name: "Shart zamonlari",
    tr: "Şart birleşik zamanları",
    level: "B1",
    icon: "💡",
    description: "Shartni yoki biror ish-harakat yuz bersa nima bo‘lishini ifodalaydi.",
    rule: "Fe’l negizi + -sa/-se",
    examples: [
      { tr: "Vaktim olursa gelirim.", uz: "Vaqtim bo‘lsa, kelaman." },
      { tr: "Çalışırsan başarırsın.", uz: "Harakat qilsang, muvaffaqiyatga erishasan." },
      { tr: "Yağmur yağarsa evde kalırım.", uz: "Yomg‘ir yog‘sa, uyda qolaman." }
    ],
    note: "Masalan: gelirse — agar kelsa, yaparsam — agar qilsam."
  },
  {
    id: 9,
    name: "Hozirgi zamonning hikoyasi",
    tr: "Şimdiki zamanın hikâyesi",
    level: "B1",
    icon: "📝",
    description: "O‘tmishda davom etayotgan ish-harakatni bildiradi.",
    rule: "-yor + du",
    examples: [
      { tr: "Ders çalışıyordum.", uz: "Dars qilayotgan edim." },
      { tr: "Seni bekliyorduk.", uz: "Seni kutayotgan edik." },
      { tr: "Yağmur yağıyordu.", uz: "Yomg‘ir yog‘ayotgan edi." }
    ],
    note: "Bu shakl hikoya zamonlarining bir turidir."
  },
  {
    id: 10,
    name: "Kelasi zamonning hikoyasi",
    tr: "Gelecek zamanın hikâyesi",
    level: "B2",
    icon: "🔮",
    description: "O‘tmishda rejalashtirilgan yoki kutilgan kelajak ishini bildiradi.",
    rule: "-acak/-ecek + tı/ti...",
    examples: [
      { tr: "Gelecektim ama gelemedim.", uz: "Kelmoqchi edim, lekin kela olmadim." },
      { tr: "Seni arayacaktım.", uz: "Senga qo‘ng‘iroq qilmoqchi edim." },
      { tr: "Ders çalışacaktık.", uz: "Dars qilmoqchi edik." }
    ],
    note: "Kontekstga qarab reja yoki amalga oshmagan niyatni ifodalaydi."
  },
  {
    id: 11,
    name: "Keng zamonning hikoyasi",
    tr: "Geniş zamanın hikâyesi",
    level: "B2",
    icon: "🔁",
    description: "O‘tmishda odat bo‘lgan yoki takrorlangan ish-harakatni ifodalaydi.",
    rule: "Keng zamon + dı/di...",
    examples: [
      { tr: "Çocukken çok kitap okurdum.", uz: "Bolaligimda ko‘p kitob o‘qirdim." },
      { tr: "Her sabah yürürdük.", uz: "Har tong sayr qilardik." },
      { tr: "Eskiden burada otururdu.", uz: "Ilgari bu yerda yashardi." }
    ],
    note: "Bu shakl ko‘pincha o‘tmishdagi odatlarni ifodalaydi."
  },
  {
    id: 12,
    name: "Shartning hikoyasi",
    tr: "Şartın hikâyesi",
    level: "B2",
    icon: "🧩",
    description: "O‘tmishdagi shart yoki bajarilmagan vaziyatni ifodalashi mumkin.",
    rule: "Shart shakli + idi",
    examples: [
      { tr: "Gelseydi seni görürdü.", uz: "Kelganida seni ko‘rardi." },
      { tr: "Çalışsaydım başarırdım.", uz: "Harakat qilganimda muvaffaqiyatga erishardim." },
      { tr: "Erken çıksaydık yetişirdik.", uz: "Erta chiqqanimizda ulgurardik." }
    ],
    note: "Bu murakkab shakl; qo‘shimchalar unli uyg‘unligiga ko‘ra o‘zgaradi."
  }
];

// 2. HTML elementlarini olish
const grid = document.getElementById("timeGrid");
const searchInput = document.getElementById("search");
const levelSelect = document.getElementById("level");
const emptyText = document.getElementById("empty");

// 3. Qidiruv matnini tayyorlash
function normalize(text) {
  return text
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .trim();
}

// 4. Zamon kartochkasini yaratish
function createCard(time) {
  const examplesHTML = time.examples.map(example => `
    <div class="example">
      <div>
        <p><strong>${example.tr}</strong></p>
        <p class="translation">${example.uz}</p>
      </div>
      <button
        class="speak-button"
        type="button"
        data-speak="${example.tr}"
        aria-label="Turkcha gapni eshitish"
        title="Eshitish"
      >🔊</button>
    </div>
  `).join("");

  return `
    <article class="time-card">
      <div class="card-top">
        <div class="card-icon">${time.icon}</div>
        <span class="level-badge">${time.level}</span>
      </div>

      <h3>${time.name}</h3>
      <p class="turkish-name">${time.tr}</p>
      <p class="description">${time.description}</p>

      <div class="rule-box">
        <small>📌 Qoida</small>
        <strong>${time.rule}</strong>
      </div>

      <p class="examples-title">💬 Misollar</p>
      ${examplesHTML}

      <p class="card-note">💡 ${time.note}</p>
    </article>
  `;
}

// 5. Qidiruv va daraja bo‘yicha saralash
function renderTimes() {
  const query = normalize(searchInput.value);
  const selectedLevel = levelSelect.value;

  const filtered = TIMES.filter(time => {
    const allText = normalize([
      time.name,
      time.tr,
      time.level,
      time.description,
      time.rule,
      time.note,
      ...time.examples.flatMap(example => [example.tr, example.uz])
    ].join(" "));

    const matchesSearch = allText.includes(query);
    const matchesLevel =
      selectedLevel === "all" || time.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });

  grid.innerHTML = filtered.map(createCard).join("");
  emptyText.classList.toggle("hidden", filtered.length !== 0);
}

// 6. Turkcha talaffuzni eshittirish
function speakTurkish(text) {
  if (!("speechSynthesis" in window)) {
    alert("Brauzeringiz ovozli o‘qishni qo‘llab-quvvatlamaydi.");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "tr-TR";
  utterance.rate = 0.85;

  window.speechSynthesis.speak(utterance);
}

// 7. Ovoz tugmalariga bosilganda ishlaydi
grid.addEventListener("click", event => {
  const button = event.target.closest("[data-speak]");

  if (!button) return;

  speakTurkish(button.dataset.speak);
});

// 8. Qidiruv va filtr
searchInput.addEventListener("input", renderTimes);
levelSelect.addEventListener("change", renderTimes);

// 9. Test savollari
const QUESTIONS = [
  {
    q: '"Men turk tilini o‘rganyapman" turkchada qanday?',
    options: [
      "Türkçe öğrendim.",
      "Türkçe öğreniyorum.",
      "Türkçe öğreneceğim.",
      "Türkçe öğrenirim."
    ],
    answer: 1,
    explanation: "Öğreniyorum — o‘rganyapman, hozirgi zamon."
  },
  {
    q: '"Men kecha keldim" qaysi javob?',
    options: [
      "Dün geleceğim.",
      "Dün geliyorum.",
      "Dün geldim.",
      "Dün gelirim."
    ],
    answer: 2,
    explanation: "Geldim — keldim, aniq o‘tgan zamon."
  },
  {
    q: '"U ertaga keladi" qaysi javob?',
    options: [
      "O dün geldi.",
      "O yarın gelecek.",
      "O şimdi geliyor.",
      "O her gün gelir."
    ],
    answer: 1,
    explanation: "Gelecek — keladi, kelasi zamon."
  },
  {
    q: "Odatdagi ish-harakatni qaysi zamon bildiradi?",
    options: [
      "Şimdiki zaman",
      "Belirli geçmiş zaman",
      "Geniş zaman",
      "Gelecek zaman"
    ],
    answer: 2,
    explanation: "Geniş zaman odatlar va takrorlanadigan ishlarni bildiradi."
  },
  {
    q: '"U uxlab qolgan ekan" qaysi javob?',
    options: [
      "O uyuyor.",
      "O uyuyacak.",
      "O uyumuş.",
      "O uyur."
    ],
    answer: 2,
    explanation: "Uyumuş — noaniq o‘tgan zamon shakli."
  },
  {
    q: '"Men ishlayotgan edim" turkchada qanday?',
    options: [
      "Çalışacağım.",
      "Çalışıyordum.",
      "Çalışırım.",
      "Çalıştım."
    ],
    answer: 1,
    explanation: "Çalışıyordum — ishlayotgan edim."
  },
  {
    q: '"Agar vaqting bo‘lsa" turkchada qanday?',
    options: [
      "Vaktin olursa",
      "Vaktin oldu",
      "Vaktin olacak",
      "Vaktin oluyor"
    ],
    answer: 0,
    explanation: "Olursa — bo‘lsa, shart ma’nosini bildiradi."
  },
  {
    q: '"Bolaligimda kitob o‘qirdim" qaysi javob?',
    options: [
      "Çocukken kitap okuyacağım.",
      "Çocukken kitap okuyorum.",
      "Çocukken kitap okurdum.",
      "Çocukken kitap okudum."
    ],
    answer: 2,
    explanation: "Okurdum — o‘tmishda odat bo‘lgan ish-harakat."
  },
  {
    q: "«Belirsiz geçmiş zaman» nimani bildirishi mumkin?",
    options: [
      "Faqat kelajakni",
      "Eshitilgan yoki bilib olingan voqeani",
      "Faqat buyruqni",
      "Faqat savolni"
    ],
    answer: 1,
    explanation: "Bu shakl eshitilgan yoki bilvosita ma’lum bo‘lgan voqealarda ishlatiladi."
  },
  {
    q: '"Senga qo‘ng‘iroq qilmoqchi edim" qaysi javob?',
    options: [
      "Seni arıyorum.",
      "Seni aradım.",
      "Seni arayacaktım.",
      "Seni ararım."
    ],
    answer: 2,
    explanation: "Arayacaktım — qo‘ng‘iroq qilmoqchi edim."
  }
];

// 10. Test elementlari
const questionNumber = document.getElementById("questionNumber");
const scoreText = document.getElementById("score");
const questionText = document.getElementById("question");
const answersBox = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextQuestion");
const restartButton = document.getElementById("restartQuiz");

let currentQuestion = 0;
let score = 0;
let answered = false;

// 11. Savolni ko‘rsatish
function showQuestion() {
  answered = false;

  const item = QUESTIONS[currentQuestion];

  questionNumber.textContent =
    `${currentQuestion + 1}-savol / ${QUESTIONS.length}`;

  scoreText.textContent = `Ball: ${score}`;
  questionText.textContent = item.q;
  feedback.textContent = "";
  nextButton.disabled = true;
  nextButton.classList.remove("hidden");
  nextButton.textContent =
    currentQuestion === QUESTIONS.length - 1
      ? "Natijani ko‘rish →"
      : "Keyingi savol →";

  restartButton.classList.add("hidden");

  answersBox.innerHTML = item.options.map((option, index) => `
    <button class="answer-button" type="button" data-answer="${index}">
      ${String.fromCharCode(65 + index)}. ${option}
    </button>
  `).join("");
}

// 12. Javobni tekshirish
answersBox.addEventListener("click", event => {
  const button = event.target.closest("[data-answer]");

  if (!button || answered) return;

  answered = true;

  const chosen = Number(button.dataset.answer);
  const correct = QUESTIONS[currentQuestion].answer;
  const allButtons = answersBox.querySelectorAll(".answer-button");

  allButtons.forEach(answerButton => {
    answerButton.disabled = true;

    if (Number(answerButton.dataset.answer) === correct) {
      answerButton.classList.add("correct");
    }
  });

  if (chosen === correct) {
    score++;
    feedback.textContent = "✅ To‘g‘ri! " + QUESTIONS[currentQuestion].explanation;
  } else {
    button.classList.add("wrong");
    feedback.textContent = "❌ Noto‘g‘ri. " + QUESTIONS[currentQuestion].explanation;
  }

  scoreText.textContent = `Ball: ${score}`;
  nextButton.disabled = false;
});

// 13. Keyingi savol yoki yakuniy natija
nextButton.addEventListener("click", () => {
  if (!answered) return;

  if (currentQuestion < QUESTIONS.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    questionNumber.textContent = "Test yakunlandi";
    questionText.textContent =
      `Natijangiz: ${score} / ${QUESTIONS.length}`;

    answersBox.innerHTML = "";

    const percentage = Math.round(score / QUESTIONS.length * 100);

    feedback.textContent =
      percentage >= 80
        ? "🎉 Ajoyib! Juda yaxshi natija!"
        : percentage >= 50
          ? "👏 Yaxshi! Yana mashq qiling."
          : "📚 Qoidalarni takrorlab, yana urinib ko‘ring.";

    nextButton.classList.add("hidden");
    restartButton.classList.remove("hidden");
  }
});

// 14. Testni qayta boshlash
restartButton.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  showQuestion();
});

// 15. Sahifani ishga tushirish
renderTimes();
showQuestion();
