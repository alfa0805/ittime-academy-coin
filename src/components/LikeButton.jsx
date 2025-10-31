import { FaHeart, FaRegHeart } from "react-icons/fa";

const LikeButton = ({ isLiked, onClick }) => (
  <button
    onClick={onClick}
    className="text-xl text-red-500 hover:scale-110 transition"
  >
    {isLiked ? <FaHeart /> : <FaRegHeart />}
  </button>
);

export default LikeButton;
