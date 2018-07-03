const express = require('express')
const router = express.Router()
const mealsController = require('../../../controllers/api/v1/mealsController')
const mealFoodsController = require('../../../controllers/api/v1/mealFoodsController')

router.get('/', mealsController.index)
router.post('/:meal_id/foods/:id', mealFoodsController.create)
router.get('/:meal_id/foods', mealsController.show)
router.delete('/:meal_id/foods/:id', mealFoodsController.destroy)

module.exports = router
