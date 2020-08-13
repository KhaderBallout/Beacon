
import './Message.css';
import React, { useState, useEffect } from 'react';
import ReactEmoji from 'react-emoji';
import Avatar from './node_modules/@material-ui/core/Avatar';

const Message = ({ name, message }) => {
  let isSentByCurrentUser = true;
  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">

          <p className="sentText pr-10">{name}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite"> {message} </p>
          </div>
          <Avatar className="mt ml" alt="Remy Sharp" src='' />
        </div>
      )
      : (
        <div className="messageContainer justifyStart">
          <Avatar className="mt mr" alt="Remy Sharp" src='' />
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{message}</p>
          </div>
          <p className="sentText pl-10 ">{name}</p>
        </div>
      )
  );
}

export default Message;