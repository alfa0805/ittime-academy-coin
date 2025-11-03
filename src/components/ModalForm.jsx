import { useState, useEffect } from "react";

const FIVE_MINUTES = 5 * 60 * 1000; // 5 daqiqa

const ModalForm = ({ cart = [], totalCoins = 0 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    description: "",
  });
  const [clientIP, setClientIP] = useState("Noma'lum");

  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => setClientIP(data.ip))
      .catch(() => setClientIP("Noma'lum"));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const lastSent = localStorage.getItem("lastMessageTime");
    const now = Date.now();

    if (lastSent && now - lastSent < FIVE_MINUTES) {
      const waitTimeMs = FIVE_MINUTES - (now - lastSent);
      const minutes = Math.floor(waitTimeMs / 60000);
      const seconds = Math.floor((waitTimeMs % 60000) / 1000);
      alert(`Iltimos, ${minutes} daqiqa ${seconds} soniyadan keyin qayta urinib ko‘ring.`);
      return;
    }

    const token = "8570894187:AAFdKWA4N4me1p3beAiKaWJ55FiI3vwz9Zc"; // 🔸 o'zingni bot token
    const chatId = "-1003077371198"; // 🔸 o'zingni chat ID

    // 🧾 Mahsulotlar ro‘yxatini tayyorlaymiz
    const productList = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} — ${item.coin} coin`
      )
      .join("\n");

    const message =
      `🛍️ Yangi buyurtma!\n\n` +
      `👤 Ism: ${formData.fullName}\n` +
      `📞 Telefon: ${formData.phone}\n` +
      `📝 Izoh: ${formData.description || "Yo'q"}\n\n` +
      `🎁 Tanlangan mahsulotlar:\n${productList}\n\n` +
      `💰 Umumiy: ${totalCoins} coin\n\n` +
      `🌍 IP: ${clientIP}\n🕒 ${new Date().toLocaleString()}`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      });

      if (res.ok) {
        alert("✅ Buyurtmangiz yuborildi! Tez orada siz bilan bog‘lanamiz.");
        localStorage.setItem("lastMessageTime", now.toString());
        setFormData({ fullName: "", phone: "", description: "" });
        setIsModalOpen(false);
      } else {
        alert("❌ Xabar yuborishda xatolik yuz berdi.");
      }
    } catch (err) {
      alert("Internet xatosi. Iltimos, keyinroq urinib ko‘ring.");
      console.error(err);
    }
  };

  return (
    <>
      {/* --- Sotib olish tugmasi --- */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
      >
        Sotib olish
      </button>

      {/* --- Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative animate-slideUp">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-2xl font-bold text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold text-center mb-4">
              Buyurtma berish
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                  To‘liq ism
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  type="text"
                  required
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  required
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Izoh (ixtiyoriy)
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
                ></textarea>
              </div>

              {/* --- Umumiy ma’lumotlar --- */}
              <div className="bg-gray-100 rounded-md p-3 text-sm">
                <p className="font-semibold text-gray-700 mb-1">Tanlangan mahsulotlar:</p>
                <ul className="list-disc pl-5 text-gray-600">
                  {cart.map((item, index) => (
                    <li key={index}>{item.name} — {item.coin} coin</li>
                  ))}
                </ul>
                <p className="mt-2 font-semibold text-gray-800">
                  💰 Umumiy: <span className="text-yellow-500">{totalCoins} coin</span>
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-300"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- Animatsiyalar --- */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0 }
          to { transform: translateY(0); opacity: 1 }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease forwards;
        }
      `}</style>
    </>
  );
};

export default ModalForm;
