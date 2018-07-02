const express = require('express')
const router = express.Router()
const mealsController = require('../../../controllers/api/v1/mealsController')

router.get('/', mealsController.index)

module.exports = router
