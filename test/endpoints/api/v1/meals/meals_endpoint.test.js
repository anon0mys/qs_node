describe('GET /api/v1/meals', () => {
  it('returns a list of meals', (done) => {
    const expected = database('meals').select().then((meals) => {
      chai.request(app)
      .get('/api/v1/meals')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.eql(meals)
        done()
      })
    })
  })
})
