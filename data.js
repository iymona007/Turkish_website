const CATEGORIES = {
  salom: "Salomlashuv",
  oila: "Oila",
  kundalik: "Kundalik hayot",
  sayohat: "Sayohat",
  ovqat: "Ovqat",
  raqam: "Raqamlar",
  rang: "Ranglar",
  fiil: "Fe'llar",
  his: "His-tuyg'ular",
  ish: "Ish va jamiyat",
  tabiat: "Tabiat",
};

const WORDS = [
  // Salomlashuv
  { tr: "merhaba", pron: "merhaba", uz: "salom", cat: "salom", level: "A1", emoji: "👋" },
  { tr: "günaydın", pron: "gyunaydin", uz: "xayrli tong", cat: "salom", level: "A1", emoji: "☀️" },
  { tr: "iyi akşamlar", pron: "iyi akshamlar", uz: "xayrli kech", cat: "salom", level: "A1", emoji: "🌆" },
  { tr: "iyi geceler", pron: "iyi geceler", uz: "xayrli tun", cat: "salom", level: "A1", emoji: "🌙" },
  { tr: "hoşça kal", pron: "hoshcha kal", uz: "xayr", cat: "salom", level: "A1", emoji: "🖐️" },
  { tr: "teşekkür ederim", pron: "teshekkyur ederim", uz: "rahmat", cat: "salom", level: "A1", emoji: "❤️" },
  { tr: "lütfen", pron: "lyutfen", uz: "iltimos", cat: "salom", level: "A1", emoji: "🙏" },
  { tr: "özür dilerim", pron: "özyur dilerim", uz: "kechirasiz", cat: "salom", level: "A2", emoji: "🌿" },
  { tr: "evet", pron: "evet", uz: "ha", cat: "salom", level: "A1", emoji: "✅" },
  { tr: "hayır", pron: "hayir", uz: "yo'q", cat: "salom", level: "A1", emoji: "❌" },

  // Oila
  { tr: "aile", pron: "aile", uz: "oila", cat: "oila", level: "A1", emoji: "👨‍👩‍👧" },
  { tr: "anne", pron: "anne", uz: "ona", cat: "oila", level: "A1", emoji: "👩" },
  { tr: "baba", pron: "baba", uz: "ota", cat: "oila", level: "A1", emoji: "👨" },
  { tr: "kardeş", pron: "kardesh", uz: "aka-uka, opa-singil", cat: "oila", level: "A1", emoji: "🧑‍🤝‍🧑" },
  { tr: "abla", pron: "abla", uz: "opa", cat: "oila", level: "A1", emoji: "👧" },
  { tr: "abi", pron: "abi", uz: "aka", cat: "oila", level: "A1", emoji: "👦" },
  { tr: "dede", pron: "dede", uz: "bobo", cat: "oila", level: "A2", emoji: "👴" },
  { tr: "nine", pron: "nine", uz: "buvi", cat: "oila", level: "A2", emoji: "👵" },
  { tr: "çocuk", pron: "chojuk", uz: "bola", cat: "oila", level: "A1", emoji: "🧒" },

  // Kundalik hayot
  { tr: "arkadaş", pron: "arkadash", uz: "do'st", cat: "kundalik", level: "A1", emoji: "🤝" },
  { tr: "kitap", pron: "kitap", uz: "kitob", cat: "kundalik", level: "A1", emoji: "📖" },
  { tr: "ev", pron: "ev", uz: "uy", cat: "kundalik", level: "A1", emoji: "🏠" },
  { tr: "su", pron: "su", uz: "suv", cat: "kundalik", level: "A1", emoji: "💧" },
  { tr: "okul", pron: "okul", uz: "maktab", cat: "kundalik", level: "A1", emoji: "🏫" },
  { tr: "iş", pron: "ish", uz: "ish", cat: "kundalik", level: "A1", emoji: "💼" },
  { tr: "telefon", pron: "telefon", uz: "telefon", cat: "kundalik", level: "A1", emoji: "📱" },
  { tr: "kalem", pron: "kalem", uz: "qalam", cat: "kundalik", level: "A1", emoji: "✏️" },
  { tr: "para", pron: "para", uz: "pul", cat: "kundalik", level: "A1", emoji: "💰" },
  { tr: "güzel", pron: "gyuzel", uz: "chiroyli", cat: "kundalik", level: "A2", emoji: "🌸" },

  // Sayohat
  { tr: "otel", pron: "otel", uz: "mehmonxona", cat: "sayohat", level: "A1", emoji: "🏨" },
  { tr: "havalimanı", pron: "havalimani", uz: "aeroport", cat: "sayohat", level: "A2", emoji: "✈️" },
  { tr: "otobüs", pron: "otobyus", uz: "avtobus", cat: "sayohat", level: "A1", emoji: "🚌" },
  { tr: "bilet", pron: "bilet", uz: "chipta", cat: "sayohat", level: "A1", emoji: "🎫" },
  { tr: "yol", pron: "yol", uz: "yo'l", cat: "sayohat", level: "A1", emoji: "🛣️" },
  { tr: "şehir", pron: "shehir", uz: "shahar", cat: "sayohat", level: "A1", emoji: "🏙️" },
  { tr: "harita", pron: "harita", uz: "xarita", cat: "sayohat", level: "A2", emoji: "🗺️" },
  { tr: "pasaport", pron: "pasaport", uz: "pasport", cat: "sayohat", level: "A2", emoji: "🛂" },
  { tr: "deniz", pron: "deniz", uz: "dengiz", cat: "sayohat", level: "A1", emoji: "🌊" },
  { tr: "nerede", pron: "nerede", uz: "qayerda", cat: "sayohat", level: "A1", emoji: "📍" },

  // Ovqat
  { tr: "ekmek", pron: "ekmek", uz: "non", cat: "ovqat", level: "A1", emoji: "🍞" },
  { tr: "çay", pron: "chay", uz: "choy", cat: "ovqat", level: "A1", emoji: "🍵" },
  { tr: "kahve", pron: "kahve", uz: "qahva", cat: "ovqat", level: "A1", emoji: "☕" },
  { tr: "et", pron: "et", uz: "go'sht", cat: "ovqat", level: "A1", emoji: "🥩" },
  { tr: "elma", pron: "elma", uz: "olma", cat: "ovqat", level: "A1", emoji: "🍎" },
  { tr: "süt", pron: "syut", uz: "sut", cat: "ovqat", level: "A1", emoji: "🥛" },
  { tr: "peynir", pron: "peynir", uz: "pishloq", cat: "ovqat", level: "A2", emoji: "🧀" },
  { tr: "yumurta", pron: "yumurta", uz: "tuxum", cat: "ovqat", level: "A2", emoji: "🥚" },
  { tr: "tavuk", pron: "tavuk", uz: "tovuq go'shti", cat: "ovqat", level: "A2", emoji: "🍗" },
  { tr: "tatlı", pron: "tatli", uz: "shirinlik", cat: "ovqat", level: "A2", emoji: "🍰" },

  // Raqamlar
  { tr: "bir", pron: "bir", uz: "bir", cat: "raqam", level: "A1", emoji: "1️⃣" },
  { tr: "iki", pron: "iki", uz: "ikki", cat: "raqam", level: "A1", emoji: "2️⃣" },
  { tr: "üç", pron: "yuch", uz: "uch", cat: "raqam", level: "A1", emoji: "3️⃣" },
  { tr: "dört", pron: "dyort", uz: "to'rt", cat: "raqam", level: "A1", emoji: "4️⃣" },
  { tr: "beş", pron: "besh", uz: "besh", cat: "raqam", level: "A1", emoji: "5️⃣" },
  { tr: "altı", pron: "alti", uz: "olti", cat: "raqam", level: "A1", emoji: "6️⃣" },
  { tr: "yedi", pron: "yedi", uz: "yetti", cat: "raqam", level: "A1", emoji: "7️⃣" },
  { tr: "sekiz", pron: "sekiz", uz: "sakkiz", cat: "raqam", level: "A1", emoji: "8️⃣" },
  { tr: "dokuz", pron: "dokuz", uz: "to'qqiz", cat: "raqam", level: "A1", emoji: "9️⃣" },
  { tr: "on", pron: "on", uz: "o'n", cat: "raqam", level: "A1", emoji: "🔟" },

  // Ranglar
  { tr: "kırmızı", pron: "qirmizi", uz: "qizil", cat: "rang", level: "A1", emoji: "🔴" },
  { tr: "mavi", pron: "mavi", uz: "ko'k", cat: "rang", level: "A1", emoji: "🔵" },
  { tr: "yeşil", pron: "yeshil", uz: "yashil", cat: "rang", level: "A1", emoji: "🟢" },
  { tr: "sarı", pron: "sari", uz: "sariq", cat: "rang", level: "A1", emoji: "🟡" },
  { tr: "siyah", pron: "siyah", uz: "qora", cat: "rang", level: "A1", emoji: "⚫" },
  { tr: "beyaz", pron: "beyaz", uz: "oq", cat: "rang", level: "A1", emoji: "⚪" },
    // Fe'llar
  { tr: "gelmek", pron: "gelmek", uz: "kelmoq", cat: "fiil", level: "A2", emoji: "🚶" },
  { tr: "gitmek", pron: "gitmek", uz: "bormoq", cat: "fiil", level: "A2", emoji: "🏃" },
  { tr: "yapmak", pron: "yapmak", uz: "qilmoq", cat: "fiil", level: "A2", emoji: "🛠️" },
  { tr: "istemek", pron: "istemek", uz: "xohlamoq", cat: "fiil", level: "A2", emoji: "🙌" },
  { tr: "öğrenmek", pron: "öyrenmek", uz: "o'rganmoq", cat: "fiil", level: "B1", emoji: "🎓" },
  { tr: "anlamak", pron: "anlamak", uz: "tushunmoq", cat: "fiil", level: "B1", emoji: "💡" },
  { tr: "beklemek", pron: "beklemek", uz: "kutmoq", cat: "fiil", level: "B1", emoji: "⏳" },
  { tr: "unutmak", pron: "unutmak", uz: "unutmoq", cat: "fiil", level: "B1", emoji: "🫥" },
  { tr: "karar vermek", pron: "karar vermek", uz: "qaror qilmoq", cat: "fiil", level: "B2", emoji: "⚖️" },
  { tr: "vazgeçmek", pron: "vazgechmek", uz: "voz kechmoq", cat: "fiil", level: "B2", emoji: "🚫" },
  { tr: "paylaşmak", pron: "paylashmak", uz: "bo'lishmoq", cat: "fiil", level: "B2", emoji: "🤲" },

  // His-tuyg'ular
  { tr: "mutlu", pron: "mutlu", uz: "baxtli", cat: "his", level: "A2", emoji: "😊" },
  { tr: "üzgün", pron: "yuzgyun", uz: "xafa", cat: "his", level: "A2", emoji: "😢" },
  { tr: "yorgun", pron: "yorgun", uz: "charchagan", cat: "his", level: "A2", emoji: "😴" },
  { tr: "heyecanlı", pron: "heyejanli", uz: "hayajonli", cat: "his", level: "B1", emoji: "🤩" },
  { tr: "endişeli", pron: "endishali", uz: "xavotirli", cat: "his", level: "B1", emoji: "😟" },
  { tr: "umut", pron: "umut", uz: "umid", cat: "his", level: "B1", emoji: "🌈" },
  { tr: "özlem", pron: "özlem", uz: "sog'inch", cat: "his", level: "B2", emoji: "💭" },
  { tr: "pişman", pron: "pishman", uz: "afsuslangan", cat: "his", level: "B2", emoji: "😔" },
  { tr: "memnun", pron: "memnun", uz: "mamnun", cat: "his", level: "B2", emoji: "😌" },

  // Ish va jamiyat
  { tr: "toplantı", pron: "toplanti", uz: "yig'ilish", cat: "ish", level: "B1", emoji: "🧑‍💼" },
  { tr: "maaş", pron: "maash", uz: "maosh", cat: "ish", level: "B1", emoji: "💵" },
  { tr: "şirket", pron: "shirket", uz: "kompaniya", cat: "ish", level: "B1", emoji: "🏢" },
  { tr: "eğitim", pron: "eyitim", uz: "ta'lim", cat: "ish", level: "B1", emoji: "📚" },
  { tr: "mülakat", pron: "myulakat", uz: "suhbat (ishga)", cat: "ish", level: "B2", emoji: "🗣️" },
  { tr: "sorumluluk", pron: "sorumluluk", uz: "mas'uliyat", cat: "ish", level: "B2", emoji: "📌" },
  { tr: "toplum", pron: "toplum", uz: "jamiyat", cat: "ish", level: "B2", emoji: "🌍" },
  { tr: "ekonomi", pron: "ekonomi", uz: "iqtisodiyot", cat: "ish", level: "B2", emoji: "📈" },

  // Tabiat
  { tr: "dağ", pron: "da", uz: "tog'", cat: "tabiat", level: "A2", emoji: "⛰️" },
  { tr: "nehir", pron: "nehir", uz: "daryo", cat: "tabiat", level: "A2", emoji: "🏞️" },
  { tr: "yağmur", pron: "yaamur", uz: "yomg'ir", cat: "tabiat", level: "A2", emoji: "🌧️" },
  { tr: "kar", pron: "kar", uz: "qor", cat: "tabiat", level: "A2", emoji: "❄️" },
  { tr: "rüzgâr", pron: "ryuzgyar", uz: "shamol", cat: "tabiat", level: "B1", emoji: "💨" },
  { tr: "orman", pron: "orman", uz: "o'rmon", cat: "tabiat", level: "B1", emoji: "🌲" },
  { tr: "deprem", pron: "deprem", uz: "zilzila", cat: "tabiat", level: "B1", emoji: "🌋" },
  { tr: "çevre", pron: "chevre", uz: "atrof-muhit", cat: "tabiat", level: "B2", emoji: "♻️" },
  { tr: "iklim", pron: "iklim", uz: "iqlim", cat: "tabiat", level: "B2", emoji: "🌡️" },
];

// ===== Daraja yordamchilari =====
const LEVEL_ORDER = ["A1", "A2", "B1", "B2"];

// Test natijasi: A0, A1, A2, B1, B2 yoki null (test topshirilmagan)
function getUserLevel() {
  return localStorage.getItem("userLevel");
}

// O'rganilishi kerak bo'lgan keyingi daraja
function getTargetLevel() {
  const lv = getUserLevel();
  if (!lv || lv === "A0") return "A1";
  if (lv === "B2") return "B2";
  return LEVEL_ORDER[LEVEL_ORDER.indexOf(lv) + 1];
}

// Foydalanuvchiga mos so'zlar
function wordsForUser() {
  let pool = WORDS.filter(w => w.level === getTargetLevel());
  if (pool.length < 8) {
    pool = pool.concat(WORDS.filter(w => w.level === getUserLevel()));
  }
  return pool;
}