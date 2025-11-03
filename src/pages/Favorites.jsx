import { useStore } from "../context/StoreContext";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

const Favorites = () => {
  const { liked, toggleLike, addToCart, cart } = useStore();

  if (liked.length === 0)
    return (
      <div className="flex flex-col items-center justify-center">
        <img src="/empty-fav.png" alt="empty" className="w-52 h-52 mb-4" />
        <h2 className="text-xl font-semibold text-white">
          Hozircha yoqtirilgan mahsulot yo‘q ❤️
        </h2>
        <Link
          to="/"
          className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Mahsulotlarni ko‘rish
        </Link>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto ">
      <h2 className="text-2xl font-semibold text-white pt-[70px] mb-6 text-center">
        Yoqtirilgan mahsulotlar ❤️
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {liked.map((item) => {
          const inCart = cart.some((c) => c.id === item.id);
          return (
            <div
              key={item.id}
              className="bg-gradient-to-br from-[#b4b7be] to-[#2d3861] text-white shadow-lg rounded-xl p-4 flex flex-col justify-between hover:shadow-xl transition"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-44 object-contain rounded-md mb-3"
              />
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-yellow-600 font-medium mb-3">
                {item.coin} coin
              </p>

              <div className="flex justify-between items-center mt-auto">
                <button
                  onClick={() => toggleLike(item)}
                  className="text-red-500 hover:text-red-600 text-lg"
                >
                  <FaTrashAlt />
                </button>
                <button
                  onClick={() => addToCart(item)}
                  className={`flex items-center gap-1 px-3 py-1 rounded-md font-semibold text-sm transition ${
                    inCart
                      ? "bg-green-500 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  <FaShoppingCart />
                  {inCart ? "Qo‘shilgan" : "Korzinkaga"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
