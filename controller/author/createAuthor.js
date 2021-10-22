const Author = require("../../models/authorModel");

const createAuthor = (req, res) => {
  let author = new Author({
    name: req.body.name,
    book: [],
  });

  author.save((err, saved) => {
    if (err) {
      return res.status(400).json({
        message: "Author deleted",
        err,
      });
    } else {
      return res.status(200).json({
        message: "Author added",
        saved,
      });
    }
  });
};

module.exports = createAuthor;
