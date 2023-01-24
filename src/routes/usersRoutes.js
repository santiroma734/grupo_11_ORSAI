const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadUserImg");
const usersController = require("../controllers/usersController");
const authGuest = require("../middlewares/authGuest");
const authUser = require("../middlewares/authUser");
const registerValidations = require("../middlewares/registerValidations");
const loginValidations = require("../middlewares/loginValidations");

router.get("/login", authUser, usersController.login);
router.post("/login", loginValidations, usersController.loginUser);
router.get("/register", authUser, usersController.register);
router.post(
  "/register",
  upload.single("image"),
  registerValidations,
  usersController.registerUser
);
router.get("/profile", authGuest, usersController.profile);
router.post("/logout", usersController.logoutUser);
module.exports = router;
