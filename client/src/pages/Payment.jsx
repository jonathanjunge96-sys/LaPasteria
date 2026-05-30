import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const { cartItems, totalPrice } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "kort",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Vänligen fyll i alla fält!");
      return;
    }
    navigate("/confirmation");
  };

  return (
    <div className="payment">
      <h1>Betalning</h1>
      <div className="payment-content">
        <form className="payment-form" onSubmit={handleSubmit}>
          <label>Fullständigt namn:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Telefonnummer:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <label>Adress:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <label>Betalningsmetod:</label>
          <div className="payment-methods">
            <button
              type="button"
              className={formData.paymentMethod === "kort" ? "active" : ""}
              onClick={() =>
                setFormData({ ...formData, paymentMethod: "kort" })
              }
            >
              Kort
            </button>
            <button
              type="button"
              className={formData.paymentMethod === "swish" ? "active" : ""}
              onClick={() =>
                setFormData({ ...formData, paymentMethod: "swish" })
              }
            >
              Swish
            </button>
          </div>
          <button type="submit" className="confirm-btn">
            Bekräfta beställning
          </button>
        </form>
        <div className="payment-summary">
          <h3>Din beställning</h3>
          {cartItems.map((item) => (
            <p key={item._id}>
              {item.name} x{item.quantity} - {item.price * item.quantity} kr
            </p>
          ))}
          <p>
            <strong>Totalt: {totalPrice} kr</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
