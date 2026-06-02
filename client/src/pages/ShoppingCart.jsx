import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";

function ShoppingCart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="cart">
      <Link to="/products" className="back-btn">
        Tillbaka
      </Link>
      <h1>Varukorg</h1>
      {cartItems.length === 0 ? (
        <p>
          Din varukorg är tom. <Link to="/products">Handla här!</Link>
        </p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <div className="cart-item-image"></div>
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.price} kr</p>
                </div>
                <div className="cart-item-quantity">
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  Ta bort
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Din beställning</h3>
            <p>Totalbelopp: {totalPrice} kr</p>
            <Link to="/payment" className="checkout-btn">
              Gå vidare till betalning
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
