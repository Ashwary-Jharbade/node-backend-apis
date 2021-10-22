const Attendee = require("../../models/attendeeModel");

const asynchandler = require("express-async-handler");

const readAttendee = asynchandler(async (req, res) => {
  Attendee.findOne(
    {
      _id: req.params.id,
    },
    (err, data) => {
      if (err) {
        return res.status(400).json({
          message: "No attendee found",
          err,
        });
      } else {
        return res.status(200).json({
          message: "Attendee found",
          data,
        });
      }
    }
  );
});

module.exports = readAttendee;
