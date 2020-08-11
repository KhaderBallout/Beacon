
import './Message.css';
import React, { useState, useEffect } from 'react';
import ReactEmoji from 'react-emoji';
import Avatar from '@material-ui/core/Avatar';
const Message = () => {
  let isSentByCurrentUser = true;
  let countryName = "Taiwan";
  const [flagSrc, setFlagSrc] = useState("")
  console.log(arr)
  useEffect(() => {
    // Update the document title using the browser API
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
      .then(res => res.json())
      .then(data => {
        console.log("data:", data)
        setFlagSrc(data[0]['flag']);

      })
      .catch(err => console.log("Error:", err));
  }, []);

  //   const trimmedName = name.trim().toLowerCase();

  //   if(user === trimmedName) {
  //     isSentByCurrentUser = true;
  //   }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">

          <p className="sentText pr-10">Jannat</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">Hi there {arr} </p>

          </div>
          <Avatar className="mt ml" alt="Remy Sharp" src={flagSrc} />
        </div>
      )
      : (
        <div className="messageContainer justifyStart">
          <Avatar className="mt mr" alt="Remy Sharp" src={flagSrc} />
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">Hello World</p>
          </div>
          <p className="sentText pl-10 ">Mays</p>
        </div>
      )
  );
}

export default Message;