const express = require('express')
const bodyParse = require('body-parser')
const app = express()

const usersRoute = require('./routes/users.route')

app.use(bodyParse.json())

app.use(usersRoute)

module.exports = app