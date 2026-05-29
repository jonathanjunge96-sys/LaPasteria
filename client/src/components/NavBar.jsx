import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <span className="logo-la">la</span>
          <span className="logo-pasteria">Pasteria</span>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/products">Produkter</Link>
        <Link to="/cart">Varukorg</Link>
        <Link to="/login">Logga in</Link>
      </div>
      <div className="navbar-flag">
        <span className="flag-green"></span>
        <span className="flag-white"></span>
        <span className="flag-red"></span>
      </div>
    </nav>
  );
}

export default Navbar;
