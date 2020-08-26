const mongoose = require('mongoose')

const totalsSchema = new mongoose.Schema({

    totalNumberOfUsers: {
        type: Number
    },
    totalNumberOfMessages: {
        type: Number
    },
    totalNumberOfCountries: {
        type: Number
    }
},
    { timestamps: true })


let totals = mongoose.model('totals', totalsSchema);

module.exports = totals