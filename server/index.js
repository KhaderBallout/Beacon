const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { getMessages, addUser, addMessage, addCountry, getUsers } = require('./controllers')

//Using Router for handling Get request on Server Startup 
const router = require('./router');
app.use(router);

//requiring all necessary libraries for Socket.io
const socket = require('socket.io')
const io = socket(server)


//Defining an env.PORT or a static 5000 Port for the server to listen on
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

//Handling All Socket Emits, Broadcasts, and calls.
io.on('connection', (socket) => { //client socket
    socket.on('join', ({ name, country, city, }, callback) => {
        console.log(name, " from (", city, ", ", country, ") has joined!")
        addUser();
        var data = addCountry({ city, country })
        callback({ data });  //trigger response immediately after specific event has  emitted.

        // socket.broadcast('messages', getMessages());   //send message to everyone 
    })

    socket.on('send', ({ name, country, message }, callback) => {
        addMessage({ name, country, message });
        io.emit('message', { name, country, message });

        callback();
    })


    socket.on('disconnect', () => {
        console.log("A connection has been dropped")
    })
})