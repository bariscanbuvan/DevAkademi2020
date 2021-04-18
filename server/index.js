require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const classified = require("./routes/classified");
const recommendation = require("./routes/recommendation");
const admin = require("./routes/admin");
const categories = require("./routes/categories");

const app = express();

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true }, async () => {

    // Verilen bulk datanın bir kısmı (initialization hızlı olsun diye) mongoya ekleniyor .
    await require("./helpers/init-db")();

    // Collaborative filtering için rastgele kullanıcı ilan görüntüleme matrixi oluşturuluyor.
    const pre = require("./helpers/previously-visited")
    await pre.setRandomVisitsForUsers()
})

app.use(morgan("tiny"))
app.use(cors());
app.use(express.json())

// Endpointler
app.use("/api/classifieds", classified);
app.use("/api/recommendations", recommendation);
app.use("/api/admins", admin);
app.use("/api/categories", categories);

app.get("/", async (req, res) => {
    res.json("ok")
})

app.listen(PORT);

