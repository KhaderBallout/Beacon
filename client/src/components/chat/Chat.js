import React, { Component } from 'react'
import './chat.css'
import Input from '../input/Input';

const Chat = () => {



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
