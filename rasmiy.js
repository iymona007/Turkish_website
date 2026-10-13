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
   ["başvuru","bashvuru","ariza topshirish, murojaat","hujjat","A2","📋","Başvurunuzu internetten yapabilirsiniz.","Arizangizni internetdan topshirishingiz mumkin."],
  ["form","form","shakl, blanka","hujjat","A2","🗒️","Lütfen formu eksiksiz doldurun.","Iltimos, shaklni to'liq to'ldiring."],
  ["fotokopi","fotokopi","nusxa ko'chirma","hujjat","B1","🖨️","Kimliğinizin fotokopisini getirin.","Shaxsingizni tasdiqlovchi hujjat nusxasini olib keling."],
  ["diploma","diploma","diplom","hujjat","B1","🎓","Diplomamın tercümesini onaylattım.","Diplomimning tarjimasini tasdiqlatdim."],
  ["sertifika","sertifika","sertifikat","hujjat","B1","🏅","Dil sertifikası başvuru için gereklidir.","Til sertifikati ariza uchun kerak."],
  ["rapor","rapor","ma'lumotnoma (tibbiy), hisobot","hujjat","B1","📃","Doktor bana üç günlük rapor verdi.","Shifokor menga uch kunlik ma'lumotnoma berdi."],
  ["tutanak","tutanak","bayonnoma","hujjat","B2","🗂️","Toplantı tutanağı herkese gönderildi.","Yig'ilish bayonnomasi hammaga yuborildi."],
  ["ruhsat","ruhsat","ruxsatnoma, litsenziya","hujjat","B2","🔖","Çalışma ruhsatı için başvurdum.","Ish ruxsatnomasi uchun ariza berdim."],
  ["oturum izni","oturum izni","yashash ruxsatnomasi","hujjat","B2","🏠","Oturum izni uzatma işlemi başladı.","Yashash ruxsatnomasini uzaytirish jarayoni boshlandi."],
  ["çalışma izni","chalishma izni","ish ruxsatnomasi","hujjat","B2","💼","Çalışma izni olmadan çalışamazsınız.","Ish ruxsatnomasisiz ishlay olmaysiz."],
  ["nüfus cüzdanı","nufus jyuzdani","shaxs guvohnomasi (eski kimlik)","hujjat","B2","🪪","Nüfus cüzdanımı kaybettim.","Shaxs guvohnomamni yo'qotib qo'ydim."],
  ["doğum belgesi","doum belgesi","tug'ilganlik haqidagi guvohnoma","hujjat","B1","👶","Evlilik için doğum belgesi isteniyor.","Nikoh uchun tug'ilganlik haqidagi guvohnoma so'raladi."],
  ["evlilik cüzdanı","evlilik jyuzdani","nikoh guvohnomasi","hujjat","B2","💍","Evlilik cüzdanını yanında getir.","Nikoh guvohnomasini o'zing bilan olib kel."],
  ["sabıka kaydı","sabika qaydi","sudlanganlik haqida ma'lumotnoma","hujjat","B2","📄","Sabıka kaydı belgesi başvuruda isteniyor.","Sudlanganlik haqida ma'lumotnoma arizada so'raladi."],
  ["tercüme","terjyume","tarjima","hujjat","B1","🌐","Belgelerin yeminli tercümesi gerekiyor.","Hujjatlarning qasamyodli tarjimasi kerak."],

  // ---- Idoralar ----
  ["valilik","valilik","viloyat hokimligi","idora","B2","🏛️","Valilik yeni bir duyuru yayımladı.","Viloyat hokimligi yangi e'lon chiqardi."],
  ["kaymakamlık","kaymakamlik","tuman hokimligi","idora","B2","🏢","Kaymakamlıktan izin aldık.","Tuman hokimligidan ruxsat oldik."],
  ["muhtar","muhtar","mahalla oqsoqoli","idora","B2","🧓","Muhtardan ikametgâh belgesi aldım.","Mahalla oqsoqolidan yashash joyi hujjatini oldim."],
  ["nüfus müdürlüğü","nufus myudyurlyuyu","fuqarolik holati boshqarmasi","idora","B2","🗄️","Nüfus müdürlüğü saat beşe kadar açık.","Fuqarolik holati boshqarmasi soat beshgacha ochiq."],
  ["savcılık","savjilik","prokuratura","idora","B2","⚖️","Şikâyet savcılığa iletildi.","Shikoyat prokuraturaga yuborildi."],
  ["adliye","adliye","adliya binosi (sud majmuasi)","idora","B2","🏛️","Duruşma adliyede yapılacak.","Sud majlisi adliya binosida o'tadi."],
  ["hastane","hastane","kasalxona","idora","A2","🏥","Hastaneye randevu almak istiyorum.","Kasalxonaga qabulga yozilmoqchiman."],
  ["üniversite","yuniversite","universitet","idora","A2","🎓","Üniversiteye kayıt süresi başladı.","Universitetga ro'yxatdan o'tish muddati boshlandi."],
  ["okul müdürlüğü","okul myudyurlyuyu","maktab direksiyasi","idora","B1","🏫","Okul müdürlüğüne dilekçe verdim.","Maktab direksiyasiga ariza berdim."],
  ["postane","postane","pochta bo'limi","idora","A2","📮","Postaneden paket gönderdim.","Pochta bo'limidan posilka yubordim."],
  ["gümrük","gyumryuk","bojxona","idora","B1","🛃","Gümrükte bavullar kontrol edildi.","Bojxonada chamadonlar tekshirildi."],
  ["sınır kapısı","sinir kapisi","chegara o'tkazish punkti","idora","B2","🚧","Sınır kapısında uzun kuyruk vardı.","Chegara punktida uzun navbat bor edi."],
  ["kamu kurumu","kamu kurumu","davlat muassasasi","idora","B2","🏢","Kamu kurumlarında sıra numarası alınır.","Davlat muassasalarida navbat raqami olinadi."],
  ["sosyal güvenlik","sosyal gyuvenlik","ijtimoiy ta'minot","idora","B2","🛡️","Sosyal güvenlik kurumuna başvurdum.","Ijtimoiy ta'minot muassasasiga murojaat qildim."],
  ["tapu müdürlüğü","tapu myudyurlyuyu","kadastr (ko'chmas mulk) idorasi","idora","B2","🏡","Ev satışı tapu müdürlüğünde yapılır.","Uy sotish kadastr idorasida amalga oshiriladi."],

  // ---- Rasmiy xat va iboralar ----
  ["Sayın Yetkili","sayin yetkili","hurmatli mas'ul shaxs","xat","B1","✉️","Sayın Yetkili, durumu bildirmek istiyorum.","Hurmatli mas'ul shaxs, vaziyatni bildirmoqchiman."],
  ["Konu","konu","mavzu (xatda)","xat","A2","📌","Konu: Ödeme hakkında bilgi talebi.","Mavzu: To'lov haqida ma'lumot so'rovi."],
  ["İlgi","ilgi","havola (avvalgi hujjatga)","xat","B2","🔗","İlgi: 12.05.2024 tarihli yazınız.","Havola: 2024-yil 12-maydagi xatingiz."],
  ["Bilgi edinmek istiyorum","bilgi edinmek istiyorum","ma'lumot olmoqchiman","xat","B1","ℹ️","Vize şartları hakkında bilgi edinmek istiyorum.","Viza shartlari haqida ma'lumot olmoqchiman."],
  ["Talep ediyorum","talep ediyorum","talab qilaman, so'rayman","xat","B2","📣","Bu hususta inceleme yapılmasını talep ediyorum.","Bu masala bo'yicha tekshiruv o'tkazilishini so'rayman."],
  ["Gereğinin yapılmasını rica ederim","gereyinin yapilmasini rija ederim","kerakli chora ko'rilishini iltimos qilaman","xat","B2","🙏","Konunun gereğinin yapılmasını rica ederim.","Masala bo'yicha kerakli chora ko'rilishini iltimos qilaman."],
  ["Arz ederim","arz ederim","hurmat bilan arz qilaman","xat","B2","📜","Durumu bilgilerinize arz ederim.","Vaziyatni ma'lumotingizga arz qilaman."],
  ["Ekte sunulmuştur","ekte sunulmushtur","ilovada taqdim etilgan","xat","B2","📎","Belgeler ekte sunulmuştur.","Hujjatlar ilovada taqdim etilgan."],
  ["Cevabınızı bekliyorum","jevabiniz bekliyorum","javobingizni kutaman","xat","B1","⏳","En kısa sürede cevabınızı bekliyorum.","Imkon qadar tezroq javobingizni kutaman."],
  ["Bilginize","bilginize","ma'lumotingiz uchun","xat","B1","💡","Toplantı saati değişti, bilginize.","Yig'ilish vaqti o'zgardi, ma'lumotingiz uchun."],
  ["Rahatsızlık için özür dilerim","rahatsizlik ichin ozyur dilerim","bezovta qilganim uchun uzr","xat","B1","😔","Rahatsızlık için özür dilerim, bir sorum olacaktı.","Bezovta qilganim uchun uzr, bir savolim bor edi."],
  ["Teşekkür eder, iyi çalışmalar dilerim","teshekkyur eder iyi chalishmalar dilerim","rahmat, ishlaringizga omad tilayman","xat","B2","💼","Yardımınız için teşekkür eder, iyi çalışmalar dilerim.","Yordamingiz uchun rahmat, ishlaringizga omad tilayman."],
  ["Görüşmek üzere","gyoryushmek yuzere","ko'rishguncha (rasmiy)","xat","B1","🤝","Salı günü görüşmek üzere.","Seshanba kuni ko'rishguncha."],
  ["Hürmetlerimle","hyurmetlerimle","hurmat va ehtirom bilan","xat","B2","🎩","Hürmetlerimle, Ayşe Demir.","Hurmat va ehtirom bilan, Ayshe Demir."],
  ["Müsaadenizle","myusaadenizle","ruxsatingiz bilan","xat","B1","🚪","Müsaadenizle bir şey sorabilir miyim?","Ruxsatingiz bilan bir narsa so'rasam bo'ladimi?"],

  // ---- Bank va moliya ----
  ["mevduat","mevduat","omonat","bank","B2","🏦","Bankada vadeli mevduat hesabı açtım.","Bankda muddatli omonat hisobi ochdim."],
  ["faiz","faiz","foiz (bank foizi)","bank","B1","📈","Kredi faizi çok yüksek.","Kredit foizi juda baland."],
  ["borç","borch","qarz","bank","A2","💳","Bankaya borcumu ödedim.","Bankka qarzimni to'ladim."],
  ["bakiye","bakiye","hisobdagi qoldiq","bank","B1","💰","Hesabımın bakiyesini kontrol ettim.","Hisobimdagi qoldiqni tekshirdim."],
  ["kredi kartı","kredi karti","kredit karta","bank","A2","💳","Kredi kartımı kaybettim.","Kredit kartamni yo'qotdim."],
  ["banka kartı","banka karti","bank kartasi","bank","A2","🏧","Banka kartımla ödeme yapabilir miyim?","Bank kartam bilan to'lov qila olamanmi?"],
  ["nakit","nakit","naqd pul","bank","A2","💵","Nakit mi, kartla mı ödeyeceksiniz?","Naqd to'laysizmi yoki karta bilanmi?"],
  ["taksit","taksit","bo'lib to'lash","bank","B1","🗓️","Telefonu altı taksitle aldım.","Telefonni olti bo'lib to'lash bilan oldim."],
  ["döviz","dovyiz","valyuta","bank","B1","💱","Döviz kuru bugün yükseldi.","Valyuta kursi bugun ko'tarildi."],
  ["kur","kur","kurs (valyuta)","bank","B1","📊","Dolar kuru bugün kaç?","Dollar kursi bugun qancha?"],
  ["dekont","dekont","to'lov kvitansiyasi","bank","B2","🧾","Ödeme dekontunu e-posta ile gönderdim.","To'lov kvitansiyasini elektron pochta orqali yubordim."],
  ["IBAN","iban","xalqaro bank hisob raqami","bank","B2","🔢","IBAN numaranızı yazar mısınız?","IBAN raqamingizni yozib berasizmi?"],
  ["komisyon","komisyon","komissiya haqi","bank","B2","💸","Bu işlem için komisyon alınıyor.","Bu amal uchun komissiya olinadi."],
  ["limit","limit","limit, chegara","bank","B1","🚦","Kartımın günlük limiti doldu.","Kartamning kunlik limiti to'ldi."],
  ["bütçe","byudje","byudjet","bank","B1","📒","Bu ay bütçemiz kısıtlı.","Bu oy byudjetimiz cheklangan."],

  // ---- Ish va mehnat ----
  ["işveren","ishveren","ish beruvchi","mehnat","B1","👔","İşveren yeni personel arıyor.","Ish beruvchi yangi xodim qidiryapti."],
  ["çalışan","chalishan","xodim","mehnat","A2","🧑‍💼","Şirketin yüz çalışanı var.","Kompaniyaning yuzta xodimi bor."],
  ["özgeçmiş","ozgechmish","rezyume","mehnat","B1","📄","Özgeçmişimi e-posta ile gönderdim.","Rezyumemni elektron pochta orqali yubordim."],
  ["iş görüşmesi","ish gyoryushmesi","ishga suhbat","mehnat","B1","🗣️","Yarın iş görüşmem var.","Ertaga ishga suhbatim bor."],
  ["iş sözleşmesi","ish sözleshmesi","mehnat shartnomasi","mehnat","B2","📑","İş sözleşmesini imzaladım.","Mehnat shartnomasini imzoladim."],
  ["izin","izin","ruxsat, ta'til","mehnat","A2","🏖️","Gelecek hafta izin kullanacağım.","Kelasi hafta ta'til olaman."],
  ["yıllık izin","yillik izin","yillik ta'til","mehnat","B1","🌴","Yıllık iznim temmuzda başlıyor.","Yillik ta'tilim iyulda boshlanadi."],
  ["mesai","mesai","ish vaqti","mehnat","B1","⏰","Mesai saat dokuzda başlıyor.","Ish vaqti soat to'qqizda boshlanadi."],
  ["fazla mesai","fazla mesai","qo'shimcha ish soatlari","mehnat","B2","🌙","Bu hafta fazla mesai yaptık.","Bu hafta qo'shimcha ishladik."],
  ["terfi","terfi","lavozimga ko'tarilish","mehnat","B2","🚀","Geçen yıl terfi aldım.","O'tgan yili lavozimim ko'tarildi."],
  ["istifa","istifa","iste'fo","mehnat","B2","🚪","İstifa dilekçesini müdüre verdi.","U iste'fo arizasini direktorga berdi."],
  ["emeklilik","emeklilik","pensiya","mehnat","B2","👴","Emeklilik için başvuru yapacağım.","Pensiya uchun ariza beraman."],
  ["sigorta","sigorta","sug'urta","mehnat","B1","🛡️","Sağlık sigortam bu ay bitiyor.","Sog'liqni saqlash sug'urtam bu oy tugaydi."],
  ["müdür","myudyur","direktor, boshliq","mehnat","A2","🧑‍💼","Müdür şu an toplantıda.","Direktor hozir yig'ilishda."],
  ["genel müdür","genel myudyur","bosh direktor","mehnat","B2","🏢","Genel müdür açıklama yaptı.","Bosh direktor bayonot berdi."],
  ["meslektaş","meslektash","hamkasb","mehnat","B1","🤝","Meslektaşlarımla öğle yemeği yedim.","Hamkasblarim bilan tushlik qildim."],
  ["ekip","ekip","jamoa","mehnat","B1","👥","Ekibimiz yeni bir proje başlattı.","Jamoamiz yangi loyiha boshladi."],
  ["proje","proje","loyiha","mehnat","A2","📂","Proje teslim tarihi cuma.","Loyihani topshirish muddati juma."],
  ["teslim tarihi","teslim tarihi","topshirish muddati","mehnat","B1","📅","Teslim tarihini bir hafta uzattılar.","Topshirish muddatini bir haftaga uzaytirishdi."],
  ["staj","staj","amaliyot","mehnat","B1","🧑‍🎓","Yazın bir şirkette staj yaptım.","Yozda bir kompaniyada amaliyot o'tadim."],

  // ---- Huquq va qonun ----
  ["kanun","kanun","qonun","huquq","B1","📘","Bu kanun yeni yürürlüğe girdi.","Bu qonun yaqinda kuchga kirdi."],
  ["yönetmelik","yonetmelik","nizom, reglament","huquq","B2","📕","Yönetmelik her çalışan için geçerlidir.","Nizom har bir xodim uchun amal qiladi."],
  ["hak","hak","huquq","huquq","B1","⚖️","Her insanın eğitim hakkı vardır.","Har bir insonning ta'lim olish huquqi bor."],
  ["yükümlülük","yukyumlyuluk","majburiyat","huquq","B2","📌","Kiracının ödeme yükümlülüğü vardır.","Ijarachining to'lov majburiyati bor."],
  ["şikâyet","shikyayet","shikoyat","huquq","B1","📢","Hizmet hakkında şikâyette bulundum.","Xizmat haqida shikoyat qildim."],
  ["dava","dava","sud ishi, da'vo","huquq","B2","🧑‍⚖️","Dava üç yıl sürdü.","Sud ishi uch yil davom etdi."],
  ["avukat","avukat","advokat","huquq","B1","👨‍⚖️","Bir avukata danışmak istiyorum.","Bir advokat bilan maslahatlashmoqchiman."],
  ["tanık","tanik","guvoh","huquq","B2","👁️","Tanık mahkemede ifade verdi.","Guvoh sudda ko'rsatma berdi."],
  ["ifade","ifade","ko'rsatma, ifoda","huquq","B2","🗣️","Polise ifademi verdim.","Politsiyaga ko'rsatmamni berdim."],
  ["karar","karar","qaror","huquq","B1","📝","Mahkeme kararını açıkladı.","Sud qarorini e'lon qildi."],
  ["itiraz","itiraz","e'tiroz, apellyatsiya","huquq","B2","✋","Karara itiraz etme hakkınız var.","Qarorga e'tiroz bildirish huquqingiz bor."],
  ["ceza","jeza","jarima, jazo","huquq","B1","🚔","Trafik cezası aldım.","Yo'l harakati jarimasini oldim."],
  ["yasak","yasak","taqiq","huquq","A2","🚫","Burada sigara içmek yasaktır.","Bu yerda chekish taqiqlangan."],
  ["zorunlu","zorunlu","majburiy","huquq","B1","❗","Bu belge zorunludur.","Bu hujjat majburiydir."],
  ["geçerli","gecherli","amal qiladigan, haqiqiy","huquq","B1","✔️","Pasaportunuz altı ay daha geçerli.","Pasportingiz yana olti oy amal qiladi."],
  ["süre","syure","muddat","huquq","B1","⌛","Başvuru süresi bugün doluyor.","Ariza muddati bugun tugaydi."],
  ["yürürlüğe girmek","yuryurlyuge girmek","kuchga kirmoq","huquq","B2","🆕","Yeni düzenleme ocakta yürürlüğe girecek.","Yangi tartib yanvarda kuchga kiradi."],
  ["başvuru sahibi","bashvuru sahibi","ariza beruvchi","huquq","B2","🙋","Başvuru sahibi belgeleri imzaladı.","Ariza beruvchi hujjatlarni imzoladi."],
  ["yetkili","yetkili","vakolatli shaxs","huquq","B2","🧑‍💼","Yetkili kişiyle görüşmek istiyorum.","Vakolatli shaxs bilan gaplashmoqchiman."],
  ["prosedür","prosedyur","tartib, jarayon","huquq","B2","🔄","Prosedür birkaç gün sürebilir.","Jarayon bir necha kun olishi mumkin."],
];

// Yangi kategoriyalar
Object.assign(RASMIY_CATEGORIES, {
  mehnat: "Ish va mehnat",
  huquq: "Huquq va qonun",
});

// Massiv ko'rinishida kiritilgan so'zlarni obyektga aylantirish
for (let i = 0; i < RASMIY_WORDS.length; i++) {
  const w = RASMIY_WORDS[i];
  if (Array.isArray(w)) {
    const [tr, pron, uz, cat, level, emoji, ex, exUz] = w;
    RASMIY_WORDS[i] = { tr, pron, uz, cat, level, emoji, ex, exUz };
  }
}

// ===== YANA 100 TA RASMIY SO'Z =====
Object.assign(RASMIY_CATEGORIES, {
  saglik: "Sog'liq va tibbiyot",
  egitim: "Ta'lim",
  ulasim: "Transport va yo'l",
  konut: "Uy-joy va kommunal",
});

// [turkcha, talaffuz, o'zbekcha, kategoriya, daraja, emoji, misol gap, gap tarjimasi]
const RASMIY_YANGI_2 = [
  // ---- Sog'liq va tibbiyot ----
  ["reçete","rechete","retsept","saglik","B1","💊","Doktor bana antibiyotik reçetesi yazdı.","Shifokor menga antibiotik retsepti yozdi."],
  ["muayene","muayene","ko'rik","saglik","B1","🩺","Muayene için sıra bekliyorum.","Ko'rik uchun navbat kutyapman."],
  ["doktor","doktor","shifokor","saglik","A2","👨‍⚕️","Doktor saat ikide hasta kabul ediyor.","Shifokor soat ikkida bemor qabul qiladi."],
  ["ilaç","ilach","dori","saglik","A2","💊","Bu ilacı günde iki kez alın.","Bu dorini kuniga ikki marta iching."],
  ["aşı","ashi","emlash, vaksina","saglik","B1","💉","Çocuğun aşısı bugün yapıldı.","Bolaning emlashi bugun qilindi."],
  ["tahlil","tahlil","tahlil (laboratoriya)","saglik","B1","🧪","Tahlil sonuçları yarın hazır.","Tahlil natijalari ertaga tayyor."],
  ["poliklinik","poliklinik","poliklinika","saglik","B1","🏥","Poliklinikten randevu aldım.","Poliklinikadan qabulga yozildim."],
  ["acil servis","ajil servis","shoshilinch yordam bo'limi","saglik","B1","🚑","Acil servise hemen gitmeniz gerekiyor.","Darhol shoshilinch yordam bo'limiga borishingiz kerak."],
  ["ambulans","ambulans","tez yordam mashinasi","saglik","A2","🚑","Ambulans beş dakikada geldi.","Tez yordam besh daqiqada keldi."],
  ["eczane","ejzane","dorixona","saglik","A2","💊","En yakın eczane nerede?","Eng yaqin dorixona qayerda?"],
  ["sevk","sevk","yo'llanma","saglik","B2","📨","Doktor beni uzmana sevk etti.","Shifokor meni mutaxassisga yo'lladi."],
  ["taburcu","taburju","kasalxonadan javob berish","saglik","B2","🚪","Hasta yarın taburcu edilecek.","Bemor ertaga kasalxonadan javob beriladi."],
  ["ameliyat","ameliyat","operatsiya","saglik","B1","🏥","Ameliyat başarıyla tamamlandı.","Operatsiya muvaffaqiyatli yakunlandi."],
  ["hasta","hasta","bemor, kasal","saglik","A2","🤒","Hasta odasında dinleniyor.","Bemor xonasida dam olyapti."],
  ["yatarak tedavi","yataraq tedavi","statsionar davolanish","saglik","B2","🛏️","Yatarak tedavi üç gün sürdü.","Statsionar davolanish uch kun davom etdi."],
  ["alerji","alerji","allergiya","saglik","B1","🤧","Penisiline alerjim var.","Penitsillinga allergiyam bor."],
  ["ateş","atesh","harorat, isitma","saglik","A2","🌡️","Çocuğun ateşi çıktı.","Bolaning harorati ko'tarildi."],
  ["ağrı","ari","og'riq","saglik","A2","😣","Sırtımda şiddetli bir ağrı var.","Orqamda kuchli og'riq bor."],
  ["sağlık sigortası","salik sigortasi","tibbiy sug'urta","saglik","B2","🛡️","Sağlık sigortası ilaç masraflarını karşılıyor.","Tibbiy sug'urta dori xarajatlarini qoplaydi."],
  ["aile hekimi","aile hekimi","oila shifokori","saglik","B2","👩‍⚕️","Aile hekimimden randevu aldım.","Oila shifokorimdan qabulga yozildim."],
  ["röntgen","rontgen","rentgen","saglik","B1","🩻","Doktor röntgen çektirmemi istedi.","Shifokor rentgen olishimni so'radi."],
  ["kan tahlili","kan tahlili","qon tahlili","saglik","B1","🩸","Sabah aç karnına kan tahlili verdim.","Ertalab och qoringa qon tahlili topshirdim."],
  ["yan etki","yan etki","nojo'ya ta'sir","saglik","B2","⚠️","Bu ilacın yan etkileri var.","Bu dorining nojo'ya ta'sirlari bor."],
  ["karantina","karantina","karantin","saglik","B2","🚧","Hasta iki hafta karantinada kaldı.","Bemor ikki hafta karantinda qoldi."],
  ["tedavi","tedavi","davolash","saglik","B1","💊","Tedavi bir ay sürecek.","Davolash bir oy davom etadi."],

  // ---- Ta'lim ----
  ["öğrenci","ogrenji","talaba, o'quvchi","egitim","A2","🧑‍🎓","Öğrenciler sınıfa girdi.","O'quvchilar sinfga kirdi."],
  ["öğretmen","oretmen","o'qituvchi","egitim","A2","👩‍🏫","Öğretmen ödevleri kontrol etti.","O'qituvchi uy vazifalarini tekshirdi."],
  ["ders","ders","dars, fan","egitim","A2","📚","Ders saat dokuzda başlıyor.","Dars soat to'qqizda boshlanadi."],
  ["sınav","sinav","imtihon","egitim","A2","📝","Sınav pazartesi günü yapılacak.","Imtihon dushanba kuni o'tkaziladi."],
  ["not","not","baho","egitim","A2","💯","Matematik notum çok yüksek.","Matematikadan bahom juda yuqori."],
  ["kayıt","qayit","ro'yxatdan o'tish","egitim","B1","🗒️","Kayıt işlemleri eylülde başlıyor.","Ro'yxatdan o'tish jarayoni sentabrda boshlanadi."],
  ["burs","burs","stipendiya","egitim","B1","🎁","Başarılı öğrencilere burs veriliyor.","Muvaffaqiyatli talabalarga stipendiya beriladi."],
  ["harç","harch","o'qish to'lovi","egitim","B2","💵","Harç ödemesi ay sonuna kadar yapılmalı.","O'qish to'lovi oy oxirigacha to'lanishi kerak."],
  ["fakülte","fakyulte","fakultet","egitim","B1","🏛️","Hukuk fakültesine kayıt oldum.","Huquq fakultetiga ro'yxatdan o'tdim."],
  ["bölüm","bolyum","yo'nalish, bo'lim","egitim","B1","🎓","Bilgisayar mühendisliği bölümünde okuyorum.","Kompyuter muhandisligi yo'nalishida o'qiyman."],
  ["mezun","mezun","bitiruvchi","egitim","B1","🎓","Bu üniversiteden mezun oldum.","Bu universitetni bitirdim."],
  ["transkript","transkript","baholar ko'chirmasi","egitim","B2","📑","Başvuru için transkript gerekiyor.","Ariza uchun baholar ko'chirmasi kerak."],
  ["devamsızlık","devamsizlik","darsga qatnashmaslik","egitim","B2","❌","Devamsızlık sınırını aştı.","U darsga qatnashmaslik chegarasidan oshdi."],
  ["karne","karne","baho daftarchasi","egitim","B1","📒","Karnesini aileye gösterdi.","U baho daftarchasini oilasiga ko'rsatdi."],
  ["yurt","yurt","yotoqxona","egitim","B1","🛏️","Üniversite yurdunda kalıyorum.","Universitet yotoqxonasida turaman."],
  ["kütüphane","kyutyuphane","kutubxona","egitim","A2","📚","Kütüphane akşam sekize kadar açık.","Kutubxona kechqurun sakkizgacha ochiq."],
  ["rektör","rektor","rektor","egitim","B2","🎩","Rektör yeni dönem açılışında konuştu.","Rektor yangi semestr ochilishida so'zladi."],
  ["dekan","dekan","dekan","egitim","B2","👔","Dekan toplantıya katıldı.","Dekan yig'ilishda qatnashdi."],
  ["öğrenci belgesi","ogrenji belgesi","talaba ma'lumotnomasi","egitim","B1","📄","Öğrenci belgesini e-Devlet'ten aldım.","Talaba ma'lumotnomasini e-Devlet orqali oldim."],
  ["ders programı","ders programi","dars jadvali","egitim","B1","🗓️","Ders programı panoya asıldı.","Dars jadvali e'lonlar taxtasiga osildi."],
  ["ödev","odev","uy vazifasi","egitim","A2","✏️","Ödevimi yarına kadar teslim edeceğim.","Uy vazifamni ertagacha topshiraman."],
  ["akademik takvim","akademik takvim","akademik taqvim","egitim","B2","📆","Akademik takvim internet sitesinde yayımlandı.","Akademik taqvim veb-saytda e'lon qilindi."],
  ["yüksek lisans","yuksek lisans","magistratura","egitim","B2","🎓","Yüksek lisans için başvuru yaptım.","Magistraturaga ariza topshirdim."],
  ["doktora","doktora","doktorantura","egitim","B2","🎓","Doktora tezini bu yıl bitirecek.","U doktorlik dissertatsiyasini shu yil tugatadi."],
  ["mezuniyet","mezuniyet","bitirish","egitim","B1","🎉","Mezuniyet töreni haziranda yapılacak.","Bitirish marosimi iyunda o'tkaziladi."],

  // ---- Transport va yo'l ----
  ["ehliyet","ehliyet","haydovchilik guvohnomasi","ulasim","B1","🚗","Ehliyet sınavını geçtim.","Haydovchilik imtihonidan o'tdim."],
  ["plaka","plaka","davlat raqami (mashina)","ulasim","B1","🔢","Aracın plakasını not aldım.","Mashinaning davlat raqamini yozib oldim."],
  ["araç","arach","transport vositasi","ulasim","B1","🚙","Araç park yasağı olan yere bırakıldı.","Transport vositasi to'xtash taqiqlangan joyga qoldirilgan."],
  ["tescil","tescil","ro'yxatga olish","ulasim","B2","📋","Aracın tescil işlemi tamamlandı.","Mashinani ro'yxatga olish jarayoni yakunlandi."],
  ["sürücü","syuryujyu","haydovchi","ulasim","B1","🧑‍✈️","Sürücü belgelerini polise gösterdi.","Haydovchi hujjatlarini politsiyaga ko'rsatdi."],
  ["yaya","yaya","piyoda","ulasim","B1","🚶","Yayalar yaya geçidini kullanmalı.","Piyodalar piyodalar o'tish joyidan foydalanishi kerak."],
  ["kaza","kaza","avariya, baxtsiz hodisa","ulasim","B1","💥","Dün sabah büyük bir kaza oldu.","Kecha ertalab katta avariya bo'ldi."],
  ["otopark","otopark","avtoturargoh","ulasim","A2","🅿️","Otopark ücretli.","Avtoturargoh pullik."],
  ["otoyol","otoyol","avtomagistral","ulasim","B1","🛣️","Otoyolda hız sınırı yüz yirmi.","Avtomagistralda tezlik chegarasi yuz yigirma."],
  ["geçiş ücreti","gechish yujreti","yo'l haqi","ulasim","B2","💳","Geçiş ücreti kartla ödeniyor.","Yo'l haqi karta bilan to'lanadi."],
  ["yolcu","yolju","yo'lovchi","ulasim","A2","🧳","Yolcular uçağa binmeye başladı.","Yo'lovchilar samolyotga chiqa boshladi."],
  ["uçuş","uchush","reys (parvoz)","ulasim","B1","✈️","Uçuş numaranız kaç?","Reys raqamingiz nechta?"],
  ["kalkış","kalkish","jo'nash","ulasim","B1","🛫","Kalkış saati sabah altı.","Jo'nash vaqti ertalab soat olti."],
  ["varış","varish","yetib kelish","ulasim","B1","🛬","Varış saati akşam sekiz.","Yetib kelish vaqti kechqurun soat sakkiz."],
  ["bagaj","bagaj","bagaj","ulasim","A2","🧳","Bagajımı kaybettim.","Bagajimni yo'qotib qo'ydim."],
  ["rötar","rotar","kechikish (reys)","ulasim","B2","⏱️","Uçak bir saat rötar yaptı.","Samolyot bir soat kechikdi."],
  ["iptal","iptal","bekor qilish","ulasim","B1","🚫","Seferler kar nedeniyle iptal edildi.","Qatnovlar qor sababli bekor qilindi."],
  ["koltuk","koltuk","o'rindiq","ulasim","A2","💺","Pencere kenarında bir koltuk istiyorum.","Deraza yonidan o'rindiq xohlayman."],
  ["tarife","tarife","tarif, jadval","ulasim","B2","📋","Otobüs tarifesi internette var.","Avtobus jadvali internetda bor."],
  ["gişe","gishe","chipta kassasi","ulasim","B1","🎫","Biletleri gişeden aldım.","Chiptalarni kassadan oldim."],
  ["peron","peron","platforma","ulasim","B1","🚉","Tren üçüncü peronda bekliyor.","Poyezd uchinchi platformada kutyapti."],
  ["güzergâh","gyuzergyah","marshrut","ulasim","B2","🗺️","Yeni güzergâh bugün açıldı.","Yangi marshrut bugun ochildi."],
  ["aktarma","aktarma","peresadka (almashish)","ulasim","B1","🔁","İstanbul'da bir aktarma yapacağız.","Istanbulda bir peresadka qilamiz."],
  ["toplu taşıma","toplu tashima","jamoat transporti","ulasim","B1","🚌","Toplu taşıma kartımı yükledim.","Jamoat transporti kartamni to'ldirdim."],
  ["trafik","trafik","yo'l harakati, tirbandlik","ulasim","A2","🚦","Sabahları trafik çok yoğun.","Ertalablari yo'l harakati juda gavjum."],

  // ---- Uy-joy va kommunal ----
  ["kira","kira","ijara","konut","A2","🏠","Kira her ayın birinde ödenir.","Ijara haqi har oyning birida to'lanadi."],
  ["kiracı","kiraji","ijarachi","konut","B1","🧑‍💼","Kiracı evi temiz teslim etti.","Ijarachi uyni toza topshirdi."],
  ["ev sahibi","ev sahibi","uy egasi","konut","B1","🔑","Ev sahibiyle kira için konuştum.","Uy egasi bilan ijara haqida gaplashdim."],
  ["depozito","depozito","garov puli","konut","B1","💰","Depozito çıkışta iade edilir.","Garov puli chiqishda qaytariladi."],
  ["tapu","tapu","ko'chmas mulk guvohnomasi","konut","B2","📜","Evin tapusu benim adıma.","Uyning guvohnomasi mening nomimda."],
  ["daire","daire","kvartira","konut","A2","🏢","Üçüncü kattaki daireyi kiraladık.","Uchinchi qavatdagi kvartirani ijaraga oldik."],
  ["apartman","apartman","ko'p qavatli uy","konut","A2","🏬","Apartmanın girişinde güvenlik var.","Uyning kirishida qorovul bor."],
  ["aidat","aidat","uy uchun oylik badal","konut","B2","🧾","Aylık aidat iki yüz lira.","Oylik badal ikki yuz lira."],
  ["elektrik","elektrik","elektr","konut","A2","💡","Elektrik kesintisi iki saat sürdü.","Elektr uzilishi ikki soat davom etdi."],
  ["doğalgaz","doalgaz","tabiiy gaz","konut","B1","🔥","Doğalgaz aboneliği için başvurdum.","Tabiiy gaz obunasi uchun ariza berdim."],
  ["abonelik","abonelik","abonent bo'lish, ulanish","konut","B2","🔌","İnternet aboneliğimi iptal ettim.","Internet ulanishimni bekor qildim."],
  ["sayaç","sayach","hisoblagich","konut","B1","⏲️","Su sayacının değerini yazdım.","Suv hisoblagichining ko'rsatkichini yozib oldim."],
  ["tadilat","tadilat","ta'mirlash","konut","B1","🔨","Evde tadilat devam ediyor.","Uyda ta'mirlash davom etyapti."],
  ["yönetici","yonetiji","uy boshqaruvchisi","konut","B2","🧑‍💼","Apartman yöneticisi toplantı çağrısı yaptı.","Uy boshqaruvchisi yig'ilishga chaqiriq qildi."],
  ["mülk","myulk","mulk","konut","B2","🏘️","Bu mülk babamdan kaldı.","Bu mulk otamdan qolgan."],
  ["emlak","emlak","ko'chmas mulk","konut","B2","🏠","Emlak ofisinden ev bakıyoruz.","Ko'chmas mulk idorasi orqali uy qidiryapmiz."],
  ["konut","konut","turar joy","konut","B2","🏡","Konut fiyatları arttı.","Turar joy narxlari oshdi."],
  ["adres","adres","manzil","konut","A2","📍","Adresinizi yazar mısınız?","Manzilingizni yozib berasizmi?"],
  ["posta kodu","posta kodu","pochta indeksi","konut","B1","📮","Posta kodunu forma yazın.","Pochta indeksini shaklga yozing."],
  ["kapı numarası","kapi numarasi","uy (eshik) raqami","konut","B1","🚪","Kapı numarası otuz iki.","Uy raqami o'ttiz ikki."],
  ["taşınmak","tashinmak","ko'chib o'tmoq","konut","B1","📦","Gelecek ay yeni eve taşınıyoruz.","Kelasi oy yangi uyga ko'chib o'tamiz."],
  ["kira sözleşmesi","kira sozleshmesi","ijara shartnomasi","konut","B2","📑","Kira sözleşmesi bir yıllıktır.","Ijara shartnomasi bir yillik."],
  ["komşu","komshu","qo'shni","konut","A2","👥","Komşularımız çok yardımsever.","Qo'shnilarimiz juda yordamsevar."],
  ["mahalle","mahalle","mahalla","konut","A2","🏘️","Bu mahalle çok sakin.","Bu mahalla juda tinch."],
  ["asansör","asansor","lift","konut","A2","🛗","Asansör bozuldu.","Lift buzildi."],
];

RASMIY_YANGI_2.forEach(([tr, pron, uz, cat, level, emoji, ex, exUz]) => {
  if (!RASMIY_WORDS.some(w => w.tr === tr)) {
    RASMIY_WORDS.push({ tr, pron, uz, cat, level, emoji, ex, exUz });
  }
});

// ===== YANA 100 TA RASMIY SO'Z =====

Object.assign(RASMIY_CATEGORIES, {
  is: "Ish va kasb",
  finans: "Moliya va bank",
  resmi_islem: "Rasmiy ishlar va hujjatlar",
  teknoloji: "Texnologiya",
  alisveris: "Savdo va xarid",
});

// [turkcha, talaffuz, o'zbekcha, kategoriya, daraja, emoji, misol gap, gap tarjimasi]
const RASMIY_YANGI_3 = [

  // ---- Ish va kasb: 20 ta ----
  ["meslek", "meslek", "kasb", "is", "A2", "💼", "Mesleğimi çok seviyorum.", "Men kasbimni juda yaxshi ko'raman."],
  ["iş başvurusu", "ish bashvurusu", "ishga ariza", "is", "B1", "📄", "İş başvurusu yaptım.", "Ishga ariza topshirdim."],
  ["iş görüşmesi", "ish gyoryushmesi", "ish suhbati", "is", "B1", "🤝", "Yarın iş görüşmem var.", "Ertaga ish suhbatim bor."],
  ["maaş", "maash", "maosh", "is", "A2", "💵", "Maaşım ay sonunda yatıyor.", "Maoshim oy oxirida tushadi."],
  ["çalışan", "chalyshan", "xodim", "is", "A2", "👨‍💼", "Çalışanlar toplantıya katıldı.", "Xodimlar yig'ilishda qatnashdi."],
  ["işveren", "ishveren", "ish beruvchi", "is", "B1", "🏢", "İşveren yeni çalışan arıyor.", "Ish beruvchi yangi xodim qidirmoqda."],
  ["iş yeri", "ish yeri", "ish joyi", "is", "A2", "🏬", "İş yerim eve yakın.", "Ish joyim uyga yaqin."],
  ["görev", "gyorev", "vazifa", "is", "B1", "📋", "Görevimi zamanında tamamladım.", "Vazifamni o'z vaqtida tugatdim."],
  ["sorumluluk", "sorumluluk", "mas'uliyat", "is", "B1", "📝", "Bu görev büyük sorumluluk gerektiriyor.", "Bu vazifa katta mas'uliyat talab qiladi."],
  ["deneyim", "deneyim", "tajriba", "is", "B1", "⭐", "Bu alanda deneyimim var.", "Bu sohada tajribam bor."],
  ["özgeçmiş", "ozgechmish", "tarjimai hol, CV", "is", "B1", "📑", "Özgeçmişimi şirkete gönderdim.", "CV imni kompaniyaga yubordim."],
  ["terfi", "terfi", "lavozim ko'tarilishi", "is", "B2", "📈", "Bu yıl terfi aldı.", "U bu yil lavozimi ko'tarildi."],
  ["izin", "izin", "ruxsat, ta'til", "is", "A2", "📅", "Yarın için izin aldım.", "Ertangi kun uchun ruxsat oldim."],
  ["mesai", "mesai", "ish vaqti, qo'shimcha ish", "is", "B1", "⏰", "Bugün mesaiye kalacağım.", "Bugun qo'shimcha ishda qolaman."],
  ["toplantı", "toplantı", "yig'ilish", "is", "A2", "👥", "Toplantı saat onda başlayacak.", "Yig'ilish soat o'nda boshlanadi."],
  ["anlaşma", "anlashma", "kelishuv", "is", "B1", "🤝", "İki şirket anlaşma yaptı.", "Ikki kompaniya kelishuv tuzdi."],
  ["sözleşme", "sozleshme", "shartnoma", "is", "B1", "📃", "Sözleşmeyi dikkatlice okudum.", "Shartnomani diqqat bilan o'qidim."],
  ["işten çıkarılmak", "ishten chykarılmak", "ishdan bo'shatilmoq", "is", "B2", "🚪", "Şirketten geçen ay işten çıkarıldı.", "U o'tgan oy kompaniyadan ishdan bo'shatildi."],
  ["emeklilik", "emeklilik", "pensiyaga chiqish", "is", "B2", "🌅", "Emeklilik planı hazırlıyor.", "U pensiyaga chiqish rejasini tayyorlayapti."],
  ["işsizlik", "ishsizlik", "ishsizlik", "is", "B2", "📉", "İşsizlik oranı açıklandı.", "Ishsizlik darajasi e'lon qilindi."],

  // ---- Moliya va bank: 20 ta ----
  ["banka", "banka", "bank", "finans", "A2", "🏦", "Bank saat dokuzda açılıyor.", "Bank soat to'qqizda ochiladi."],
  ["hesap", "hesap", "hisob", "finans", "A2", "🧾", "Banka hesabımı kontrol ettim.", "Bank hisobimni tekshirdim."],
  ["banka kartı", "banka kartı", "bank kartasi", "finans", "A2", "💳", "Banka kartımla ödeme yaptım.", "Bank kartam bilan to'lov qildim."],
  ["kredi", "kredi", "kredit", "finans", "B1", "💰", "Kredi başvurusu yaptım.", "Kredit uchun ariza topshirdim."],
  ["borç", "borch", "qarz", "finans", "A2", "💸", "Borcumu gelecek hafta ödeyeceğim.", "Qarzimni kelasi hafta to'layman."],
  ["faiz", "faiz", "foiz, foiz stavkasi", "finans", "B1", "📊", "Bankanın faiz oranı değişti.", "Bankning foiz stavkasi o'zgardi."],
  ["taksit", "taksit", "bo'lib to'lash", "finans", "B1", "💳", "Telefonu üç taksitle aldım.", "Telefonni uch bo'lib to'lash orqali oldim."],
  ["ödeme", "odeme", "to'lov", "finans", "A2", "💵", "Ödeme bugün yapılacak.", "To'lov bugun amalga oshiriladi."],
  ["havale", "havale", "bank orqali pul o'tkazish", "finans", "B1", "🔁", "Havale işlemini tamamladım.", "Pul o'tkazish operatsiyasini yakunladim."],
  ["bakiye", "bakiye", "hisobdagi qoldiq", "finans", "B1", "📱", "Hesabımda yeterli bakiye var.", "Hisobimda yetarli mablag' bor."],
  ["nakit", "nakit", "naqd pul", "finans", "A2", "💶", "Yanımda nakit para yok.", "Yonimda naqd pul yo'q."],
  ["fatura", "fatura", "hisob-faktura, to'lov qog'ozi", "finans", "A2", "🧾", "Elektrik faturasını ödedim.", "Elektr to'lovini to'ladim."],
  ["makbuz", "makbuz", "kvitansiya", "finans", "B1", "📃", "Lütfen makbuzu saklayın.", "Iltimos, kvitansiyani saqlang."],
  ["tasarruf", "tasarruf", "tejash", "finans", "B1", "🐷", "Her ay para biriktiriyorum.", "Har oy pul yig'yapman."],
  ["birikim", "birikim", "jamg'arma", "finans", "B1", "🏦", "Birikimimi eğitim için kullanacağım.", "Jamg'armamni ta'lim uchun ishlataman."],
  ["bütçe", "byutche", "budjet", "finans", "B1", "📒", "Aylık bütçemi hazırladım.", "Oylik budjetimni tayyorladim."],
  ["gelir", "gelir", "daromad", "finans", "B1", "📈", "Aylık gelirim arttı.", "Oylik daromadim oshdi."],
  ["gider", "gider", "xarajat", "finans", "B1", "📉", "Bu ay giderlerim fazla.", "Bu oy xarajatlarim ko'p."],
  ["kur", "kur", "valyuta kursi", "finans", "B2", "💱", "Dolar kuru bugün yükseldi.", "Bugun dollar kursi ko'tarildi."],
  ["döviz", "doviz", "xorijiy valyuta", "finans", "B1", "💱", "Döviz bürosu burada mı?", "Valyuta ayirboshlash shoxobchasi shu yerdami?"],

  // ---- Rasmiy ishlar va hujjatlar: 20 ta ----
  ["başvuru", "bashvuru", "ariza, murojaat", "resmi_islem", "B1", "📝", "Başvurum kabul edildi.", "Arizam qabul qilindi."],
  ["başvuru formu", "bashvuru formu", "ariza shakli", "resmi_islem", "B1", "📄", "Başvuru formunu doldurdum.", "Ariza shaklini to'ldirdim."],
  ["imza", "imza", "imzo", "resmi_islem", "A2", "✍️", "Belgenin altına imza attım.", "Hujjatning pastiga imzo qo'ydim."],
  ["mühür", "myuhur", "muhr", "resmi_islem", "B1", "🔴", "Belgeye resmi mühür basıldı.", "Hujjatga rasmiy muhr bosildi."],
  ["onay", "onay", "tasdiq", "resmi_islem", "B1", "✅", "Başvuru için müdürün onayı gerekiyor.", "Ariza uchun rahbarning tasdig'i kerak."],
  ["izin belgesi", "izin belgesi", "ruxsatnoma", "resmi_islem", "B1", "📃", "İzin belgesini yanımda taşıyorum.", "Ruxsatnomani yonimda olib yuraman."],
  ["kimlik numarası", "kimlik numarasi", "shaxsiy identifikatsiya raqami", "resmi_islem", "B1", "🔢", "Kimlik numaranızı yazın.", "Shaxsiy identifikatsiya raqamingizni yozing."],
  ["pasaport", "pasaport", "pasport", "resmi_islem", "A2", "🛂", "Pasaportumun süresi doldu.", "Pasportimning amal qilish muddati tugadi."],
  ["vize", "vize", "viza", "resmi_islem", "B1", "🛂", "Vize başvurum sonuçlandı.", "Viza arizam bo'yicha natija chiqdi."],
  ["vatandaşlık", "vatandashlık", "fuqarolik", "resmi_islem", "B2", "🏛️", "Vatandaşlık başvurusu yaptı.", "U fuqarolik uchun ariza topshirdi."],
  ["ikamet izni", "ikamet izni", "yashash uchun ruxsatnoma", "resmi_islem", "B2", "🏠", "İkamet izni için randevu aldım.", "Yashash ruxsatnomasi uchun qabulga yozildim."],
  ["nüfus müdürlüğü", "nyufus myudurluyu", "fuqarolik holati va aholi ro'yxati idorasi", "resmi_islem", "B2", "🏢", "Nüfus müdürlüğüne gittim.", "Aholi ro'yxati idorasiga bordim."],
  ["mahkeme", "mahkeme", "sud", "resmi_islem", "B1", "⚖️", "Duruşma mahkemede yapılacak.", "Sud majlisi sudda o'tkaziladi."],
  ["dava", "dava", "sud ishi", "resmi_islem", "B2", "⚖️", "Dava gelecek ay başlayacak.", "Sud ishi kelasi oy boshlanadi."],
  ["karar", "karar", "qaror", "resmi_islem", "B1", "📜", "Mahkeme kararını açıkladı.", "Sud qarorini e'lon qildi."],
  ["şikâyet", "shikayet", "shikoyat", "resmi_islem", "B1", "📢", "Resmi bir şikâyette bulundum.", "Rasmiy shikoyat qildim."],
  ["dilekçe", "dilekche", "yozma ariza", "resmi_islem", "B1", "📄", "Dilekçeyi müdüre teslim ettim.", "Yozma arizani rahbarga topshirdim."],
  ["tebligat", "tebligat", "rasmiy xabarnoma", "resmi_islem", "B2", "✉️", "Tebligat adresime gönderildi.", "Rasmiy xabarnoma manzilimga yuborildi."],
  ["belge doğrulama", "belge dogrulama", "hujjatni tekshirish", "resmi_islem", "B2", "🔍", "Belge doğrulama işlemi tamamlandı.", "Hujjatni tekshirish jarayoni yakunlandi."],
  ["resmi kurum", "resmi kurum", "rasmiy muassasa", "resmi_islem", "B1", "🏛️", "Resmi kuruma başvurdum.", "Rasmiy muassasaga murojaat qildim."],

  // ---- Texnologiya: 20 ta ----
  ["yazılım", "yazılım", "dasturiy ta'minot", "teknoloji", "B1", "💻", "Yeni bir yazılım geliştirdik.", "Yangi dasturiy ta'minot ishlab chiqdik."],
  ["donanım", "donanım", "kompyuter qurilmalari", "teknoloji", "B2", "🖥️", "Donanım güncellemesi gerekiyor.", "Qurilmalarni yangilash kerak."],
  ["uygulama", "uygulama", "ilova", "teknoloji", "A2", "📱", "Bu uygulamayı her gün kullanıyorum.", "Bu ilovadan har kuni foydalanaman."],
  ["güncelleme", "gyunelleme", "yangilanish", "teknoloji", "B1", "🔄", "Yeni güncelleme yayımlandı.", "Yangi yangilanish e'lon qilindi."],
  ["şifre", "shifre", "parol", "teknoloji", "A2", "🔐", "Şifremi unuttum.", "Parolimni unutdim."],
  ["kullanıcı adı", "kullanıcı adı", "foydalanuvchi nomi", "teknoloji", "A2", "👤", "Kullanıcı adımı değiştirdim.", "Foydalanuvchi nomimni o'zgartirdim."],
  ["veri", "veri", "ma'lumot", "teknoloji", "B1", "🗂️", "Verileri bilgisayara kaydettim.", "Ma'lumotlarni kompyuterga saqladim."],
  ["veri tabanı", "veri tabanı", "ma'lumotlar bazasi", "teknoloji", "B2", "🗄️", "Veri tabanı düzenli olarak yedekleniyor.", "Ma'lumotlar bazasining zaxira nusxasi muntazam yaratiladi."],
  ["sunucu", "sunucu", "server", "teknoloji", "B1", "🖥️", "Sunucu şu anda çalışıyor.", "Server hozir ishlayapti."],
  ["ağ", "a", "tarmoq", "teknoloji", "B1", "🌐", "Bilgisayar ağına bağlandım.", "Kompyuter tarmog'iga ulandim."],
  ["bağlantı", "baglantı", "ulanish", "teknoloji", "B1", "🔗", "İnternet bağlantısı kesildi.", "Internet aloqasi uzildi."],
  ["indirmek", "indirmek", "yuklab olmoq", "teknoloji", "A2", "⬇️", "Dosyayı bilgisayarıma indirdim.", "Faylni kompyuterimga yuklab oldim."],
  ["yüklemek", "yuklemek", "yuklamoq, o'rnatmoq", "teknoloji", "A2", "⬆️", "Yeni programı yükledim.", "Yangi dasturni o'rnatdim."],
  ["dosya", "dosya", "fayl", "teknoloji", "A2", "📁", "Dosyayı masaüstüne kaydettim.", "Faylni ish stoliga saqladim."],
  ["klasör", "klasor", "papka", "teknoloji", "A2", "📂", "Belgeleri ayrı bir klasöre koydum.", "Hujjatlarni alohida papkaga joyladim."],
  ["ekran", "ekran", "ekran", "teknoloji", "A2", "🖥️", "Ekran çok parlak.", "Ekran juda yorqin."],
  ["klavye", "klavye", "klaviatura", "teknoloji", "A2", "⌨️", "Klavyem düzgün çalışıyor.", "Klaviaturam to'g'ri ishlayapti."],
  ["fare", "fare", "sichqoncha", "teknoloji", "A2", "🖱️", "Bilgisayar faresini değiştirdim.", "Kompyuter sichqonchasini almashtirdim."],
  ["güvenlik", "gyuvenlik", "xavfsizlik", "teknoloji", "B1", "🛡️", "Hesap güvenliği çok önemlidir.", "Hisob xavfsizligi juda muhim."],
  ["yedekleme", "yedekleme", "zaxira nusxa olish", "teknoloji", "B2", "💾", "Dosyaların yedeklemesini yaptım.", "Fayllarning zaxira nusxasini oldim."],

  // ---- Savdo va xarid: 20 ta ----
  ["müşteri", "myusht eri", "mijoz", "alisveris", "A2", "🛍️", "Müşteri ürün hakkında soru sordu.", "Mijoz mahsulot haqida savol berdi."],
  ["satıcı", "satıcı", "sotuvchi", "alisveris", "A2", "🧑‍💼", "Satıcı bana yardımcı oldu.", "Sotuvchi menga yordam berdi."],
  ["ürün", "yurun", "mahsulot", "alisveris", "A2", "📦", "Bu ürün çok kullanışlı.", "Bu mahsulot juda qulay."],
  ["sipariş", "siparish", "buyurtma", "alisveris", "A2", "🛒", "Siparişim bugün geldi.", "Buyurtmam bugun keldi."],
  ["teslimat", "teslimat", "yetkazib berish", "alisveris", "B1", "🚚", "Teslimat iki gün sürecek.", "Yetkazib berish ikki kun davom etadi."],
  ["kargo", "kargo", "kuryer jo'natmasi", "alisveris", "A2", "📦", "Kargom henüz ulaşmadı.", "Jo'natmam hali yetib kelmadi."],
  ["iade", "iade", "qaytarish", "alisveris", "B1", "↩️", "Ürünü iade etmek istiyorum.", "Mahsulotni qaytarmoqchiman."],
  ["değişim", "deyishim", "almashtirish", "alisveris", "B1", "🔄", "Ürün için değişim talep ettim.", "Mahsulotni almashtirishni so'radim."],
  ["indirim", "indirim", "chegirma", "alisveris", "A2", "🏷️", "Bu mağazada büyük indirim var.", "Bu do'konda katta chegirma bor."],
  ["kampanya", "kampanya", "aksiya", "alisveris", "B1", "🎉", "Kampanya hafta sonuna kadar sürecek.", "Aksiya hafta oxirigacha davom etadi."],
  ["stok", "stok", "zaxira, ombordagi mahsulot", "alisveris", "B1", "📦", "Bu ürün şu anda stokta yok.", "Bu mahsulot hozir zaxirada yo'q."],
  ["garanti", "garanti", "kafolat", "alisveris", "B1", "🛡️", "Telefonun garantisi iki yıl.", "Telefonning kafolati ikki yil."],
  ["kalite", "kalite", "sifat", "alisveris", "A2", "⭐", "Ürünün kalitesi çok iyi.", "Mahsulotning sifati juda yaxshi."],
  ["fiyat etiketi", "fiyat etiketi", "narx yorlig'i", "alisveris", "A2", "🏷️", "Fiyat etiketi ürünün üzerinde.", "Narx yorlig'i mahsulot ustida."],
  ["alışveriş sepeti", "alyshverish sepeti", "xarid savati", "alisveris", "A2", "🛒", "Ürünleri alışveriş sepetine ekledim.", "Mahsulotlarni xarid savatiga qo'shdim."],
  ["ödeme yöntemi", "odeme yontemi", "to'lov usuli", "alisveris", "B1", "💳", "Ödeme yöntemini seçin.", "To'lov usulini tanlang."],
  ["nakliye", "nakliye", "tashish, transport xizmati", "alisveris", "B1", "🚛", "Nakliye ücreti fiyata dahil.", "Tashish haqi narxga kiritilgan."],
  ["fiyat teklifi", "fiyat teklifi", "narx taklifi", "alisveris", "B2", "📑", "Şirketten fiyat teklifi aldık.", "Kompaniyadan narx taklifini oldik."],
  ["toptan", "toptan", "ulgurji", "alisveris", "B1", "📦", "Ürünleri toptan satın alıyoruz.", "Mahsulotlarni ulgurji sotib olamiz."],
  ["perakende", "perakende", "chakana savdo", "alisveris", "B2", "🏪", "Perakende satış fiyatı değişti.", "Chakana savdo narxi o'zgardi."]
];

// Takroriy so'zlarni qo'shmaslik
RASMIY_YANGI_3.forEach(([tr, pron, uz, cat, level, emoji, ex, exUz]) => {
  if (!RASMIY_WORDS.some(w => w.tr === tr)) {
    RASMIY_WORDS.push({ tr, pron, uz, cat, level, emoji, ex, exUz });
  }
});

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
