const database = require('../database')

class MealFood {
  static create(params) {
    return database('meal_foods')
      .insert({meal_id: '1', food_id: '1'})
      .returning(['meal_id', 'food_id'])
  }
}

module.exports = MealFood
