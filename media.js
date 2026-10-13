
"use strict";

const LV = ["A1", "A2", "B1", "B2"];

const yt = (q) =>
  "https://www.youtube.com/results?search_query=" +
  encodeURIComponent(q);

// ===================================
// 🎬 30 TA VIDEO DARSLIK
// ===================================

const VIDEOS = [
  // A1 — Boshlang'ich
  { level: "A1", title: "1. Turk alifbosi", channel: "Turkcha dars", id: "", q: "Turkish alphabet Uzbek beginners", words: [["merhaba", "salom"], ["evet", "ha"]] },
  { level: "A1", title: "2. Salomlashish", channel: "Turkcha dars", id: "", q: "Türkçe selamlaşma A1", words: [["günaydın", "xayrli tong"], ["hoşça kal", "xayr"]] },
  { level: "A1", title: "3. O'zimni tanishtiraman", channel: "Turkcha dars", id: "", q: "Kendini tanıtma Türkçe A1", words: [["isim", "ism"], ["yaş", "yosh"]] },
  { level: "A1", title: "4. Sonlar", channel: "Turkcha dars", id: "", q: "Türkçe sayılar A1 dersi", words: [["bir", "bir"], ["beş", "besh"]] },
  { level: "A1", title: "5. Ranglar", channel: "Turkcha dars", id: "", q: "Türkçe renkler öğreniyorum", words: [["kırmızı", "qizil"], ["mavi", "ko'k"]] },
  { level: "A1", title: "6. Oila a'zolari", channel: "Turkcha dars", id: "", q: "Türkçe aile üyeleri A1", words: [["anne", "ona"], ["kardeş", "aka-uka yoki opa-singil"]] },
  { level: "A1", title: "7. Kundalik buyumlar", channel: "Turkcha dars", id: "", q: "Türkçe günlük eşyalar A1", words: [["kitap", "kitob"], ["kalem", "ruchka"]] },
  { level: "A1", title: "8. Oddiy gaplar", channel: "Turkcha dars", id: "", q: "Türkçe basit cümleler A1", words: [["Nasılsın?", "Qalaysan?"], ["İyiyim", "Yaxshiman"]] },

  // A2 — Boshlang'ichdan keyingi
  { level: "A2", title: "9. Hozirgi zamon", channel: "Turkcha dars", id: "", q: "Türkçe şimdiki zaman A2", words: [["geliyorum", "kelyapman"], ["gidiyorum", "ketyapman"]] },
  { level: "A2", title: "10. O'tgan zamon", channel: "Turkcha dars", id: "", q: "Türkçe geçmiş zaman A2", words: [["geldim", "keldim"], ["gördüm", "ko'rdim"]] },
  { level: "A2", title: "11. Kelasi zamon", channel: "Turkcha dars", id: "", q: "Türkçe gelecek zaman A2", words: [["gideceğim", "boraman"], ["yapacağım", "qilaman"]] },
  { level: "A2", title: "12. Savol tuzish", channel: "Turkcha dars", id: "", q: "Türkçe soru cümleleri A2", words: [["neden", "nima uchun"], ["nasıl", "qanday"]] },
  { level: "A2", title: "13. Do'konda suhbat", channel: "Turkcha dars", id: "", q: "Türkçe alışveriş diyalogları", words: [["fiyat", "narx"], ["ucuz", "arzon"]] },
  { level: "A2", title: "14. Restoranda", channel: "Turkcha dars", id: "", q: "Türkçe restoranda konuşma", words: [["menü", "menyu"], ["hesap", "hisob"]] },
  { level: "A2", title: "15. Yo'l so'rash", channel: "Turkcha dars", id: "", q: "Türkçe yol tarifi A2", words: [["sağ", "o'ng"], ["sol", "chap"]] },
  { level: "A2", title: "16. Kundalik tartib", channel: "Turkcha dars", id: "", q: "Türkçe günlük rutin A2", words: [["uyanmak", "uyg'onmoq"], ["çalışmak", "ishlamoq"]] },

  // B1 — O'rta
  { level: "B1", title: "17. Fikr bildirish", channel: "Turkcha dars", id: "", q: "Türkçe fikir belirtme B1", words: [["bence", "menimcha"], ["katılıyorum", "fikrga qo'shilaman"]] },
  { level: "B1", title: "18. Sabab va natija", channel: "Turkcha dars", id: "", q: "Türkçe sebep sonuç cümleleri B1", words: [["çünkü", "chunki"], ["bu yüzden", "shu sababli"]] },
  { level: "B1", title: "19. Shart mayli", channel: "Turkcha dars", id: "", q: "Türkçe şart kipi B1", words: [["eğer", "agar"], ["olursa", "bo'lsa"]] },
  { level: "B1", title: "20. Ish va kasblar", channel: "Turkcha dars", id: "", q: "Türkçe meslekler iş görüşmesi B1", words: [["meslek", "kasb"], ["deneyim", "tajriba"]] },
  { level: "B1", title: "21. Sayohat haqida", channel: "Turkcha dars", id: "", q: "Türkçe seyahat konuşmaları B1", words: [["rezervasyon", "band qilish"], ["konaklama", "turar joy"]] },
  { level: "B1", title: "22. His-tuyg'ular", channel: "Turkcha dars", id: "", q: "Türkçe duygular ve ifadeler B1", words: [["mutlu", "baxtli"], ["endişeli", "xavotirlangan"]] },
  { level: "B1", title: "23. Hikoya aytish", channel: "Turkcha dars", id: "", q: "Türkçe hikaye anlatma B1", words: [["birdenbire", "birdaniga"], ["sonunda", "oxirida"]] },

  // B2 — O'rta-yuqori
  { level: "B2", title: "24. Murakkab gaplar", channel: "Turkcha dars", id: "", q: "Türkçe birleşik cümleler B2", words: [["rağmen", "qaramay"], ["oysa", "holbuki"]] },
  { level: "B2", title: "25. Rasmiy turk tili", channel: "Turkcha dars", id: "", q: "Resmi Türkçe konuşma B2", words: [["başvurmak", "ariza bermoq"], ["talep", "talab"]] },
  { level: "B2", title: "26. Bahs va munozara", channel: "Turkcha dars", id: "", q: "Türkçe tartışma ve münazara B2", words: [["kanıt", "dalil"], ["savunmak", "himoya qilmoq"]] },
  { level: "B2", title: "27. Yangiliklarni tushunish", channel: "Turkcha dars", id: "", q: "Türkçe haber dinleme B2", words: [["gündem", "kun tartibi"], ["açıklama", "bayonot"]] },
  { level: "B2", title: "28. Maqol va iboralar", channel: "Turkcha dars", id: "", q: "Türkçe deyimler ve atasözleri B2", words: [["sabırlı", "sabrli"], ["fırsat", "imkoniyat"]] },
  { level: "B2", title: "29. Tinglab tushunish", channel: "Turkcha dars", id: "", q: "Türkçe dinleme çalışması B2", words: [["ayrıntı", "tafsilot"], ["anlam", "ma'no"]] },
  { level: "B2", title: "30. Murakkab bog'lovchilar", channel: "Turkcha dars", id: "", q: "Türkçe bağlaçlar B2 dersi", words: [["bununla birlikte", "shu bilan birga"], ["dolayısıyla", "binobarin"]] }
];


// ===================================
// 📺 50 TA SERIAL VA MULTFILM
// Har bir serialda title, level, genre, why bor.
// ===================================

const SERIES = [
  // A1 — 13 ta
  { level: "A1", title: "Rafadan Tayfa", genre: "Multfilm", why: "Kundalik suhbatlar va sodda so'zlar." },
  { level: "A1", title: "Pepee", genre: "Bolalar multfilmi", why: "Oddiy so'zlar, ranglar va iboralar." },
  { level: "A1", title: "Kral Şakir", genre: "Multfilm", why: "Kundalik suhbatlarni tinglash." },
  { level: "A1", title: "Niloya", genre: "Bolalar multfilmi", why: "Oila va tabiatga oid lug'at." },
  { level: "A1", title: "Kukuli", genre: "Bolalar multfilmi", why: "Takrorlanadigan sodda iboralar." },
  { level: "A1", title: "Aslan", genre: "Multfilm", why: "Savol-javob va kundalik so'zlar." },
  { level: "A1", title: "İstanbul Muhafızları", genre: "Multfilm", why: "Istanbul va kundalik hayotga oid so'zlar." },
  { level: "A1", title: "Canım Kardeşim", genre: "Multfilm", why: "Oila va do'stlik mavzusi." },
  { level: "A1", title: "Maysa ve Bulut", genre: "Multfilm", why: "Qisqa gaplar va iboralar." },
  { level: "A1", title: "Doru", genre: "Multfilm", why: "Hayvonlar va tabiat lug'ati." },
  { level: "A1", title: "Pırıl", genre: "Bolalar multfilmi", why: "Sodda jumlalarni o'rganish." },
  { level: "A1", title: "Elif'in Düşleri", genre: "Multfilm", why: "Boshlovchilar uchun tushunarli turkcha." },
  { level: "A1", title: "Köstebekgiller", genre: "Bolalar seriali", why: "Kundalik vaziyatlar va sodda suhbatlar." },

  // A2 — 13 ta
  { level: "A2", title: "Leyla ile Mecnun", genre: "Komediya", why: "Hazil va kundalik suhbatlar." },
  { level: "A2", title: "Erkenci Kuş", genre: "Romantik komediya", why: "Muloqot va kundalik iboralar." },
  { level: "A2", title: "Sen Çal Kapımı", genre: "Romantik komediya", why: "Munosabatlarga oid iboralar." },
  { level: "A2", title: "Kiraz Mevsimi", genre: "Romantik komediya", why: "Oddiy suhbatlar va kundalik so'zlashuv." },
  { level: "A2", title: "Dolunay", genre: "Romantik drama", why: "Ish va kundalik hayot lug'ati." },
  { level: "A2", title: "Bay Yanlış", genre: "Romantik komediya", why: "Norasmiy suhbatlar." },
  { level: "A2", title: "No: 309", genre: "Komediya", why: "Kundalik vaziyatlardagi iboralar." },
  { level: "A2", title: "Afili Aşk", genre: "Romantik komediya", why: "Oddiy dialoglar va hazil." },
  { level: "A2", title: "İnadına Aşk", genre: "Romantik komediya", why: "Ishxonadagi suhbatlar." },
  { level: "A2", title: "Ada Masalı", genre: "Romantik drama", why: "Tabiat va sayohat lug'ati." },
  { level: "A2", title: "Seksenler", genre: "Oilaviy komediya", why: "Oila va kundalik turmush." },
  { level: "A2", title: "Çocuklar Duymasın", genre: "Oilaviy komediya", why: "Oilaviy suhbatlar va hazil." },
  { level: "A2", title: "Jet Sosyete", genre: "Komediya", why: "Zamonaviy kundalik iboralar." },

  // B1 — 12 ta
  { level: "B1", title: "Kızılcık Şerbeti", genre: "Oilaviy drama", why: "Munozara va fikr bildirish." },
  { level: "B1", title: "Yalı Çapkını", genre: "Drama", why: "Murakkabroq dialoglar." },
  { level: "B1", title: "Çukur", genre: "Drama", why: "Norasmiy nutq va tezkor suhbatlar." },
  { level: "B1", title: "Masumlar Apartmanı", genre: "Psixologik drama", why: "Uzunroq dialoglarni tushunish." },
  { level: "B1", title: "Kiralık Aşk", genre: "Romantik komediya", why: "Ish va shaxsiy hayot suhbatlari." },
  { level: "B1", title: "Ufak Tefek Cinayetler", genre: "Drama", why: "Fikr bildirish va munosabatlar." },
  { level: "B1", title: "Kadın", genre: "Oilaviy drama", why: "Kundalik va oilaviy mavzular." },
  { level: "B1", title: "Anne", genre: "Drama", why: "His-tuyg'ular va murakkabroq gaplar." },
  { level: "B1", title: "Bizim Hikaye", genre: "Oilaviy drama", why: "Kundalik muammolar haqida suhbatlar." },
  { level: "B1", title: "Öğretmen", genre: "Drama", why: "Savol, izoh va fikr almashish." },
  { level: "B1", title: "Hekimoğlu", genre: "Tibbiy drama", why: "Tibbiyotga oid ayrim atamalar." },
  { level: "B1", title: "Mucize Doktor", genre: "Tibbiy drama", why: "Ish joyidagi muloqot." },

  // B2 — 12 ta
  { level: "B2", title: "Diriliş: Ertuğrul", genre: "Tarixiy drama", why: "Tarixiy so'zlar va rasmiy nutq." },
  { level: "B2", title: "Kuruluş: Osman", genre: "Tarixiy drama", why: "Murakkab dialoglar va tarixiy lug'at." },
  { level: "B2", title: "Bir Başkadır", genre: "Drama", why: "Turli nutq uslublari va chuqur suhbatlar." },
  { level: "B2", title: "Ezel", genre: "Jinoyat dramasi", why: "Murakkab dialoglar va yashirin ma'nolar." },
  { level: "B2", title: "Şahsiyet", genre: "Detektiv drama", why: "Murakkab fikrlar va voqealarni tahlil qilish." },
  { level: "B2", title: "Behzat Ç.", genre: "Detektiv drama", why: "Tezkor suhbatlar va norasmiy iboralar." },
  { level: "B2", title: "Poyraz Karayel", genre: "Jinoyat dramasi", why: "Hazil, kinoya va murakkab suhbatlar." },
  { level: "B2", title: "İçerde", genre: "Jinoyat dramasi", why: "Tez aytiladigan dialoglarni tushunish." },
  { level: "B2", title: "Söz", genre: "Harbiy drama", why: "Rasmiy buyruqlar va maxsus atamalar." },
  { level: "B2", title: "Teşkilat", genre: "Josuslik dramasi", why: "Rasmiy nutq va murakkab vaziyatlar." },
  { level: "B2", title: "Muhteşem Yüzyıl", genre: "Tarixiy drama", why: "Tarixiy lug'at va rasmiy muloqot." },
  { level: "B2", title: "Atiye", genre: "Fantastik drama", why: "Tasviriy til va murakkab suhbatlar." }
];


// ===================================
// 💾 MA'LUMOTLARNI SAQLASH
// ===================================

const db = {
  get(k, d) {
    try {
      const v = JSON.parse(localStorage.getItem(k));
      return v === null ? d : v;
    } catch (e) {
      return d;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
  }
};

let tab = "video";
let filter = db.get("mediaFilter", "all");
let watchedV = db.get("videosWatched", []);
let watchedS = db.get("seriesWatched", []);
let notes = db.get("seriesNotes", {});


// ===================================
// 🔗 HTML ELEMENTLARI
// ===================================

const listEl = document.getElementById("mediaList");
const hintEl = document.getElementById("mediaHint");
const selEl = document.getElementById("mediaLevel");
const tabBtns = document.querySelectorAll(".mtab");

if (!listEl || !hintEl || !selEl) {
  console.error(
    "HTML ichida mediaList, mediaHint va mediaLevel elementlari bo'lishi kerak."
  );
}


// ===================================
// 🎨 KARTALAR UCHUN CSS
// ===================================

const css = document.createElement("style");

css.textContent = `
  .m-card {
    background: #fff;
    border-radius: 18px;
    padding: 18px;
    margin: 14px 0;
    box-shadow: 0 4px 18px #0000000d;
  }

  .m-top {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .m-title {
    font-size: 17px;
    font-weight: 700;
  }

  .m-sub {
    color: #888;
    font-size: 13px;
    margin: 4px 0 10px;
  }

  .m-badge {
    font-size: 12px;
    background: #ffe3e3;
    color: #c0392b;
    border-radius: 8px;
    padding: 2px 8px;
    margin-left: 6px;
  }

  .m-words {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 10px 0;
  }

  .m-word {
    background: #f6f3ff;
    border-radius: 10px;
    padding: 6px 10px;
    font-size: 14px;
  }

  .m-word small {
    color: #888;
    margin-left: 4px;
  }

  .m-say {
    border: 0;
    background: none;
    cursor: pointer;
    font-size: 14px;
    padding: 0 0 0 4px;
  }

  .m-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 8px;
  }

  .m-btn {
    border: 0;
    border-radius: 10px;
    padding: 9px 14px;
    cursor: pointer;
    font-size: 14px;
    background: #f1f1f1;
    text-decoration: none;
    color: #222;
  }

  .m-btn.red {
    background: #e0001b;
    color: #fff;
  }

  .m-btn.on {
    background: #d7f5df;
    color: #17803d;
  }

  .m-frame {
    position: relative;
    padding-top: 56.25%;
    margin: 10px 0;
    border-radius: 12px;
    overflow: hidden;
  }

  .m-frame iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .m-notes {
    width: 100%;
    margin-top: 8px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 8px;
    font: inherit;
    font-size: 14px;
    resize: vertical;
    box-sizing: border-box;
  }

  #mediaLevel {
    padding: 9px 12px;
    border-radius: 10px;
    border: 1px solid #ddd;
    background: #fff;
    margin: 6px 0 10px;
  }
`;

document.head.appendChild(css);


// ===================================
// 🧰 YORDAMCHI FUNKSIYALAR
// ===================================

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function getTargetLevel() {
  // Saytingizda getTargetLevel() funksiyasi mavjud bo'lsa, undan foydalanadi.
  // Aks holda A1 darajasini tanlaydi.
  return typeof window.getTargetLevel === "function"
    ? window.getTargetLevel()
    : "A1";
}

function activeLevels() {
  if (filter === "all") return LV;
  if (filter === "mine") return [getTargetLevel()];
  return LV.includes(filter) ? [filter] : LV;
}

function say(text) {
  if (!("speechSynthesis" in window)) {
    alert("Brauzeringiz ovoz chiqarishni qo'llab-quvvatlamaydi.");
    return;
  }

  const u = new SpeechSynthesisUtterance(text);
  u.lang = "tr-TR";
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}


// ===================================
// 🎬 VIDEO KARTASI
// ===================================

function videoCard(v) {
  const done = watchedV.includes(v.title);

  const media = v.id
    ? `
      <div class="m-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/${esc(v.id)}"
          title="${esc(v.title)}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          loading="lazy">
        </iframe>
      </div>
    `
    : "";

  const link = v.id
    ? ""
    : `
      <a
        class="m-btn red"
        href="${yt(v.q)}"
        target="_blank"
        rel="noopener noreferrer">
        ▶ YouTube'da ochish
      </a>
    `;

  const words = v.words.length
    ? `
      <div class="m-words">
        ${v.words.map(([tr, uz]) => `
          <span class="m-word">
            ${esc(tr)}
            <button
              class="m-say"
              data-say="${esc(tr)}"
              title="Turkcha talaffuz">
              🔊
            </button>
            <small>${esc(uz)}</small>
          </span>
        `).join("")}
      </div>
    `
    : "";

  return `
    <div class="m-card">
      <div class="m-top">
        <div class="m-title">
          ${esc(v.title)}
          <span class="m-badge">${esc(v.level)}</span>
        </div>
      </div>

      <div class="m-sub">${esc(v.channel)}</div>

      ${media}
      ${words}

      <div class="m-actions">
        ${link}
        <button
          class="m-btn mv-watch ${done ? "on" : ""}"
          data-key="${esc(v.title)}">
          ${done ? "✓ Ko'rildi" : "Ko'rdim"}
        </button>
      </div>
    </div>
  `;
}


// ===================================
// 📺 SERIAL KARTASI
// ===================================

function serialCard(s) {
  const done = watchedS.includes(s.title);

  return `
    <div class="m-card">
      <div class="m-top">
        <div class="m-title">
          ${esc(s.title)}
          <span class="m-badge">${esc(s.level)}</span>
        </div>
      </div>

      <div class="m-sub">${esc(s.genre)}</div>

      <p>${esc(s.why)}</p>

      <a
        class="m-btn red"
        href="${yt(s.title + " Türkçe altyazılı")}"
        target="_blank"
        rel="noopener noreferrer">
        ▶ YouTube'dan qidirish
      </a>

      <textarea
        class="m-notes"
        rows="2"
        data-key="${esc(s.title)}"
        placeholder="Epizoddan 5 ta yangi so'z yoki iborani yozing...">${esc(notes[s.title] || "")}</textarea>

      <div class="m-actions">
        <button
          class="m-btn ms-watch ${done ? "on" : ""}"
          data-key="${esc(s.title)}">
          ${done ? "✓ Ko'rildi" : "Ko'rdim"}
        </button>
      </div>
    </div>
  `;
}


// ===================================
// 🔄 EKRANGA CHIQARISH
// ===================================

function render() {
  if (!listEl || !hintEl || !selEl) return;

  const lv = activeLevels();

  const items = (tab === "video" ? VIDEOS : SERIES)
    .filter((x) => lv.includes(x.level));

  const sorted = [...items].sort(
    (a, b) => LV.indexOf(a.level) - LV.indexOf(b.level)
  );

  hintEl.textContent = tab === "video"
    ? "30 ta video darslik. So'zlarni o'rganing, talaffuzini eshiting va YouTube'da darsni oching."
    : "50 ta serial va multfilm. Subtitr bilan tomosha qiling va yangi so'zlarni yozib boring.";

  listEl.innerHTML = sorted.length
    ? sorted.map((item) =>
        tab === "video" ? videoCard(item) : serialCard(item)
      ).join("")
    : `<p class="m-sub">Bu darajada hozircha dars yo'q.</p>`;

  tabBtns.forEach((b) => {
    b.classList.toggle("active", b.dataset.tab === tab);
  });
}


// ===================================
// 🖱️ TUGMALAR
// ===================================

tabBtns.forEach((b) => {
  b.addEventListener("click", () => {
    tab = b.dataset.tab;
    render();
  });
});

selEl.addEventListener("change", () => {
  filter = selEl.value;
  db.set("mediaFilter", filter);
  render();
});

listEl.addEventListener("click", (e) => {
  const sayBtn = e.target.closest(".m-say");
  const vBtn = e.target.closest(".mv-watch");
  const sBtn = e.target.closest(".ms-watch");

  if (sayBtn) {
    say(sayBtn.dataset.say);
  }

  if (vBtn) {
    const key = vBtn.dataset.key;

    watchedV = watchedV.includes(key)
      ? watchedV.filter((x) => x !== key)
      : [...watchedV, key];

    db.set("videosWatched", watchedV);
    render();
  }

  if (sBtn) {
    const key = sBtn.dataset.key;

    watchedS = watchedS.includes(key)
      ? watchedS.filter((x) => x !== key)
      : [...watchedS, key];

    db.set("seriesWatched", watchedS);
    render();
  }
});

listEl.addEventListener("input", (e) => {
  const ta = e.target.closest(".m-notes");
  if (!ta) return;

  notes[ta.dataset.key] = ta.value;
  db.set("seriesNotes", notes);
});


// ===================================
// 🚀 BOSHLASH
// ===================================

if (selEl) {
  const savedFilter = db.get("mediaFilter", "all");

  selEl.value = ["all", "mine", ...LV].includes(savedFilter)
    ? savedFilter
    : "all";
  filter = selEl.value;
}

render();

console.log("Video darslar:", VIDEOS.length);
console.log("Seriallar:", SERIES.length);
