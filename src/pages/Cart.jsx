import { useStore } from "../context/StoreContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import ModalForm from "../components/ModalForm";

const Cart = () => {
  const { cart, removeFromCart } = useStore();
  const totalCoins = cart.reduce((sum, item) => sum + item.coin, 0);

  if (cart.length === 0)
    return (
      <div className="flex flex-col items-center justify-center">
        <img src="/empty-cart.png" alt="empty" className="w-52 h-52 mb-4" />
        <h2 className="text-xl font-semibold text-white">
          Korzinka hozircha bo‘sh 🛒
        </h2>
        <Link
          to="/"
          // className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
          className="bg-gradient-to-r from-blue-500 to-cyan-400 mt-4 text-white px-5 py-2 rounded-md text-lg md:text-xl font-medium shadow-lg hover:shadow-cyan-400/50 transition hover:scale-105"
        >
          Mahsulotlarni ko‘rish
        </Link>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-3 md:p-6">
      <h2 className="text-2xl text-white font-semibold mb-6 pt-[50px] text-center">
        Sizning korzinkangiz 🛍️
      </h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} onRemove={removeFromCart} />
        ))}
      </div>
      <div className="flex justify-between items-center mt-8 border-t pt-4">
        <h3 className="text-lg text-white font-semibold">
          Jami:{" "}
          <span className="text-yellow-500 font-bold">{totalCoins} coin</span>
        </h3>
        <ModalForm cart={cart} totalCoins={totalCoins} />
      </div>
    </div>
  );
};

export default Cart;
