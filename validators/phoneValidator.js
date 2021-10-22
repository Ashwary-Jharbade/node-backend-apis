const Attendee = require("../models/attendeeModel");

const checkPhonePattern = (phone) => {
  const pattern = /^[0-9]{10}$/i;
  return pattern.test(phone);
};

const validatePhone = (phone) => {
  if (checkPhonePattern(phone)) {
    return Attendee.findOne({
      phone: phone,
    }).then((result) => {
      return result == null;
    });
  }
  return false;
};
