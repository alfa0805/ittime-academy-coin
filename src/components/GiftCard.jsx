import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useStore } from "../context/StoreContext";
import Coin from "../assets/coin.png";
import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";

const GiftCard = ({ id, name, coin, images }) => {
  const navigate = useNavigate();
  const { liked, toggleLike, cart, addToCart, removeFromCart } = useStore();

  const isLiked = liked.some((l) => l.id === id);
  const inCart = cart.some((c) => c.id === id);

  return (
    <div className="relative h-[380px] cursor-pointer w-full max-w-sm mx-auto rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(0,191,255,0.5)] bg-gradient-to-br from-[#b4b7be] to-[#2d3861] text-white border border-slate-700">
      {/* LIKE ICON */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleLike({ id, name, coin, images });
        }}
        className="absolute top-3 p-1 rounded-lg bg-black/50 right-3 z-10 hover:scale-110 transition"
      >
        {isLiked ? (
          <FaHeart className="text-red-500 text-xl drop-shadow-md" />
        ) : (
          <FaRegHeart className="text-[#ff0000ba] text-xl" />
        )}
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          inCart ? removeFromCart(id) : addToCart({ id, name, coin, images });
        }}
        className="text-2xl p-1 rounded-lg bg-black/50 absolute top-3 left-3 z-10 flex items-center gap-2 text-[#00fe00] font-bold transition hover:scale-110"
      >
        <span className="text-2xl text-[#00fe00]">
          {inCart ? <MdShoppingCart /> : <MdOutlineShoppingCart />}
        </span>
      </button>

      {/* IMAGE */}
      <div
        onClick={() => navigate(`/details/${id}`)}
        className="relative  w-full flex items-center justify-center h-[250px] overflow-hidden"
      >
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* INFO */}
      <div className="p-4 flex h-[130px] flex-col justify-between gap-3">
        <h2 className="text-md sm:text-lg leading-[20px] font-semibold text-white tracking-wide">
          {name}
        </h2>

        <div className="flex justify-between items-center">
          <span className="text-yellow-400 font-bold flex items-center gap-2">
            <img src={Coin} className="w-5 h-5" alt="coin" />
            {coin}
          </span>

          <button
            onClick={() => navigate(`/details/${id}`)}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-1.5 rounded-md text-sm font-medium shadow-lg hover:shadow-cyan-400/50 transition hover:scale-105"
          >
            Batafsil
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
