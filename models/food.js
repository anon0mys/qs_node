const database = require('../database')

class Food {
  static create(food_attrs) {
    return database('foods')
            .insert(food_attrs)
            .returning(['id', 'name', 'calories'])
  }

  static all() {
    return database.select().from('foods')
  }
}

module.exports = Food
