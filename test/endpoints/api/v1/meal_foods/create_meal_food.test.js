
describe('POST /api/v1/meals/:meal_id/foods/:id', () => {
  it('creates a new meal food relationship', (done) => {
    const food = database('foods')
      .insert({'name': 'Pizza', 'calories': '100'})
      .then(() => {
        chai.request(app)
          .post('/api/v1/meals/1/foods/1')
          .end((err, res) => {
            res.should.have.status(201)
            res.body.should.eql({'message': 'Succesfully added Pizza to breakfast.'})
            done()
          })
      })
  })
})
