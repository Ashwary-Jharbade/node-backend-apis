const Attendee = require("../../models/attendeeModel");
const asynchandler = require("express-async-handler");

const readAllAttendee = asynchandler(async (req, res) => {
  let data;
  try {
    data = await Attendee.find();
  } catch (err) {
    data = { error: err };
  }
  res.send(data);
});

module.exports = readAllAttendee;
