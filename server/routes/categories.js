const router = require("express").Router();
const CategoryController = require("../controllers/categories");

router.get("/:id/classifieds", CategoryController.getClassifiedsByCategoryId);
router.get("/", CategoryController.getCategories);

module.exports = router;