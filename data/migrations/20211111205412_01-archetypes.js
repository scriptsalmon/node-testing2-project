exports.up = function(knex) {
  return knex.schema.createTable('archetypes', (table) => {
    table.increments('archetype_id')
    table.string('archetype_name').notNullable().unique()
    table.string('archetype_description').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('archetypes')
};
