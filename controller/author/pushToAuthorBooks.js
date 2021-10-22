const Author = require("../../models/authorModel");
const asynchandler = require("express-async-handler");

const pushToAuthorBooks = asynchandler(async (req, res, name) => {
  Author.findByIdAndUpdate(
    {
      _id: req.body.id,
    },
    {
      $push: { books: name },
    },
    (err, updated) => {
      if (err) {
        return err;
      } else {
        return updated;
      }
    }
  );
});

module.exports = pushToAuthorBooks;
