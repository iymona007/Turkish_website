const RASMIY_CATEGORIES = {
  hujjat: "Hujjatlar",
  idora: "Idoralar",
  xat: "Rasmiy xat va iboralar",
  bank: "Bank va moliya",
};

const RASMIY_WORDS = [
  // Hujjatlar
  { tr: "belge", pron: "belge", uz: "hujjat", cat: "hujjat", level: "B1", emoji: "📄" },
  { tr: "kimlik", pron: "kimlik", uz: "shaxsni tasdiqlovchi hujjat", cat: "hujjat", level: "B1", emoji: "🪪" },
  { tr: "dilekçe", pron: "dilekche", uz: "ariza", cat: "hujjat", level: "B1", emoji: "📝" },
  { tr: "imza", pron: "imza", uz: "imzo", cat: "hujjat", level: "B1", emoji: "✍️" },
  { tr: "vize", pron: "vize", uz: "viza", cat: "hujjat", level: "A2", emoji: "🛂" },
  { tr: "randevu", pron: "randevu", uz: "qabulga yozilish", cat: "hujjat", level: "B1", emoji: "📅" },
  { tr: "sözleşme", pron: "sözleshme", uz: "shartnoma", cat: "hujjat", level: "B2", emoji: "📑" },
  { tr: "vekâlet", pron: "vekyalet", uz: "ishonchnoma", cat: "hujjat", level: "B2", emoji: "📜" },
  { tr: "ikametgâh", pron: "ikametgyah", uz: "yashash joyi (hujjat)", cat: "hujjat", level: "B2", emoji: "🏘️" },
  { tr: "onay", pron: "onay", uz: "tasdiq", cat: "hujjat", level: "B1", emoji: "✅" },

  // Idoralar
  { tr: "belediye", pron: "belediye", uz: "shahar hokimiyati", cat: "idora", level: "B1", emoji: "🏛️" },
  { tr: "mahkeme", pron: "mahkeme", uz: "sud", cat: "idora", level: "B1", emoji: "⚖️" },
  { tr: "elçilik", pron: "elchilik", uz: "elchixona", cat: "idora", level: "B1", emoji: "🏢" },
  { tr: "konsolosluk", pron: "konsolosluk", uz: "konsullik", cat: "idora", level: "B2", emoji: "🛃" },
  { tr: "emniyet", pron: "emniyet", uz: "xavfsizlik boshqarmasi (politsiya)", cat: "idora", level: "B2", emoji: "👮" },
  { tr: "vergi dairesi", pron: "vergi dairesi", uz: "soliq idorasi", cat: "idora", level: "B2", emoji: "🧾" },
  { tr: "bakanlık", pron: "bakanlik", uz: "vazirlik", cat: "idora", level: "B2", emoji: "🏤" },
  { tr: "noter", pron: "noter", uz: "notarius", cat: "idora", level: "B2", emoji: "🖋️" },

  // Rasmiy xat va iboralar
  { tr: "Sayın", pron: "sayin", uz: "hurmatli", cat: "xat", level: "B1", emoji: "🎩" },
  { tr: "Saygılarımla", pron: "saygilarimla", uz: "hurmat bilan", cat: "xat", level: "B1", emoji: "🤝" },
  { tr: "Buyurun", pron: "buyurun", uz: "marhamat", cat: "xat", level: "A2", emoji: "🙋" },
  { tr: "Yardımcı olabilir miyim?", pron: "yardimji olabilir miyim", uz: "yordam bera olamanmi?", cat: "xat", level: "B1", emoji: "💁" },
  { tr: "Rica ediyorum", pron: "rija ediyorum", uz: "iltimos qilaman", cat: "xat", level: "B1", emoji: "🙏" },
  { tr: "Bilgilerinize sunarım", pron: "bilgilerinize sunarim", uz: "ma'lumotingiz uchun taqdim etaman", cat: "xat", level: "B2", emoji: "📨" },
  { tr: "Gereğini arz ederim", pron: "gereyini arz ederim", uz: "kerakli chora ko'rishingizni so'rayman", cat: "xat", level: "B2", emoji: "📮" },
  { tr: "İlgili makama", pron: "ilgili makama", uz: "tegishli idoraga", cat: "xat", level: "B2", emoji: "📬" },
  { tr: "ekte", pron: "ekte", uz: "ilova qilingan", cat: "xat", level: "B2", emoji: "📎" },

  // Bank va moliya
  { tr: "banka", pron: "banka", uz: "bank", cat: "bank", level: "A2", emoji: "🏦" },
  { tr: "hesap", pron: "hesap", uz: "hisob raqam", cat: "bank", level: "A2", emoji: "💳" },
  { tr: "ödeme", pron: "ödeme", uz: "to'lov", cat: "bank", level: "B1", emoji: "💸" },
  { tr: "fatura", pron: "fatura", uz: "hisob-faktura", cat: "bank", level: "B1", emoji: "🧾" },
  { tr: "havale", pron: "havale", uz: "pul o'tkazmasi", cat: "bank", level: "B1", emoji: "🔁" },
  { tr: "kredi", pron: "kredi", uz: "kredit", cat: "bank", level: "B1", emoji: "🏧" },
  { tr: "vergi", pron: "vergi", uz: "soliq", cat: "bank", level: "B1", emoji: "📊" },
  { tr: "şifre", pron: "shifre", uz: "parol", cat: "bank", level: "A2", emoji: "🔐" },
];

// Har bir so'z uchun misol gap: [turkcha gap, o'zbekcha tarjima]
const RASMIY_EX = {
  "belge": [
    "Bu belgeyi yarına kadar teslim etmeniz gerekiyor.",
    "Bu hujjatni ertagacha topshirishingiz kerak."
  ],
  "kimlik": [
    "Girişte kimliğinizi göstermeniz gerekiyor.",
    "Kirishda shaxsingizni tasdiqlovchi hujjatni ko'rsatishingiz kerak."
  ],
  "dilekçe": [
    "Müdürlüğe bir dilekçe yazdım.",
    "Men boshqarmaga ariza yozdim."
  ],
  "imza": [
    "Lütfen formun altına imzanızı atın.",
    "Iltimos, shaklning pastiga imzoingizni qo'ying."
  ],
  "vize": [
    "Türkiye vizesi için başvurdum.",
    "Men Turkiya vizasi uchun ariza berdim."
  ],
  "randevu": [
    "Pazartesi günü için randevu almak istiyorum.",
    "Dushanba kuniga qabulga yozilmoqchiman."
  ],
  "sözleşme": [
    "Sözleşmeyi dikkatlice okuyup imzaladık.",
    "Shartnomani diqqat bilan o'qib imzoladik."
  ],
  "vekâlet": [
    "Bu işlem için ona vekâlet verdim.",
    "Bu ish uchun unga ishonchnoma berdim."
  ],
  "ikametgâh": [
    "İkametgâh belgesi için nüfus müdürlüğüne gidin.",
    "Yashash joyi hujjati uchun fuqarolik holati boshqarmasiga boring."
  ],
  "onay": [
    "Başvurunuz için onay bekliyoruz.",
    "Arizangiz uchun tasdiq kutyapmiz."
  ],
  "belediye": [
    "Belediye yeni bir park açtı.",
    "Shahar hokimiyati yangi park ochdi."
  ],
  "mahkeme": [
    "Dava yarın mahkemede görülecek.",
    "Ish ertaga sudda ko'riladi."
  ],
  "elçilik": [
    "Elçilikten randevu aldım.",
    "Elchixonadan qabulga yozildim."
  ],
  "konsolosluk": [
    "Konsolosluk saat beşte kapanıyor.",
    "Konsullik soat beshda yopiladi."
  ],
  "emniyet": [
    "Kaybolan pasaportu emniyete bildirdi.",
    "U yo'qolgan pasportni politsiyaga xabar qildi."
  ],
  "vergi dairesi": [
    "Vergi dairesi pazartesi günü açık.",
    "Soliq idorasi dushanba kuni ochiq."
  ],
  "bakanlık": [
    "Bakanlık yeni bir karar açıkladı.",
    "Vazirlik yangi qaror e'lon qildi."
  ],
  "noter": [
    "Belgeyi noterde onaylattık.",
    "Hujjatni notariusda tasdiqlatdik."
  ],
  "Sayın": [
    "Sayın Müdür, size yazıyorum.",
    "Hurmatli direktor, sizga yozyapman."
  ],
  "Saygılarımla": [
    "Teşekkür ederim. Saygılarımla, Ahmet Yılmaz.",
    "Rahmat. Hurmat bilan, Ahmet Yilmaz."
  ],
  "Buyurun": [
    "Buyurun, size nasıl yardımcı olabilirim?",
    "Marhamat, sizga qanday yordam bera olaman?"
  ],
  "Yardımcı olabilir miyim?": [
    "Hoş geldiniz, yardımcı olabilir miyim?",
    "Xush kelibsiz, yordam bera olamanmi?"
  ],
  "Rica ediyorum": [
    "Formu doldurmanızı rica ediyorum.",
    "Shaklni to'ldirishingizni iltimos qilaman."
  ],
  "Bilgilerinize sunarım": [
    "Toplantı tutanağı ekte, bilgilerinize sunarım.",
    "Yig'ilish bayonnomasi ilovada, ma'lumotingiz uchun taqdim etaman."
  ],
  "Gereğini arz ederim": [
    "Konunun incelenmesi hususunda gereğini arz ederim.",
    "Masalani ko'rib chiqish yuzasidan kerakli chora ko'rishingizni so'rayman."
  ],
  "İlgili makama": [
    "İlgili makama sunulmak üzere hazırlanmıştır.",
    "Tegishli idoraga taqdim etish uchun tayyorlangan."
  ],
  "ekte": [
    "Gerekli belgeler ekte gönderilmiştir.",
    "Kerakli hujjatlar ilova qilib yuborilgan."
  ],
  "banka": [
    "Banka sabah dokuzda açılıyor.",
    "Bank ertalab soat to'qqizda ochiladi."
  ],
  "hesap": [
    "Bankada yeni bir hesap açtım.",
    "Bankda yangi hisob raqam ochdim."
  ],
  "ödeme": [
    "Ödeme kredi kartıyla yapıldı.",
    "To'lov kredit karta orqali amalga oshirildi."
  ],
  "fatura": [
    "Elektrik faturası bu ay yüksek geldi.",
    "Elektr hisobi bu oy baland keldi."
  ],
  "havale": [
    "Parayı havale ile gönderdim.",
    "Pulni o'tkazma orqali yubordim."
  ],
  "kredi": [
    "Ev için banka kredisi aldık.",
    "Uy uchun bank krediti oldik."
  ],
  "vergi": [
    "Vergini zamanında ödemek önemlidir.",
    "Soliqni o'z vaqtida to'lash muhim."
  ],
  "şifre": [
    "Şifrenizi kimseyle paylaşmayın.",
    "Parolingizni hech kim bilan bo'lishmang."
  ]
};
RASMIY_WORDS.forEach(w => {
  const e = RASMIY_EX[w.tr];
  if (e) { w.ex = e[0]; w.exUz = e[1]; }
});
