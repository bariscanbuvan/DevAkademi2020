const Classified = require("../models/classified");

module.exports = {
    getAdminClassifiedsByAdminId(adminId) {
        return Classified.find({ adminID: adminId }).exec();
    },
}