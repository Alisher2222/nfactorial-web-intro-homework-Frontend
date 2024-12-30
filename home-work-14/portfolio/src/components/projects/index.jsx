import "./../style/projects.css";
import TODOLIST from "./../../assets/todolist.png";
import PROTFOLIO from "./../../assets/portfolio.png"
export default function Projects(){
    return( 
        <div className="projects" id = "projects">
            <p className="projects-headder">Projects</p>
            <div className="project">
                <div className="projects-container">
                    <img src={TODOLIST} alt="todolist" className="project-image" />
                </div>
                <div className="project-text">
                    <p className="project-title">Todolist</p>
                    <p className="project-description">
                    The To-Do List App, built with React, CSS, and JavaScript, allows task management with LocalStorage for persistence and SessionStorage for temporary data in a responsive, user-friendly interface.</p>
                    <a href="https://github.com/Alisher2222/nfactorial-web-intro-homework-Frontend/tree/main/home-work-12---/home-work-12---" className="project-href">Learn more</a>
                </div>
            </div>
            <div className="project-right">
                <div className="projects-container-right">
                    <img src={PROTFOLIO} alt="todolist" className="project-image" />
                </div>
                <div className="project-text-right">
                    <p className="project-title">Portfolio</p>
                    <p className="project-description">
                    A responsive portfolio website built with HTML, CSS, React, Redux, and React Router DOM. It features smooth navigation, dynamic routing, state management, and showcases projects and skills in an interactive and user-friendly interface.</p>
                    <a href="" className="project-href">Learn more</a>
                </div>
            </div>
        </div>
    );
}