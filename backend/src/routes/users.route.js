const User = require('../models/user.model').User
const express = require('express')
const router = express.Router()



// find user by username
router.get('/user', (req, res) => {
    if(!req.query.username) {
        return res.status(400).send('Missing url parameter: username')
    }
    User.findOne({
        username: req.query.username
    }).then(doc => {
        if(doc) {
            res.json(doc)
        } else {
            res.json({response: `No user found with username '${req.query.username}'`})
        }
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.post('/user', (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body is missing!')
    }
    const body = req.body
    const user = new User({
        username: body.username,
        email: body.email
    })
    user.save(user)
        .then((user) => res.status(201).send(user))
        .catch((err) => res.status(400).send(err))
})

router.delete('/user', (req, res) => {
    if(!req.query.username) {
        return res.status(400).send('Missing url parameter: username')
    }
    User.findOneAndDelete({
        username: req.query.username
    }).then(doc => {
        if(doc) {
            res.json(doc)
        } else {
            res.json({response: `No user found with username '${req.query.username}'`})
        }
    }).catch(err => {
        res.status(500).json(err)
    })
})


module.exports = router