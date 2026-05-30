import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "./NavBar.css";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    clearCart(); // rensar varukorgen till nästa användare
    navigate("/login");
  };

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
        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logga ut
          </button>
        ) : (
          <Link to="/login">Logga in</Link>
        )}
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
