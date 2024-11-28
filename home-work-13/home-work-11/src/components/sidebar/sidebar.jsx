import twitter from "./../../assets/images/twitter.png";
import home from "./../../assets/images/home.png";
import explore from "./../../assets/images/explore.png";
import notifications from "./../../assets/images/notifications.png";
import messages from "./../../assets/images/messages.png";
import bookmarks from "./../../assets/images/bookmarks.png";
import lists from "./../../assets/images/lists.png";
import profile from "./../../assets/images/profile.png";
import more from "./../../assets/images/more.png";
import avatar from "./../../assets/images/ava.png"
import additional from "./../../assets/images/additional.png"

import "../style/sidebar.css";
export default function Sidebar(){
    return(
        <div className = "sidebar">
            <div className = "options">
                <div className = "row">
                    <img src={twitter} alt="twitter" className = "options-img"/>
                </div>
                <div className = "row">
                    <img src={home} alt="home" className = "options-img"/>
                    <p className = "options-text">Home</p>
                </div>
                <div className = "row">
                    <img src={explore} alt="Explore" className = "options-img"/>
                    <p className = "options-text">Explore</p>
                </div>  
                <div className = "row">
                    <img src={notifications} alt="Notifications" className = "options-img"/>
                    <p className = "options-text">Notifications</p>
                </div>
                <div className = "row">
                    <img src={messages} alt="Messages" className = "options-img"/>
                    <p className = "options-text">Messages</p>
                </div>
                <div className = "row">
                    <img src={bookmarks} alt="Bookmarks" className = "options-img"/>
                    <p className = "options-text">Bookmarks</p>
                </div>
                <div className = "row">
                    <img src={lists} alt="Lists" className = "options-img"/>
                    <p className = "options-text">Lists</p>
                </div>
                <div className = "row">
                    <img src={profile} alt="Profile" className = "options-img"/>
                    <p className = "options-text">Profile</p>
                </div>
                <div className = "row">
                    <img src={more} alt="More" className = "options-img"/>
                    <p className = "options-text">More</p>
                </div>
                <button className = "options-button">Tweet</button>
            </div>
            <div className = "user-profile">
                <div className="user-profile-left">
                <img src={avatar} alt="avatar" className="avatar"/>
                <div className="user-profile-data">
                    <p className="user-name">Utku Tunçal</p>
                    <p className="user-tag">@TuncalUtku</p>
                </div>
                </div>
                <img src={additional} alt="additional" className="additional-icon"/>
            </div>
        </div>
    );
}
