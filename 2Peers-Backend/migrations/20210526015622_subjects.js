exports.up = function (knex) {
  return knex.schema.createTable('subjects', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.raw('DROP TABLE IF EXISTS subjects CASCADE;');
};
