import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Home.css";

function Home() {
  const [popularProducts, setPopularProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setPopularProducts(data.slice(0, 4)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Pasta av högsta kvalitet</h1>
          <p>Gragnano – där världens bästa pasta föds</p>
          <Link to="/products" className="hero-button">
            Handla nu
          </Link>
        </div>
      </section>
      <section className="popular">
        <h2>Populära produkter</h2>
        <div className="popular-grid">
          {popularProducts.map((product) => (
            <div key={product._id} className="popular-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image" //lägger till bilder via servern
              />
              <h3>{product.name}</h3>
              <p>{product.price} kr</p>
              <button onClick={() => addToCart(product)}>
                Lägg i varukorg
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
