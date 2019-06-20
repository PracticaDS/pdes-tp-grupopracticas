process.env.NODE_ENV = 'test'

const expect = require('chai').expect
const request = require('supertest')
const app = require('../../../src/app')
const conn = require('../../../db/index')
const api_url = require('../../../src/config').api_url


const api_user = `${api_url}/user`

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
        request(app).post(api_user)
            .send({username: 'usernamepost', email: 'email@test.com'})
            .then((res) => {
                const user = res.body.content
                expect(user).to.contains.property('_id')
                expect(user).to.contains.property('username')
                expect(user).to.contains.property('email')
                done()
            })
            .catch((err) => done(err))
    })

    it('should fail if not send username when create a new user', (done) => {
        request(app).post(api_user)
            .send({email: 'some text'})
            .then((res) => {
                const errors = res.body.error.errors
                expect(errors.username.name).to.equal('ValidatorError')
                done()
            })
            .catch((err) => done(err))
    })
})