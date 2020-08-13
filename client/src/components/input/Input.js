import React, { useState } from 'react';
import './Input.css'
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
const Input = ({ message, setMessage, send }) => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [display, setDisplay] = useState(false);
  let emojiPicker;
  if (display) {
    emojiPicker = (
      <Picker
        title="Pick your emoji…"
        emoji="point_up"
        onSelect={emoji => setMessage(message + emoji.native)}
      />
    );
  }
  function emojiEvent(e) {
    e.preventDefault();
    setDisplay(!display)
  }
  return (
    <div className="form">
      <input
        className="input-box"
        type="text"
        value={message}
        placeholder="Send a supportive message :)"
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e => e.key === 'Enter' ? send(e) : null)}
      />
      {emojiPicker}
      <button className="sendButton" onClick={(e) => { send(e); emojiEvent(e) }}></button>
      <button className="emojiBtn" onClick={emojiEvent} />
    </div>
  );
}
export default Input