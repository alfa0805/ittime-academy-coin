const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Mahsulot nomi bo‘yicha qidirish..."
        className="w-full max-w-md border placeholder:text-amber-300 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
      />
    </div>
  );
};

export default SearchBar;
