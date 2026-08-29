import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, ShoppingBag, Eye } from "lucide-react";
import { products, footwear, inr, type Product } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  matchedProducts?: Product[];
}

export function AIStyleAssistant({
  onQuickView,
}: {
  onQuickView?: (product: Product) => void;
}) {
  const { addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Welcome to Prime Outlet! ✨ I'm your AI Personal Stylist. Tell me what you're looking for or pick a style suggestion below!",
    },
  ]);

  const allItems = [...products, ...footwear];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    // Add user msg
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // AI Logic filtering catalog
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
      matches = allItems.slice(0, 3); // Fallback bestsellers
    }

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: `Here are the best ${query} picks curated for you at Prime Outlet:`,
        matchedProducts: matches.slice(0, 3),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating AI Launcher */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-6 z-40 flex items-center gap-2 rounded-full border border-gold/60 bg-black/90 px-4 py-2.5 shadow-[0_0_25px_rgba(212,175,55,0.4)] backdrop-blur-md hover:border-gold"
      >
        <Bot className="h-5 w-5 text-gold animate-pulse" />
        <span className="text-xs font-extrabold tracking-wider text-gold uppercase">
          AI STYLIST ✨
        </span>
      </motion.button>

      {/* AI Assistant Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-end p-2 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative flex h-[520px] w-full max-w-md flex-col overflow-hidden rounded-3xl border border-gold/40 bg-surface-2 shadow-2xl text-foreground"
            >
              {/* Top Header */}
              <div className="flex items-center justify-between border-b border-border/60 bg-black/80 px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-gold/20 border border-gold/50 text-gold">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gold tracking-wide uppercase">
                      PRIME AI STYLIST
                    </h3>
                    <p className="text-[0.65rem] text-muted-foreground">Personal Fashion Guide</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 text-muted-foreground hover:text-gold"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Messages Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                        m.sender === "user"
                          ? "bg-gold text-black font-semibold rounded-br-none"
                          : "bg-surface border border-border/60 text-foreground rounded-bl-none"
                      }`}
                    >
                      {m.text}
                    </div>

                    {/* Matched Product Cards */}
                    {m.matchedProducts && m.matchedProducts.length > 0 && (
                      <div className="mt-2.5 grid w-full gap-2">
                        {m.matchedProducts.map((p) => (
                          <div
                            key={p.id}
                            className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-black/60 p-2"
                          >
                            <img src={p.image} alt={p.name} className="h-12 w-12 rounded-lg object-cover" />
                            <div className="min-w-0 flex-1">
                              <p className="text-[0.6rem] font-bold text-gold uppercase">{p.brand}</p>
                              <p className="truncate text-xs font-bold text-white">{p.name}</p>
                              <p className="text-xs font-extrabold text-gold">{inr(p.price)}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                              {onQuickView && (
                                <button
                                  onClick={() => onQuickView(p)}
                                  className="rounded-lg bg-surface p-1.5 text-muted-foreground hover:text-gold"
                                >
                                  <Eye className="h-3.5 w-3.5" />
                                </button>
                              )}
                              <button
                                onClick={() => addToCart(p)}
                                className="rounded-lg bg-gold p-1.5 text-black hover:brightness-110 font-bold"
                              >
                                <ShoppingBag className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Suggestion Chips */}
              <div className="no-scrollbar flex gap-1.5 overflow-x-auto border-t border-border/40 bg-surface/50 px-3 py-2">
                {[
                  "White Sneakers under ₹6000",
                  "Men Jackets",
                  "Women Co-ord Sets",
                  "Adidas Shoes",
                ].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => handleSend(chip)}
                    className="shrink-0 rounded-full border border-border/60 bg-black/40 px-3 py-1 text-[0.65rem] font-semibold text-muted-foreground hover:border-gold hover:text-gold"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Input Bar */}
              <div className="border-t border-border/60 bg-black/90 p-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask AI Stylist (e.g. Puma jacket...)"
                    className="flex-1 rounded-xl border border-border/60 bg-surface px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="grid h-9 w-9 place-items-center rounded-xl bg-gold text-black hover:brightness-110 font-bold"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
