const redis = require("redis");
const client = redis.createClient(6379, "redis");
//const client = redis.createClient();
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

/*
    /api/classifieds/:id endpointi yazılmış cache mekanizmasıdır.
    Eğer sayfa daha önceden ziyaret edilmişse ilgili ilan verisini
    Redis cache ile sunar.
*/

module.exports = async (req, res, next) => {
    const data = await getAsync(req.originalUrl);
    if (data) {
        console.log("benden")
        return res.json({ data: JSON.parse(data), status: "success", message: null }).status(200);
    } else {
        next();
    }
}