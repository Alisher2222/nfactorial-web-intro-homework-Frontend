import "./../style/footer.css";
import GIT from "./../../assets/git-footer.png";
export default function Footer(){
    return(
        <div className="footer">
            <a href = "https://github.com/Alisher2222"><img src={GIT} alt="git" className="footer-icon"/></a>
        </div>
    );
}