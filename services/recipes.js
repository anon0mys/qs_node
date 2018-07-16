const fetch = require('node-fetch')
const database = require('../database')
const baseURL = 'http://api.yummly.com/v1/api/recipes'

class RecipesService {
  static find(id) {
    return this.findFood(id).then((food) => {
      return this.fetchRecipes(food)
    })
  }

  static findFood(id) {
    return database('foods')
      .where({ id: id })
      .first()
  }

  static fetchRecipes(food) {
    return fetch(`${baseURL}?q=${food.name}`, {
      headers: {'Content-Type': 'application/json',
                'X-Yummly-App-ID': process.env.YUMMLYID,
                'X-Yummly-App-Key': process.env.YUMMLYKEY}
    })
    .then((response) => {
      return response.json()
    })
    .then((recipes) => {
      return recipes.matches.map((recipe) => {
        return { name: recipe.recipeName, url: `http://www.yummly.com/recipe/${recipe.id}` }
      })
    })
  }
}

module.exports = RecipesService
