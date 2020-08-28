const axios = require('axios');
var countries = require('./countries')
var users = 0; //total number of users is the length of the array
var messages = []; //total number of messages is the length of the array
const db = require('./database/db')
const { response } = require('express')

const getInfo = () => {
    return { countries: countries, messages: messages.length, users: users }
}

const addCountry = ({ city, country }) => {

    if (countries[country]["num"] == 0) {
        let countryDb = new db.country({ code: country, num: 1, lat: countries[country]["lat"], lon: countries[country]["lon"] })
        countryDb.save().then(response => {
            console.log("response", response)
        })
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
    messages.push({ name, country, message })
    return { name, country, message }
}

const addUser = () => {
    users += 1;
    console.log("Number of current users", users)
}

const setUsers = (arg) => {
    users = arg
    console.log("new total users is", arg)
}

const getMessages = () => {
    return messages;
}

const setMessages = (arg) => {
    messages = arg
    console.log(arg)
}

const getUsers = () => {
    return users;
}


const setNumOfCountries = (arg) => {
    countries['total'] = arg
    console.log("new total countries is", arg)
}

const setCountries = (arg) => {
    arg.forEach(element => {
        countries[element.code]["num"] = element.num
        console.log(element.code, countries[element.code])
    });
}
const getCountries = () => {
    console.log("Countries el total =",countries.total)
    return countries.total
}

module.exports = { getMessages, addUser, setUsers, addMessage, setMessages, addCountry, getCountries, setNumOfCountries, setCountries, getUsers, getInfo, }
