const express = require("express");
const contactRouter = require("./routes/contact_routes.js");

const app = express()
const port = 5000;


app.use("/contact",contactRouter)


app.listen(port,()=>{
    console.log("we are here");
})