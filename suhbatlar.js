const dialogues = [
 {id:1,title:"Salomlashish",subtitle:"Ko‘rishish va hol-ahvol so‘rash",level:"A1",lines:[
  {who:"Ayşe",tr:"Merhaba! Nasılsın?",pron:"Merhaba! Nasilsin?",uz:"Salom! Qalaysan?"},
  {who:"Zeynep",tr:"İyiyim, teşekkür ederim. Sen nasılsın?",pron:"Iyiyim, teshekkur ederim. Sen nasilsin?",uz:"Yaxshiman, rahmat. Sen-chi?"},
  {who:"Ayşe",tr:"Ben de iyiyim.",pron:"Ben de iyiyim.",uz:"Men ham yaxshiman."},
  {who:"Zeynep",tr:"Görüşürüz, kendine iyi bak!",pron:"Görüşürüz, kendine iyi bak!",uz:"Ko‘rishguncha, o‘zingni ehtiyot qil!"}
 ]},
 {id:2,title:"Tanishish",subtitle:"Ism, yosh va qayerdan ekanini aytish",level:"A1",lines:[
  {who:"Mert",tr:"Merhaba, adın ne?",pron:"Merhaba, adin ne?",uz:"Salom, isming nima?"},
  {who:"Elif",tr:"Benim adım Elif. Senin adın ne?",pron:"Benim adim Elif. Senin adin ne?",uz:"Mening ismim Elif. Sening isming-chi?"},
  {who:"Mert",tr:"Ben Mert. Nerelisin?",pron:"Ben Mert. Nerelisin?",uz:"Men Mertman. Qayerliksan?"},
  {who:"Elif",tr:"Özbekistanlıyım. Memnun oldum.",pron:"Özbekistanliyim. Memnun oldum.",uz:"O‘zbekistonlikman. Tanishganimdan xursandman."}
 ]},
 {id:3,title:"Do‘konda",subtitle:"Narx so‘rash va xarid qilish",level:"A2",lines:[
  {who:"Müşteri",tr:"Merhaba, bu tişört ne kadar?",pron:"Merhaba, bu tishört ne kadar?",uz:"Salom, bu futbolka qancha turadi?"},
  {who:"Satıcı",tr:"Üç yüz lira.",pron:"Üch yüz lira.",uz:"Uch yuz lira."},
  {who:"Müşteri",tr:"Başka renkleri var mı?",pron:"Bashka renkleri var mi?",uz:"Boshqa ranglari bormi?"},
  {who:"Satıcı",tr:"Evet, beyaz ve siyah var.",pron:"Evet, beyaz ve siyah var.",uz:"Ha, oq va qora ranglari bor."},
  {who:"Müşteri",tr:"Siyah olanı alayım, lütfen.",pron:"Siyah olani alayim, lütfen.",uz:"Qora ranglisini olay, iltimos."}
 ]},
 {id:4,title:"Restoranda",subtitle:"Taom buyurtma qilish",level:"A2",lines:[
  {who:"Garson",tr:"Hoş geldiniz. Ne alırsınız?",pron:"Hosh geldiniz. Ne alirsiniz?",uz:"Xush kelibsiz. Nima buyurtma qilasiz?"},
  {who:"Müşteri",tr:"Bir mercimek çorbası ve bir çay alabilir miyim?",pron:"Bir mercimek chorbası ve bir chay alabilir miyim?",uz:"Bir yasmiq sho‘rva va bir choy olsam bo‘ladimi?"},
  {who:"Garson",tr:"Tabii. Başka bir isteğiniz var mı?",pron:"Tabii. Bashka bir isteyiniz var mi?",uz:"Albatta. Yana istagingiz bormi?"},
  {who:"Müşteri",tr:"Hayır, teşekkürler. Hesabı alabilir miyim?",pron:"Hayir, teshekkürler. Hesabi alabilir miyim?",uz:"Yo‘q, rahmat. Hisobni olsam bo‘ladimi?"}
 ]},
 {id:5,title:"Yo‘l so‘rash",subtitle:"Manzilni topish",level:"A2",lines:[
  {who:"Turist",tr:"Affedersiniz, otobüs durağı nerede?",pron:"Affedersiniz, otobüs duragi nerede?",uz:"Kechirasiz, avtobus bekati qayerda?"},
  {who:"Yerel kişi",tr:"Düz gidin, sonra sağa dönün.",pron:"Düz gidin, sonra saga dönün.",uz:"To‘g‘riga boring, keyin o‘ngga buriling."},
  {who:"Turist",tr:"Yürüyerek uzak mı?",pron:"Yürüyerek uzak mi?",uz:"Piyoda uzoqmi?"},
  {who:"Yerel kişi",tr:"Hayır, yaklaşık beş dakika.",pron:"Hayir, yaklashik besh dakika.",uz:"Yo‘q, taxminan besh daqiqa."}
 ]},
 {id:6,title:"Do‘stlar bilan",subtitle:"Rejalar va bo‘sh vaqt",level:"B1",lines:[
  {who:"Deniz",tr:"Hafta sonu ne yapmayı düşünüyorsun?",pron:"Hafta sonu ne yapmayi düşünüyorsun?",uz:"Dam olish kunlari nima qilishni o‘ylayapsan?"},
  {who:"Ece",tr:"Hava güzel olursa sahile gitmek istiyorum.",pron:"Hava güzel olursa sahile gitmek istiyorum.",uz:"Havo yaxshi bo‘lsa, sohilga borishni xohlayman."},
  {who:"Deniz",tr:"Harika! İstersen sana eşlik edebilirim.",pron:"Harika! Istersen sana eshlik edebilirim.",uz:"Ajoyib! Xohlasang, senga hamroh bo‘lishim mumkin."},
  {who:"Ece",tr:"Çok iyi olur. Saat kaçta buluşalım?",pron:"Chok iyi olur. Saat kaçta bulushalim?",uz:"Juda yaxshi bo‘lardi. Soat nechada uchrashamiz?"},
  {who:"Deniz",tr:"Öğleden sonra üçte buluşalım.",pron:"Öğleden sonra üçte bulushalim.",uz:"Tushdan keyin soat uchda uchrashamiz."}
 ]},
 {id:7,title:"Mehmonxonada",subtitle:"Xona band qilish va ro‘yxatdan o‘tish",level:"B1",lines:[
  {who:"Misafir",tr:"Merhaba, iki gecelik bir oda ayırtmak istiyorum.",pron:"Merhaba, iki gecelik bir oda ayirtmak istiyorum.",uz:"Salom, ikki kechaga xona band qilmoqchiman."},
  {who:"Resepsiyonist",tr:"Rezervasyonunuz var mı?",pron:"Rezervasyonunuz var mi?",uz:"Bandlovingiz bormi?"},
  {who:"Misafir",tr:"Evet, İsmim Karimova.",pron:"Evet, ismim Karimova.",uz:"Ha, ismim Karimova."},
  {who:"Resepsiyonist",tr:"Kimliğinizi görebilir miyim?",pron:"Kimliginizi görebilir miyim?",uz:"Shaxsni tasdiqlovchi hujjatingizni ko‘rsam bo‘ladimi?"},
  {who:"Misafir",tr:"Tabii, buyurun.",pron:"Tabii, buyurun.",uz:"Albatta, marhamat."},
  
 ]}
];

const YENI_SUHBATLAR = [
  { tr: "Nasılsın?", uz: "Qalaysan?", pron: "Nasilsin?" },
  { tr: "İyiyim, teşekkürler.", uz: "Yaxshiman, rahmat.", pron: "Iyiyim, teshekkürler." },
  { tr: "Senin adın ne?", uz: "Isming nima?", pron: "Senin adin ne?" },
  { tr: "Benim adım Ayşe.", uz: "Mening ismim Oysha.", pron: "Benim adim Aysha." },
  { tr: "Nerelisin?", uz: "Qayerliksan?", pron: "Nerelisin?" },
  { tr: "Özbekistanlıyım.", uz: "O‘zbekistonlikman.", pron: "Ozbekistanliyim." },
  { tr: "Kaç yaşındasın?", uz: "Necha yoshdasan?", pron: "Kach yashindasin?" },
  { tr: "On beş yaşındayım.", uz: "O‘n besh yoshdaman.", pron: "On besh yashindayim." },
  { tr: "Nerede yaşıyorsun?", uz: "Qayerda yashaysan?", pron: "Nerede yashiyorsun?" },
  { tr: "Taşkent'te yaşıyorum.", uz: "Toshkentda yashayman.", pron: "Tashkentte yashiyorum." },

  { tr: "Bugün nasılsın?", uz: "Bugun qalaysan?", pron: "Bugün nasilsin?" },
  { tr: "Biraz yorgunum.", uz: "Biroz charchaganman.", pron: "Biraz yorgunum." },
  { tr: "Ne yapıyorsun?", uz: "Nima qilyapsan?", pron: "Ne yapiyorsun?" },
  { tr: "Kitap okuyorum.", uz: "Kitob o‘qiyapman.", pron: "Kitap okuyorum." },
  { tr: "Nereye gidiyorsun?", uz: "Qayerga ketyapsan?", pron: "Nereye gidiyorsun?" },
  { tr: "Eve gidiyorum.", uz: "Uyga ketyapman.", pron: "Eve gidiyorum." },
  { tr: "Saat kaç?", uz: "Soat necha?", pron: "Saat kach?" },
  { tr: "Saat üç.", uz: "Soat uch.", pron: "Saat üç." },
  { tr: "Bugün hava güzel.", uz: "Bugun havo chiroyli.", pron: "Bugün hava güzel." },
  { tr: "Biraz soğuk.", uz: "Biroz sovuq.", pron: "Biraz soouk." },

  { tr: "Annen nasıl?", uz: "Onang qalay?", pron: "Annen nasil?" },
  { tr: "Annem çok iyi.", uz: "Onam juda yaxshi.", pron: "Annem chok iyi." },
  { tr: "Kaç kardeşin var?", uz: "Nechta aka-ukang yoki opa-singling bor?", pron: "Kach kardeshin var?" },
  { tr: "İki kardeşim var.", uz: "Ikkita aka-ukam yoki opa-singlim bor.", pron: "Iki kardesim var." },
  { tr: "Baban ne iş yapıyor?", uz: "Otang nima ish qiladi?", pron: "Baban ne ish yapiyor?" },
  { tr: "Babam öğretmen.", uz: "Otam o‘qituvchi.", pron: "Babam oretmen." },
  { tr: "Ailen nerede?", uz: "Oilang qayerda?", pron: "Ailen nerede?" },
  { tr: "Ailem evde.", uz: "Oilang uyda.", pron: "Ailem evde." },
  { tr: "Birlikte yemek yiyelim.", uz: "Birga ovqatlanaylik.", pron: "Birlikte yemek yiyelim." },
  { tr: "Seni çok özledim.", uz: "Seni juda sog‘indim.", pron: "Seni chok ozledim." },

  { tr: "Bu ne kadar?", uz: "Bu qancha turadi?", pron: "Bu ne kadar?" },
  { tr: "Çok pahalı.", uz: "Juda qimmat.", pron: "Chok pahali." },
  { tr: "Daha ucuzu var mı?", uz: "Arzonrog‘i bormi?", pron: "Daha ujuzu var mi?" },
  { tr: "Bunu almak istiyorum.", uz: "Buni sotib olmoqchiman.", pron: "Bunu almak istiyorum." },
  { tr: "Kartla ödeyebilir miyim?", uz: "Karta bilan to‘lasam bo‘ladimi?", pron: "Kartla odeyebilir miyim?" },
  { tr: "Poşet alabilir miyim?", uz: "Paket olsam bo‘ladimi?", pron: "Poshet alabilir miyim?" },
  { tr: "Başka renk var mı?", uz: "Boshqa rang bormi?", pron: "Bashka renk var mi?" },
  { tr: "Bedeniniz var mı?", uz: "Sizda o‘lchami bormi?", pron: "Bedeniniz var mi?" },
  { tr: "Sadece bakıyorum.", uz: "Shunchaki ko‘ryapman.", pron: "Sadece bakiyorum." },
  { tr: "Teşekkür ederim, iyi günler.", uz: "Rahmat, kuningiz xayrli o‘tsin.", pron: "Teshekkür ederim, iyi günler." },

  { tr: "Okula ne zaman gidiyorsun?", uz: "Maktabga qachon borasan?", pron: "Okula ne zaman gidiyorsun?" },
  { tr: "Sabah gidiyorum.", uz: "Ertalab boraman.", pron: "Sabah gidiyorum." },
  { tr: "En sevdiğin ders ne?", uz: "Eng sevimli faning qaysi?", pron: "En sevdigin ders ne?" },
  { tr: "Türkçeyi seviyorum.", uz: "Turk tilini yaxshi ko‘raman.", pron: "Türkcheyi seviyorum." },
  { tr: "Ödevini yaptın mı?", uz: "Uy vazifangni qildingmi?", pron: "Odevini yaptin mi?" },
  { tr: "Henüz yapmadım.", uz: "Hali qilmadim.", pron: "Henüz yapmadim." },
  { tr: "Birlikte çalışalım mı?", uz: "Birga shug‘ullanamizmi?", pron: "Birlikte chalishalim mi?" },
  { tr: "Tabii ki!", uz: "Albatta!", pron: "Tabii ki!" },
  { tr: "Sınav ne zaman?", uz: "Imtihon qachon?", pron: "Sinav ne zaman?" },
  { tr: "Yarın sınavımız var.", uz: "Ertaga imtihonimiz bor.", pron: "Yarin sinavimiz var." },

  { tr: "Bir kahve alabilir miyim?", uz: "Bir qahva olsam bo‘ladimi?", pron: "Bir kahve alabilir miyim?" },
  { tr: "Ne içmek istersin?", uz: "Nima ichishni xohlaysan?", pron: "Ne ichmek istersin?" },
  { tr: "Bir çay istiyorum.", uz: "Bir choy xohlayman.", pron: "Bir chay istiyorum." },
  { tr: "Menü alabilir miyim?", uz: "Menyuni olsam bo‘ladimi?", pron: "Menü alabilir miyim?" },
  { tr: "Ne yemek istersin?", uz: "Nima yeging keladi?", pron: "Ne yemek istersin?" },
  { tr: "Çorba istiyorum.", uz: "Sho‘rva xohlayman.", pron: "Chorba istiyorum." },
  { tr: "Hesabı alabilir miyim?", uz: "Hisobni olsam bo‘ladimi?", pron: "Hesabi alabilir miyim?" },
  { tr: "Yemek çok lezzetli.", uz: "Ovqat juda mazali.", pron: "Yemek chok lezzetli." },
  { tr: "Afiyet olsun!", uz: "Yoqimli ishtaha!", pron: "Afiyet olsun!" },
  { tr: "Doydum, teşekkürler.", uz: "To‘ydim, rahmat.", pron: "Doydum, teshekkürler." },

  { tr: "Otobüs nereden kalkıyor?", uz: "Avtobus qayerdan jo‘naydi?", pron: "Otobüs nereden kalkiyor?" },
  { tr: "Durak nerede?", uz: "Bekat qayerda?", pron: "Durak nerede?" },
  { tr: "Buraya nasıl gidebilirim?", uz: "Bu yerga qanday bora olaman?", pron: "Buraya nasil gidebilirim?" },
  { tr: "Yürüyerek gidebilir miyim?", uz: "Piyoda bora olamanmi?", pron: "Yürüyerek gidebilir miyim?" },
  { tr: "Çok uzak mı?", uz: "Juda uzoqmi?", pron: "Chok uzak mi?" },
  { tr: "Sağa dönün.", uz: "O‘ngga buriling.", pron: "Saa donün." },
  { tr: "Sola dönün.", uz: "Chapga buriling.", pron: "Sola donün." },
  { tr: "Düz devam edin.", uz: "To‘g‘ri davom eting.", pron: "Düz devam edin." },
  { tr: "Yardım edebilir misiniz?", uz: "Yordam bera olasizmi?", pron: "Yardim edebilir misiniz?" },
  { tr: "Kayboldum.", uz: "Adashib qoldim.", pron: "Kayboldum." },

  { tr: "Bugün ne yapalım?", uz: "Bugun nima qilamiz?", pron: "Bugün ne yapalim?" },
  { tr: "Sinemaya gidelim.", uz: "Kinoga boraylik.", pron: "Sinemaya gidelim." },
  { tr: "Hangi filmi izleyelim?", uz: "Qaysi filmni ko‘raylik?", pron: "Hangi filmi izleyelim?" },
  { tr: "Bu film çok güzel.", uz: "Bu film juda yaxshi.", pron: "Bu film chok güzel." },
  { tr: "Saat kaçta buluşalım?", uz: "Soat nechada uchrashamiz?", pron: "Saat kachta bulushalim?" },
  { tr: "Saat beşte buluşalım.", uz: "Soat beshda uchrashamiz.", pron: "Saat beshte bulushalim." },
  { tr: "Geç kalacağım.", uz: "Kech qolaman.", pron: "Geç kalajagim." },
  { tr: "Sorun değil.", uz: "Muammo emas.", pron: "Sorun deyil." },
  { tr: "Çok eğlendim.", uz: "Juda maza qildim.", pron: "Chok eğlendim." },
  { tr: "Tekrar görüşelim.", uz: "Yana ko‘rishaylik.", pron: "Tekrar gorüshelim." },

  { tr: "Türkçe öğreniyorum.", uz: "Turk tilini o‘rganyapman.", pron: "Türkche ogreniyorum." },
  { tr: "Ne zamandır öğreniyorsun?", uz: "Qachondan beri o‘rganyapsan?", pron: "Ne zamandir ogreniyorsun?" },
  { tr: "Üç aydır öğreniyorum.", uz: "Uch oydan beri o‘rganyapman.", pron: "Üch aydir ogreniyorum." },
  { tr: "Bu kelime ne demek?", uz: "Bu so‘z nimani anglatadi?", pron: "Bu kelime ne demek?" },
  { tr: "Nasıl telaffuz edilir?", uz: "Qanday talaffuz qilinadi?", pron: "Nasil telaffuz edilir?" },
  { tr: "Tekrar eder misin?", uz: "Qaytarib ayta olasanmi?", pron: "Tekrar eder misin?" },
  { tr: "Daha yavaş konuşur musun?", uz: "Sekinroq gapira olasanmi?", pron: "Daha yavash konushur musun?" },
  { tr: "Anlamadım.", uz: "Tushunmadim.", pron: "Anlamadim." },
  { tr: "Şimdi anladım.", uz: "Endi tushundim.", pron: "Shimdi anladim." },
  { tr: "Her gün pratik yapıyorum.", uz: "Har kuni mashq qilyapman.", pron: "Her gün pratik yapiyorum." },

  { tr: "Telefonun nerede?", uz: "Telefoning qayerda?", pron: "Telefonun nerede?" },
  { tr: "Masada duruyor.", uz: "Stol ustida turibdi.", pron: "Masada duruyor." },
  { tr: "Şarjım bitti.", uz: "Telefonimning quvvati tugadi.", pron: "Sharjim bitti." },
  { tr: "Bana mesaj gönder.", uz: "Menga xabar yubor.", pron: "Bana mesaj gonder." },
  { tr: "Seni arayacağım.", uz: "Senga qo‘ng‘iroq qilaman.", pron: "Seni arayajagim." },
  { tr: "İnternet çalışmıyor.", uz: "Internet ishlamayapti.", pron: "Internet chalishmiyor." },
  { tr: "Fotoğraf çekebilir misin?", uz: "Rasmga ola olasanmi?", pron: "Fotograf chekebilir misin?" },
  { tr: "Fotoğraf çok güzel.", uz: "Rasm juda chiroyli.", pron: "Fotograf chok güzel." },
  { tr: "Bunu paylaşabilir misin?", uz: "Buni ulasha olasanmi?", pron: "Bunu paylashabilir misin?" },
  { tr: "Birazdan cevap vereceğim.", uz: "Birozdan javob beraman.", pron: "Birazdan cevap verejegim." },
   {tr:"Bugün erken uyandım.",uz:"Bugun erta uyg‘ondim.",pron:"Bugün erken uyandim."},
  {tr:"Kahvaltı hazırlıyorum.",uz:"Nonushta tayyorlayapman.",pron:"Kahvalti hazirliyorum."},
  {tr:"Bir bardak su istiyorum.",uz:"Bir stakan suv xohlayman.",pron:"Bir bardak su istiyorum."},
  {tr:"Pencereyi açabilir misin?",uz:"Derazani ochib bera olasanmi?",pron:"Pencereyi achabilir misin?"},
  {tr:"Odamı temizlemem gerekiyor.",uz:"Xonamni tozalashim kerak.",pron:"Odamı temizlemem gerekiyor."},
  {tr:"Anahtarımı bulamıyorum.",uz:"Kalitimni topa olmayapman.",pron:"Anahtarimi bulamiyorum."},
  {tr:"Bugün çok işim var.",uz:"Bugun ishim juda ko‘p.",pron:"Bugün chok ishim var."},
  {tr:"Biraz dinlenmek istiyorum.",uz:"Biroz dam olishni xohlayman.",pron:"Biraz dinlenmek istiyorum."},
  {tr:"Akşam erken yatacağım.",uz:"Kechqurun erta uxlayman.",pron:"Aksham erken yatadjagim."},
  {tr:"Alarmımı kurdum.",uz:"Budilnigimni sozladim.",pron:"Alarmimi kurdum."},
  {tr:"Bugün hava çok sıcak.",uz:"Bugun havo juda issiq.",pron:"Bugün hava chok sicak."},
  {tr:"Şemsiyemi yanıma aldım.",uz:"Soyabonimni yonimga oldim.",pron:"Shemsiyemi yanima aldim."},
  {tr:"Dışarı çıkmak istiyorum.",uz:"Tashqariga chiqishni xohlayman.",pron:"Dishari chikmak istiyorum."},
  {tr:"Eve geç döneceğim.",uz:"Uyga kech qaytaman.",pron:"Eve gech donejegim."},
  {tr:"Kapıyı kapatır mısın?",uz:"Eshikni yopib qo‘yasanmi?",pron:"Kapiyi kapatir misin."},
  {tr:"Işığı aç lütfen.",uz:"Chiroqni yoq, iltimos.",pron:"Ishigi ach lütfen."},
  {tr:"Televizyonu kapattım.",uz:"Televizorni o‘chirdim.",pron:"Televizyonu kapattim."},
  {tr:"Çamaşırlar yıkanıyor.",uz:"Kirlar yuvilyapti.",pron:"Chamashirlar yikaniyor."},
  {tr:"Bugün yemek yapacağım.",uz:"Bugun ovqat tayyorlayman.",pron:"Bugün yemek yapadjagim."},
  {tr:"Her şey hazır.",uz:"Hammasi tayyor.",pron:"Her shey hazir."},

  // 21–40: Oila va do‘stlar
  {tr:"Ablam üniversitede okuyor.",uz:"Opam universitetda o‘qiydi.",pron:"Ablam üniversitede okuyor."},
  {tr:"Kardeşim oyun oynuyor.",uz:"Ukam yoki singlim o‘yin o‘ynayapti.",pron:"Kardesim oyun oynuyor."},
  {tr:"Dedem bize geldi.",uz:"Bobom biznikiga keldi.",pron:"Dedem bize geldi."},
  {tr:"Anneannemi ziyaret edeceğiz.",uz:"Buvimni ko‘rgani boramiz.",pron:"Anneannemi ziyaret edecegiz."},
  {tr:"Ailece yemek yedik.",uz:"Oila bilan ovqatlandik.",pron:"Ailece yemek yedik."},
  {tr:"Bugün misafirimiz var.",uz:"Bugun mehmonimiz bor.",pron:"Bugün misafirimiz var."},
  {tr:"Arkadaşımı bekliyorum.",uz:"Do‘stimni kutyapman.",pron:"Arkadasimi bekliyorum."},
  {tr:"Birlikte yürüyüş yapalım.",uz:"Birga sayr qilaylik.",pron:"Birlikte yürüyüsh yapalim."},
  {tr:"Sana bir şey anlatacağım.",uz:"Senga bir narsani aytaman.",pron:"Sana bir shey anlatadjagim."},
  {tr:"Beni dikkatlice dinle.",uz:"Meni diqqat bilan tingla.",pron:"Beni dikkatlice dinle."},
  {tr:"Bana yardım eder misin?",uz:"Menga yordam berasanmi?",pron:"Bana yardim eder misin."},
  {tr:"Sana katılıyorum.",uz:"Sening fikringga qo‘shilaman.",pron:"Sana katiliyorum."},
  {tr:"Bence harika bir fikir.",uz:"Menimcha, ajoyib fikr.",pron:"Bence harika bir fikir."},
  {tr:"Biraz sohbet edelim.",uz:"Biroz suhbatlashaylik.",pron:"Biraz sohbet edelim."},
  {tr:"Seni görmek güzeldi.",uz:"Seni ko‘rish yoqimli bo‘ldi.",pron:"Seni gormek güzeldi."},
  {tr:"Uzun zamandır görüşmedik.",uz:"Anchadan beri ko‘rishmadik.",pron:"Uzun zamandir gorüshmedik."},
  {tr:"Bana haber ver.",uz:"Menga xabar ber.",pron:"Bana haber ver."},
  {tr:"Sonra konuşuruz.",uz:"Keyin gaplashamiz.",pron:"Sonra konushuruz."},
  {tr:"Kendine iyi bak.",uz:"O‘zingni ehtiyot qil.",pron:"Kendine iyi bak."},
  {tr:"İyi ki varsın.",uz:"Borliging yaxshi.",pron:"Iyi ki varsin."},

  // 41–60: Maktab va ta’lim
  {tr:"Ders saat kaçta başlıyor?",uz:"Dars soat nechada boshlanadi?",pron:"Ders saat kachta bashliyor."},
  {tr:"Defterimi evde unuttum.",uz:"Daftarimni uyda unutdim.",pron:"Defterimi evde unuttum."},
  {tr:"Kalemini ödünç alabilir miyim?",uz:"Ruchkangni vaqtincha olsam bo‘ladimi?",pron:"Kalemini odünch alabilir miyim."},
  {tr:"Sorunun cevabını biliyorum.",uz:"Savolning javobini bilaman.",pron:"Sorunun cevabini biliyorum."},
  {tr:"Bu konuyu anlamadım.",uz:"Bu mavzuni tushunmadim.",pron:"Bu konuyu anlamadim."},
  {tr:"Öğretmenimiz bugün gelmedi.",uz:"O‘qituvchimiz bugun kelmadi.",pron:"Oretmenimiz bugün gelmedi."},
  {tr:"Kütüphaneye gidelim.",uz:"Kutubxonaga boraylik.",pron:"Kütüphaneye gidelim."},
  {tr:"Kitabı bitirdin mi?",uz:"Kitobni tugatdingmi?",pron:"Kitabi bitirdin mi."},
  {tr:"Notlarımı tekrar ediyorum.",uz:"Qaydlarimni takrorlayapman.",pron:"Notlarimi tekrar ediyorum."},
  {tr:"Birlikte ders çalışabiliriz.",uz:"Birga dars tayyorlashimiz mumkin.",pron:"Birlikte ders chalishabiliriz."},
  {tr:"Sınav kolaydı.",uz:"Imtihon oson edi.",pron:"Sinav kolaydi."},
  {tr:"Bu soruyu çözemedim.",uz:"Bu savolni yecha olmadim.",pron:"Bu soruyu chezemedim."},
  {tr:"Bir örnek verebilir misiniz?",uz:"Bir misol keltira olasizmi?",pron:"Bir ornek verebilir misiniz."},
  {tr:"Cevabımı kontrol eder misin?",uz:"Javobimni tekshirib berasanmi?",pron:"Cevabimi kontrol eder misin."},
  {tr:"Yeni kelimeler öğreniyorum.",uz:"Yangi so‘zlarni o‘rganyapman.",pron:"Yeni kelimeler ogreniyorum."},
  {tr:"Her gün kitap okuyorum.",uz:"Har kuni kitob o‘qiyman.",pron:"Her gün kitap okuyorum."},
  {tr:"Yazım hatası yaptım.",uz:"Imlo xatosiga yo‘l qo‘ydim.",pron:"Yazim hatasi yaptim."},
  {tr:"Ödevimi zamanında bitirdim.",uz:"Uy vazifamni vaqtida tugatdim.",pron:"Odevimi zamaninda bitirdim."},
  {tr:"Daha fazla pratik yapmalıyım.",uz:"Ko‘proq mashq qilishim kerak.",pron:"Daha fazla pratik yapmaliyim."},
  {tr:"Öğrenmek için sabırlı olmalısın.",uz:"O‘rganish uchun sabrli bo‘lishing kerak.",pron:"Ogrenmek ichin sabirli olmalisin."},

  // 61–80: Xarid va kiyimlar
  {tr:"Bu ayakkabıyı deneyebilir miyim?",uz:"Bu oyoq kiyimni kiyib ko‘rsam bo‘ladimi?",pron:"Bu ayakkabiyi deneyebilir miyim."},
  {tr:"Bir beden büyüğü var mı?",uz:"Bir o‘lcham kattarog‘i bormi?",pron:"Bir beden büyügü var mi."},
  {tr:"Bu bana çok büyük.",uz:"Bu menga juda katta.",pron:"Bu bana chok büyük."},
  {tr:"Fiyatı biraz düşürebilir misiniz?",uz:"Narxini biroz tushira olasizmi?",pron:"Fiyati biraz düshürebilir misiniz."},
  {tr:"İndirim var mı?",uz:"Chegirma bormi?",pron:"Indirim var mi."},
  {tr:"Nakit ödeyeceğim.",uz:"Naqd pul bilan to‘layman.",pron:"Nakit odeyejegim."},
  {tr:"Fişimi alabilir miyim?",uz:"Chekimni olsam bo‘ladimi?",pron:"Fishimi alabilir miyim."},
  {tr:"Ürünü değiştirmek istiyorum.",uz:"Mahsulotni almashtirmoqchiman.",pron:"Ürünü degishtirmek istiyorum."},
  {tr:"İade kabul ediyor musunuz?",uz:"Qaytarib olishni qabul qilasizmi?",pron:"Iade kabul ediyor musunuz."},
  {tr:"Bu çok kaliteli.",uz:"Bu juda sifatli.",pron:"Bu chok kaliteli."},
  {tr:"Pamuklu bir gömlek arıyorum.",uz:"Paxtali ko‘ylak izlayapman.",pron:"Pamuklu bir gomlek ariyorum."},
  {tr:"Bu rengin adı ne?",uz:"Bu rangning nomi nima?",pron:"Bu rengin adi ne."},
  {tr:"Mavi olanı tercih ediyorum.",uz:"Ko‘k ranglisini afzal ko‘raman.",pron:"Mavi olani tercih ediyorum."},
  {tr:"Kasada bekliyorum.",uz:"Kassada kutyapman.",pron:"Kasada bekliyorum."},
  {tr:"Siparişim hazır mı?",uz:"Buyurtmam tayyormi?",pron:"Siparishim hazir mi."},
  {tr:"Paket yapabilir misiniz?",uz:"Qadoqlab bera olasizmi?",pron:"Paket yapabilir misiniz."},
  {tr:"Başka bir model arıyorum.",uz:"Boshqa model izlayapman.",pron:"Bashka bir model ariyorum."},
  {tr:"Bu ürün tükenmiş.",uz:"Bu mahsulot tugab qolgan.",pron:"Bu ürün tükenmish."},
  {tr:"İnternetten sipariş verdim.",uz:"Internet orqali buyurtma berdim.",pron:"Internetten siparish verdim."},
  {tr:"Kargom ne zaman gelecek?",uz:"Buyurtmam qachon keladi?",pron:"Kargom ne zaman gelejek."},

  // 81–100: Ovqat va ichimlik
  {tr:"Yemeğin kokusu çok güzel.",uz:"Ovqatning hidi juda yoqimli.",pron:"Yemegin kokusu chok güzel."},
  {tr:"Soğan doğramam gerekiyor.",uz:"Piyoz to‘g‘rashim kerak.",pron:"Sogan dogramam gerekiyor."},
  {tr:"Suyu kaynatır mısın?",uz:"Suvni qaynatib berasanmi?",pron:"Suyu kaynatir misin."},
  {tr:"Tuzu biraz fazla olmuş.",uz:"Tuz biroz ko‘p bo‘libdi.",pron:"Tuzu biraz fazla olmush."},
  {tr:"Şeker kullanmıyorum.",uz:"Shakar ishlatmayman.",pron:"Sheker kullanmiyorum."},
  {tr:"Kahvemi şekersiz içiyorum.",uz:"Qahvamni shakarsiz ichaman.",pron:"Kahvemi shekersiz ichiyorum."},
  {tr:"Buzlu su alabilir miyim?",uz:"Muzli suv olsam bo‘ladimi?",pron:"Buzlu su alabilir miyim."},
  {tr:"Meyveleri yıkadın mı?",uz:"Mevalarni yuvdingmi?",pron:"Meyveleri yikadin mi."},
  {tr:"Elma ve muz aldım.",uz:"Olma va banan oldim.",pron:"Elma ve muz aldim."},
  {tr:"Yemek hazır olunca haber ver.",uz:"Ovqat tayyor bo‘lganda xabar ber.",pron:"Yemek hazir olunca haber ver."},
  {tr:"Çok acıktım.",uz:"Juda och qoldim.",pron:"Chok aciktim."},
  {tr:"Biraz daha ekmek alabilir miyim?",uz:"Yana biroz non olsam bo‘ladimi?",pron:"Biraz daha ekmek alabilir miyim."},
  {tr:"Bu tatlıyı ilk kez deniyorum.",uz:"Bu shirinlikni birinchi marta tatib ko‘ryapman.",pron:"Bu tatliyi ilk kez deniyorum."},
  {tr:"Çay çok sıcak.",uz:"Choy juda issiq.",pron:"Chay chok sicak."},
  {tr:"Bardağım boş.",uz:"Stakanim bo‘sh.",pron:"Bardagim bosh."},
  {tr:"Yemekten sonra yürüyelim.",uz:"Ovqatdan keyin sayr qilaylik.",pron:"Yemekten sonra yürüyelim."},
  {tr:"Bu yemeğin içinde ne var?",uz:"Bu ovqatning ichida nima bor?",pron:"Bu yemegin ichinde ne var."},
  {tr:"Vejetaryen yemek var mı?",uz:"Go‘shtsiz taom bormi?",pron:"Vejetaryen yemek var mi."},
  {tr:"Hesabı paylaşalım.",uz:"Hisobni bo‘lib to‘laylik.",pron:"Hesabi paylashalim."},
  {tr:"Ellerinize sağlık.",uz:"Qo‘llaringiz dard ko‘rmasin, rahmat.",pron:"Ellerinize saglik."},

  // 101–120: Sayohat va transport
  {tr:"Tren istasyonuna nasıl giderim?",uz:"Poyezd bekatiga qanday boraman?",pron:"Tren istasyonuna nasil giderim."},
  {tr:"Biletimi internetten aldım.",uz:"Chiptamni internetdan oldim.",pron:"Biletimi internetten aldim."},
  {tr:"Tren saatinde gelecek mi?",uz:"Poyezd vaqtida keladimi?",pron:"Tren saatinde gelejek mi."},
  {tr:"Hangi perondan kalkıyor?",uz:"Qaysi platformadan jo‘naydi?",pron:"Hangi perondan kalkiyor."},
  {tr:"Bir bilet lütfen.",uz:"Bitta chipta, iltimos.",pron:"Bir bilet lütfen."},
  {tr:"Bu koltuk boş mu?",uz:"Bu o‘rindiq bo‘shmi?",pron:"Bu koltuk bosh mu."},
  {tr:"Pencere kenarında oturmak istiyorum.",uz:"Deraza yonida o‘tirmoqchiman.",pron:"Pencere kenarinda oturmak istiyorum."},
  {tr:"Valizimi nereye koyabilirim?",uz:"Chamadonimni qayerga qo‘ysam bo‘ladi?",pron:"Valizimi nereye koyabilirim."},
  {tr:"Havaalanına ne kadar sürer?",uz:"Aeroportgacha qancha vaqt ketadi?",pron:"Havaalanina ne kadar sürer."},
  {tr:"Taksi çağırabilir misiniz?",uz:"Taksi chaqirib bera olasizmi?",pron:"Taksi chagırabilir misiniz."},
  {tr:"Burada inmek istiyorum.",uz:"Shu yerda tushmoqchiman.",pron:"Burada inmek istiyorum."},
  {tr:"Bir sonraki durak neresi?",uz:"Keyingi bekat qayer?",pron:"Bir sonraki durak neresi."},
  {tr:"Yol çok kalabalık.",uz:"Yo‘l juda gavjum.",pron:"Yol chok kalabalik."},
  {tr:"Haritaya bakabilir miyiz?",uz:"Xaritaga qarasak bo‘ladimi?",pron:"Haritaya bakabilir miyiz."},
  {tr:"Otelimiz merkeze yakın.",uz:"Mehmonxonamiz markazga yaqin.",pron:"Otelimiz merkeze yakin."},
  {tr:"Manzara çok etkileyici.",uz:"Manzara juda ta’sirli.",pron:"Manzara chok etkileyici."},
  {tr:"Fotoğraf çekmek istiyorum.",uz:"Rasmga tushirmoqchiman.",pron:"Fotograf chekmek istiyorum."},
  {tr:"Burada ne kadar kalacağız?",uz:"Bu yerda qancha qolamiz?",pron:"Burada ne kadar kaladjagiz."},
  {tr:"Gezimiz çok güzeldi.",uz:"Sayohatimiz juda yaxshi bo‘ldi.",pron:"Gezimiz chok güzeldi."},
  {tr:"Bir daha gelmek istiyorum.",uz:"Yana kelishni xohlayman.",pron:"Bir daha gelmek istiyorum."},

  // 121–140: Vaqt va rejalar
  {tr:"Yarın için planın var mı?",uz:"Ertaga rejang bormi?",pron:"Yarin ichin planin var mi."},
  {tr:"Saatimi kontrol etmeliyim.",uz:"Soatimni tekshirishim kerak.",pron:"Saatimi kontrol etmeliyim."},
  {tr:"Toplantı ertelendi.",uz:"Yig‘ilish kechiktirildi.",pron:"Toplanti ertelendi."},
  {tr:"Biraz geç kalabilirim.",uz:"Biroz kech qolishim mumkin.",pron:"Biraz gech kalabilirim."},
  {tr:"Tam zamanında geldin.",uz:"Aynan vaqtida kelding.",pron:"Tam zamaninda geldin."},
  {tr:"Haftaya görüşürüz.",uz:"Keyingi hafta ko‘rishamiz.",pron:"Haftaya gorüshürüz."},
  {tr:"Ayın kaçındayız?",uz:"Oyning nechanchisidamiz?",pron:"Ayin kachindayiz."},
  {tr:"Bugün on dört Ekim.",uz:"Bugun o‘n to‘rtinchi oktabr.",pron:"Bugün on dort Ekim."},
  {tr:"Takvimime not aldım.",uz:"Taqvimimga yozib qo‘ydim.",pron:"Takvimime not aldim."},
  {tr:"Bunu unutmamalıyım.",uz:"Buni unutmasligim kerak.",pron:"Bunu unutmamaliyim."},
  {tr:"Önceden haber verir misin?",uz:"Oldindan xabar berasanmi?",pron:"Onceden haber verir misin."},
  {tr:"Planlarımız değişti.",uz:"Rejalarimiz o‘zgardi.",pron:"Planlarimiz degishti."},
  {tr:"Boş zamanım var.",uz:"Bo‘sh vaqtim bor.",pron:"Bosh zamanim var."},
  {tr:"Bugün müsait değilim.",uz:"Bugun bo‘sh emasman.",pron:"Bugün müsait degilim."},
  {tr:"Hafta içi çalışıyorum.",uz:"Hafta kunlari ishlayman.",pron:"Hafta ichi chalishiyorum."},
  {tr:"Hafta sonu dinleniyorum.",uz:"Dam olish kunlari dam olaman.",pron:"Hafta sonu dinleniyorum."},
  {tr:"Erken rezervasyon yaptım.",uz:"Oldindan band qildim.",pron:"Erken rezervasyon yaptim."},
  {tr:"Buluşma yerini gönder.",uz:"Uchrashuv joyini yubor.",pron:"Bulushma yerini gonder."},
  {tr:"Birazdan orada olurum.",uz:"Birozdan u yerda bo‘laman.",pron:"Birazdan orada olurum."},
  {tr:"Görüşmemiz iptal oldu.",uz:"Uchrashuvimiz bekor qilindi.",pron:"Gorüshmemiz iptal oldu."},

  // 141–160: Kayfiyat va fikrlar
  {tr:"Bugün kendimi iyi hissediyorum.",uz:"Bugun o‘zimni yaxshi his qilyapman.",pron:"Bugün kendimi iyi hissediyorum."},
  {tr:"Bu haber beni mutlu etti.",uz:"Bu xabar meni xursand qildi.",pron:"Bu haber beni mutlu etti."},
  {tr:"Biraz endişeliyim.",uz:"Biroz xavotirdaman.",pron:"Biraz endisheliyim."},
  {tr:"Her şey yolunda.",uz:"Hammasi joyida.",pron:"Her shey yolunda."},
  {tr:"Merak etme.",uz:"Xavotir olma.",pron:"Merak etme."},
  {tr:"Sana güveniyorum.",uz:"Senga ishonaman.",pron:"Sana güveniyorum."},
  {tr:"Bu beni şaşırttı.",uz:"Bu meni hayratda qoldirdi.",pron:"Bu beni shashirtti."},
  {tr:"Gerçekten mi?",uz:"Rostdanmi?",pron:"Gerchekten mi."},
  {tr:"Buna inanamıyorum.",uz:"Bunga ishonolmayapman.",pron:"Buna inan amiyorum."},
  {tr:"Çok heyecanlıyım.",uz:"Juda hayajondaman.",pron:"Chok heyecanliyim."},
  {tr:"Biraz sabırlı ol.",uz:"Biroz sabrli bo‘l.",pron:"Biraz sabirli ol."},
  {tr:"Bence haklısın.",uz:"Menimcha, sen haqsan.",pron:"Bence haklisin."},
  {tr:"Fikrini anlıyorum.",uz:"Fikringni tushunaman.",pron:"Fikrini anliyorum."},
  {tr:"Farklı düşünüyorum.",uz:"Boshqacha o‘ylayman.",pron:"Farkli düshünüyorum."},
  {tr:"Bunu tekrar düşünmeliyim.",uz:"Buni yana o‘ylab ko‘rishim kerak.",pron:"Bunu tekrar düshünmeliyim."},
  {tr:"Bana göre çok önemli.",uz:"Menimcha, juda muhim.",pron:"Bana gore chok onemli."},
  {tr:"Açık konuşmak gerekirse...",uz:"Ochiq aytganda...",pron:"Achik konushmak gerekirse."},
  {tr:"Seni anlıyorum.",uz:"Seni tushunaman.",pron:"Seni anliyorum."},
  {tr:"Bunun için üzgünüm.",uz:"Buning uchun afsusdaman.",pron:"Bunun ichin üzgünüm."},
  {tr:"Sorun çözüldü.",uz:"Muammo hal qilindi.",pron:"Sorun chezüldü."},

  // 161–180: Texnologiya va internet
  {tr:"Bilgisayarım çok yavaş.",uz:"Kompyuterim juda sekin.",pron:"Bilgisayarim chok yavash."},
  {tr:"Dosyayı kaydettin mi?",uz:"Faylni saqladingmi?",pron:"Dosyayi kaydettin mi."},
  {tr:"Şifremi unuttum.",uz:"Parolimni unutdim.",pron:"Shifremi unuttum."},
  {tr:"Yeni bir hesap açtım.",uz:"Yangi hisob ochdim.",pron:"Yeni bir hesap achtim."},
  {tr:"Bağlantı çalışmıyor.",uz:"Ulanish ishlamayapti.",pron:"Baglanti chalishmiyor."},
  {tr:"Sayfa açılmıyor.",uz:"Sahifa ochilmayapti.",pron:"Sayfa achilmiyor."},
  {tr:"Dosyayı tekrar gönder.",uz:"Faylni qayta yubor.",pron:"Dosyayi tekrar gonder."},
  {tr:"Ekran görüntüsü aldım.",uz:"Ekran rasmini oldim.",pron:"Ekran gorüntüsü aldim."},
  {tr:"Uygulamayı güncelledim.",uz:"Ilovani yangiladim.",pron:"Uygulamayi güncelledim."},
  {tr:"Telefonumun pili azaldı.",uz:"Telefonim quvvati kamaydi.",pron:"Telefonumun pili azaldi."},
  {tr:"Bildirimleri kapattım.",uz:"Bildirishnomalarni o‘chirdim.",pron:"Bildirimleri kapattim."},
  {tr:"Mesajını şimdi gördüm.",uz:"Xabaringni hozir ko‘rdim.",pron:"Mesajini shimdi gordüm."},
  {tr:"Dosyayı klasöre taşı.",uz:"Faylni papkaga ko‘chir.",pron:"Dosyayi klasore tashi."},
  {tr:"Bu bağlantıyı paylaş.",uz:"Bu havolani ulash.",pron:"Bu baglantiyi paylash."},
  {tr:"İnternet hızım düşük.",uz:"Internet tezligim past.",pron:"Internet hizim düshük."},
  {tr:"Videoyu tekrar oynat.",uz:"Videoni qayta qo‘y.",pron:"Videoyu tekrar oynat."},
  {tr:"Kulaklığımı buldum.",uz:"Quloqchinimni topdim.",pron:"Kulakligimi buldum."},
  {tr:"Mikrofonun açık mı?",uz:"Mikrofoning yoqilganmi?",pron:"Mikrofonun achik mi."},
  {tr:"Kamerayı açabilir misin?",uz:"Kamerani yoqa olasanmi?",pron:"Kamerayi achabilir misin."},
  {tr:"Birazdan çevrim içi olacağım.",uz:"Birozdan onlayn bo‘laman.",pron:"Birazdan çevrim ichi oladjagim."},

  // 181–200: Sog‘liq va kundalik yordam
  {tr:"Bugün kendimi yorgun hissediyorum.",uz:"Bugun o‘zimni charchagan his qilyapman.",pron:"Bugün kendimi yorgun hissediyorum."},
  {tr:"Biraz dinlenmelisin.",uz:"Biroz dam olishing kerak.",pron:"Biraz dinlenmelisin."},
  {tr:"Başım ağrıyor.",uz:"Boshim og‘riyapti.",pron:"Bashim agriyor."},
  {tr:"Bir bardak su getirir misin?",uz:"Bir stakan suv olib kelasanmi?",pron:"Bir bardak su getirir misin."},
  {tr:"Eczane nerede?",uz:"Dorixona qayerda?",pron:"Eczane nerede."},
  {tr:"Randevum saat ikide.",uz:"Qabulim soat ikkida.",pron:"Randevum saat ikide."},
  {tr:"Doktoru bekliyorum.",uz:"Shifokorni kutyapman.",pron:"Doktoru bekliyorum."},
  {tr:"Daha iyi hissediyorum.",uz:"O‘zimni yaxshiroq his qilyapman.",pron:"Daha iyi hissediyorum."},
  {tr:"Biraz temiz hava alalım.",uz:"Biroz toza havoga chiqaylik.",pron:"Biraz temiz hava alalim."},
  {tr:"Ellerini yıkamayı unutma.",uz:"Qo‘llaringni yuvishni unutma.",pron:"Ellerini yikamayi unutma."},
  {tr:"Hava almak istiyorum.",uz:"Toza havo olmoqchiman.",pron:"Hava almak istiyorum."},
  {tr:"Yavaş yürüyelim.",uz:"Sekin yuraylik.",pron:"Yavash yürüyelim."},
  {tr:"Biraz su iç.",uz:"Biroz suv ich.",pron:"Biraz su ich."},
  {tr:"Bugün erken dinleneceğim.",uz:"Bugun erta dam olaman.",pron:"Bugün erken dinlenejegim."},
  {tr:"Kendine dikkat et.",uz:"O‘zingni ehtiyot qil.",pron:"Kendine dikkat et."},
  {tr:"Yardım çağırabilir misiniz?",uz:"Yordam chaqira olasizmi?",pron:"Yardim chagırabilir misiniz."},
  {tr:"En yakın hastane nerede?",uz:"Eng yaqin shifoxona qayerda?",pron:"En yakin hastane nerede."},
  {tr:"Biraz oturmak istiyorum.",uz:"Biroz o‘tirmoqchiman.",pron:"Biraz oturmak istiyorum."},
  {tr:"Bugün kendime zaman ayıracağım.",uz:"Bugun o‘zimga vaqt ajrataman.",pron:"Bugün kendime zaman ayiradjagim."},
  {tr:"Umarım yarın daha iyi olurum.",uz:"Umid qilamanki, ertaga yaxshiroq bo‘laman.",pron:"Umarim yarin daha iyi olurum."}
];
const grid = document.getElementById("dialogueGrid");
const search = document.getElementById("searchInput");
const filter = document.getElementById("levelFilter");
const empty = document.getElementById("emptyMessage");

function renderDialogues() {
  const term = search.value.trim().toLocaleLowerCase("tr");
  const level = filter.value;
  const allDialogues = [
  ...dialogues,
  ...YENI_SUHBATLAR.map((item, index) => ({
    id: dialogues.length + index + 1,
    title: item.tr,
    subtitle: "Kundalik turkcha ibora",
    level: "A1",
    lines: [
      {
        who: "Turkcha",
        tr: item.tr,
        pron: item.pron,
        uz: item.uz
      }
    ]
  }))
];

const found = allDialogues.filter(d => {
    const text = (d.title + " " + d.subtitle + " " + d.lines.map(l => `${l.tr} ${l.uz}`).join(" ")).toLocaleLowerCase("tr");
    return (level === "all" || d.level === level) && text.includes(term);
  });
  grid.innerHTML = "";
  empty.hidden = found.length > 0;
  found.forEach(d => {
    const card = document.createElement("article");
    card.className = "dialogue-card";
    const head = document.createElement("div");
    head.className = "card-head";
    head.innerHTML = `<div class="number">${String(d.id).padStart(2,"0")}</div><div class="card-title"><h2>${d.title}</h2><p>${d.subtitle}</p></div><span class="level">${d.level}</span>`;
    card.appendChild(head);
    const lines = document.createElement("div");
    lines.className = "dialogue-lines";
    d.lines.forEach((line, index) => {
      const item = document.createElement("div");
      item.className = "line";
      const top = document.createElement("div");
      top.className = "line-top";
      const words = document.createElement("div");
      words.innerHTML = `<div class="speaker">${line.who}</div><div class="turkish"></div><div class="pronunciation"></div>`;
      words.querySelector(".turkish").textContent = line.tr;
      words.querySelector(".pronunciation").textContent = "Talaffuz: " + line.pron;
      const sound = document.createElement("button");
      sound.className = "sound-button";
      sound.type = "button";
      sound.title = "Turkcha talaffuzni tinglash";
      sound.setAttribute("aria-label", "Talaffuzni tinglash");
      sound.textContent = "🔊";
      sound.addEventListener("click", () => speakTurkish(line.tr));
      top.append(words, sound);
      const translation = document.createElement("p");
      translation.className = "translate";
      translation.textContent = "🇺🇿 " + line.uz;
      translation.hidden = true;
      item.append(top, translation);
      sound.addEventListener("click", () => { /* Speech playback is handled above. */ });
      lines.appendChild(item);
    });
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "translation-toggle";
    toggle.textContent = "Tarjimalarni ko‘rsatish ＋";
    let opened = false;
    toggle.addEventListener("click", () => {
      opened = !opened;
      card.querySelectorAll(".translate").forEach(el => el.hidden = !opened);
      toggle.textContent = opened ? "Tarjimalarni yashirish −" : "Tarjimalarni ko‘rsatish ＋";
    });
    card.append(lines, toggle);
    grid.appendChild(card);
  });
}
function speakTurkish(text) {
  if (!("speechSynthesis" in window)) {
    alert("Bu brauzerda ovozli o‘qish ishlamayapti. Chrome brauzerida qayta urinib ko‘r.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "tr-TR";
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}
search.addEventListener("input", renderDialogues);
filter.addEventListener("change", renderDialogues);
renderDialogues();
