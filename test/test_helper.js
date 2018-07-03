process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const app = require('../app')
const database = require('../database')
const pry = require('pryjs')
const mealsSeed = require('../db/seeds/test/meals')

chai.use(chaiHttp)

global.chai = chai
global.should = should
global.app = app
global.database = database
global.pry = pry

beforeEach((done) => {
  promises = [
    database.raw('TRUNCATE foods RESTART IDENTITY CASCADE'),
    database.seed.run()
  ]
  Promise.all(promises).then(() => {
    done()
  })

});
