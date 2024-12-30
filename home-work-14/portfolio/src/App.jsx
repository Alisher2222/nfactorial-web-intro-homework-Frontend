import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Home from "./components/home"
import Projects from "./components/projects"
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/navbar";
import Skills from "./components/skills"
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App
