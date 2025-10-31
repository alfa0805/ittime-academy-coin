import { useState } from "react";
import { gifts } from "../data/newcoins";
import GiftCard from "../components/GiftCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredGifts = gifts.filter((gift) =>
    gift.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <SearchBar search={search} setSearch={setSearch} />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
        {filteredGifts.map((item) => (
          <GiftCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
