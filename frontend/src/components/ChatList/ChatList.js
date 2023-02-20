import "../ChatWindow/ChatWindow.css";
import SearchName from './SearchName';
import UserHearder from './UserHeader';
import UserList from './UserList';

const ChatList = () => {
    return (
        <div className="chat_wrapper">
            <section className="users">
                <UserHearder />
                <SearchName />
                <UserList />
            </section>
        </div>
    );
}

export default ChatList;