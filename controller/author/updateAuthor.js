const Author = require("../../models/authorModel");
const asynchandler = require("express-async-handler");

const updateAuthor = asynchandler(async(req,res)=>{
    Author.findByIdAndUpdate({
        _id : req.params.id
    },{
        $set : req.body
    },(err,updated)=>{
        if(err) {
            return res.status(400).json({
                message:"Auhtor object not updated",
                err
            })
        } else {
            return res.status(200).json({
                message:"Author object updated",
                updated
            })
        }
    })
})

module.exports = updateAuthor