
describe('GET /api/v1/meals/:meal_id/foods', () => {
  it('returns a meal and its associated foods', (done) => {
    database('foods')
      .insert({'name': 'Pizza', 'calories': '100'})
      .then(() => {
        database('meal_foods')
          .insert({meal_id: '1', food_id: '1'})
      })
      .then(() => {
        let expected = {'id': 1,
                        'name': 'breakfast',
                        'foods': [
                          {'id': 1,
                           'name': 'Pizza',
                           'calories': '100'}
                        ]}

        chai.request(app)
          .get('/api/v1/meals/1/foods')
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.eql(expected)
            done()
          })
      })
  })
})
