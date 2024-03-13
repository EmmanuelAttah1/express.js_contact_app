const getContacts=(req,res)=>{
    res.send("<h1>Hello from Controller </h1>")
}

const createContact=(req,res)=>{
    res.send("<h1>Creating Contact </h1>")
}

const updateContact=(req,res)=>{
    res.send("<h1>Updating Contact </h1>")
}

const deleteContact=(req,res)=>{
    res.send("<h1>Deleting Contact </h1>")
}


module.exports = {getContacts,createContact,updateContact,deleteContact};