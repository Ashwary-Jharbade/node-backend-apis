const Book = require("../../models/bookModel");
const asynchandler = require("express-async-handler");

const readAllBook = asynchandler(async(req,res)=>{
    let data;
    try {
        data = await Book.find()
    } catch (error) {
        data = {error}
    }

    res.send(data)
})

module.exports = readAllBook;