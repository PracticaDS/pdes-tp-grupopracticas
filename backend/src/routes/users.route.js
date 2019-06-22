const User = require('../models/user.model').User
const express = require('express')
const router = express.Router()
const api_url = require('../config').api_url


const api_user = `${api_url}/user`


// find user by username
router.get(`${api_user}/:username`, (req, res) => {
    const username = req.params.username
    if(!username) {
        return res.status(400).send('Missing url parameter: username')
    }
    User.findOne({
        username: username
    }).then(doc => {
        if(doc) {
            res.json({ content: doc })
        } else {
            res.json({ message: `No user found with username '${username}'` })
        }
    }).catch(err => {
        res.status(500).json({ error: err })
    })
})

// create new user
router.post(api_user, (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body is missing!')
    }
    const body = req.body
    const user = new User({
        username: body.username,
        email: body.email
    })
    user.save(user)
        .then((user) => res.status(201).send({ content: user }))
        .catch((err) => res.status(400).send({ error: err }))
})

// update factory by id
router.put(api_user, (req, res) => {
    const body = req.body
    if(!body) {
        return res.status(400).send('Request body is missing!')
    }
    User.findOneAndUpdate({
        _id: body.id
    },{
        $set:{
            username: body.username,
        }
    }, 
    {
        new: true
    }
    ).then(doc => {
        if(doc) {
            res.json({ content: doc })
        } else {
            res.json({ message: `No user found with username '${body.username}'` })
        }
    }).catch(err => {
        res.status(500).json({ error : err })
    })
})

// delete user by username
router.delete(`${api_user}/:username`, (req, res) => {
    if(!req.username.username) {
        return res.status(400).send('Missing url parameter: username')
    }
    User.findOneAndDelete({
        username: req.query.username
    }).then(doc => {
        if(doc) {
            res.json({ content: doc })
        } else {
            res.json({ message: `No user found with username '${req.query.username}'` })
        }
    }).catch(err => {
        res.status(500).json({ error: err })
    })
})

module.exports = router