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

    if (countries[country]["num"] == 0) {
        countries['total'] += 1;
    }
    countries[country]['num'] += 1;
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
    return { name, country, message }
}

const addUser = () => {
    // let totalNumOfUsers= db.collection.update( {$inc: { totalNumberOfUsers: 1 }});
    console.log("Number of current users", users)
}

const getMessages = () => {
    return messages;
}

const getUsers = () => {
    return users;
}

module.exports = { getMessages, addUser, addMessage, addCountry, getUsers, getInfo, }
