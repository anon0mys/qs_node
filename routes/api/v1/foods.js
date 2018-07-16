const express = require('express')
const router = express.Router()
const foodsController = require('../../../controllers/api/v1/foodsController')
const recipesController = require('../../../controllers/api/v1/recipesController')

router.post('/', foodsController.create)
router.get('/', foodsController.index)
router.get('/:id', foodsController.show)
router.put('/:id', foodsController.update)
router.delete('/:id', foodsController.destroy)
router.get('/:id/recipes', recipesController.index)

module.exports = router
