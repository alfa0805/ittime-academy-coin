import { useParams, Link } from "react-router-dom";
import { gifts } from "../data/newcoins";
import { useStore } from "../context/StoreContext";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";

const Details = () => {
  const { id } = useParams();
  const { liked, toggleLike, addToCart, removeFromCart, cart } = useStore();

  const product = gifts.find((item) => item.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product?.images[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="text-center mt-20 text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Mahsulot topilmadi 😕</h2>
        <Link
          to="/"
          className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    );
  }

  const isLiked = liked.some((l) => l.id === product.id);
  const inCart = cart.some((c) => c.id === product.id);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Link
        to="/"
        className="inline-block mb-6 text-blue-600 hover:underline font-medium"
      >
        ← Orqaga qaytish
      </Link>

      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl p-6 relative">
        {/* Like ikonkasi tepada */}
        {/* Chap tomonda rasm qismi */}
        <div className="flex flex-col items-center">
          <div className="w-full h-96 flex items-center justify-center border rounded-lg bg-gray-50 overflow-hidden">
            <img
              src={mainImage}
              alt={product.name}
              className="object-contain w-full h-full transition-all duration-300"
            />
          </div>

          <div className="flex gap-3 mt-4">
            {product.images.slice(0, 4).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition ${
                  mainImage === img
                    ? "border-blue-500 scale-105"
                    : "border-transparent hover:border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* O‘ng tomonda ma’lumotlar */}
        <div className="flex flex-col justify-between relative">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              {product.name}
            </h1>
            <p className="text-yellow-600 font-semibold text-xl mb-5">
              💰 {product.coin} coin
            </p>
            <p className="text-gray-700 leading-relaxed mb-5">
              Bu mahsulot haqida batafsil ma’lumotni bu yerda ko‘rishingiz
              mumkin. Mahsulot original, yuqori sifatli va yetkazib berish
              mavjud.
            </p>
          </div>
          <div className="flex items-center gap-10">
            {/* Korzinka button ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <button
            onClick={() =>
              inCart ? removeFromCart(product.id) : addToCart(product)
            }
            className="text-2xl flex items-center gap-2 border-2 text-[#00fe00] border-[#00fe00] px-3 py-1 rounded-xl font-bold transition hover:scale-110"
          >
              <span className="text-2xl text-[#00fe00]">
              {inCart ?  <MdShoppingCart /> : <MdOutlineShoppingCart /> }
              </span>
            Korzinka
          </button>

          {/* Like button ~~~~~~~~~~~~~ */}
            <button
              onClick={() => toggleLike(product)}
              className="flex items-center gap-2 border-2 border-[red] px-3 py-1 rounded-xl font-bold text-2xl text-red-500 transition hover:scale-110"
            >
              <span className="text-2xl text-red-500">
              {isLiked ? <FaHeart /> : <FaRegHeart />}
              </span>
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
