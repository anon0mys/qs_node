
describe('PUTS /api/v1/foods/:id', () => {
  it('updates a food item name', (done) => {
    const food = database('foods')
      .insert({ 'name': 'Pizza', 'calories': '100'})
      .returning(['id', 'name', 'calories'])
      .then((food) => {
        chai.request(app)
          .put(`/api/v1/foods/${food[0].id}`)
          .send({ 'Name': 'Changed'})
          .end((err, res) => {
            res.should.have.status(200)
            res.body.name.should.eql('Changed')
            done()
          })
      })
  })

  it('updates a food item calories', (done) => {
    const food = database('foods')
      .insert({ 'name': 'Pizza', 'calories': '100'})
      .returning(['id', 'name', 'calories'])
      .then((food) => {
        chai.request(app)
          .put(`/api/v1/foods/${food[0].id}`)
          .send({ 'Calories': '200'})
          .end((err, res) => {
            res.should.have.status(200)
            res.body.calories.should.eql('200')
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
})
