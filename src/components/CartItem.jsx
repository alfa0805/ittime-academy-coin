const CartItem = ({ item, onRemove }) => {
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
          <p className="text-yellow-600 font-medium text-sm">{item.coin} coin</p>
        </div>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 font-semibold"
      >
        O‘chirish ✖
      </button>
    </div>
  );
};

export default CartItem;
