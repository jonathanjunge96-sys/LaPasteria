import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const { cartItems, totalPrice } = useCart();
  const { token } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("paymentForm")) || {
      name: "",
      email: "",
      phone: "",
      address: "",
      paymentMethod: "kort",
    },
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {}, [formData]);

  // Spara formulärdata i localStorage så det finns kvar vid refresh
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("paymentForm", JSON.stringify(formData));
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Vänligen fyll i alla fält!");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            product_id: item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
          totalPrice,
          shippingInfo: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
          },
          paymentMethod: formData.paymentMethod,
        }),
      });
      if (res.ok) {
        navigate("/confirmation");
      } else {
        alert("Något gick fel med beställningen!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="payment">
      <h1>Betalning</h1>
      <Link to="/cart" className="back-btn">
        Tillbaka
      </Link>
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
              className={formData.paymentMethod === "swish" ? "active" : ""} //Terery operator som skiftar css klass. Vald knapp blir grön och andra blir transparent.
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
