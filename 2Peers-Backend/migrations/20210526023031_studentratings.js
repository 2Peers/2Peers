exports.up = function (knex) {
  return knex.schema.createTable('studentratings', (table) => {
    table.increments('id').primary();
    table.integer('raterid');
    table.integer('messageid');
    table.integer('rating');
    table.foreign('raterid').references('students.id');
    table.foreign('messageid').references('studentmessages.id');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.raw('DROP TABLE IF EXISTS studentratings CASCADE;');
};
