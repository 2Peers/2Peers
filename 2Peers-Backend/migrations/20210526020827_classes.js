exports.up = function (knex) {
  return knex.schema.createTable('classes', (table) => {
    table.increments('id').primary();
    table.string('classcode');
    table.integer('teacher_id');
    table.foreign('teacher_id').references('teachers.id');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.raw('DROP TABLE IF EXISTS classes CASCADE;');
};
