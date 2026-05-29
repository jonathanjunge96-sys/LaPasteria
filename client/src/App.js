import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound"
import Navbar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      {/* Navbaren här för att den ska synas på alla sidor */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} /> // Skickar alla ogiltiga
        URL-anrop till ErrorPage
      </Routes>
    </BrowserRouter>
  );
}
// Definierar mina routes.
export default App;
