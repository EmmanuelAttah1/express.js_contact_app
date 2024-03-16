const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

const getContacts= asyncHandler(async (req,res)=>{
    const contacts = await Contact.find({user_id:req.user._id})
    res.status(200).json(contacts)
})

const createContact= asyncHandler(async (req,res)=>{
    console.log(req.body)
    const {name,email,phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All Fields are manadatory")
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id:req.user._id
    })

    res.status(201).json(contact)
})

const updateContact= asyncHandler(async (req,res)=>{
    const contact =  await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }

    if(contact.user_id.toString() !== req.user._id){
        res.status(403)
        throw new Error("User dont have permission to update another user contact")
    }

    const updated_contact = await Contact.findByIdAndUpdate(
        contact.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updated_contact)
})

const deleteContact= asyncHandler(async (req,res)=>{
    const contact =  await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }

    if(contact.user_id.toString() !== req.user._id){
        res.status(403)
        throw new Error("User dont have permission to delete another user contact")
    }

    await Contact.deleteOne({ _id: req.params.id })
    res.status(200).json(contact)
})


module.exports = {getContacts,createContact,updateContact,deleteContact};