const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  getById,
  add
};

function get() {
  return db("archetypes");
}

function getById(id) {
  return db("archetypes").where("archetype_id", id);
}

async function add(type) {
    const [id] = await db('archetypes').insert(type)
    return getById(id);
}