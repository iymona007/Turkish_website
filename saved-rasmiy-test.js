```javascript
// Saqlangan rasmiy so'zlar testi
(function () {
  const section = document.createElement("section");

  section.id = "savedRasmiyTest";
  section.style.cssText = `
    max-width: 600px;
    margin: 30px auto;
    padding: 24px;
    border-radius: 18px;
    background: #fff;
    color: #222;
    box-shadow: 0 5px 25px #0001;
    font-family: Arial, sans-serif;
  `;

  section.innerHTML = `
    <h2>❤️ Saqlangan rasmiy so'zlar testi</h2>
    <p id="savedProgress">Saqlangan so'zlaringni sinab ko'r!</p>
    <h2 id="savedWord">📚 Tayyor bo'lsang, boshlaymiz!</h2>
    <p id="savedQuestion">Tarjimasini top.</p>
    <div id="savedOptions"></div>
    <p id="savedFeedback"></p>
    <button id="savedStart">Testni boshlash</button>
    <button id="savedNext" disabled>Keyingi savol</button>
  `;

  document.body.appendChild(section);

  const $ = id => document.getElementById(id);

  let questions = [];
  let index = 0;
  let score = 0;
  let answered = false;

  function shuffle(items) {
    return [...items].sort(() => Math.random() - 0.5);
  }

  function startTest() {
    /*
      DIQQAT:
      Bu yerda savedWords — saytingda saqlangan
      so'zlarni beradigan ro'yxat bo'lishi kerak.
      Quyidagi kalit namuna sifatida ishlatilgan.
    */
    let savedWords;

    try {
      savedWords = JSON.parse(
        localStorage.getItem("savedWords") || "[]"
      );
    } catch {
      savedWords = [];
    }

    const saved = new Set(
      savedWords.map(w =>
        (typeof w === "string" ? w : w.tr || w.word || "")
          .trim().toLocaleLowerCase("tr-TR")
      )
    );

    questions = shuffle(
      RASMIY_WORDS.filter(w =>
        saved.has(w.tr.trim().toLocaleLowerCase("tr-TR"))
      )
    );

    if (questions.length === 0) {
      $("savedFeedback").textContent =
        "Saqlangan so'zlar topilmadi. Saqlash tizimidagi kalitni tekshirish kerak.";
      return;
    }

    index = 0;
    score = 0;
    $("savedStart").hidden = true;
    showQuestion();
  }

  function showQuestion() {
    if (index >= questions.length) {
      $("savedWord").textContent = "🏆 Test yakunlandi!";
      $("savedQuestion").textContent =
        `${questions.length} ta savoldan ${score} tasiga to'g'ri javob berding.`;
      $("savedProgress").textContent = "Natija";
      $("savedOptions").innerHTML = "";
      $("savedFeedback").textContent = "";
      $("savedNext").disabled = true;
      $("savedStart").hidden = false;
      $("savedStart").textContent = "Qayta ishlash";
      return;
    }

    answered = false;
    const word = questions[index];

    $("savedProgress").textContent =
      `Savol ${index + 1} / ${questions.length}`;
    $("savedWord").textContent = word.tr;
    $("savedQuestion").textContent =
      "Bu so'zning o'zbekcha tarjimasi nima?";
    $("savedFeedback").textContent = "";
    $("savedOptions").innerHTML = "";
    $("savedNext").disabled = true;

    const wrong = shuffle(
      RASMIY_WORDS.filter(w =>
        w.tr !== word.tr && w.uz !== word.uz
      )
    ).slice(0, 3);

    shuffle([word, ...wrong]).forEach(option => {
      const button = document.createElement("button");
      button.textContent = option.uz;
      button.style.cssText =
        "display:block;width:100%;padding:12px;margin:7px 0;cursor:pointer;";

      button.onclick = () => {
        if (answered) return;
        answered = true;

        if (option.tr === word.tr) {
          score++;
          $("savedFeedback").textContent = "✅ To'g'ri!";
        } else {
          $("savedFeedback").textContent =
            `❌ To'g'ri javob: ${word.uz}`;
        }

        $("savedNext").disabled = false;
        $("savedNext").textContent =
          index === questions.length - 1
            ? "Natijani ko'rish"
            : "Keyingi savol";
      };

      $("savedOptions").appendChild(button);
    });
  }

  $("savedStart").onclick = startTest;

  $("savedNext").onclick = () => {
    if (!answered) return;
    index++;
    showQuestion();
  };
})();
```