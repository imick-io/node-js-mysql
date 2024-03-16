const express = require("express");

const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/", userController.all);
router.get("/:id", userController.findById);

module.exports = router;
