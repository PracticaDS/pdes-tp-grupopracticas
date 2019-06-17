const mongoose = require('mongoose')

const server = 'ds339177.mlab.com:39177'
const database = 'revolution_db'
const user = 'revolution_db_user'
const password = 'PzLdsJR8marZBpwr'

const DB_URI = `mongodb://${user}:${password}@${server}/${database}`

function connect() {
    return new Promise((resolve, reject) => {

        if(process.env.NODE_ENV === 'test') {
            const Mockgoose = require('mockgoose').Mockgoose
            const mockgoose = new Mockgoose(mongoose)
            mockgoose.prepareStorage()
                .then(() => {
                    mongoose.connect(DB_URI, {useNewUrlParser: true})
                        .then((res, err) => {
                            if(err) {
                                return reject(err)
                            } else {
                                console.log('Successfully connected to a mocked DB.')
                                resolve()
                            }
                        })
                })
        } else {
            mongoose.connect(DB_URI, {useNewUrlParser: true})
                .then((res, err) => {
                    if(err) {
                        return reject(err)
                    } else {
                        console.log('Successfully connected to DB.')
                        resolve()
                    }
                })
        }
    })
}

function close() {
    return mongoose.disconnect()
}

module.exports = { connect, close }
