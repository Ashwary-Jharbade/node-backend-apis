const express = require("express");

const route = express.Router();

const createBook = require("../../controller/book/createBook");
const updateBook = require("../../controller/book/updateBook");
const readAllBook = require("../../controller/book/readAllBook");

route.post("/create", createBook);
route.put("/update",updateBook);
route.get("/allbook",readAllBook);

module.exports = route;
