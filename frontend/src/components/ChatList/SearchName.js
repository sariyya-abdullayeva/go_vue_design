import "../ChatWindow/ChatWindow.css";
const SearchName = () => {
    return (
        <div className="search">
            <span className="text">Select a user to talk</span>
            <input type="text" placeholder="Enter name..." />
            <button><i className="fa fa-search"></i></button>
        </div>
    );
}

export default SearchName;