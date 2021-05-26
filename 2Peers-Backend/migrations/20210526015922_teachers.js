exports.up = function (knex) {
  return knex.schema.createTable('teachers', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('email').unique().notNullable();
    table.string('profilePic');
    table.integer('subject');
    table.string('encryptedPassword').notNullable();
    table.boolean('archived');
    table.foreign('subject').references('subjects.id');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.raw('DROP TABLE IF EXISTS teachers CASCADE;');
};
