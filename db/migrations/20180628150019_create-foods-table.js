
exports.up = function(knex, Promise) {
  return knex.schema.createTable('foods', function(t) {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
    t.string('calories').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('foods');
};
