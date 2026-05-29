import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Pasta av högsta kvalitet</h1>
          <p>Gragnano - där världens bästa pasta föds</p>
          <Link to="/products" className="hero-button">
            Handla nu
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
