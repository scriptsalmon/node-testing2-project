exports.seed = function(knex) {
  return knex('archetypes').insert([
    { archetype_name: "King", archetype_description: "The King is centered, protective, provides order."},
    { archetype_name: "Warrior", archetype_description: "The Warrior is aggressive, mindful, decisive." },
    { archetype_name: "Magician", archetype_description: "The Magician is intellectual, curious, reflective." },
    { archetype_name: "Lover", archetype_description: "The Lover is emotional, sensual, spiritual." },
  ])
};
