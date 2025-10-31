import { createContext, useContext, useState, useEffect } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const loadData = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("❌ LocalStorage error:", error);
      return [];
    }
  };

  const [liked, setLiked] = useState(() => loadData("liked"));
  const [cart, setCart] = useState(() => loadData("cart"));

  // 🔁 Ma’lumotlarni doim saqlab borish
  useEffect(() => {
    try {
      localStorage.setItem("liked", JSON.stringify(liked));
    } catch (error) {
      console.error("❌ Like saqlashda xato:", error);
    }
  }, [liked]);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("❌ Cart saqlashda xato:", error);
    }
  }, [cart]);

  // 🔒 Sahifa yopilayotganda ham ma’lumotni qayta yozish (ishonch uchun)
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("liked", JSON.stringify(liked));
      localStorage.setItem("cart", JSON.stringify(cart));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [liked, cart]);

  // ❤️ Like funksiyasi
  const toggleLike = (product) => {
    setLiked((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      return exists
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product];
    });
  };

  // 🛒 Korzinka funksiyalari
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <StoreContext.Provider
      value={{ liked, toggleLike, cart, addToCart, removeFromCart }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
