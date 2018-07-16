const RecipesService = require('../../../services/recipes')

const index = (req, res, next) => {
  RecipesService.find(req.params.id, req.query)
    .then((recipes) => {
      var output = { 'recipes': recipes }
      res.json(output)
    })
}

module.exports = { index }
