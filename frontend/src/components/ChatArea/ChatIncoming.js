import "../ChatWindow/ChatWindow.css";
import ChatHistory from "../Chathistory/ChatHistory";
import { connect, sendMsg } from "../../api/ws-server";
import { useEffect, useState } from "react";
import Message from "../Message/Message";

const ChatIncoming = ({ messages }) => {
    // console.log("messages", messages);
    return (
        <div className="chat incoming">
            <div className="details">
                {/* <ChatHistory chatHistory={chatHistory} /> */}
                <div className="ChatHistory">
                    <img src="/default_profile_img.png" alt="" />
                    {messages.map((message, index) => (
                        <p key={index}>{message.body}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChatIncoming;