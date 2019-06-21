const Factory = require('../models/factory.model').Factory
const api_url = require('../config').api_url
const express = require('express')
const router = express.Router()


const api_factory = `${api_url}/factory`
const api_factories = `${api_url}/factories`

// find factory by id
router.get(`${api_factory}/:id`, (req, res) => {
    const id = req.params.id
    if(!id) {
        return res.status(400).send('Missing url parameter: id')
    }
    Factory.findOne({
        _id: id
    }).then(doc => {
        if(doc) {
            res.json({ content: doc })
        } else {
            res.json({ message: `No factory found with id '${id}'` })
        }
    }).catch(err => {
        res.status(500).json({ error: err })
    })
})

//find factories by user id
router.get(`${api_factories}/:user_id`, (req, res) => {
    const user_id = req.params.user_id
    if(!user_id) {
        return res.status(400).send('Missing url parameter: user_id')
    }
    Factory.find({
        user_id: user_id
    }, '_id name cant_machines created updated'
    ).then(doc => {
        if(doc) {
            res.json({ content: doc })
        } else {
            res.json({ message: `No factory found for user id '${user_id}'` })
        }
    }).catch(err => {
        res.status(500).json({ error: err })
    })
})

// create new factory
router.post(api_factory, (req, res) => {
    const body = req.body
    if(!body) {
        return res.status(400).send('Request body is missing!')
    }
    const factory = new Factory({
        user_id: body.user_id,
        name: body.name,
        cells: body.cells,
        created: new Date()
    })
    factory.save(factory)
        .then((factory) => res.status(201).send( {content :factory }))
        .catch((err) => res.status(400).send({ error: err }))
})

// delete a factory by id
router.delete(`${api_factory}/:id`, (req, res) => {
    const id = req.params.id
    if(!id) {
        return res.status(400).send('Missing url parameter: id')
    }
    Factory.findOneAndDelete({
        _id: id
    }).then(doc => {
        if(doc) {
            res.json({ content: doc })
        } else {
            res.json({message: `No factory found with id '${id}'`})
        }
    }).catch(err => {
        res.status(500).json({ error: err })
    })
})

// update factory by id
router.put(api_factory, (req, res) => {
    const body = req.body
    if(!body) {
        return res.status(400).send('Request body is missing!')
    }
    Factory.findOneAndUpdate({
        _id: body.id
    },{
        $set:{
            name: body.name,
            cells: body.cells
        }
    }, 
    {
        new: true
    }
    ).then(doc => {
        if(doc) {
            res.json({ content: doc })
        } else {
            res.json( {message: `No factory found with id '${id}'` })
        }
    }).catch(err => {
        res.status(500).json({ error: err })
    })
})


module.exports = router