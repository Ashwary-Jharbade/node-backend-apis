const Attendee = require("../../models/attendeeModel");
const asynchandler = require("express-async-handler");

const deleteAttendee = asynchandler(async(req,res)=>{
    Attendee.deleteOne({
        _id : req.params.id
    },(err,success)=>{
        if (err) {
            return res.status(400).json({
                message:"Attendee not deleted",
                err,
            })
        } else {
            return res.status(200).json({
                message:"Attendee deleted",
                success,
            })
        }
    })
});

module.exports = deleteAttendee;
