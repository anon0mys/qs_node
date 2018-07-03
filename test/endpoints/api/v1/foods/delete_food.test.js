
describe('DELETE /api/v1/foods/:id', () => {
  it('deletes a food item', (done) => {
    let promises = []

    for(let i = 0; i < 5; i++) {
      let promise = database('foods')
        .insert({name: 'Pizza', calories: '100'});
      promises.push(promise);
    }

    Promise.all(promises).then(() => {
      chai.request(app)
        .delete('/api/v1/foods/1')
        .end((err, res) => {
          let foods = database('foods').select().then((foods) => {
            res.should.have.status(204)
            foods.length.should.eql(4)
            done()
          })
        })
    })
  })
})
