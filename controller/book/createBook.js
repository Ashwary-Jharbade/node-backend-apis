const Book = require("../../models/bookModel");
const pushToAuthorBooks = require("../../controller/author/pushToAuthorBooks");

const createBook = (req, res) => {
  let book = new Book({
    name: req.body.name,
    author: req.body.author,
    pages: req.body.pages,
  });

  book.save((err, saved) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        message: "Book obj not saved",
        err,
      });
    } else {
      try {
        pushToAuthorBooks(req, res, book.name)
      } catch (error) {
        console.log(error);
      }

      return res.status(200).json({
        message: "Book obj created",
        saved,
      });
    }
  });
};

module.exports = createBook;
