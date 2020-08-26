import React from 'react'
import './chat.css'
import Input from '../input/Input';
import io from 'socket.io-client'
import { useState, useEffect } from 'react'
import queryString from 'query-string'
import Map from '../map/Map'
import Messages from '../Messages/Messages';

const Chat = ({ location }) => {
    const ENDPOINT = "http://localhost:5000"
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState(''); //message from input
    const [messages, setMessages] = useState([]);

    let socket = io(ENDPOINT);   //connect client socket with server
    useEffect(() => {
        const { name, country, city } = queryString.parse(location.search);  //getting data from url
        setName(name);
        setCountry(country);

        socket.emit('join', { name, country, city }, ({ data }) => {
            console.log(data.messages)    //these gonna be executed when the callback in server is called
            setMessages(data.messages) //store the messages in backend 
            socket.emit('req');
        });

        return () => {  // specify how to clean up after that effect
            io.emit('disconnect');
            io.off()
        }
    }, [ENDPOINT, location.search])  // specify when the useEffect fnc is being called : (only if these two are changed)

    useEffect(() => {
        socket.on('message', ({ name, country, message }) => {
            var temp = { name, country, message };
            setMessages(messages => [...messages, temp]);  //add all messages as an object to the array of messages
        })

    }, []); // because we need to execute useeffect only once
      
    const send = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit('send', { name, country, message }, () =>
                setMessage(''));
        }
    }

    return (
        <div className="main">
            <div className='left-panel'>
                <div className="navbar">Global Chat</div>
                <div><Messages name={name} messages={messages} country={country} /></div>
                <div className='input'><Input name={name} country={country} message={message} setMessage={setMessage} send={send} /></div>
            </div>
            <div id="right-panel">
                <Map country={country} />
            </div>
        </div>

    );
};

export default Chat;
