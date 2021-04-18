const redis = require("redis");
const client = redis.createClient(6379, "redis");
//const client = redis.createClient();

/*
    İlanlar 24 saatliğine cachelendi. Belki de ömrü boyunca sadece 1 kere görüntülenecek ilanı sonsuza kadar cachelemenin alemi yok :>
*/
module.exports = (key, value) => {
    client.setex(key, 86400, JSON.stringify(value));
}