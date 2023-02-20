import "../ChatWindow/ChatWindow.css";
const UserList = () => {
    return (
        <div className="users-list">
            <a href="#">
                <div className="content">
                    <img src="/default_profile_img.png" alt="" />
                    <div className="details">
                        <span>Sariyya Abdullayeva</span>
                        <p>This is a test messages</p>
                    </div>
                </div>
                <div className="status-dot"><i className="fa fa-circle"></i></div>
            </a>
        </div>
    );
}

export default UserList;