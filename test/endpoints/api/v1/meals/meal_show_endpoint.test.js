
describe('GET /api/v1/meals/:meal_id/foods', () => {
  it('returns a meal and its associated foods', (done) => {
    let promises = []

    for(let i=0; i < 5; i++) {
      let promise = database('foods')
        .insert({'name': 'Pizza', 'calories': '100'});
      promises.push(promise);
    }

    for(let i=1; i < 5; i++) {
      let promise = database('meal_foods')
        .insert({'meal_id': i, 'food_id': i});
      promises.push(promise);
    }

    Promise.all(promises).then((data) => {
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
