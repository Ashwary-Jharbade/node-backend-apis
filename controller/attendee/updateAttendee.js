const Attendee = require("../../models/attendeeModel");
const asynchandler = require("express-async-handler");

const updateAttendee = asynchandler(async (req, res) => {
  Attendee.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: req.body,
    },
    {
      new: true,
    },
    (err, data) => {
      if (err) {
        return res.status(400).json({
          message: "Data not updated",
          err,
        });
      } else {
        return res.status(200).json({
          message: "Attende details updated",
          data,
        });
      }
    }
  );
});

module.exports = updateAttendee;
