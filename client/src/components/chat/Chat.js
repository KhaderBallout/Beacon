import React from 'react'
import './chat.css'
import Input from '../input/Input';
import io from 'socket.io-client'
import { useState, useEffect } from 'react'
import queryString from 'query-string'
import Map from '../map/Map'
const Chat = ({ location }) => {
    const ENDPOINT = "http://localhost:5000"
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);



    let socket = io(ENDPOINT);   //connect client socket with server
    ;
    useEffect(() => {
        const { name, country, city } = queryString.parse(location.search);  //getting data from url

        setName(name);
        setCountry(country);
        setCity(city);

        socket.emit('join', { name, country, city }, ({ data }) => {
            console.log({ data })    //this gonna be executed when the callback in server is called
        });

        return () => {  // specify how to clean up after that effect
            socket.emit('disconnect');
            io.off()
        }
    }, [ENDPOINT, location.search])  // specify when the useEffect fnc is being called : (only if these two are changed)


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
        })

    }, [messages]);

    const send = (e) => {
        e.preventDefault();

        if (message) {
            socket.emit('send', { name, country, message }, () => setMessage(''));
        }
    }

    return (
        <div className="main">
            <div className='left-panel'>
                <div className="navbar">Global Chat</div>
                {/* <div><Messages /></div> */}
                <div className='input'><Input message={message} setMessage={setMessage} send={send} /></div>

            </div>

            <div id="right-panel">
                <Map/>
            </div>

        </div>
    )
}


export default Chat
