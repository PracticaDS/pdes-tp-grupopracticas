const mongoose = require('mongoose')


const FactorySchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cells: {
        type: Array
    },
    cant_machines: {
        type: Number
    },
    updated: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        required: true
    }
})

const Factory = mongoose.model('Factory', FactorySchema)

module.exports = { Factory }