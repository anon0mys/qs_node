const Recipes = require('../../../services/recipes')

const index = (req, res, next) => {
  Recipes.find()
    .then((recipes) => {
      res.json(recipes)
    })
}
