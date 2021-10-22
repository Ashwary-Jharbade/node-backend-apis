const Attendee = require("../models/attendeeModel");

const checkEmailPattern = (email) => {
  const pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/i;
  return pattern.test(email);
};

const validateEmail = (email) => {
  if (checkEmailPattern(email)) {
    return Attendee.findOne({
      email: email,
    }).then((result) => {
      return result == null;
    });
  }
  return false;
};

module.exports = validateEmail;
