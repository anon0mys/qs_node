const database = require('../database')

class Meal {
  static all() {
    return database.raw(`SELECT meals.*,
                         json_agg(foods.*) FILTER (WHERE foods.id IS NOT NULL) AS foods
                         FROM meals
                         LEFT JOIN meal_foods ON meals.id = meal_foods.meal_id
                         LEFT JOIN foods ON meal_foods.food_id = foods.id
                         GROUP BY meals.id;`)
  }

  static find(id) {
    return database('meals').where({id: id}).first()
  }

  static find_with_foods(id) {
    return database.raw(`SELECT meals.*,
                         json_agg(foods.*) FILTER (WHERE foods.id IS NOT NULL) AS foods
                         FROM meals
                         LEFT JOIN meal_foods ON meals.id = meal_foods.meal_id
                         LEFT JOIN foods ON meal_foods.food_id = foods.id
                         WHERE meals.id = ?
                         GROUP BY meals.id;`, [id])
  }
}

module.exports = Meal
