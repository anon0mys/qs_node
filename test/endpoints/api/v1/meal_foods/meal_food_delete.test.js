
describe('DELETE /api/v1/meals/:meal_id/foods/:id', () => {
  it('deletes the association between a meal and a food', (done) => {
    let promises = []

    promises.push(database('foods').insert({'name': 'Pizza', 'calories': '100'}))

    promises.push(database('meal_foods').insert({meal_id: '1', food_id: '1'}))

    Promise.all(promises).then((data) => {
      chai.request(app)
        .delete('/api/v1/meals/1/foods/1')
        .end((err, res) => {
          res.should.have.status(201)
          res.body.should.eql({'message': `Succesfully removed Pizza from breakfast.`})
          done()
        })
    })
  })
})
