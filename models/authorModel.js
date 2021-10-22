const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    books:[]
})

const Author = mongoose.model('Author',authorSchema);

module.exports = Author;