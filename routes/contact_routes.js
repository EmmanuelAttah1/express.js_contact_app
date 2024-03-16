const express = require("express");
const {getContacts,createContact,updateContact,deleteContact} = require("../controllers/contact_controller.js");
const validateToken = require("../middleware/auth_middleware.js");

const router = express.Router()


router.use(validateToken)
router.route("/").get(getContacts).post(createContact)
router.route("/:id").put(updateContact).delete(deleteContact)


module.exports = router;