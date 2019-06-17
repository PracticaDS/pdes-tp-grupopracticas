process.env.NODE_ENV = 'test'

const expect = require('chai').expect
const request = require('supertest')

const app = require('../../../src/app')
const conn = require('../../../db/index')

describe('POST /user', () => {
    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((err) => done(err))
    })

    after((done) => {
        conn.close()
            .then(() => done())
            .catch((err) => done(err))
    })

    it('should create a new user', (done) => {
        request(app).post('/user')
            .send({username: 'usernamepost', email: 'email@test.com'})
            .then((res) => {
                const body = res.body
                expect(body).to.contains.property('_id')
                expect(body).to.contains.property('username')
                expect(body).to.contains.property('email')
                done()
            })
            .catch((err) => done(err))
    })

    it('should fail if not send username when create a new user', (done) => {
        request(app).post('/user')
            .send({email: 'some text'})
            .then((res) => {
                const body = res.body
                expect(body.errors.username.name).to.equal('ValidatorError')
                done()
            })
            .catch((err) => done(err))
    })
})