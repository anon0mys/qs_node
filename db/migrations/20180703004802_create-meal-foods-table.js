
exports.up = function(knex, Promise) {
  return knex.schema.createTable('meal_foods', function(t) {
    t.increments('id').primary()
    t.integer('food_id').references('id').inTable('foods')
    t.integer('meal_id').references('id').inTable('meals')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meal_foods');
};
