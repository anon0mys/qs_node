const fetch = require('node-fetch')
const database = require('../database')
const baseURL = 'http://api.yummly.com/v1/api/recipes'

class RecipesService {
  static find(id, params) {
    return this.findFood(id).then((food) => {
      return this.fetchRecipes(food, params.max, params.start)
    })
  }

  static findFood(id) {
    return database('foods')
      .where({ id: id })
      .first()
  }

  static fetchRecipes(food, max = 10, start = 1) {
    return fetch(`${baseURL}?q=${food.name}&maxResult=${max}&start=${start}`, {
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
