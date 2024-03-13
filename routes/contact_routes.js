const express = require("express");
const {getContacts,createContact,updateContact,deleteContact} = require("../controllers/contact_controller.js")

const router = express.Router()

router.get("/", getContacts)

router.post("/",createContact)

router.put("/:id",updateContact)

router.delete("/:id",deleteContact)


module.exports = router;