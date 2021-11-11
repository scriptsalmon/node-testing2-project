const express = require("express");

const server = express();
const archetypesRouter = require('./archetypes/archetypes-router');

server.use(express.json());
server.use('/api/archetypes', archetypesRouter);

server.get("/", (req, res, next) => {
  res.json("the server is up!");
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = server;
