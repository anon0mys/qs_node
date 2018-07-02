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

const show = (req, res, next) => {
  Food.find(req.params.id)
    .then((food) => {
      res.json(food)
    })
}

module.exports = { create, index, show }
