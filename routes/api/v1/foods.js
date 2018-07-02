const express = require('express')
const router = express.Router()
const foodsController = require('../../../controllers/api/v1/foodsController')

router.post('/', foodsController.create)
router.get('/', foodsController.index)
router.get('/:id', foodsController.show)

module.exports = router
