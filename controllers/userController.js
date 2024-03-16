const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

const registerUser= asyncHandler(async (req,res)=>{
    const {username, email, password} = req.body

    if(!username || !email || !password){
        res.status(400)
        throw new Error("All Fields required")
    }

    const userAvailable = await User.findOne({email:email})

    if(userAvailable){
        res.status(400)
        throw new Error("User with this email already exist")
    }

    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password,salt)

    new_user = await User.create({
        username,
        email,
        password:hashed_password
    })

    if(new_user){
        res.status(201).json({
            id:new_user.id,
            email:new_user.email
        })
    }else{
        res.status(400)
        throw new Error("User data is not valid")
    }
})

const loginUser= asyncHandler(async (req,res)=>{
    const {username, password} = req.body

    if(!username || !password){
        res.status(401)
        throw new Error("Invalid Username or password")
    }

    const user = await User.findOne({username:username})
    const is_valid = await bcrypt.compare(password, user.password)

    if(is_valid){
        res.status(200).json({message:`Welcome ${user.username}`})
    }else{
        res.status(401).json({message:"Invalid username or password"})
    }
})

const currentUserInformation= asyncHandler(async (req,res)=>{
    res.status(201).json({messgae:"Current user information"})
})

module.exports = {registerUser,loginUser,currentUserInformation};