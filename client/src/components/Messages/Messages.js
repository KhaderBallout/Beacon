import React, { Component } from 'react'
import './Message.css'
import ScrollToBottom from 'react-scroll-to-bottom'


const Messages = ({messages,name}) => (
  
 <ScrollToBottom>
     {messages.map((message,i)=> <div key={i}></div>)}
 </ScrollToBottom>
)



export default Messages