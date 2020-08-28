const axios = require('axios');
let countries = require('./countries')
var users = 0; //total number of users is the length of the array
const messages = []; //total number of messages is the length of the array
const db = require('./database/db')
const { response } = require('express')

const getInfo = () => {
    return { countries: countries, messages: messages.length, users: users }
}

const addCountry = ({ city, country }) => {

    // if (countries[country]['num'] == 0) {
    //     let countryDb = new db.country({ key: country, numOfUsers: 1, lat: countries[country]['lat'], lon: countries[country]['lon'] })
    //     countryDb.save().then(response => {
    //         console.log("response", response)
    //     })
    // }
    db.country.findOne({ code: country }).then(resp => {
        if (resp != null) {
            db.country.findByIdAndUpdate(resp._id, { $inc: { num: 1 } })
                .then(() => {
                })

        }
        else {
            let countryDb = new db.country({ code: country, num: 1, lat: countries[country]["lat"], lon: countries[country]["lon"] })
            countryDb.save().then(response => {
                console.log("response", response)
            })
            let userID = "5f46902c02585e5d168d56ce"
            db.totals.findByIdAndUpdate(userID, { $inc: { totalNumberOfCountries: 1 } })
                .then(res => {
                    totalCountries = res.totalNumberOfCountries;

                    totalUsers = res.totalNumberOfUsers;
                    totalMessages = res.totalNumberOfMessages;
                })
        }
    })

    return {
        country: country,
        info: countries[country],
        city: city,
        numOfCountries: countries['total'],
        numOfUsers: users,
        messages: getMessages()
    }

}

const addMessage = ({ name, country, message }) => {
    let messageDb = new db.message({ fullName: name, country: country, message: message })
    messageDb.save().then(response => {
        console.log("response", response)
    })
    let userID = "5f46902c02585e5d168d56ce"
    db.totals.findByIdAndUpdate(userID, { $inc: { totalNumberOfMessages: 1 } })
        .then(() => {
        })
    return { name, country, message }
}

const addUser = () => {
    // let totalNumOfUsers= db.collection.update( {$inc: { totalNumberOfUsers: 1 }});
    let userID = "5f46902c02585e5d168d56ce"
    db.totals.findByIdAndUpdate(userID, { $inc: { totalNumberOfUsers: 1 } })
        .then(() => {
        })
    console.log("Number of current users", users)
}

const getMessages = () => {
    return messages;
}

const getUsers = () => {
    return users;
}

module.exports = { getMessages, addUser, addMessage, addCountry, getUsers, getInfo, }