import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartItem = ({ item, onRemove }) => {

   const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <img
          src={item.images[0]}
          alt={item.name}
          className="w-20 h-20 object-contain rounded-md"
        />
        <div>
          <p className="font-semibold text-gray-800">{item.name}</p>
          <p className="text-yellow-500 font-medium text-sm">
            {item.coin} coin
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(`/details/${item.id}`)}
          className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-1.5 rounded-md text-sm font-medium shadow-lg hover:shadow-cyan-400/50 transition hover:scale-105"
        >
          Batafsil
        </button>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 font-semibold"
        >
          <FaTrashAlt className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
