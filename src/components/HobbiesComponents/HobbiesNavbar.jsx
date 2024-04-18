import "../../css/Hobbies/Navbar.css"
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <NavLink to="/hobbies" className="nav-title">My Hobbies</NavLink>
            <NavLink to="/" className="nav-links">HOME</NavLink>
        </nav>
    );
}

export default Navbar;