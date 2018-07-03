
exports.up = function(knex, Promise) {
  return knex.schema.createTable('meal_foods', function(t) {
    t.increments().primary()
    t.integer('food_id').unsigned().references('id').inTable('foods')
    t.integer('meal_id').unsigned().references('id').inTable('meals')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meal_foods');
};
