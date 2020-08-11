const axios = require('axios');
const users = 0; //total number of users is the length of the array
const countries = {}; //total number of countries is the length of values 
const messages = []; //total number of messages is the length of the array


const addCountry = ({ city, country }) => {
    //convert city or country to Country code
    //https://restcountries.eu/rest/v2/name/{NAME} This is the Api Example to get country code
    var flag;
    axios.get(`https://restcountries.eu/rest/v2/alpha/${country}`)
        .then(resp => {

            console.log(resp.data);
            flag = resp.data.flag
        });

    if (countries[country]) {
        countries[country] += 1;
    }
    else {
        countries[country] = 1;
    }
    console.log(countries)

    //Send City Lat Lon to MAP HERE


    //return flag and number of countries
    return {flag, numOfCountries: Object.keys(countries).length};

}

const addMessage = ({ sender, country, text }) => {
    messages.push({ sender, country, text })
    return { sender, country, text }
}

const addUser = () =>{
    users++;
    console.log("Number of current users",users)
}

const getMessages =()=>{
    return messages;
}

module.exports = { getMessages, addUser, addMessage, addCountry }