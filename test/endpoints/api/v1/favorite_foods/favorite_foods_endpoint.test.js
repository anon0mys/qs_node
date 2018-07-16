describe('GET /api/v1/favorite_foods', () => {
  it('returns number of times each food was eaten', (done) => {
    let promises = []

    promises.push(database('foods').insert({'name': 'Pizza', 'calories': '300'}))
    promises.push(database('foods').insert({'name': 'Sushi', 'calories': '100'}))
    promises.push(database('foods').insert({'name': 'Ramen', 'calories': '200'}))

    promises.push(database('meal_foods').insert({meal_id: '2', food_id: '1'}))
    promises.push(database('meal_foods').insert({meal_id: '2', food_id: '1'}))
    promises.push(database('meal_foods').insert({meal_id: '2', food_id: '1'}))
    promises.push(database('meal_foods').insert({meal_id: '2', food_id: '1'}))
    promises.push(database('meal_foods').insert({meal_id: '4', food_id: '1'}))

    Promise.all(promises).then(() => {
        let expected = { "timesEaten": 2,
                            "foods":
                              [
                                {
                                  "name": "Sushi",
                                  "calories": 100,
                                },
                                {
                                  "name": "Ramen",
                                  "calories": 200,
                                }
                              ]
                        }

        chai.request(app)
        .get('/api/v1/favorite_foods')
        .end((err, res) => {
          eval(pry.it)
          res.should.have.status(200)
          res.body.should.eql(expected)
          done()
        })
    })
  })
})
