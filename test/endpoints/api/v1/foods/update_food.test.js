
describe('PUTS /api/v1/foods', () => {
  it('updates a food item', (done) => {
    const food = database('foods')
      .insert({ 'name': 'Pizza', 'calories': '100'})
      .returning(['id', 'name', 'calories'])
      .then((food) => {
        chai.request(app)
          .put(`/api/v1/foods/${food[0].id}`)
          .send({ 'name': 'Changed'})
          .end((err, res) => {
            res.should.have.status(200)
            res.body.name.should.eql('Changed')
            done()
          })
      })
  })

  it('returns 400 if food not updated', (done) => {
    const food = database('foods')
      .insert({ 'name': 'Pizza', 'calories': '100'})
      .returning(['id', 'name', 'calories'])
      .then((food) => {
        chai.request(app)
          .put(`/api/v1/foods/${food[0].id}`)
          .send({ 'notRealAttribute': 'Changed'})
          .end((err, res) => {
            res.should.have.status(400)
            done()
          })
      })
  })

  it('returns 404 if food not found', (done) => {
    const food = database('foods')
      .insert({ 'name': 'Pizza', 'calories': '100'})
      .returning(['id', 'name', 'calories'])
      .then((food) => {
        chai.request(app)
          .put('/api/v1/foods/200')
          .send({ 'name': 'Changed'})
          .end((err, res) => {
            res.should.have.status(404)
            done()
          })
      })
  })
})
