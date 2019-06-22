process.env.NODE_ENV = 'test'

const expect = require('chai').expect
const request = require('supertest')
const app = require('../../../src/app')
const conn = require('../../../db/index')
const api_url = require('../../../src/config').api_url


const api_user = `${api_url}/user`

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
        request(app).get(`${api_user}/testname`)
            .then((res) => {
                const message = res.body.message
                expect(message).to.equal("No user found with username 'testname'")
                done()  
            })
            .catch((err) => done(err))
    })

    it('should get one note', (done) => {
        request(app).post(api_user)
            .send({username: 'usernameget', email: 'username@mail.com'})
            .then((res) => {
                request(app).get(`${api_user}/usernameget`)
                    .then((res) => {
                        const user = res.body.content
                        expect(user).to.contains.property('_id')
                        expect(user).to.contains.property('username')
                        expect(user).to.contains.property('email')
                        done()
                    })
            })
            .catch((err) => done(err))
    })
})