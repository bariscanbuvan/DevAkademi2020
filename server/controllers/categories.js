const categoryService = require("../services/category");

module.exports = {
    async getClassifiedsByCategoryId(req, res) {
        try {
            const classifieds = await categoryService.getClassifiedsByCategoryId(parseInt(req.params.id));

            if (classifieds.length >= 0) {
                res.json({ data: classifieds, status: "success", message: null }).status(200);
            }
        } catch (error) {
            console.log(error)
            res.json({ data: null, status: "error", message: error }).status(500);
        }
    },

    async getCategories(req, res) {
        try {
            res.json({ data: [{ id: 3555, title: "Emlak" }, { id: 3554, title: "Vasıta" }, { id: 44, title: "İkinci El ve Sıfır Alışveriş" }], status: "success", message: null }).status(200);
        } catch (error) {
            console.log(error)
            res.json({ data: null, status: "error", message: error }).status(500);
        }
    }
}