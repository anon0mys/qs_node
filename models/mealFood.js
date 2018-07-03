const database = require('../database')

class MealFood {
  static create(params) {
    return database('meal_foods')
      .insert({meal_id: params.meal_id, food_id: params.id})
      .returning(['meal_id', 'food_id'])
  }

  static destroy(params) {
    return database('meal_foods')
      .where({meal_id: params.meal_id, food_id: params.id})
      .del()
  }
}

module.exports = MealFood
