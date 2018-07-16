const database = require('../database')

class Food {
  static create(params) {
    return database('foods')
            .insert(params)
            .returning(['id', 'name', 'calories'])
  }

  static all() {
    return database.select().from('foods')
  }

  static find(id) {
    return database('foods').where({ id: id }).first()
  }

  static update(id, attrs) {
    let params = {name: attrs.name, calories: attrs.calories}
    return database('foods')
      .where({id: id})
      .update(params)
      .returning(['id', 'name', 'calories'])
  }

  static destroy(id) {
    return database('foods')
      .where({id: id})
      .del()
  }

  static favorites() {
    return database.raw(`SELECT timesEaten, json_agg(json_build_object('name', name, 'calories', calories, 'mealsWhenEaten', meals)) AS foods
                         FROM
                         (
                           SELECT foods.name, foods.calories, COUNT(foods.id) AS timesEaten, array_agg(DISTINCT meals.name) AS meals
                           FROM foods
                           LEFT JOIN meal_foods ON foods.id = meal_foods.food_id
                           LEFT JOIN meals ON meals.id = meal_foods.meal_id
                           GROUP BY foods.id
                           ORDER BY timesEaten DESC
                         ) joinsQuery
                         GROUP BY timesEaten
                         ORDER BY timesEaten DESC`)
  }
}

module.exports = Food
