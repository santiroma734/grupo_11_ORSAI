const express = require("express");
const registerController = require("../controllers/registerController");

const router = express.Router();

router.get("/", registerController.view);

module.exports = router;
