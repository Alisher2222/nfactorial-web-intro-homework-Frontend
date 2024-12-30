import {HashLink as Link} from "react-router-hash-link";
import "./../style/navbar.css";
export default function Navbar(){
    return(
        <div className="navbar">
            <ul className="navbar-options">
                <li>
                    <Link to = "#home" style={{color:"#F54B58"}}>Home</Link>
                </li>
                <li>
                    <Link to = "#about">About</Link>
                </li>
                <li>
                    <Link to = "#skills">Skills</Link>
                </li>
                <li>
                    <Link to = "#projects">Projects</Link>
                </li>
                <li>
                    <Link to = "#contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
}