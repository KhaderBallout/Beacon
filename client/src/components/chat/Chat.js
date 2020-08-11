import React from 'react'
import './chat.css'
import Input from '../input/Input';
import io from 'socket.io-client'
import { useState, useEffect } from 'react'
import queryString from 'query-string'
const Chat = ({ location }) => {
    const ENDPOINT = "http://localhost:5000"
    const [name ,setName] = useState('');
    const [country ,setCountry] = useState('');
    const [city ,setCity] = useState('');
    let socket;
    useEffect(() => {
        const { name, country, city } = queryString.parse(location.search);

        socket =io(ENDPOINT);
        setName(name);
        setCountry(country);
        setCity(city);

        socket.emit('join', { name, country, city },({data})=>{
            console.log({data})
        });

        return () => {
            io.emit('disconnect');
            io.off()
        }
    }, [ENDPOINT, location.search])

    return (
        <div className="main">
            <div className='left-panel'>
                <div className="navbar">Global Chat</div>
                {/* messaging panel */}

                <div></div> 
                <div className='input'><Input/></div>

            </div>

            <div className="right-panel">
                <h1>map panel</h1>
            </div>

        </div>
    )
}


export default Chat
