const classifiedService = require("../services/classified");
const cacheSetter = require("../helpers/cache-setter");
const previouslyVisited = require("../helpers/previously-visited");

module.exports = {
    async getClassifieds(req, res) {
        try {
            const classifieds = await classifiedService.getClassifieds();

            if (classifieds.length >= 0) {
                res.json({ data: classifieds, status: "success", message: null }).status(200);
            }
        } catch (error) {
            console.log(error)
            res.json({ data: null, status: "error", message: error }).status(500);
        }
    },

    async getClassifiedById(req, res) {
        try {
            const classified = await classifiedService.getClassifiedById(req.params.id, req.query.fields);
            cacheSetter(req.originalUrl, classified);
            await previouslyVisited.setUserVisit(req.params.id)
            if (classified) {
                res.json({ data: classified, status: "success", message: null }).status(200);
            }
        } catch (error) {
            console.log(error)
            res.json({ data: null, status: "error", message: error }).status(500);
        }
    }
}