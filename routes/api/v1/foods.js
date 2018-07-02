const express = require('express')
const router = express.Router()
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../../knexfile')[environment]
const database = require('knex')(configuration)

/* POST to /foods to create food */
router.post('/', (req, res, next) => {
  database('foods')
    .insert(req.body.food)
    .returning(['id', 'name', 'calories'])
    .then((food) => {
      res.status(200).json(food)
    })
})

/* GET to /foods to return a list of foods */
router.get('/', (req, res, next) => {
  database('foods')
    .then((foods) => {
      res.status(200).json(foods)
    })
})

module.exports = router
