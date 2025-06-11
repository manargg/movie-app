import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="navBar-brand">
            <Link to="/" style={{display: "flex", alignItems: "center"}}><img src={logo} alt="logo" style={{marginRight: "4px", width: "30px", textAlign: "center"}}/> Movie App</Link>
        </div>

        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
  )
}

export default NavBar