import { Link, useLocation } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import { FaHeart, FaShoppingCart, FaHome } from "react-icons/fa";

const Navbar = () => {
  const { liked, cart } = useStore();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-blue-600 font-bold" : "text-gray-700";

  return (
    <nav className="bg-black shadow-md py-3 px-6 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold text-blue-600">
        Coin Market 🪙
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className={`flex items-center gap-1 ${isActive("/")}`}>
          <FaHome className="text-lg" />
          <span className="hidden sm:block">Bosh sahifa</span>
        </Link>

        <Link
          to="/favorites"
          className={`relative flex items-center gap-1 ${isActive("/favorites")}`}
        >
          <FaHeart className="text-lg text-red-500" />
          <span className="hidden sm:block">Like</span>
          {liked.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
              {liked.length}
            </span>
          )}
        </Link>

        <Link
          to="/cart"
          className={`relative flex items-center gap-1 ${isActive("/cart")}`}
        >
          <FaShoppingCart className="text-lg text-green-600" />
          <span className="hidden sm:block">Korzinka</span>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs rounded-full px-1">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
