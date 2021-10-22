const Author = require("../../models/authorModel");
const asynchandler = require("express-async-handler");

const readAllAuthor = asynchandler(async(req,res)=>{
    let data;
    try {
        data = await Author.find();
    } catch (error) {
        data = {error}
    }

    res.send(data)
})

module.exports = readAllAuthor;