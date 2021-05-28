exports.up = function (knex) {
  return knex.schema.createTable('students', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('email').unique().notNullable();
    table.string('profilepic');
    table.string('encryptedpassword').notNullable();
    table.boolean('archived');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.raw('DROP TABLE IF EXISTS students CASCADE;');
};
