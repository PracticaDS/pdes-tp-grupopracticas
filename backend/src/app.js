const express = require('express')
const path = require('path')
const bodyParse = require('body-parser')
const app = express()

const usersRoute = require('./routes/users.route')
const factoryRoute = require('./routes/factories.route')

app.use(bodyParse.json())

app.use(usersRoute)
app.use(factoryRoute)


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../frontend/build')))

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build/index.html'))
  });

module.exports = app