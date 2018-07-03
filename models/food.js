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
    let params = {name: attrs.Name, calories: attrs.Calories}
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
}

module.exports = Food
