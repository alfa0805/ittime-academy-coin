import { Link, useLocation } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import { FaHeart, FaShoppingCart, FaHome } from "react-icons/fa";

const Navbar = () => {
  const { liked, cart } = useStore();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-blue-600 font-bold" : "text-gray-700";

  return (
    <nav className="shadow-md bg-gradient-to-br from-[#b4b7be] to-[#2d3861]  backdrop-blur-sm  shadow-[#1824a575] py-3 px-6 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold text-blue-600">
        Coin Market 🪙
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className={`flex items-center gap-1 text-white ${isActive("/")}`}>
          <FaHome className="text-lg text-yellow-400" />
          <span className="hidden sm:block">Bosh sahifa</span>
        </Link>

        <Link
          to="/favorites"
          className={`relative flex items-center gap-1 ${isActive("/favorites")}`}
        >
          <FaHeart className="text-lg text-[red]" />
          <span className="hidden sm:block text-white font-medium">Like</span>
          {liked.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-[red] text-white text-xs rounded-full font-medium text-center w-4 h-4">
              {liked.length}
            </span>
          )}
        </Link>

        <Link
          to="/cart"
          className={`relative flex items-center gap-1 ${isActive("/cart")}`}
        >
          <FaShoppingCart className="text-lg text-[#00fe00]" />
          <span className="hidden sm:block text-white font-medium">Korzinka</span>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-[#03d203] text-white text-xs font-medium text-center rounded-full w-4 h-4">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
