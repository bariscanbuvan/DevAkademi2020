/*
    Ön açıklama
    Aşağıdaki işlemler ilan ekleme/çıkarma yapılmadığını varsayarak gerçekleştirilmiştir.
*/

const Classified = require("../models/classified");
const recommend = require('collaborative-filter')

let visits = [];
const USER_COUNT = 10;

/* 
Öncelikle initialize edilen bütün verileri okuyor ve her kullanıcı için ilanı ziyaret etti (1),
etmedi (0) değerlerini üretiyor. Son kullanıcının bütün ilan görüntüleme değelerini
ise 0 olarak işaretliyor (uygulamada gezinen kullanıcı olduğu için).
Sonuç olarak collaborative filteringte kullanılmak üzere bir matrix oluşturuyor: [[1, 0, 0], [1, 1, 0]...] şeklinde.
Çok yapay olsa da elimde ziyaret verileri olmadığı için böyle bir çözüme gitmek durumunda kaldım.
*/

async function setRandomVisitsForUsers() {
    const classifieds = await Classified.find({}).sort("id");
    for (let i = 0; i < USER_COUNT; i++) {
        visits[i] = []
        classifieds.forEach(x => {
            if (i == USER_COUNT - 1) {
                visits[i].push({ id: x.id, visit: 0 })
            } else {
                visits[i].push({ id: x.id, visit: (Math.random() >= 0.5) ? 1 : 0 })
            }
        })
    }
}

/*
    collaborative-filter kütüphanesini kullanarak visit dizisindeki son kullanıcıya recommendation sunuyor.
    Bunu yapmadan önce object tipinde olan array elemanlarını {id, visit} yeniden mapleyip [[]] haline getiriyor.
    Recommendationları aldıktan sonra ilanları tekrardan okuyup asıl ilanları mapliyor.
    Her iki yerde de sort kullanılma sebebi classifieds[x] şu yapıyı kullanabilmek, yani index değerine göre okuma yapabilmek.
*/
async function getRecommendations() {
    const mappedRecommendations = visits.map(x => x.map(y => y.visit));
    console.log(mappedRecommendations)
    const result = recommend.cFilter(mappedRecommendations, USER_COUNT - 1);

    console.log(result)

    const classifieds = await Classified.find({}).sort("id");

    return result.map(x => classifieds[x]);
}

async function setUserVisit(id) {
    let setVisit = visits[USER_COUNT - 1].find(x => x.id == id);
    setVisit.visit = 1;
    console.log(visits[USER_COUNT - 1])
}


module.exports = {
    setRandomVisitsForUsers,
    getRecommendations,
    setUserVisit
}