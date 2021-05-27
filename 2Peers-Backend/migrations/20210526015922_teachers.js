exports.up = function (knex) {
  return knex.schema.createTable('teachers', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('email').unique().notNullable();
    table.string('prolfilepic');
    table.integer('subject');
    table.string('encryptedpassword').notNullable();
    table.boolean('archived');
    table.foreign('subject').references('subjects.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.raw('DROP TABLE IF EXISTS teachers CASCADE;');
};
