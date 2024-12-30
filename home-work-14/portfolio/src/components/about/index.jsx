import "./../style/about.css";
import PHOTO from "./../../assets/about-image.png";

export default function About() {
    return (
        <div className="about" id="about">
            <h2 className="about-heading">About</h2>
            <div className="about-content-description">
                <img src={PHOTO} alt="A descriptive photo representing about section" className="about-content-image"/>
                <p className="about-text">
                    <span style={{color:"#F54B58", fontSize: "clamp(2rem, 2vw, 3rem)"}}>Welcome</span> to the about section! 
                    I am passionate about crafting logic with JavaScript💻,
                     enjoying the process of coding and solving complex problems👨‍🔬. 
                     In my free time, I find inspiration in music—I play the 🎸guitar and 🎤sing,
                      which allows me to express my creativity and maintain a balance between work and hobbies⚖️.
                </p>
            </div>
        </div>
    );
}
