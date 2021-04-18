const mongoose = require("mongoose");

const ClassifiedSchema = mongoose.Schema({
    "id": Number,
    "sellerID": String,
    "sellerType": String,
    "title": String,
    "description": String,
    "categories": Object,
    "price": Number,
    "date": Number,
    "expiryDate": Number,
    "live": Boolean,
    "status": String,
    "adminID": Number
});

module.exports = mongoose.model("Classified", ClassifiedSchema);