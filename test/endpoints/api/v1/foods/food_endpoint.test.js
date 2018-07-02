
describe('GET /api/v1/foods/:id', () => {
  it('returns a single food', (done) => {
    database('foods')
      .insert({'name': 'Pizza', 'calories': '100'})
      .then(() => {
        const food = database('foods').first().then((food) => {
          chai.request(app)
            .get('/api/v1/foods/1')
            .end((err, res) => {
              res.should.have.status(200)
              res.body.should.eql(food)
              done()
            })
        })
      })
  })

  it('returns 404 if food not found', () => {
    chai.request(app)
      .get('/api/v1/foods/200')
      .end((err, res) => {
        res.should.have.status(404)
        done()
      })
  })
})
