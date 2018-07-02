
describe('POST /api/v1/foods', () => {
  it('creates a new food item', (done) => {
    const food_params = { 'food': { 'name': 'Pizza', 'calories': '100'}}

    chai.request(app)
      .post('/api/v1/foods')
      .send(food_params)
      .end((err, res) => {
        res.should.have.status(200)
        done()
      })
  })

  it('returns 400 status if food not created', (done) => {
    chai.request(app)
      .post('/api/v1/foods')
      .send({})
      .end((err, res) => {
        res.should.have.status(400)
        done()
      })
  })
})
