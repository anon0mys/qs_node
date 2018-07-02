const Food = require('../../../models/food')

const create = (req, res, next) => {
  Food.create(req.body.food)
    .then((food) => {
      res.json(food)
    })
  }

const index = (req, res, next) => {
  Food.all()
    .then((foods) => {
      res.json(foods)
    })
}

module.exports = { create, index }
