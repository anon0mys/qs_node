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

  static find(id) {
    return database('foods').where({ id: id }).first()
  }
}

module.exports = Food
