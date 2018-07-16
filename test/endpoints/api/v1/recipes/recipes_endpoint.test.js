
describe('GET /api/v1/foods/:id/recipes', () => {
  it('returns recipes associated with a food', (done) => {
    database('foods')
      .insert({'name': 'Pizza', 'calories': '100'})
      .then(() => {
        chai.request(app)
          .get('/api/v1/foods/1/recipes')
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.eql(recipes)
            done()
          })
      })
  })
})

const recipes = {
                  'recipes': [
                    {"name": "Our Favorite Barbecue Chicken Pizza",
                     "url": "http://www.yummly.com/recipe/Our-Favorite-Barbecue-Chicken-Pizza-2436722"},
                    {"name": "Gorgonzola Pizza with Jam Drizzle",
                     "url": "http://www.yummly.com/recipe/Gorgonzola-Pizza-with-Jam-Drizzle-2349183"},
                    {"name": "Bbq - Chicken Pizza",
                     "url": "http://www.yummly.com/recipe/Bbq---Chicken-Pizza-2424863"},
                    {"name": "Pizza",
                     "url": "http://www.yummly.com/recipe/Pizza-1106814"},
                    {"name": "Fruit Pizza",
                     "url": "http://www.yummly.com/recipe/Fruit-Pizza-2430921"},
                    {"name": "BBQ Chicken Pizza",
                     "url": "http://www.yummly.com/recipe/BBQ-Chicken-Pizza-2371902"},
                    {"name": "Naan Pizza",
                     "url": "http://www.yummly.com/recipe/Naan-Pizza-1601315"},
                    {"name": "Pull Apart Pizza",
                     "url": "http://www.yummly.com/recipe/Pull-Apart-Pizza-1636322"},
                    {"name": "Classic Margherita PIzza",
                     "url": "http://www.yummly.com/recipe/Classic-Margherita-PIzza-2319496"},
                    {"name": "Fig Pizza",
                     "url": "http://www.yummly.com/recipe/Fig-Pizza-1896624"}
                  ]
                }
