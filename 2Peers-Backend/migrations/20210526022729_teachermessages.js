exports.up = function (knex) {
  return knex.schema.createTable('teachermessages', (table) => {
    table.increments('id').primary();
    table.integer('teacher');
    table.integer('class');
    table.string('message');
    table.timestamp('date').defaultTo(knex.fn.now());
    table.foreign('class').references('classes.id');
    table.foreign('teacher').references('teachers.id');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.raw('DROP TABLE IF EXISTS teachermessages CASCADE;');
};
