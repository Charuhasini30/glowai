import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Glow<span>AI</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/salons">Salons</Link>
        <Link to="/advisor">Advisor</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/trends">Trends</Link>
      </div>

      <Link to="/salons">
        <button className="nav-btn">
          Explore Salons
        </button>
      </Link>

    </nav>
  );
}

export default Navbar;