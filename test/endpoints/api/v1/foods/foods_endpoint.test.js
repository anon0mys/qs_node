
describe('GET /api/v1/foods', () => {
  it('returns a list of all foods', (done) => {
    let promises = []

    for(let i=0; i < 5; i++) {
      let promise = database('foods')
        .insert({'name': 'Pizza', 'calories': '100'});
      promises.push(promise);
    }

    Promise.all(promises).then(() => {
      const foods = database('foods').select().then((foods) => {
        chai.request(app)
          .get('/api/v1/foods')
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.eql(foods)
            done()
          })
      })
    })
  })
})
