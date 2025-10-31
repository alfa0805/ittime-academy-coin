import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} /> {/* ✅ yangi */}
      </Routes>
    </Router>
  );
};

export default App;
