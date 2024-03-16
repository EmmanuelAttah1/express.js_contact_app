const express = require("express");
const {registerUser,loginUser,currentUserInformation} = require("../controllers/userController");

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route('/user-info').get(currentUserInformation)

module.exports = router;