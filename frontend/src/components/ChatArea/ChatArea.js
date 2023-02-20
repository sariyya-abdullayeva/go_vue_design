
import UserHeader from '../ChatList/UserHeader';
import ChatBox from './ChatBox';
import "../ChatWindow/ChatWindow.css";
// import ChatInput from '../ChatInput/ChatInput';


const CharArea = ({ send, messages }) => {

    return (
        <div className="chat-area">
            <UserHeader />
            <ChatBox messages={messages} />
            {/* <form className="typing-area"> */}
            <div className="typing-area">
                <div className="ChatInput">
                    <input onKeyDown={send} />
                </div>
                {/* <button type='submit'>Submit</button> */}
                {/* </form> */}
            </div>
        </div>
    );
}

export default CharArea;


