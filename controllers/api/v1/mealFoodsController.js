const MealFood = require('../../../models/mealFood')
const Food = require('../../../models/meal')
const Meal = require('../../../models/food')

const create = (req, res, next) => {
  console.log(req.params)
  const promises = [
    Food.find(req.params.id),
    Meal.find(req.params.meal_id)
  ]
  MealFood.create(req.params)
    .then((created) => {
      Promise.all(promises).then((results) => {
        console.log(results)
        let message = {'message': `Succesfully added ${results[1].name} to ${results[0].name}.`}
        res.status(201).json(message)
      })
    })
}

const destroy = (req, res, next) => {
  const promises = [
    Food.find(req.params.id),
    Meal.find(req.params.meal_id)
  ]
  MealFood.destroy(req.params)
    .then((removed) => {
      Promise.all(promises).then((results) => {
        let message = {'message': `Succesfully removed ${results[1].name} from ${results[0].name}.`}
        res.status(201).json(message)
      })
    })
}

module.exports = { create, destroy }
