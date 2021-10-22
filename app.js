const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require('path')
const fs = require('fs');
const FileReader = require("filereader");

const app = express();
const attendeeRoutes = require("./routes/attendee/attendeeRoute");
const authorRoutes = require("./routes/author/authorRoute");
const bookRoutes = require("./routes/book/bookRoute");
const sendCustomEmail = require("./utility/templateEmail/templateEmail")

app.use(express.static(path.join(__dirname, './public/static/images/')))
app.use(fileUpload());
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/register", attendeeRoutes);

app.use("/author", authorRoutes);

app.use("/book", bookRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.post("/upload", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  sampleFile = req.files.sampleFile;
 
  sampleFile.name = Date.now() + "_" + sampleFile.name;
  uploadPath = __dirname + "/public/static/images/" + sampleFile.name;
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    return res.status(200).json({
      message: "File Uploaded",
    });
  });
});

app.post("/emailtemplate", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  
  sampleFile = req.files.sampleFile;
  sampleFile.name = Date.now() + "_" + sampleFile.name;
  uploadPath = __dirname + "/public/templates/" + sampleFile.name;
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    return res.status(200).json({
      message: "File Uploaded",
    });
  });
});

app.post("/emailattachment", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  
  sampleFile = req.files.sampleFile;
  sampleFile.name = Date.now() + "_" + sampleFile.name;
  uploadPath = __dirname + "/public/attachments/" + sampleFile.name;
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    return res.status(200).json({
      message: "File Uploaded",
    });
  });
});

app.get("/sendCustomEmail", function (req,res) {
  const dir = __dirname;
  sendCustomEmail(dir);
  return res.send('Email Send');  
});

module.exports = app;
