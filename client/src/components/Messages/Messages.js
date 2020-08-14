import './Messages.css'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message'
import React from 'react'

<<<<<<< HEAD
const Messages = ({ name, messages }) => (
    <ScrollToBottom className="scroller">
        {messages.map((messageloop, i) => <div key={i}> <Message message={messageloop} name={name} /> </div>)}
=======
const Messages = ({ name, messages, country }) => (
    <ScrollToBottom className="scroller">
        {messages.map((messageloop, i) => <div key={i}> <Message message={messageloop} name={name} country={country}/> </div>)}
>>>>>>> aa11a319ff92a79a1f62835b92e48d68257a5e28
    </ScrollToBottom>
)

export default Messages