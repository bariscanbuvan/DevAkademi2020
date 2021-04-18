const previouslyVisited = require("../helpers/previously-visited");

module.exports = {
    async getRecommendations(req, res) {
        try {
            const data = await previouslyVisited.getRecommendations();
            res.json({ data: data.slice(0, 5), message: null, status: "success" })
        } catch (error) {
            res.json({ data: null, message: [], status: "error" })
        }

    }
}