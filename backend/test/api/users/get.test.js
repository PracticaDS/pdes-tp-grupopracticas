process.env.NODE_ENV = 'test'

const expect = require('chai').expect
const request = require('supertest')

const app = require('../../../src/app')
const conn = require('../../../db/index')

describe('GET /user', () => {
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

    it('should not find an user', (done) => {
        request(app).get('/user?username=testname')
            .then((res) => {
                const body = res.body
                expect(body.response).to.equal("No user found with username 'testname'")
                done()
            })
            .catch((err) => done(err))
    })

    it('should get one note', (done) => {
        request(app).post('/user')
            .send({username: 'usernameget', email: 'username@mail.com'})
            .then((res) => {
                request(app).get('/user?username=usernameget')
                    .then((res) => {
                        const body = res.body
                        expect(body).to.contains.property('_id')
                        expect(body).to.contains.property('username')
                        expect(body).to.contains.property('email')
                        done()
                    })
            })
            .catch((err) => done(err))
    })
})