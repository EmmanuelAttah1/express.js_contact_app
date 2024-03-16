const express = require("express");
const dotenv = require("dotenv").config();


const errorHandler = require("./middleware/errorHandler.js")
const contactRouter = require("./routes/contact_routes.js");
const userRouter = require("./routes/user_routes.js")
const connectDB = require("./config/dbConnection.js");

const app = express()
const port = process.env.PORT;

connectDB()

app.use(express.json())
app.use("/contact",contactRouter)
app.use("/users",userRouter)
app.use(errorHandler)

app.listen(port,()=>{
    console.log("we are here");
})