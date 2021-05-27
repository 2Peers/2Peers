exports.up = function (knex) {
  return knex.schema.createTable('teacherratings', (table) => {
    table.increments('id').primary();
    table.integer('raterid');
    table.integer('messageid');
    table.integer('rating');
    table.foreign('raterid').references('teachers.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.foreign('messageid').references('studentmessages.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.raw('DROP TABLE IF EXISTS teacherratings CASCADE;');
};
