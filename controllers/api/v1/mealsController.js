const Meal = require('../../../models/meal')

const index = (req, res, next) => {
  Meal.all()
    .then((meals) => {
      res.json(meals.rows)
    })
}

const show = (req, res, next) => {
  Meal.find_with_foods(req.params.meal_id)
    .then((meal) => {
      res.json(meal.rows[0])
    })
}

module.exports = { index, show }
