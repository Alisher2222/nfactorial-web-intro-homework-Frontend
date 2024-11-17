import "./../style/sidebar-right.css";
import search from "./../../assets/images/search.png"
import avatar from"./../../assets/images/ava1.jpeg"
export default function SidebarRight() {
    return (
       <div className="sidebar-right">
            <div className="search">
                <img src={search} alt="search" className="search-icon" />
                <p className="search-placeholder">Search Twitter</p>
            </div>
            <div className="trends">
                <div className="trends-header">
                    <p className="trends-header-text"> Trends for you</p>
                </div>
                <div className="trends-option">
                    <div className="trends-option-genre">
                        <p className="trends-option-genre-text">Politics · Trending</p>
                        <div>
                        &#8226;
                        &#8226;
                        &#8226;
                        </div>
                    </div>
                    <p className="trend-option-name">Geceliği 100</p>
                    <p className="trend-option-data">13.8K Tweets</p>
                </div>
                <div className="trends-option">
                    <div className="trends-option-genre">
                        <p className="trends-option-genre-text">Politics · Trending</p>
                        <div>
                        &#8226;
                        &#8226;
                        &#8226;
                        </div>
                    </div>
                    <p className="trend-option-name">Geceliği 100</p>
                    <p className="trend-option-data">13.8K Tweets</p>
                </div>
                <div className="trends-option">
                    <div className="trends-option-genre">
                        <p className="trends-option-genre-text">Politics · Trending</p>
                        <div>
                        &#8226;
                        &#8226;
                        &#8226;
                        </div>
                    </div>
                    <p className="trend-option-name">Geceliği 100</p>
                    <p className="trend-option-data">13.8K Tweets</p>
                </div>
                <div className="trends-option">
                    <div className="trends-option-genre">
                        <p className="trends-option-genre-text">Politics · Trending</p>
                        <div>
                        &#8226;
                        &#8226;
                        &#8226;
                        </div>
                    </div>
                    <p className="trend-option-name">Geceliği 100</p>
                    <p className="trend-option-data">13.8K Tweets</p>
                </div>
                <div className="trends-option">
                    <div className="trends-option-genre">
                        <p className="trends-option-genre-text">Politics · Trending</p>
                        <div>
                        &#8226;
                        &#8226;
                        &#8226;
                        </div>
                    </div>
                    <p className="trend-option-name">Geceliği 100</p>
                    <p className="trend-option-data">13.8K Tweets</p>
                </div>
                <div className="trends-option">
                    <div className="trends-option-genre">
                        <p className="trends-option-genre-text">Politics · Trending</p>
                        <div>
                        &#8226;
                        &#8226;
                        &#8226;
                        </div>
                    </div>
                    <p className="trend-option-name">Geceliği 100</p>
                    <p className="trend-option-data">13.8K Tweets</p>
                </div>
                <div className="trends-option-end">
                    <p className="trends-option-end-text">Show more</p>
                </div>
            </div>
            <div className="follow-recommendations">
                <p className="follow-recommendations-title">Who to follow</p>
                <div className="user">
                    <img src={avatar} alt="avatar" className="avatar"/>
                    <div className="user-data">
                        <div>
                            <p className="user-name">İlber Ortaylı</p>
                            <p className="user-tag">@ILBERORTAYLIGSU</p>
                        </div>
                        <button className="subscribe-button">Follow</button>
                    </div>
                </div>
                <div className="user">
                    <img src={avatar} alt="avatar" className="avatar"/>
                    <div className="user-data">
                        <div>
                            <p className="user-name">İlber Ortaylı</p>
                            <p className="user-tag">@ILBERORTAYLIGSU</p>
                        </div>
                        <button className="subscribe-button">Follow</button>
                    </div>
                </div>
                <div className="trends-option-end">
                    <p className="trends-option-end-text">Show more</p>
                </div>
            </div>
       </div>
    );
}
