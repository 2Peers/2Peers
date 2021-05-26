exports.up = function (knex) {
  return knex.schema.createTable('classmembers', (table) => {
    table.increments('id').primary();
    table.integer('class_id');
    table.integer('student');
    table.integer('selfrating');
    // Don't think we're using the row peerrating but keeping it just in case
    table.integer('peerrating');
    table.foreign('student').references('students.id');
    table.foreign('class_id').references('classes.id');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.raw('DROP TABLE IF EXISTS classmembers CASCADE;');
};
