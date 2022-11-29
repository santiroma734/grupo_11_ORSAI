const express = require("express");
const router = express.Router();
const upload = require('../middlewares/uploadUserImg')
const usersController = require("../controllers/usersController");

router.get("/login", usersController.login);
router.get("/register", usersController.register);
router.get('/profile', usersController.profile)
router.post('/profile', upload.single("imagen"), usersController.registerUser)

module.exports = router;
