const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const {addUser,getUser,addMessage,addLocation} = require('./controllers')

//Using Router for handling Get request on Server Startup 
const router = require('./router');
app.use(router);

//requiring all necessary libraries for Socket.io
const socket = require('socket.io')
const io = socket(server)


//Defining an env.PORT or a static 5000 Port for the server to listen on
const PORT = process.env.PORT || 5000;
server.listen( PORT, () => console.log(`Server has started on port ${PORT}`));

//Handling All Socket Emits, Broadcasts, and calls.
io.on('connection', (socket)=>{
    socket.on('join',({name,location})=>{
        const {error,user} =addUser({id:socket.id,name,location})

        console.log(name," from ",country," has joined!")
    })

    io.on('disconnect', ()=>{
        console.log("A connection has been dropped")
    })
})