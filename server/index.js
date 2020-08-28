const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { getInfo, addUser, setUsers, addMessage, setMessages, addCountry, getCountries, setNumOfCountries, setCountries, getMessages, getUsers } = require('./controllers')

//Using Router for handling Get request on Server Startup 
const router = require('./router');
app.use(router);

//requiring all necessary libraries for Socket.io
const socket = require('socket.io');
const db = require('./database/db');
const io = socket(server)


//Defining an env.PORT or a static 5000 Port for the server to listen on
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

db.totals.find().then(resp => {
    setUsers(resp[0].totalNumberOfUsers)
    setNumOfCountries(resp[0].totalNumberOfCountries)
})

db.message.find().then(elements => {
    var temp = []
    elements.forEach(element => {
        temp.push({ name: element.fullName, country: element.country, message: element.message })
    });
    setMessages(temp)
})

db.country.find().then(elements => {
    if (elements != null) {
        var countries = [];
        elements.forEach(element => {
            countries.push({ code: element.code, num: element.num, lat: element.lat, lon: element.lon })
        });
        setCountries(countries)
    }
})
const storeDataInDB = () => {
    setTimeout(() => {
        //Storing totals in DB
        let userID = "5f490e047e0b874269d44813"
        db.totals.findByIdAndUpdate(userID, { totalNumberOfCountries: getCountries() }).then(res => {

        })
        db.totals.findByIdAndUpdate(userID, { totalNumberOfMessages: getMessages().length }).then(res => {

        })
        db.totals.findByIdAndUpdate(userID, { totalNumberOfUsers: getUsers() }).then(res => {
            console.log(res)
        })

        var data = getInfo();
        data = data.countries;
        for (const key in data) {
            if (data[key]["num"] > 0) {
                console.log(key,"is ",data[key])
                db.country.findOneAndUpdate({ code: key }, { num:data[key]["num"]}).then(resp=>{

                })
            }
        }


        storeDataInDB();
    }, 5000);
}
storeDataInDB();

//Handling All Socket Emits, Broadcasts, and calls.
io.on('connection', (socket) => { //client socket
    socket.on('join', ({ name, country, city, }, callback) => {
        console.log(name, " from (", city, ", ", country, ") has joined!")
        addUser();
        var data = addCountry({ city, country })

        //send countries to user once they join
        var countries = getInfo();
        io.emit('countries', { countries });
        callback({ data });  //trigger response immediately after specific event has  emitted.

    })

    socket.on('send', ({ name, country, message }, callback) => {
        addMessage({ name, country, message });
        io.emit('message', ({ name, country, message }));

        //resend here data of backend to map.js
        var countries = getInfo();
        io.emit('countries', { countries });


        callback();  //every time the user presses on the btn, run this code"
    })

})