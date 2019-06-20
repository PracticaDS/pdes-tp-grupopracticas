const express = require('express')
const bodyParse = require('body-parser')
const app = express()

const usersRoute = require('./routes/users.route')
const factoryRoute = require('./routes/factories.route')

app.use(bodyParse.json())

app.use(usersRoute)
app.use(factoryRoute)

module.exports = app