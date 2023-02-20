import React, { useEffect, useState } from "react";
import ChatOutgoing from "./ChatOutgoing";
import ChatIncoming from "./ChatIncoming";
import "../ChatWindow/ChatWindow.css";

const ChatBox = ({ messages }) => {

    return (
        <div className="chat-box">
            <div className="ChatHistory">
                <img src="/default_profile_img.png" alt="" />
                {messages.map((message, index) => (
                    <p key={index}>{message.body}</p>
                ))}
            </div>

            {/* <ChatOutgoing />
            <ChatIncoming messages={messages} /> */}
        </div>
    );
}

export default ChatBox;