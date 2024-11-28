import stars from "./../../assets/images/stars.png";
import avatar from "./../../assets/images/ava.png";
import picture from "./../../assets/images/picture.png";
import gif from "./../../assets/images/gif.png";
import graphs from "./../../assets/images/graphs.png";
import heart from "./../../assets/images/heart.png";
import "./../style/mainContent.css";
import netflix from "./../../assets/images/netflix.png";
import checkMark from"./../../assets/images/checkMark.png";
import messages from"./../../assets/images/messages.png";
import reply from"./../../assets/images/reply.png";
import likes from "./../../assets/images/likes.png";
import group from "./../../assets/images/group.png";
import postImage from "./../../assets/images/post-image.jpeg"
export default function mainContent(){
    return(
        <div className = "main-content">
            <div className = "main-content-header">
                    <p className = "main-content-header-text">Home</p>
                    <img src={stars} alt="stars" className = "main-content-header-stars"/>
            </div>
            <div className = "tweet-editor">
                <img src={avatar} alt="avatar" className="avatar"/>
                <div className = "tweet-editor-input">
                    <p className = "tweet-editor-input-placeholder">What’s happening?</p>
                    <div className = "tweet-editor-input-buttons">
                        <div className ="tweet-editor-input-buttons-icons">
                            <img src={picture} alt="picture" className = "icons"/>
                            <img src={gif} alt="gif" className = "icons"/>
                            <img src={graphs} alt="graphs" className = "icons"/>
                            <img src={heart} alt="heart" className = "icons"/>
                        </div>
                        <button className = "tweet-button">Tweet</button>
                    </div>
                </div>
            </div>
            <div className = "homepage-message">
                <p className = "homepage-message-number">Show 5 Tweet</p>
            </div>
            <div className = "post">
                <img src={netflix} alt="account's avatar" className = "account-avatar"/>
                <div className = "post-main">
                    <div>
                        <div className = "post-information">
                            <div className = "account-data">
                                <p className = "account-data-name">Netflix Türkiye</p>
                                <img src={checkMark} alt="checkMark" className="checkMark"/>
                                <p className="account-data-description">@netflixtürkiye . 14h</p>
                            </div>
                            <div className = "post-information-dots">
                                &#8226;
                                &#8226;
                                &#8226;
                            </div>
                        </div>
                        <div className = "post-content">
                            <p className="post-text">Güneşin doğmasına 3 saat kaldı, sezonu bitirmek zorunda değilsin. </p>
                            <p className="post-teg">#YakamozS245</p>
                        </div>
                    </div>
                    <div className = "post-others">
                        <div className = "post-options">
                            <img src={messages} alt="messages" className = "post-options-icons"/>
                            <p className = "post-options-number">197</p>
                        </div>
                        <div className = "post-options">
                            <img src={reply} alt="reply" className = "post-options-icons"/>
                            <p className = "post-options-number">127</p>
                        </div>
                        <div className = "post-options">
                            <img src={likes} alt="likes" className = "post-options-icons"/>
                            <p className = "post-options-number">2,533</p>
                        </div>
                        <div className = "post-options">
                            <img src={group} alt="group" className = "post-options-icons"/>

                        </div>
                    </div>
                </div>
            </div>
            <div className = "post">
                <img src={netflix} alt="account's avatar" className = "account-avatar"/>
                <div className = "post-main">
                    <div>
                        <div className = "post-information">
                            <div className = "account-data">
                                <p className = "account-data-name">Netflix Türkiye</p>
                                <img src={checkMark} alt="checkMark" className="checkMark"/>
                                <p className="account-data-description">@netflixtürkiye . 14h</p>
                            </div>
                            <div className = "post-information-dots">
                                &#8226;
                                &#8226;
                                &#8226;
                            </div>
                        </div>
                        <div className = "post-content">
                            <p className="post-text">Güneşin doğmasına 3 saat kaldı, sezonu bitirmek zorunda değilsin. </p>
                            <p className="post-teg">#YakamozS245</p>
                        </div>
                    </div>
                    <div className = "post-others">
                        <div className = "post-options">
                            <img src={messages} alt="messages" className = "post-options-icons"/>
                            <p className = "post-options-number">197</p>
                        </div>
                        <div className = "post-options">
                            <img src={reply} alt="reply" className = "post-options-icons"/>
                            <p className = "post-options-number">127</p>
                        </div>
                        <div className = "post-options">
                            <img src={likes} alt="likes" className = "post-options-icons"/>
                            <p className = "post-options-number">2,533</p>
                        </div>
                        <div className = "post-options">
                            <img src={group} alt="group" className = "post-options-icons"/>

                        </div>
                    </div>
                </div>
            </div>
            <div className = "post">
                <img src={netflix} alt="account's avatar" className = "account-avatar"/>
                <div className = "post-main">
                    <div>
                        <div className = "post-information">
                            <div className = "account-data">
                                <p className = "account-data-name">Netflix Türkiye</p>
                                <img src={checkMark} alt="checkMark" className="checkMark"/>
                                <p className="account-data-description">@netflixtürkiye . 14h</p>
                            </div>
                            <div className = "post-information-dots">
                                &#8226;
                                &#8226;
                                &#8226;
                            </div>
                        </div>
                        <div className = "post-content">
                            <p className="post-text">Güneşin doğmasına 3 saat kaldı, sezonu bitirmek zorunda değilsin. </p>
                            <p className="post-teg">#YakamozS245</p>
                        </div>
                    </div>
                    <img src={postImage} alt="" />
                    <div className = "post-others">
                        <div className = "post-options">
                            <img src={messages} alt="messages" className = "post-options-icons"/>
                            <p className = "post-options-number">197</p>
                        </div>
                        <div className = "post-options">
                            <img src={reply} alt="reply" className = "post-options-icons"/>
                            <p className = "post-options-number">127</p>
                        </div>
                        <div className = "post-options">
                            <img src={likes} alt="likes" className = "post-options-icons"/>
                            <p className = "post-options-number">2,533</p>
                        </div>
                        <div className = "post-options">
                            <img src={group} alt="group" className = "post-options-icons"/>

                        </div>
                    </div>
                </div>
            </div>
            <div className = "post">
                <img src={netflix} alt="account's avatar" className = "account-avatar"/>
                <div className = "post-main">
                    <div>
                        <div className = "post-information">
                            <div className = "account-data">
                                <p className = "account-data-name">Netflix Türkiye</p>
                                <img src={checkMark} alt="checkMark" className="checkMark"/>
                                <p className="account-data-description">@netflixtürkiye . 14h</p>
                            </div>
                            <div className = "post-information-dots">
                                &#8226;
                                &#8226;
                                &#8226;
                            </div>
                        </div>
                        <div className = "post-content">
                            <p className="post-text">Güneşin doğmasına 3 saat kaldı, sezonu bitirmek zorunda değilsin. </p>
                            <p className="post-teg">#YakamozS245</p>
                        </div>
                    </div>
                    <div className = "post-others">
                        <div className = "post-options">
                            <img src={messages} alt="messages" className = "post-options-icons"/>
                            <p className = "post-options-number">197</p>
                        </div>
                        <div className = "post-options">
                            <img src={reply} alt="reply" className = "post-options-icons"/>
                            <p className = "post-options-number">127</p>
                        </div>
                        <div className = "post-options">
                            <img src={likes} alt="likes" className = "post-options-icons"/>
                            <p className = "post-options-number">2,533</p>
                        </div>
                        <div className = "post-options">
                            <img src={group} alt="group" className = "post-options-icons"/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}