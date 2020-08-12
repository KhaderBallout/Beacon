import React from 'react';


import './Message.css'

const Message = ({ message: { text, user }, name }) =>{
    let isSentByCurrentUSer = false;

    const trimmedName = name.trim().toLowerCase();
    if(user === trimmedName) {
        isSentByCurrentUser = true;
      }
}

export default Message;