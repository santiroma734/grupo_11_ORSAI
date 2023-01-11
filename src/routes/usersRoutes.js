const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadUserImg");
const usersController = require("../controllers/usersController");
const authGuest = require("../middlewares/authGuest");
const authUser = require("../middlewares/authUser");

router.get("/login", authUser, usersController.login);
router.post("/login", usersController.loginUser);
router.get("/register", authUser, usersController.register);
router.post("/register", upload.single("image"), usersController.registerUser);
router.get("/profile", authGuest, usersController.profile);

module.exports = router;
