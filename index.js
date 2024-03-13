const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler.js")
const contactRouter = require("./routes/contact_routes.js");

const app = express()
const port = process.env.PORT;

app.use(express.json())
app.use("/contact",contactRouter)
app.use(errorHandler)

app.listen(port,()=>{
    console.log("we are here");
})