import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { TextField } from "@material-ui/core";
import "./Socket.css";

// const socket = io.connect("http://localhost:2500");
// client-side
const socket = io("http://localhost:2500", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd",
  },
});

const Socket = () => {
  const [state, setState] = useState({ message: "", chaterName: "" });
  const [chat, setChat] = useState([]);

  useEffect(
    "Message",
    ({ chaterName, message }) => {
      setChat([...chat, { chaterName, message }]);
    },
    []
  );

  const renderChat = () => {
    return chat.map(({ chaterName, message }, index) => (
      <div key={index}>
        <h2>
          {chaterName} : <span>{message}</span>
        </h2>
      </div>
    ));
  };

  const onTextChange = (e) => {
    setState({ ...state, [e.target.value]: e.target.name });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    socket.emit("Message", { name, message });
    setState({ message: "", name: "" });
  };

  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h2>Chat</h2>
        {/* Text Field For user name */}
        <div className="name-field">
          <TextField
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.chaterNames}
            label="Name"
          />
        </div>
        {/* Text Field for user message */}
        <div>
          <TextField
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline.static"
            varient="outlined"
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>

      <div className="render-chat">
        <h2>Chat Log</h2>
        {renderChat()}
      </div>
    </div>
  );
};

export default Socket;
