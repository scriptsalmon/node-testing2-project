const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  getById,
};

function get() {
  return db("archetypes");
}

function getById(id) {
  return db("archetypes").where("archetypes_id", id);
}
