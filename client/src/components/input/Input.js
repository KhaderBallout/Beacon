
import React from 'react'

import './Input.css'

const Input = ({ message, setMessage, send }) => (
  <div className="form">
    <input
      className="input-box"
      type="text"
      value={message}
      placeholder="Send a supportive message :)"
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e => e.key === 'Enter' ? send(e) : null)}
    />
    <button className="sendButton" onClick={(e) => send(e)}></button>

  </div>
)

export default Input