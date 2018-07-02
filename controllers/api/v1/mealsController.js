const Meal = require('../../../models/meal')

const index = (req, res, next) => {
  Meal.all()
    .then((meals) => {
      res.json(meals)
    })
}

module.exports = { index }
