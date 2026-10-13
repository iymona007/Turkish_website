
"use strict";

// HTML elementlari
const grid = document.getElementById("wordsGrid");
const searchInput = document.getElementById("search");
const catBox = document.getElementById("categories");
const levelBox = document.getElementById("levels");
const emptyText = document.getElementById("empty");

// HTML IDlari tekshiruvi
if (!grid || !searchInput || !catBox || !levelBox || !emptyText) {
  console.error("HTML IDlarini tekshiring: wordsGrid, search, categories, levels, empty.");
} else {

// KATEGORIYALAR
const CATEGORIES = {
  salom: "👋 Salomlashuv",
  kundalik: "📚 Kundalik so‘zlar",
  oila: "👨‍👩‍👧 Oila",
  ovqat: "🍎 Oziq-ovqat",
  ranglar: "🎨 Ranglar",
  sonlar: "🔢 Sonlar",
  kasblar: "💼 Kasblar",
  buyumlar: "🧸 Buyumlar",
  hislar: "😊 His-tuyg‘ular",
  tabiat: "🌿 Tabiat",
  maktab: "🏫 Maktab"
};
// SO‘ZLAR
// Tartib: turkcha, talaffuz, tarjima, kategoriya, daraja, emoji
const RAW_WORDS = [
  // SALOMLASHUV
  ["Merhaba","merhaba","Salom","salom","A1","👋"],
  ["Selam","selam","Salom (do‘stona)","salom","A1","🙋"],
  ["Günaydın","gyunaydin","Xayrli tong","salom","A1","🌅"],
  ["İyi günler","iyi gyunler","Xayrli kun","salom","A1","☀️"],
  ["İyi akşamlar","iyi akshamlar","Xayrli kech","salom","A1","🌆"],
  ["İyi geceler","iyi gejeler","Xayrli tun","salom","A1","🌙"],
  ["Hoşça kal","hoshcha kal","Xayr","salom","A1","👋"],
  ["Güle güle","gyule gyule","Xayr (ketayotgan kishiga)","salom","A1","😊"],
  ["Nasılsın?","nasilsin","Qalaysan?","salom","A1","❓"],
  ["İyiyim","iyiyim","Yaxshiman","salom","A1","😄"],
  ["Memnun oldum","memnun oldum","Tanishganimdan xursandman","salom","A2","🤝"],
  ["Görüşürüz","goryushyuryuz","Ko‘rishguncha","salom","A1","👋"],

  // KUNDALIK
  ["Evet","evet","Ha","kundalik","A1","✅"],
  ["Hayır","hayir","Yo‘q","kundalik","A1","❌"],
  ["Lütfen","lyutfen","Iltimos","kundalik","A1","🙏"],
  ["Teşekkürler","teshekkurler","Rahmat","kundalik","A1","💐"],
  ["Özür dilerim","ozyur dilerim","Kechirasiz","kundalik","A1","🙏"],
  ["Tamam","tamam","Mayli, xo‘p","kundalik","A1","👌"],
  ["Belki","belki","Balki","kundalik","A2","🤔"],
  ["Şimdi","shimdi","Hozir","kundalik","A1","⏰"],
  ["Sonra","sonra","Keyin","kundalik","A1","➡️"],
  ["Çünkü","chyunku","Chunki","kundalik","A2","💡"],
  ["Güzel","gyuzel","Chiroyli, yaxshi","kundalik","A1","🌸"],
  ["Kolay","kolay","Oson","kundalik","A1","🙂"],
  ["Zor","zor","Qiyin","kundalik","A1","🧩"],
  ["Hızlı","hizli","Tez","kundalik","A2","⚡"],
  ["Yavaş","yavash","Sekin","kundalik","A2","🐢"],
  ["Bugün","bugyun","Bugun","kundalik","A1","📅"],
  ["Yarın","yarin","Ertaga","kundalik","A1","🗓️"],
  ["Dün","dyun","Kecha","kundalik","A1","⏪"],
  ["Burada","burada","Bu yerda","kundalik","A1","📍"],
  ["Orada","orada","U yerda","kundalik","A1","➡️"],

  // OILA
  ["Aile","aile","Oila","oila","A1","👨‍👩‍👧"],
  ["Anne","anne","Ona","oila","A1","👩"],
  ["Baba","baba","Ota","oila","A1","👨"],
  ["Kardeş","kardesh","Aka-uka yoki opa-singil","oila","A1","🧑‍🤝‍🧑"],
  ["Abla","abla","Opa","oila","A1","👩"],
  ["Abi","abi","Aka","oila","A1","👨"],
  ["Kız kardeş","kiz kardesh","Singil yoki opa","oila","A1","👧"],
  ["Erkek kardeş","erkek kardesh","Uka yoki aka","oila","A1","👦"],
  ["Büyükanne","byuyukanne","Buvi","oila","A2","👵"],
  ["Büyükbaba","byuyukbaba","Bobo","oila","A2","👴"],
  ["Teyze","teyze","Xola","oila","A2","👩"],
  ["Amca","amja","Amaki","oila","A2","👨"],

  // OZIQ-OVQAT
  ["Ekmek","ekmek","Non","ovqat","A1","🍞"],
  ["Su","su","Suv","ovqat","A1","💧"],
  ["Süt","syut","Sut","ovqat","A1","🥛"],
  ["Elma","elma","Olma","ovqat","A1","🍎"],
  ["Armut","armut","Nok","ovqat","A1","🍐"],
  ["Muz","muz","Banan","ovqat","A1","🍌"],
  ["Yumurta","yumurta","Tuxum","ovqat","A1","🥚"],
  ["Peynir","peynir","Pishloq","ovqat","A1","🧀"],
  ["Pirinç","pirinch","Guruch","ovqat","A2","🍚"],
  ["Çorba","chorba","Sho‘rva","ovqat","A1","🍲"],
  ["Tavuk","tavuk","Tovuq go‘shti","ovqat","A1","🍗"],
  ["Balık","balik","Baliq","ovqat","A1","🐟"],
  ["Şeker","sheker","Shakar","ovqat","A1","🍬"],
  ["Tuz","tuz","Tuz","ovqat","A1","🧂"],
  ["Kahve","kahve","Qahva","ovqat","A1","☕"],

  // RANGLAR
  ["Kırmızı","kirmizi","Qizil","ranglar","A1","🔴"],
  ["Mavi","mavi","Ko‘k","ranglar","A1","🔵"],
  ["Yeşil","yeshil","Yashil","ranglar","A1","🟢"],
  ["Sarı","sari","Sariq","ranglar","A1","🟡"],
  ["Siyah","siyah","Qora","ranglar","A1","⚫"],
  ["Beyaz","beyaz","Oq","ranglar","A1","⚪"],
  ["Pembe","pembe","Pushti","ranglar","A1","🩷"],
  ["Mor","mor","Binafsha","ranglar","A1","🟣"],
  ["Turuncu","turundju","To‘q sariq","ranglar","A1","🟠"],
  ["Gri","gri","Kulrang","ranglar","A2","🩶"],
    // QO‘SHIMCHA RANGLAR
  ["Kahverengi","kahverengi","Jigarrang","ranglar","A1","🟤"],
  ["Lacivert","lajivert","To‘q ko‘k","ranglar","A2","🔵"],
  ["Turkuaz","turkuaz","Feruza rang","ranglar","A2","🩵"],
  ["Bej","bej","Bej rang","ranglar","A2","🤎"],
  ["Altın rengi","altin rengi","Oltin rang","ranglar","A2","🌟"],
  ["Gümüş rengi","gyumyush rengi","Kumush rang","ranglar","A2","🩶"],
  ["Açık mavi","achik mavi","Och ko‘k","ranglar","A2","🩵"],
  ["Koyu mavi","koyu mavi","To‘q ko‘k","ranglar","A2","🔷"],
  ["Açık yeşil","achik yesil","Och yashil","ranglar","A2","🟢"],
  ["Koyu yeşil","koyu yesil","To‘q yashil","ranglar","A2","🌲"],
  ["Açık pembe","achik pembe","Och pushti","ranglar","A2","🩷"],
  ["Bordo","bordo","To‘q qizil","ranglar","B1","🔴"],
  ["Lila","lila","Liloviy rang","ranglar","A2","🟣"],
  ["Krem rengi","krem rengi","Krem rang","ranglar","A2","🤍"],

  // SONLAR
  ["Bir","bir","Bir","sonlar","A1","1️⃣"],
  ["İki","iki","Ikki","sonlar","A1","2️⃣"],
  ["Üç","uch","Uch","sonlar","A1","3️⃣"],
  ["Dört","dort","To‘rt","sonlar","A1","4️⃣"],
  ["Beş","besh","Besh","sonlar","A1","5️⃣"],
  ["Altı","alti","Olti","sonlar","A1","6️⃣"],
  ["Yedi","yedi","Yetti","sonlar","A1","7️⃣"],
  ["Sekiz","sekiz","Sakkiz","sonlar","A1","8️⃣"],
  ["Dokuz","dokuz","To‘qqiz","sonlar","A1","9️⃣"],
  ["On","on","O‘n","sonlar","A1","🔟"],

  // KASBLAR
  ["Öğretmen","o‘gretmen","O‘qituvchi","kasblar","A1","👩‍🏫"],
  ["Doktor","doktor","Shifokor","kasblar","A1","👨‍⚕️"],
  ["Hemşire","hemshire","Hamshira","kasblar","A1","🩺"],
  ["Polis","polis","Politsiyachi","kasblar","A1","👮"],
  ["Aşçı","ashchi","Oshpaz","kasblar","A1","👨‍🍳"],
  ["Şoför","shofyor","Haydovchi","kasblar","A1","🚕"],
  ["Garson","garson","Ofitsiant","kasblar","A1","🍽️"],
  ["Öğrenci","o‘grendji","O‘quvchi, talaba","kasblar","A1","🎓"],
  ["Mühendis","muhendis","Muhandis","kasblar","A2","👷"],
  ["Mimar","mimar","Me’mor","kasblar","A2","📐"],
  ["Avukat","avukat","Advokat","kasblar","A2","⚖️"],
  ["Yazılımcı","yazilimji","Dasturchi","kasblar","A2","💻"],
  ["Terzi","terzi","Tikuvchi","kasblar","A2","🧵"],
  ["Çiftçi","chiftchi","Fermer","kasblar","A2","🌾"],
  ["Ressam","ressam","Rassom","kasblar","A2","🎨"],
  ["Şarkıcı","sharkiji","Qo‘shiqchi","kasblar","A2","🎤"],
  ["Yazar","yazar","Yozuvchi","kasblar","B1","✍️"],
  ["Gazeteci","gazeteci","Jurnalist","kasblar","B1","📰"],
  ["Eczacı","ejzaji","Farmatsevt","kasblar","B1","💊"],
  ["Diş hekimi","dish hek imi","Tish shifokori","kasblar","B1","🦷"],
  ["Pilot","pilot","Uchuvchi","kasblar","A2","✈️"],
  ["Berber","berber","Sartarosh","kasblar","A2","💈"],
  ["İtfaiyeci","itfaiyeci","O‘t o‘chiruvchi","kasblar","B1","🚒"],
  ["Psikolog","psikolog","Psixolog","kasblar","B1","🧠"],
  ["Fotoğrafçı","fotografchi","Fotograf","kasblar","B1","📸"],
  ["Elektrikçi","elektrikchi","Elektrik ustasi","kasblar","A2","🔌"],
  ["Tamirci","tamirji","Ta’mirlovchi usta","kasblar","A2","🔧"],
  ["Dişçi","dishchi","Tish doktori","kasblar","A2","🦷"],
  ["Bilim insanı","bilim insani","Olim","kasblar","B1","🔬"],
  ["Tasarımcı","tasarimji","Dizayner","kasblar","B1","🖌️"],
  ["Müzisyen","myuzisyen","Musiqachi","kasblar","A2","🎹"],
  ["Oyuncu","oyundju","Aktyor yoki aktrisa","kasblar","A2","🎭"],
  ["Dansçı","danschi","Raqqos yoki raqqosa","kasblar","A2","💃"],
  ["İşçi","ishchi","Ishchi","kasblar","A1","🦺"],
  ["Yönetici","yonetiji","Rahbar","kasblar","B1","💼"],
  ["Muhabir","muhabir","Muxbir","kasblar","B1","🎙️"],
  ["Çevirmen","chevirmen","Tarjimon","kasblar","B1","🌍"],
  ["Diş teknisyeni","dish teknisyeni","Tish texnigi","kasblar","B2","🦷"],
  ["Veteriner","veteriner","Veterinar","kasblar","A2","🐾"],
  ["Bahçıvan","bahchivan","Bog‘bon","kasblar","A2","🌱"],
  ["Kasiyer","kasiyer","Kassir","kasblar","A2","🧾"],

  // HIS-TUYG‘ULAR
  ["Mutlu","mutlu","Baxtli","hislar","A1","😊"],
  ["Üzgün","uzgyun","Xafa","hislar","A1","😔"],
  ["Yorgun","yorgun","Charchagan","hislar","A1","😴"],
  ["Heyecanlı","heyedjanli","Hayajonlangan","hislar","A2","🤩"],
  ["Korkmuş","korkmush","Qo‘rqqan","hislar","A2","😨"],
  ["Şaşkın","shashkin","Hayron","hislar","A2","😲"],
  ["Sakin","sakin","Xotirjam","hislar","A2","😌"],
  ["Kızgın","kizgin","Jahli chiqqan","hislar","A2","😠"],

  // TABIAT
  ["Güneş","gyunesh","Quyosh","tabiat","A1","☀️"],
  ["Ay","ay","Oy","tabiat","A1","🌙"],
  ["Yıldız","yildiz","Yulduz","tabiat","A1","⭐"],
  ["Yağmur","yagmur","Yomg‘ir","tabiat","A1","🌧️"],
  ["Kar","kar","Qor","tabiat","A1","❄️"],
  ["Rüzgâr","ryuzgar","Shamol","tabiat","A2","💨"],
  ["Deniz","deniz","Dengiz","tabiat","A1","🌊"],
  ["Dağ","dag","Tog‘","tabiat","A1","⛰️"],
  ["Ağaç","agach","Daraxt","tabiat","A1","🌳"],
  ["Çiçek","chichek","Gul","tabiat","A1","🌷"],

  // MAKTAB
  ["Okul","okul","Maktab","maktab","A1","🏫"],
  ["Kitap","kitap","Kitob","maktab","A1","📚"],
  ["Defter","defter","Daftar","maktab","A1","📒"],
  ["Kalem","kalem","Ruchka","maktab","A1","🖊️"],
  ["Silgi","silgi","O‘chirg‘ich","maktab","A1","🧽"],
  ["Sınav","sinav","Imtihon","maktab","A2","📝"],
  ["Ders","ders","Dars","maktab","A1","📖"],
  ["Soru","soru","Savol","maktab","A1","❓"],
  ["Cevap","jevap","Javob","maktab","A1","💬"],
  
  // 🧸 UY VA KUNDALIK BUYUMLAR
  ["Masa","masa","Stol","buyumlar","A1","🪑"],
  ["Sandalye","sandalye","Stul","buyumlar","A1","🪑"],
  ["Kapı","kapi","Eshik","buyumlar","A1","🚪"],
  ["Pencere","penjere","Deraza","buyumlar","A1","🪟"],
  ["Anahtar","anahtar","Kalit","buyumlar","A1","🔑"],
  ["Çanta","chanta","Sumka","buyumlar","A1","👜"],
  ["Telefon","telefon","Telefon","buyumlar","A1","📱"],
  ["Bilgisayar","bilgisayar","Kompyuter","buyumlar","A1","💻"],
  ["Televizyon","televizyon","Televizor","buyumlar","A1","📺"],
  ["Saat","saat","Soat","buyumlar","A1","⌚"],
  ["Ayna","ayna","Ko‘zgu","buyumlar","A1","🪞"],
  ["Lamba","lamba","Chiroq","buyumlar","A1","💡"],
  ["Yatak","yatak","Karavot","buyumlar","A1","🛏️"],
  ["Yastık","yastik","Yostiq","buyumlar","A1","🛌"],
  ["Battaniye","battaniye","Adyol","buyumlar","A2","🛏️"],
  ["Dolap","dolap","Shkaf","buyumlar","A1","🚪"],
  ["Halı","hali","Gilam","buyumlar","A1","🧶"],
  ["Perde","perde","Parda","buyumlar","A2","🪟"],
  ["Koltuk","koltuk","Divan","buyumlar","A1","🛋️"],
  ["Masa lambası","masa lambasi","Stol chirog‘i","buyumlar","A2","💡"],

  // 🍽️ OSHXONA BUYUMLARI
  ["Tabak","tabak","Likopcha","buyumlar","A1","🍽️"],
  ["Bardak","bardak","Stakan","buyumlar","A1","🥛"],
  ["Fincan","findjan","Piyola","buyumlar","A1","☕"],
  ["Kaşık","kashik","Qoshiq","buyumlar","A1","🥄"],
  ["Çatal","chatal","Sanchqi","buyumlar","A1","🍴"],
  ["Bıçak","bichak","Pichoq","buyumlar","A1","🔪"],
  ["Tencere","tendjere","Qozon","buyumlar","A2","🍲"],
  ["Tava","tava","Tova","buyumlar","A2","🍳"],
  ["Şişe","shishe","Shisha","buyumlar","A1","🍼"],
  ["Termos","termos","Termos","buyumlar","A2","🫗"],
  ["Buzdolabı","buzdolabi","Muzlatkich","buyumlar","A2","🧊"],
  ["Fırın","firin","Pech","buyumlar","A2","♨️"],
  ["Çaydanlık","chaydanlik","Choynak","buyumlar","A2","🫖"],
  ["Tepsi","tepsi","Patnis","buyumlar","A2","🍽️"],

  // ✏️ O‘QUV QUROLLARI
  ["Kalem","kalem","Ruchka","buyumlar","A1","🖊️"],
  ["Kurşun kalem","kurshun kalem","Qalam","buyumlar","A1","✏️"],
  ["Silgi","silgi","O‘chirg‘ich","buyumlar","A1","🧽"],
  ["Cetvel","jetvel","Chizg‘ich","buyumlar","A1","📏"],
  ["Makas","makas","Qaychi","buyumlar","A1","✂️"],
  ["Yapıştırıcı","yapishtiriji","Yelim","buyumlar","A2","🧴"],
  ["Defter","defter","Daftar","buyumlar","A1","📒"],
  ["Kitap","kitap","Kitob","buyumlar","A1","📚"],
  ["Sırt çantası","sirt chantasi","Ryukzak","buyumlar","A1","🎒"],
  ["Kalem kutusu","kalem kutusu","Qalamdon","buyumlar","A2","🖍️"],

  // 👕 KIYIM VA AKSESSUARLAR
  ["Gömlek","gyomlek","Ko‘ylak","buyumlar","A1","👔"],
  ["Pantolon","pantolon","Shim","buyumlar","A1","👖"],
  ["Elbise","elbise","Ko‘ylak (libos)","buyumlar","A1","👗"],
  ["Ayakkabı","ayakkabi","Oyoq kiyim","buyumlar","A1","👟"],
  ["Çorap","chorap","Paypoq","buyumlar","A1","🧦"],
  ["Şapka","shapka","Shlyapa","buyumlar","A1","🧢"],
  ["Mont","mont","Kurtka","buyumlar","A1","🧥"],
  ["Ceket","jeket","Pidjak","buyumlar","A2","🧥"],
  ["Kemer","kemer","Kamar","buyumlar","A2","👖"],
  ["Gözlük","gozlyuk","Ko‘zoynak","buyumlar","A2","👓"],
  ["Şemsiye","shemsiye","Soyabon","buyumlar","A2","☂️"],
  ["Çanta","chanta","Sumka","buyumlar","A1","👜"],

  // 🧼 SHAXSIY BUYUMLAR
  ["Sabun","sabun","Sovun","buyumlar","A1","🧼"],
  ["Havlu","havlu","Sochiq","buyumlar","A1","🧖"],
  ["Diş fırçası","dish firchasi","Tish cho‘tkasi","buyumlar","A1","🪥"],
  ["Diş macunu","dish majunu","Tish pastasi","buyumlar","A2","🦷"],
  ["Tarak","tarak","Taroq","buyumlar","A1","💇"],
  ["Parfüm","parfyum","Atir","buyumlar","A2","🌸"],
  ["Cüzdan","jyuzdan","Hamyon","buyumlar","A2","👛"],
  ["Anahtarlık","anahtarlik","Kalit ilgich","buyumlar","A2","🔑"],
  ["Valiz","valiz","Chamadon","buyumlar","A2","🧳"],
  ["Kulaklık","kulaklik","Quloqchin","buyumlar","A2","🎧"]

];

// Ma’lumotlarni obyektga aylantiramiz
const WORDS = RAW_WORDS.map(([tr, pron, uz, cat, level, emoji]) => ({
  tr, pron, uz, cat, level, emoji
}));

// SAYT HOLATI
let activeCat = "all";
let activeLevel = "all";
let saved = [];

try {
  const stored = JSON.parse(localStorage.getItem("savedWords") || "[]");
  saved = Array.isArray(stored) ? stored : [];
} catch {
  saved = [];
}

// KATEGORIYA TUGMALARI
const tabs = {
  all: "📚 Barchasi",
  ...CATEGORIES,
  saved: "⭐ Saqlanganlar"
};

catBox.innerHTML = Object.entries(tabs).map(([key, name]) => `
  <button type="button"
          class="cat ${key === "all" ? "active" : ""}"
          data-cat="${key}">
    ${name}
  </button>
`).join("");

// DARAJA TUGMALARI
const levelTabs = ["all", "A1", "A2", "B1", "B2"];

levelBox.innerHTML = levelTabs.map(level => `
  <button type="button"
          class="cat ${level === "all" ? "active" : ""}"
          data-level="${level}">
    ${level === "all" ? "Barcha darajalar" : level}
  </button>
`).join("");

// HTML ichiga xavfsiz chiqarish
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

// SO‘ZLARNI EKRANGA CHIQARISH
function render() {
  const q = searchInput.value.toLocaleLowerCase().trim();

  const list = WORDS.filter(word => {
    let categoryMatch;

    if (activeCat === "all") {
      categoryMatch = true;
    } else if (activeCat === "saved") {
      categoryMatch = saved.includes(word.tr);
    } else {
      categoryMatch = word.cat === activeCat;
    }

    const levelMatch =
      activeLevel === "all" || word.level === activeLevel;

    const searchMatch =
      word.tr.toLocaleLowerCase().includes(q) ||
      word.uz.toLocaleLowerCase().includes(q) ||
      word.pron.toLocaleLowerCase().includes(q);

    return categoryMatch && levelMatch && searchMatch;
  });

  grid.innerHTML = list.map((word, index) => `
    <div class="word-card c${(index % 5) + 1}">
      <span class="level">${escapeHTML(word.level)}</span>
      <div class="emoji">${escapeHTML(word.emoji)}</div>
      <h3>${escapeHTML(word.tr)}</h3>
      <div class="pron">[${escapeHTML(word.pron)}]</div>
      <div class="uz">${escapeHTML(word.uz)}</div>

      <div class="card-actions">
        <button type="button"
                class="speak"
                data-word="${escapeHTML(word.tr)}"
                title="Talaffuzni eshitish">
          🔊
        </button>

        <button type="button"
                class="save ${saved.includes(word.tr) ? "saved" : ""}"
                data-word="${escapeHTML(word.tr)}"
                title="Saqlanganlarga qo‘shish">
          ${saved.includes(word.tr) ? "★" : "＋"}
        </button>
      </div>
    </div>
  `).join("");

  emptyText.hidden = list.length > 0;

  if (list.length === 0) {
    emptyText.textContent = "So‘z topilmadi. Boshqa so‘z qidirib ko‘ring.";
  }
}

// KATEGORIYANI TANLASH
catBox.addEventListener("click", event => {
  const button = event.target.closest("button[data-cat]");
  if (!button) return;

  activeCat = button.dataset.cat;

  catBox.querySelectorAll(".cat").forEach(item => {
    item.classList.toggle("active", item === button);
  });

  render();
});

// DARAJANI TANLASH
levelBox.addEventListener("click", event => {
  const button = event.target.closest("button[data-level]");
  if (!button) return;

  activeLevel = button.dataset.level;

  levelBox.querySelectorAll(".cat").forEach(item => {
    item.classList.toggle("active", item === button);
  });

  render();
});

// QIDIRUV
searchInput.addEventListener("input", render);

// TALAFFUZ VA SAQLASH
grid.addEventListener("click", event => {
  const speakButton = event.target.closest(".speak");
  const saveButton = event.target.closest(".save");

  // Turkcha talaffuz
  if (speakButton) {
    if (!("speechSynthesis" in window)) {
      alert("Brauzeringiz talaffuz funksiyasini qo‘llab-quvvatlamaydi.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(
      speakButton.dataset.word
    );

    utterance.lang = "tr-TR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  // Saqlangan so‘zlar
  if (saveButton) {
    const word = saveButton.dataset.word;

    if (saved.includes(word)) {
      saved = saved.filter(item => item !== word);
    } else {
      saved.push(word);
    }

    localStorage.setItem("savedWords", JSON.stringify(saved));
    render();
  }
});

// SAYTNI ISHGA TUSHIRISH
render();

} // HTML elementlari tekshiruvi tugadi
