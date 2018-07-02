const express = require('express')
const router = express.Router()
const foodsController = require('../../../controllers/api/v1/foodsController')


/* POST to /foods to create food */
router.post('/', foodsController.create)

/* GET to /foods to return a list of foods */
router.get('/', foodsController.index)

module.exports = router
