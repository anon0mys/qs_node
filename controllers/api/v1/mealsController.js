const Meal = require('../../../models/meal')

const index = (req, res, next) => {
  Meal.all()
    .then((meals) => {
      res.json(meals)
    })
}

const show = (req, res, next) => {
  Meal.find(req.params.meal_id)
    .then((meal) => {
      res.json(meal)
    })
}

module.exports = { index, show }
