process.env.NODE_ENV = 'test'

var chai = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http')
var app = require('../app')

chai.use(chaiHttp)

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
})
