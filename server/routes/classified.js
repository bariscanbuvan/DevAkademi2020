const router = require("express").Router();
const ClassifiedController = require("../controllers/classified");
const cacheMiddleware = require("../middlewares/cache");

router.get("/", ClassifiedController.getClassifieds);
router.get("/:id", cacheMiddleware, ClassifiedController.getClassifiedById);

module.exports = router;