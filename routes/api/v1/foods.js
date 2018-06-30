var express = require('express')
var router = express.Router()
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../../knexfile')[environment]
const database = require('knex')(configuration)

/* POST to /foods to create food */
router.post('/', (req, res, next) => {
  database('foods')
    .insert(req.body)
    .returning(['id', 'name', 'calories'])
    .then((food) => {
      res.status(200).json(food)
    })
})

module.exports = router