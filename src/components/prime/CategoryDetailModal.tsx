import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Heart, ShoppingBag, Eye, Star, Sparkles } from "lucide-react";
import { products, footwear, inr, type Category, type Product, brands } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

interface CategoryDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  categoryGender?: Category;
  filterQuery?: string;
  onQuickView?: (product: Product) => void;
}

export function CategoryDetailModal({
  isOpen,
  onClose,
  title,
  categoryGender = "MEN",
  filterQuery = "",
  onQuickView,
}: CategoryDetailModalProps) {
  const { addToCart } = useCart();

  // Filters state
  const [selectedBrand, setSelectedBrand] = useState<string>("ALL");
  const [selectedPrice, setSelectedPrice] = useState<string>("ALL");
  const [selectedSize, setSelectedSize] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<string>("RECOMMENDED");
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  const allItems = [...products, ...footwear];

  // Filter items matching gender & query
  const filteredList = useMemo(() => {
    return allItems
      .filter((item) => {
        // Gender match
        if (item.category !== categoryGender) return false;

        // Query match
        if (filterQuery) {
          const q = filterQuery.toLowerCase();
          const nameMatch = item.name.toLowerCase().includes(q);
          const brandMatch = item.brand.toLowerCase().includes(q);
          const descMatch = item.description?.toLowerCase().includes(q);
          if (!nameMatch && !brandMatch && !descMatch) return false;
        }

        // Brand Filter
        if (selectedBrand !== "ALL" && item.brand.toUpperCase() !== selectedBrand) return false;

        // Price Filter
        if (selectedPrice === "UNDER_3K" && item.price >= 3000) return false;
        if (selectedPrice === "3K_6K" && (item.price < 3000 || item.price > 6000)) return false;
        if (selectedPrice === "ABOVE_6K" && item.price <= 6000) return false;

        // Size Filter
        if (selectedSize !== "ALL" && item.sizes && !item.sizes.includes(selectedSize)) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "PRICE_LOW") return a.price - b.price;
        if (sortBy === "PRICE_HIGH") return b.price - a.price;
        if (sortBy === "RATING") return (b.rating ?? 0) - (a.rating ?? 0);
        return 0;
      });
  }, [categoryGender, filterQuery, selectedBrand, selectedPrice, selectedSize, sortBy]);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (!isOpen) return null;

  const marqueeLoop = Array(12).fill(title.toUpperCase());

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex flex-col bg-[#FAF9F6] text-[#18181B] overflow-hidden">
        {/* Top Header with Marquee */}
        <div className="sticky top-0 z-20 border-b border-black/[0.06] bg-white/95 backdrop-blur-md">
          <div className="flex items-center justify-between px-3 py-2.5 border-b border-black/[0.04]">
            <button
              onClick={onClose}
              className="grid h-8.5 w-8.5 shrink-0 place-items-center rounded-full bg-[#FAF9F6] text-[#18181B] hover:scale-105"
            >
              <ArrowLeft className="h-4.5 w-4.5" />
            </button>

            <div className="flex-1 relative overflow-hidden px-3 [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]">
              <div className="flex w-max animate-marquee items-center gap-6 pr-6">
                {marqueeLoop.map((itemText, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="whitespace-nowrap font-display text-xs font-extrabold tracking-[0.2em] text-[#18181B]">
                      {itemText}
                    </span>
                    <Sparkles className="h-3 w-3 text-[#C59B27]" />
                  </div>
                ))}
              </div>
            </div>

            <span className="text-[0.62rem] font-bold tracking-wider text-[#C59B27] px-2 py-0.5 bg-[#FAF9F6] rounded-full">
              {filteredList.length} DROPS
            </span>
          </div>

          {/* Filter Pills Ribbon */}
          <div className="no-scrollbar flex gap-2 overflow-x-auto p-2.5 bg-[#FAF9F6]">
            {/* Brands */}
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="rounded-full border border-black/[0.08] bg-white px-3 py-1 text-xs font-bold text-[#18181B] focus:border-[#C59B27] focus:outline-none"
            >
              <option value="ALL">All Brands</option>
              {brands.map((b) => (
                <option key={b} value={b.toUpperCase()}>
                  {b}
                </option>
              ))}
            </select>

            {/* Price */}
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="rounded-full border border-black/[0.08] bg-white px-3 py-1 text-xs font-bold text-[#18181B] focus:border-[#C59B27] focus:outline-none"
            >
              <option value="ALL">All Prices</option>
              <option value="UNDER_3K">Under ₹3,000</option>
              <option value="3K_6K">₹3,000 – ₹6,000</option>
              <option value="ABOVE_6K">Above ₹6,000</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-full border border-black/[0.08] bg-white px-3 py-1 text-xs font-bold text-[#18181B] focus:border-[#C59B27] focus:outline-none"
            >
              <option value="RECOMMENDED">Recommended</option>
              <option value="PRICE_LOW">Price: Low to High</option>
              <option value="PRICE_HIGH">Price: High to Low</option>
              <option value="RATING">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="no-scrollbar flex-1 overflow-y-auto p-4 sm:p-6">
          {filteredList.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-sm font-semibold text-[#71717A]">No styles matched your filter selection.</p>
              <button
                onClick={() => {
                  setSelectedBrand("ALL");
                  setSelectedPrice("ALL");
                  setSelectedSize("ALL");
                }}
                className="mt-3 rounded-full border border-[#C59B27] bg-white px-4 py-1.5 text-xs font-bold text-[#18181B]"
              >
                RESET FILTERS
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
              {filteredList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onQuickView?.(item)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:border-[#C59B27]/50"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#FAF9F6]">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Brand Badge */}
                    <span className="absolute left-2 top-2 rounded-full border border-black/[0.06] bg-white/90 px-2 py-0.5 text-[0.55rem] font-bold tracking-wider text-[#C59B27] backdrop-blur-md">
                      {item.brand}
                    </span>

                    {/* Like Button */}
                    <button
                      type="button"
                      onClick={(e) => toggleLike(item.id, e)}
                      className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-white/90 text-[#71717A] backdrop-blur-md hover:text-[#800020]"
                    >
                      <Heart
                        className={`h-3.5 w-3.5 ${
                          likedMap[item.id] ? "fill-[#800020] text-[#800020]" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div className="p-3">
                    <h4 className="truncate text-xs font-bold text-[#18181B]">{item.name}</h4>
                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-xs font-extrabold text-[#18181B]">{inr(item.price)}</p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(item);
                        }}
                        className="grid h-7 w-7 place-items-center rounded-lg bg-[#FAF9F6] border border-black/[0.08] text-[#18181B] hover:bg-[#C59B27] hover:text-white"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
}
