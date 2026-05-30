import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Confirmation.css";

function Confirmation() {
  const { cartItems, totalPrice } = useCart();

  return (
    <div className="confirmation">
      <h1>Tack för din beställning!</h1>
      <p>Din beställning är bekräftad och skickas inom 1-3 vardagar.</p>
      <div className="confirmation-summary">
        <h3>Din beställning:</h3>
        {cartItems.map((item) => (
          <p key={item._id}>
            {item.name} x{item.quantity} - {item.price * item.quantity} kr
          </p>
        ))}
        <p>
          <strong>Totalt: {totalPrice} kr</strong>
        </p>
      </div>
      <Link to="/products" className="continue-btn">
        Fortsätt handla
      </Link>
    </div>
  );
}

export default Confirmation;
