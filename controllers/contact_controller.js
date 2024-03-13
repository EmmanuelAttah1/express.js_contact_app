const getContacts=(req,res)=>{
    res.status(200).json({message:"Hello from controller"})
}

const createContact=(req,res)=>{
    console.log(req.body)
    const {name,email,phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All Fields are manadatory")
    }
    res.send("<h1>Creating Contact </h1>")
}

const updateContact=(req,res)=>{
    res.send("<h1>Updating Contact </h1>")
}

const deleteContact=(req,res)=>{
    res.send("<h1>Deleting Contact </h1>")
}


module.exports = {getContacts,createContact,updateContact,deleteContact};