import "./../style/sidebar-right.css";
import search from "./../../assets/images/search.png"
import avatar from"./../../assets/images/ava1.jpeg"
import {useState} from 'react';
export default function SidebarRight() {
    const articles = [
        { category: "politics", title: "Global Summit 2024: Key Outcomes and Debates", views: "13.8K" },
        { category: "politics", title: "Elections 2024: What to Expect?", views: "10.5K" },
        { category: "politics", title: "New Policies Reshaping International Relations", views: "9.2K" },
        { category: "politics", title: "Top Political Scandals of the Year", views: "15.3K" },
        { category: "politics", title: "How Technology is Influencing Politics", views: "12.7K" },
        { category: "politics", title: "Climate Change and Government Strategies", views: "11.4K" },
        { category: "politics", title: "The Rise of Youth Leaders in Politics", views: "8.3K" },
        { category: "politics", title: "Major Trade Agreements: Who Wins?", views: "14.1K" },
        { category: "politics", title: "Human Rights Movements: A Global Perspective", views: "10.9K" },
        { category: "politics", title: "The Role of Social Media in Elections", views: "13.2K" },
        { category: "politics", title: "Economic Sanctions: Pros and Cons", views: "7.8K" },
        { category: "politics", title: "Understanding Political Polarization", views: "11.7K" },
        { category: "politics", title: "The Future of Global Alliances", views: "9.5K" },
        { category: "politics", title: "Corruption: Can It Be Eradicated?", views: "10.2K" },
        { category: "politics", title: "The Impact of AI on Policy Making", views: "12.3K" },
        { category: "politics", title: "Political Campaign Strategies: Then and Now", views: "14.6K" },
        { category: "politics", title: "Defense Budgets: A Global Comparison", views: "8.7K" },
        { category: "politics", title: "Democracy vs. Authoritarianism: A Case Study", views: "10.8K" },
        { category: "politics", title: "Key Challenges in Global Governance", views: "9.9K" },
        { category: "politics", title: "Evolving Relations Between Superpowers", views: "11.6K" }
      ];
      const [inputSearch, setinputSearch] = useState('');
      function changeInputSearch(event){
        setinputSearch(event.target.value);
      }
      
    return (
       <div className="sidebar-right">
            <div className="search">
                <img src={search} alt="search" className="search-icon" />
                <input type="text" className = "search-input" placeholder="search for tweet" value = {inputSearch} onChange={changeInputSearch}/>
            </div>
            <div className="trends">
                <div className="trends-header">
                    <p className="trends-header-text"> Trends for you</p>
                </div>
                {(inputSearch !="") ? 
                (articles.filter((article)=>article.title.includes(inputSearch)).map((article, index) => (
                    <div className="trends-option" key={index}>
                        <div className="trends-option-genre">
                            <p className="trends-option-genre-text">{article.category}</p>
                            <div>
                                &#8226;
                                &#8226;
                                &#8226;
                            </div>
                        </div>
                        <p className="trend-option-name">{article.title}</p>
                        <p className="trend-option-data">{article.views} Tweets</p>
                    </div>
                ))
            
            )
                :(articles.map((article, index) => (
                    <div className="trends-option" key={index}>
                        <div className="trends-option-genre">
                            <p className="trends-option-genre-text">{article.category}</p>
                            <div>
                                &#8226;
                                &#8226;
                                &#8226;
                            </div>
                        </div>
                        <p className="trend-option-name">{article.title}</p>
                        <p className="trend-option-data">{article.views} Tweets</p>
                    </div>
                )))}

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
