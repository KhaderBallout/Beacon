import React from "react";
import "./chat.css";
import Input from "../input/Input";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import queryString from "query-string";
import Map from "../map/Map";
import Messages from "../Messages/Messages";

const Chat = ({ location }) => {
  const ENDPOINT = "http://localhost:5000";
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState(""); //message from input
  const [messages, setMessages] = useState([]);
  //const [info, setInfo] = useState({});
  let info;

  let socket = io(ENDPOINT); //connect client socket with server
  useEffect(() => {
    return () => {
      // specify how to clean up after that effect
      socket.emit("disconnect");
      io.off();
    };
  }, [ENDPOINT, location.search]); // specify when the useEffect fnc is being called : (only if these two are changed)

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]); //add all messages to array of messages
    });
  }, [messages]);
  useEffect(() => {
    const { name, country, city } = queryString.parse(location.search); //getting data from url

    setName(name);
    setCountry(country);
    setCity(city);

    socket.emit("join", { name, country, city }, ({ data }) => {
      console.log(data.messages); //this gonna be executed when the callback in server is called
      setMessages(data.messages);
    })
  }, []);

  const send = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("send", { name, country, message }, () => setMessage(""));
    }
  };

  return (
    <div className="main">
      <div className="left-panel">
        <div className="navbar">Global Chat</div>
        <div>
          <Messages name={name} messages={messages} country={country} />
        </div>
        <div className="input">
          <Input
            name={name}
            country={country}
            message={message}
            setMessage={setMessage}
            send={send}
          />
        </div>
      </div>

      <div id="right-panel">
        <Map country={country} />
      </div>
    </div>
  );
};

export default Chat;
