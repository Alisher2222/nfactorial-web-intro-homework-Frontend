import JS from "./../../assets/js.png";
import HTML from "./../../assets/html.png";
import CSS from "./../../assets/css.png";
import REACT from "./../../assets/react.png";
import REDUX from "./../../assets/redux.png";
import GIT from "./../../assets/git.png";
import "./../style/skills.css";
export default function Skills(){
    return(
        <div className="skills" id = "skills">
            <p className="skills-heading">Skills</p>
            <div className="skills-cards">
                <div className="card ">
                    <img src={JS} alt="Javascript" className="card-image"/>
                    <p className="card-name">Javascript</p>
                </div>
                <div className="card ">
                    <img src={HTML} alt="HTML" className="card-image"/>
                    <p className="card-name">HTML</p>
                </div>
                <div className="card ">
                    <img src={CSS} alt="CSS" className="card-image"/>
                    <p className="card-name">CSS</p>
                </div>
            </div>
            <div className="skills-cards">
                <div className="card ">
                    <img src={REACT} alt="React" className="card-image"/>
                    <p className="card-name">React</p>
                </div>
                <div className="card ">
                    <img src={REDUX} alt="Redux" className="card-image"/>
                    <p className="card-name">Redux</p>
                </div>
                <div className="card ">
                    <img src={GIT} alt="git" className="card-image"/>
                    <p className="card-name">Git</p>
                </div>
            </div>
        </div>
    );
}