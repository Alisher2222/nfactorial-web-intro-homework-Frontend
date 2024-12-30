import {HashLink as Link} from "react-router-hash-link";
import "./../style/home.css";
export default function Home() {
    return (
        <div id = "home" className="home">
            <p className="home-text">Hello, I'm <span style={{color:"#F54B58"}}>Alisher</span>. <br/> I'm full stack web developer.</p>
            <Link to = "#about" className=""><button className="home-button">About me</button></Link>
        </div>
    );
}
