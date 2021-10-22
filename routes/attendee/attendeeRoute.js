const express = require("express");

const route = express.Router();

const createAttendee = require("../../controller/attendee/createAttendee");
const readAttendee = require("../../controller/attendee/readAttendee");
const readAllAttendee = require("../../controller/attendee/readAllAttendee");
const updateAttendee = require("../../controller/attendee/updateAttendee");
const deleteAttendee = require("../../controller/attendee/deleteAttendee");

route.post("/create", createAttendee);
route.get("/attendee/:id", readAttendee);
route.get("/allattendee", readAllAttendee);
route.put("/update/:id", updateAttendee);
route.delete("/delete/:id", deleteAttendee);

module.exports = route;
