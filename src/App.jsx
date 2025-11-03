import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

const App = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 0.5 sekunddan keyin loadingni o‘chiradi
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;
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
