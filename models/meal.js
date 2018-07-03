const database = require('../database')

class Meal {
  static all() {
    return database.select().from('meals')
  }

  static find(id) {
    return database('meals').where({ id: id }).first()
  }
}

module.exports = Meal
