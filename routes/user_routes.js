const express = require("express");
const {registerUser,loginUser,currentUserInformation} = require("../controllers/userController");
const validateToken = require("../middleware/auth_middleware");

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route('/user-info').get(validateToken,currentUserInformation)

// router.get('/user-info', validateToken,currentUserInformation)

module.exports = router;