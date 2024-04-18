import "../../css/Navbar.css"
import { NavLink } from "react-router-dom";
function Navbar(){
    return (
        <nav>
        <NavLink to="/" className="nav-title">Arnav Chaturvedi</NavLink>
        <a href="#about-me" className="nav-links">ABOUT ME</a>
        <a href="#education" className="nav-links">EDUCATION</a>
        <a href="#projects" className="nav-links">PROJECTS</a>
        <a href="#skills" className="nav-links">SKILLS</a>
    </nav>
    );
}

export default Navbar; 