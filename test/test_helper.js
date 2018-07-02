process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const app = require('../app')
const database = require('../database')

chai.use(chaiHttp)

global.chai = chai
global.should = should
global.app = app
global.database = database

beforeEach((done) => {
  database.raw('TRUNCATE foods RESTART IDENTITY')
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
});
