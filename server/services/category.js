const Classified = require("../models/classified");

module.exports = {
    getClassifiedsByCategoryId(categoryId) {
        return Classified.find({ "categories.category0.id": categoryId }).exec();
    },
}