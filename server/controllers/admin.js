const adminService = require("../services/admin");

module.exports = {
    async getAdminClassifiedsByAdminId(req, res) {
        try {
            const classifieds = await adminService.getAdminClassifiedsByAdminId(req.params.id);

            if (classifieds.length >= 0) {
                res.json({ data: classifieds, status: "success", message: null }).status(200);
            }
        } catch (error) {
            console.log(error)
            res.json({ data: null, status: "error", message: error }).status(500);
        }
    },
}