// Samimiy (do'stona, so'zlashuv) so'zlar va iboralar
const SAMIMIY_CATEGORIES = {
  salom: "Do'stona salomlashuv",
  gap: "Kundalik iboralar",
  his: "Hayrat va his-tuyg'u",
  dost: "Do'stlar bilan",
};

// [turkcha, talaffuz, o'zbekcha, kategoriya, daraja, emoji, misol gap, gap tarjimasi]
const _SAMIMIY = [
 [
  "Selam",
  "selam",
  "salom (do'stona)",
  "salom",
  "A1",
  "👋",
  "Selam Ali, nasılsın?",
  "Salom Ali, ahvoling qalay?"
 ],
 [
  "Nasılsın?",
  "nasilsin",
  "ahvoling qalay?",
  "salom",
  "A1",
  "🙂",
  "Uzun zamandır görüşmedik, nasılsın?",
  "Anchadan beri ko'rishmadik, ahvoling qalay?"
 ],
 [
  "Naber?",
  "naber",
  "nima gap?",
  "salom",
  "A2",
  "🗣️",
  "Naber, bugün ne yapıyorsun?",
  "Nima gap, bugun nima qilyapsan?"
 ],
 [
  "Görüşürüz",
  "gyoryushyuryuz",
  "ko'rishguncha",
  "salom",
  "A1",
  "🖐️",
  "Yarın görüşürüz!",
  "Ertaga ko'rishamiz!"
 ],
 [
  "Kendine iyi bak",
  "kendine iyi bak",
  "o'zingni asra",
  "salom",
  "B1",
  "🤗",
  "Hastasın, kendine iyi bak.",
  "Kasalsan, o'zingni asra."
 ],
 [
  "Hadi eyvallah",
  "hadi eyvallah",
  "xo'p, hozircha",
  "salom",
  "B1",
  "🤙",
  "Hadi eyvallah, sonra konuşuruz.",
  "Xo'p, hozircha, keyin gaplashamiz."
 ],
 [
  "Hadi",
  "hadi",
  "qani, yur",
  "gap",
  "A2",
  "🏃",
  "Hadi gidelim, geç kalıyoruz.",
  "Qani ketdik, kechikyapmiz."
 ],
 [
  "Tamam",
  "tamam",
  "xo'p, bo'ldi",
  "gap",
  "A1",
  "👌",
  "Tamam, yarın gelirim.",
  "Xo'p, ertaga kelaman."
 ],
 [
  "Şu an ne yapıyorsun?",
  "shu an ne yapiyorsun",
  "hozir nima qilyapsan?",
  "gap",
  "A1",
  "🤔",
  "Şu an ne yapıyorsun, müsait misin?",
  "Hozir nima qilyapsan, bo'shmisan?"
 ],
 [
  "Canım sıkıldı",
  "janim sikildi",
  "zerikdim",
  "gap",
  "B1",
  "😒",
  "Evde çok canım sıkıldı.",
  "Uyda juda zerikdim."
 ],
 [
  "Boş ver",
  "bosh ver",
  "qo'yvor, xafa bo'lma",
  "gap",
  "B1",
  "🤷",
  "Boş ver, üzülme.",
  "Qo'yvor, xafa bo'lma."
 ],
 [
  "Kolay gelsin",
  "kolay gelsin",
  "ishingga omad",
  "gap",
  "A2",
  "💪",
  "Kolay gelsin, işler nasıl?",
  "Ishingga omad, ishlar qalay?"
 ],
 [
  "Vay be",
  "vay be",
  "vay-vay!",
  "his",
  "B1",
  "😲",
  "Vay be, bu çok güzel olmuş!",
  "Vay-vay, bu juda chiroyli bo'libdi!"
 ],
 [
  "Harika",
  "harika",
  "ajoyib",
  "his",
  "A2",
  "🤩",
  "Bu film harika!",
  "Bu film ajoyib!"
 ],
 [
  "Süper",
  "syuper",
  "zo'r",
  "his",
  "A2",
  "😎",
  "Süper, çok sevindim!",
  "Zo'r, juda xursand bo'ldim!"
 ],
 [
  "Yok artık",
  "yok artik",
  "qo'ysang-chi! (ishonmaslik)",
  "his",
  "B1",
  "😳",
  "Yok artık, gerçekten mi?",
  "Qo'ysang-chi, rostdanmi?"
 ],
 [
  "Çok yazık",
  "chok yazik",
  "juda afsus",
  "his",
  "A2",
  "😕",
  "Gelmedin mi? Çok yazık!",
  "Kelmading-a? Juda afsus!"
 ],
 [
  "Çok tatlı",
  "chok tatli",
  "juda yoqimtoy",
  "his",
  "A2",
  "🥰",
  "Bu kedi çok tatlı!",
  "Bu mushuk juda yoqimtoy!"
 ],
 [
  "Dostum",
  "dostum",
  "do'stim",
  "dost",
  "A2",
  "🤝",
  "Dostum, bana yardım eder misin?",
  "Do'stim, menga yordam bera olasanmi?"
 ],
 [
  "Kanka",
  "kanka",
  "og'ayni, jo'ra",
  "dost",
  "B1",
  "🧑‍🤝‍🧑",
  "Kanka, akşam buluşuyor muyuz?",
  "Og'ayni, kechqurun uchrashamizmi?"
 ],
 [
  "Abi",
  "abi",
  "aka (do'stona murojaat)",
  "dost",
  "A2",
  "🙋‍♂️",
  "Abi, bir çay alabilir miyim?",
  "Aka, bir choy olsam bo'ladimi?"
 ],
 [
  "Birader",
  "birader",
  "birodar",
  "dost",
  "B1",
  "🫂",
  "Birader, çok sağ ol!",
  "Birodar, katta rahmat!"
 ],
 [
  "Sağ ol",
  "sa ol",
  "rahmat (do'stona)",
  "dost",
  "A1",
  "🙏",
  "Sağ ol, çok yardımcı oldun.",
  "Rahmat, juda yordam berding."
 ],
 [
  "eğlenmek",
  "eglenmek",
  "maza qilmoq",
  "dost",
  "B1",
  "🎉",
  "Hafta sonu arkadaşlarla çok eğlendik.",
  "Dam olish kunlari do'stlar bilan juda maza qildik."
 ]
];

const SAMIMIY_WORDS = _SAMIMIY.map(([tr, pron, uz, cat, level, emoji, ex, exUz]) => ({ tr, pron, uz, cat, level, emoji, ex, exUz }));
