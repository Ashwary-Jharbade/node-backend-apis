const mongoose = require("mongoose");

const webinarSchema = mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 100,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      maxlength: 200,
      required: true,
      trim: true,
    },
    speaker: {
      type: String,
      maxlength: 50,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      maxlength: 20,
      required: true,
      trim: true,
    },
    start: {
      type: String,
      maxlength: 10,
      required: true,
      trim: true,
    },
    end: {
      type: String,
      maxlength: 10,
      required: true,
      trim: true,
    },
    day: {
      type: Number,
      required: true,
    },
    meridiem: {
      type: String,
      maxlength: 2,
      required: true,
    },
    link: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Webinar = mongoose.model("Webinar", webinarSchema);

module.exports = Webinar;
