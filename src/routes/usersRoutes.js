const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadUserImg");
const usersController = require("../controllers/usersController");

router.get("/login", usersController.login);
router.post("/login", usersController.loginUser);
router.get("/register", usersController.register);
router.post("/register", upload.single("imagen"), usersController.registerUser);
router.get("/profile", usersController.profile);

module.exports = router;
