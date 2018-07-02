
exports.up = function(knex, Promise) {
  return knex.schema.createTable('meals', function(t) {
    t.increments('id').unsigned().primary();
    t.string('name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meals');
};
