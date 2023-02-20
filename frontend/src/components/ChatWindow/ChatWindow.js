import React, { useState, useEffect, useRef } from "react";
import CharArea from "../ChatArea/ChatArea";
import ChatList from "../ChatList/ChatList";
import { connect } from "../../api/ws-server";
const ChatWindow = ({ send, chatHistory }) => {

    console.log("messages", chatHistory);
    return (
        <div className="chat-window">
            <CharArea send={send} messages={chatHistory} />
            <ChatList />
        </div>
    );
}

export default ChatWindow;