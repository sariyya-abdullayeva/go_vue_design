import './App.css';
import { connect, sendMsg } from './api/ws-server';
import React, { useState, useEffect } from "react";
import ChatWindow from './components/ChatWindow/ChatWindow';


function App() {
  const [chatHistory, setChatHistory] = useState([]);
  useEffect(() => {
    connect((msg) => {
      // console.log("New message", msg.data);
      let temp = JSON.parse(msg.data);
      setChatHistory((prevState) => { return [...prevState, temp] });
    });

  }, []);


  let send = (e) => {
    if (e.keyCode === 13) {
      sendMsg(e.target.value);
      e.target.value = "";
    }
  }

  // console.log("chatHistory", chatHistory);
  return (
    <div className="App">
      {/* <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} /> */}
      {/* <ChatWindow send={send} /> */}
      <ChatWindow chatHistory={chatHistory} send={send} />
    </div>
  );
}

export default App;
