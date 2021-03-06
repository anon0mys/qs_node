const Food = require('../../../models/food')

const create = (req, res, next) => {
  Food.create(req.body.food)
    .then((food) => {
      if(food[0]) {
        res.json(food[0])
      } else {
        res.status(400).send()
      }
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
      if(food) {
        res.json(food)
      }
      else {
        res.status(404)
      }
    })
}

const update = (req, res, next) => {
  Food.update(req.params.id, req.body.food)
    .then((food) => {
      if(food.length > 0) {
        res.json(food[0])
      }
      else {
        res.status(404).send()
      }
    })
    .catch((err) => {
      res.status(400).send()
    })
}

const destroy = (req, res, next) => {
  Food.destroy(req.params.id)
    .then(() => {
      res.status(204).send()
    })
}

module.exports = { create, index, show, update, destroy }
