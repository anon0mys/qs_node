const express = require('express')
const router = express.Router()
const Food = require('../../../models/food.js')

/* POST to /foods to create food */
router.post('/', (req, res, next) => {
  Food.create(req.body.food)
    .then((food) => {
      res.status(200).json(food)
    })
})

/* GET to /foods to return a list of foods */
router.get('/', (req, res, next) => {
  Food.all()
    .then((foods) => {
      res.status(200).json(foods)
    })
})

module.exports = router
