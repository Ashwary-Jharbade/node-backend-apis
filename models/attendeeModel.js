const mongoose = require("mongoose");

const attendeeSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    maxlength: 50,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: Number,
    unique: true,
    required: true,
  },
},{
  timestamps:true
});

const Attendee = mongoose.model("Attendee", attendeeSchema);

module.exports = Attendee;
