import { useState } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { products, type Product } from "@/data/catalog";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (product: Product) => void;
}

export function SearchModal({ isOpen, onClose, onSelectProduct }: SearchModalProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.tags?.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : products.slice(0, 4);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-[#FDFCFA] rounded-3xl shadow-2xl p-6 overflow-hidden z-10 border border-black/[0.08]"
        >
          {/* Input Header */}
          <div className="relative flex items-center border-b border-black/[0.08] pb-4">
            <Search className="w-5 h-5 text-[#9E6738] shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search blazers, vault sneakers, leather bags..."
              className="w-full bg-transparent px-3 text-sm text-[#171615] placeholder-[#7A7570] focus:outline-none font-medium"
            />
            <button onClick={onClose} className="p-1 text-[#171615] hover:text-[#9E6738]">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Tags */}
          <div className="py-3 flex flex-wrap items-center gap-2 border-b border-black/[0.04]">
            <span className="text-[10px] uppercase font-semibold text-[#7A7570] mr-1">Trending:</span>
            {["Blazers", "Sneakers", "Cashmere", "Trench", "Silk Gown"].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-2.5 py-1 rounded-full bg-[#F5F3EF] text-[10px] uppercase tracking-wider text-[#171615] hover:bg-[#171615] hover:text-white transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results */}
          <div className="py-4 max-h-[350px] overflow-y-auto space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9E6738] block">
              {query.trim() ? `Search Results (${results.length})` : "Curated Recommendations"}
            </span>

            {results.length === 0 ? (
              <p className="text-xs text-[#7A7570] py-6 text-center">
                No matching luxury pieces found. Try searching "Blazer", "Sneaker" or "Coat".
              </p>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct?.(product);
                    onClose();
                  }}
                  className="flex items-center gap-4 p-2.5 rounded-2xl hover:bg-[#F5F3EF] transition-colors cursor-pointer group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-14 object-cover rounded-xl shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] uppercase font-bold text-[#9E6738] tracking-widest block">
                      {product.brand}
                    </span>
                    <h5 className="font-serif text-sm font-bold text-[#171615] truncate">
                      {product.name}
                    </h5>
                    <span className="text-xs font-semibold text-[#171615]">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#7A7570] group-hover:translate-x-1 transition-transform" />
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
