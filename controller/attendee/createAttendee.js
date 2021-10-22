const Attendee = require("../../models/attendeeModel");
const option = require("../../utility/email/textEmail");
const email = require("../../utility/email/sendEmail");

const addAttendee = (req, res) => {
  let attendee = new Attendee({
    name: req.body.name,
    title: req.body.title,
    email: req.body.email,
    phone: req.body.phone,
  });

  attendee.save((err, data) => {
    if (err) {
      return res.status(400).json({
        message: "Failed to register attendee",
        err,
      });
    } else {
      let receiver = "<email here>";
      let sub = "Node App";
      let content = "Testing Node App With Template";
      try {
        email(option(receiver, sub, content));
      } catch (error) {
        console.log(error);
      }
      return res.status(200).json({
        message: "Attendee Registered",
        data,
      });
    }
  });
};

module.exports = addAttendee;
