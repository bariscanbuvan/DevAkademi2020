const Classified = require("../models/classified");

module.exports = {
    getClassifieds() {
        return Classified.find({}).exec();
    },

    getClassifiedById(classifiedId, fields) {
        return Classified.findOne({ id: classifiedId }).select(fields).exec();
    }
}