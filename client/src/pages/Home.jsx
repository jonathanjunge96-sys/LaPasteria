import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Home.css";
import heroBild from "../assets/heroBild.jpg";

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
      <section className="hero" style={{ backgroundImage: `url(${heroBild})` }}>
        <div className="hero-content">
          <h1>Pasta av högsta kvalitet</h1>
          <p>Gragnano – där världens bästa pasta föds</p>
          <Link to="/products" className="hero-button">
            Handla nu
          </Link>
        </div>
        <div className="hero-quote">
          "Sedan 1500-talet har Gragnanos unika havsbris och rena källvatten
          skapat pasta av en klass som ingen annan plats i världen kan återskapa
          – ett hantverk fört vidare genom generationer."
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
