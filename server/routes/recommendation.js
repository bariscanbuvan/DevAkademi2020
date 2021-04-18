const router = require("express").Router();
const RecommendationController = require("../controllers/recommendation");

router.get("/", RecommendationController.getRecommendations);

module.exports = router;