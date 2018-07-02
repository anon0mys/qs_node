const database = require('../database')

class Meal {
  static all() {
    return database.select().from('meals')
  }
}

module.exports = Meal
