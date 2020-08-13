<<<<<<< HEAD
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'

import Message from './Message/Message';
import './Messages.css'

const Messages = ({messages,name}) =>(
<ScrollToBottom>
{messages.map((message,i) => <div key={i}> <Message message={message} name= {name}/> </div>)}
</ScrollToBottom>
)

export default Messages;
=======
import './Messages.css'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message'
import React from 'react'

const Messages = ({ name, messages }) => (
    <ScrollToBottom>
        {messages.map((messageloop, i) => <div key={i}> <Message message={messageloop} name={name} /> </div>)}
    </ScrollToBottom>
)



export default Messages
>>>>>>> dc237fd7c5ebc82279712480b702f44655115226
