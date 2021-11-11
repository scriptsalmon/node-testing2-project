const express = require("express");

const server = express();
server.use(express.json());

server.get("/", (req, res, next) => {
  res.json("the server is up!");
});

module.exports = server;
