const router = require("express").Router();
const AdminController = require("../controllers/admin");

router.get("/:id/classifieds", AdminController.getAdminClassifiedsByAdminId);

module.exports = router;