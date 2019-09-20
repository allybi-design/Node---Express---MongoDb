const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

// routes
router.get("/", usersController.loginUser)
router.post("/", usersController.findUser)

router.get("/register", usersController.regUser);
router.post("/register", usersController.saveUser);

router.get('logOut', usersController.logoutUser)

module.exports = router;




