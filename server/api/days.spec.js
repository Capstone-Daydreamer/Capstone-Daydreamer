/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Day = db.model('day')

describe('Days routes', () => {
  let id = 1

  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/days/', () => {
    const name = 'Great name'

    beforeEach(() => {
      return Day.create({
        name: name
      })
    })

    it('GET /api/days/:id', () => {
      return request(app)
        .get(`/api/days/${id}`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.name).to.be.equal(name)
        })
    })
  })
})
