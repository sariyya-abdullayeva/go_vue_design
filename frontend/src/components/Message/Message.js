
import React, { useState, useEffect } from 'react';
import "./Message.css";



const Message = (data) => {
    console.log("data in message", data.message.body);
    return (
        <div className="message">
            {data.message.body}
        </div>
    );
};



export default Message;