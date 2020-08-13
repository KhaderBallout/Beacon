const axios = require('axios');

var users = 0; //total number of users is the length of the array
const countries = {}; //total number of countries is the length of values 
const messages = []; //total number of messages is the length of the array

const addCountry = ({ city, country }) => {
    //convert city or country to Country code
    //https://restcountries.eu/rest/v2/name/{NAME} This is the Api Example to get country code
    if (countries[country]) {
        countries[country] += 1;
    }
    else {
        countries[country] = 1;
    }
    return {
        country: country,
        city: city, numOfCountries: Object.keys(countries).length,
        numOfUsers: users, messages: getMessages()
    }

}

const addMessage = ({ name, country, message }) => {
    messages.push({ name, country, message })
    return { name, country, message }
}

const addUser = () => {
    users += 1;
    console.log("Number of current users", users)
}

const getMessages = () => {
    return messages;
}

const getUsers = () => {
    return users;
}

module.exports = { getMessages, addUser, addMessage, addCountry, getUsers }