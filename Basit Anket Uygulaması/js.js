const sorular = [
    {
        soru: "Tuttuğunuz Takım?",
        secenekler: ["Galatasaray", "Fenerbahçe", "Beşiktaş", "Trabzonspor"]
    },
    {
        soru: "Tatile Gitmek İstediğiniz Şehir?",
        secenekler: ["İzmir", "Aydın", "Antalya", "Muğla"]
    },
    {
        soru: "Kullandığınız Telefonun Markası?",
        secenekler: ["İphone", "Samsung", "Xiaomi", "Oneplus"]
    }
];

let cevaplar = {};

for (let soruObj of sorular) {
    let soru = soruObj.soru;
    let secenekler = soruObj.secenekler;

    let secenekStr = "";
    for (let i = 0; i < secenekler.length; i++) {
        secenekStr += `${i + 1}. ${secenekler[i]}\n`;
    }
    let cevap = prompt(`${soru}\n${secenekStr}\nCevabınızı girin (1-${secenekler.length}):`);

    let index = parseInt(cevap) - 1;
    if (index >= 0 && index < secenekler.length) {
        cevaplar[soru] = secenekler[index];
    } else {
        alert("Geçersiz cevap! Lütfen geçerli bir seçenek girin.");
    }
}
console.log(cevaplar);
