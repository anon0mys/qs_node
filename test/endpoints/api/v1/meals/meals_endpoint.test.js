describe('GET /api/v1/meals', () => {
  xit('returns a list of meals', (done) => {
    let promises = []

    promises.push(database('foods').insert({'name': 'Pizza', 'calories': '100'}))

    promises.push(database('meal_foods').insert({meal_id: '1', food_id: '1'}))

    Promise.all(promises).then(() => {
        let expected = [{'id': 1,
                         'name': 'breakfast',
                         'foods': [
                           {'id': 1,
                            'name': 'Pizza',
                            'calories': '100'}] },
                        {'id': 2,
                         'name': 'snack',
                         'foods': []},
                        {'id': 3,
                         'name': 'lunch',
                         'foods': []},
                        {'id': 4,
                         'name': 'dinner',
                         'foods': []}]

        chai.request(app)
        .get('/api/v1/meals')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.eql(expected)
          done()
        })
    })
  })
})
