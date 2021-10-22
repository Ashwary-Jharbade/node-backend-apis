const express = require("express");

const route = express.Router();

const createAuthor = require("../../controller/author/createAuthor");
const readAllAuthor = require("../../controller/author/readAllAuthor");
const updateAuthor = require("../../controller/author/updateAuthor");

route.post("/create", createAuthor);
route.get("/allauthor", readAllAuthor);
route.put("/update/:id",updateAuthor);

module.exports = route;
