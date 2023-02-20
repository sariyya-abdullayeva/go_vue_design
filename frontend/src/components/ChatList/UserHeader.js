
import "../ChatWindow/ChatWindow.css";

const UserHeader = () => {
    return (
        <header>
            <div className="content">
                <img src="/default_profile_img.png" alt="" />
                <div className="details">
                    <span>Sariyya Abdullayeva</span>
                    <p>Active now</p>
                </div>
            </div>
        </header>);
}

export default UserHeader;