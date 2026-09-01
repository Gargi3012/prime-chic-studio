import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, ShoppingBag, Eye, Bot } from "lucide-react";
import { products, footwear, inr, type Product } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  matchedProducts?: Product[];
}

interface AIStyleAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onQuickView?: (product: Product) => void;
}

export function AIStyleAssistant({
  isOpen,
  onClose,
  onQuickView,
}: AIStyleAssistantProps) {
  const { addToCart } = useCart();
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Welcome to Prime Outlet! ✨ I'm your AI Luxury Stylist. Tell me what style or occasion you are shopping for today!",
    },
  ]);

  const allItems = [...products, ...footwear];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const lower = query.toLowerCase();
    let matches = allItems.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.brand.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower) ||
        p.description?.toLowerCase().includes(lower) ||
        (lower.includes("sneaker") && p.name.toLowerCase().includes("sneaker")) ||
        (lower.includes("jacket") && p.name.toLowerCase().includes("jacket")) ||
        (lower.includes("under 6000") && p.price < 6000) ||
        (lower.includes("under 5000") && p.price < 5000)
    );

    if (matches.length === 0) {
      matches = allItems.slice(0, 3);
    }

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: `Here are the top ${query} recommendations from our Ganaur collection:`,
        matchedProducts: matches.slice(0, 3),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-2 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Chat Window */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="relative flex h-[500px] w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-2xl text-[#18181B] z-10"
          >
            {/* Top Header */}
            <div className="flex items-center justify-between border-b border-black/[0.06] bg-[#FAF9F6] px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-[#C59B27] text-white">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-[#18181B] tracking-tight">AI LUXURY STYLIST</h3>
                  <p className="text-[0.6rem] font-bold text-[#8C6D1F]">✦ Live Concierge · Ganaur</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#18181B] border border-black/[0.06] hover:scale-105"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Messages Stream */}
            <div className="no-scrollbar flex-1 space-y-3 overflow-y-auto p-3.5 bg-gradient-to-b from-[#FAF9F6] to-white">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                      m.sender === "user"
                        ? "bg-[#C59B27] text-white font-medium rounded-br-none shadow-xs"
                        : "border border-black/[0.06] bg-white text-[#18181B] rounded-bl-none shadow-xs"
                    }`}
                  >
                    {m.text}
                  </div>

                  {/* Matched Product Cards */}
                  {m.matchedProducts && m.matchedProducts.length > 0 && (
                    <div className="mt-2.5 w-full space-y-2">
                      {m.matchedProducts.map((prod) => (
                        <div
                          key={prod.id}
                          className="flex items-center justify-between rounded-xl border border-black/[0.06] bg-white p-2 shadow-xs"
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src={prod.image}
                              alt={prod.name}
                              className="h-11 w-11 rounded-lg object-cover"
                            />
                            <div>
                              <p className="text-[0.55rem] font-bold text-[#C59B27] uppercase">{prod.brand}</p>
                              <p className="text-xs font-bold text-[#18181B] truncate max-w-[120px]">{prod.name}</p>
                              <p className="text-xs font-extrabold text-[#18181B]">{inr(prod.price)}</p>
                            </div>
                          </div>

                          <div className="flex gap-1">
                            <button
                              onClick={() => onQuickView?.(prod)}
                              className="grid h-7 w-7 place-items-center rounded-lg border border-black/[0.08] bg-[#FAF9F6] text-[#18181B] hover:border-[#C59B27]"
                              title="Quick View"
                            >
                              <Eye className="h-3 w-3" />
                            </button>
                            <button
                              onClick={() => addToCart(prod)}
                              className="grid h-7 w-7 place-items-center rounded-lg bg-[#C59B27] text-white hover:bg-[#B8860B]"
                              title="Add to Bag"
                            >
                              <ShoppingBag className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="no-scrollbar flex gap-1.5 overflow-x-auto border-t border-black/[0.05] bg-[#FAF9F6] p-2">
              {[
                "🔥 Best Selling Jackets",
                "👟 Top Sneakers",
                "✨ Outfits Under ₹3,000",
                "👔 Formal Sets",
              ].map((pill) => (
                <button
                  key={pill}
                  onClick={() => handleSend(pill)}
                  className="whitespace-nowrap rounded-full border border-black/[0.08] bg-white px-2.5 py-1 text-[0.62rem] font-semibold text-[#71717A] transition-colors hover:border-[#C59B27] hover:text-[#C59B27]"
                >
                  {pill}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="flex items-center gap-1.5 border-t border-black/[0.06] bg-white p-2.5">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask style advice..."
                className="flex-1 rounded-full border border-black/[0.08] bg-[#FAF9F6] px-3.5 py-1.5 text-xs text-[#18181B] focus:border-[#C59B27] focus:outline-none"
              />
              <button
                onClick={() => handleSend()}
                className="grid h-8 w-8 place-items-center rounded-full bg-[#C59B27] text-white transition-transform hover:scale-105"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
