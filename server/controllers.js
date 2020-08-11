const axios = require('axios');
const users = []; //total number of users is the length of the array
const countries = []; //total number of countries is the length of the array
const messages = []; //total number of messages is the length of the array

const addCountry = ({city,country}) => {
    //convert city or country to Country code
    //https://restcountries.eu/rest/v2/name/{NAME} This is the Api Example to get country code
    var flag;
    axios.get(`https://restcountries.eu/rest/v2/alpha/${country}`)
    .then(resp => {

    console.log(resp.data);
    flag = resp.data.flag
    });

    //check for existance
    const doesExist = locations.find((cntry) => cntry === country)
    if(doesExist){
        //add lat lon on map and return flag
        return flag;
    }
    else{
        locations.push(country)
        //add lat lon on map and return flag
        return flag;
    }
}

const addMessage = ({sender,country,text}) =>{
    messages.push({sender,country,text})
    return {sender,country,text}
}

const addUser = ({ id, name}) => {
 
     const user = {id,name,country}
     users.push(user)
     return {user}
 
}

const getUser = (id) => {
    return users.find((user)=> user.id ===id)
}

module.exports= {addUser,getUser,addMessage,addLocation}