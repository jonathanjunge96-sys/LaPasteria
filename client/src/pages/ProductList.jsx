import { useState, useEffect } from "react";
import "./ProductList.css";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("alla");
  const { toggleFavorite, isFavorite } = useFavorites();

  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts = products.filter((product) => {
    if (filter === "alla") return true;
    return product.category === filter;
  });

  return (
    <div className="product-list">
      <Link to="/" className="back-btn">
        Tillbaka
      </Link>
      <div className="filter-buttons">
        <button onClick={() => setFilter("alla")}>All pasta</button>
        <button onClick={() => setFilter("lang")}>Lång pasta</button>
        <button onClick={() => setFilter("kort")}>Kort pasta</button>
      </div>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product._id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image" //lägger till bilder via servern
            />
            <button
              className={`favorite-btn ${isFavorite(product._id) ? "favorited" : ""}`}
              onClick={() => toggleFavorite(product)}
            >
              {isFavorite(product._id) ? "❤️" : "🤍"}
            </button>
            <h3>{product.name}</h3>
            <p>{product.price} kr</p>
            <button onClick={() => addToCart(product)}>Lägg i varukorg</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
