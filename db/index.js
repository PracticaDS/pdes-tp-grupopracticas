const mongoose = require('mongoose')

const DB_URI = 'mongodb://mongo:27017/docker-node-mongo'

if (process.env.MONGODB_URI) {
    DB_URI = process.env.MONGODB_URI
}


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
