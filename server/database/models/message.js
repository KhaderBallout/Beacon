const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    country: {
        type: String
    },
    message: {
        type: String
    }
},
    { timestamps: true })


let message = mongoose.model('message', messageSchema);

module.exports = message