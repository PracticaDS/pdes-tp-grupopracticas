const app = require('./src/app')
const db = require('./db/index')

const PORT = process.env.PORT || 5000

db.connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`)
    })
})
