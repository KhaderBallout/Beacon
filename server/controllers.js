const axios = require('axios');

let countries = require('./countries')
var users = 0; //total number of users is the length of the array
 //total number of countries is the length of values 
const messages = []; //total number of messages is the length of the array

const getInfo = () =>{
    return {countries:countries,messages:messages.length,users:users}
}

const addCountry = ({ city, country }) => {
    //convert city or country to Country code
    //https://restcountries.eu/rest/v2/name/{NAME} This is the Api Example to get country code
    // ps = {code: ps, number: 5}
    /* countries = {
         "PS":{
             num: 55,
             lan:31.0,
             lon:35.0
         },
         "AE":51
    }
    */

    if (countries[country]["num"] == 0) {
        countries['total'] += 1;
    }
    countries[country]['num'] += 1;
    return {
        country: country,
        info:countries[country],
        city: city, 
        numOfCountries:  countries['total'],
        numOfUsers: users, 
        messages: getMessages()
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

module.exports = { getMessages, addUser, addMessage, addCountry, getUsers , getInfo}