const mongooose = require("mongoose");

const bookSchema = mongooose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    author: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    pages: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongooose.model('Book',bookSchema)
module.exports = Book
