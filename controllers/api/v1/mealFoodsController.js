const MealFood = require('../../../models/mealFood')
const Food = require('../../../models/meal')
const Meal = require('../../../models/food')

const create = (req, res, next) => {
  MealFood.create(req.params)
    .then((created) => {
      let promises = [
        Food.find(created[0].food_id),
        Meal.find(created[0].meal_id)
      ]
      Promise.all(promises).then((results) => {
        let message = {'message': `Succesfully added ${results[1].name} to ${results[0].name}.`}
        res.status(201).json(message)
      })
    })
}

module.exports = { create }
