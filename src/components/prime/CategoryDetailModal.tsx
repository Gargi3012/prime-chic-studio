import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Heart, Search, Filter, ShoppingBag, Eye, Star, Zap, Check } from "lucide-react";
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

  // Marquee text loop matching BrandStrip structure
  const marqueeLoop = Array(12).fill(title.toUpperCase());

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex flex-col bg-background text-foreground overflow-hidden">
        
        {/* 1. TOP MARQUEE HEADER (Matching Screenshot 2 & BrandStrip) */}
        <div className="sticky top-0 z-20 border-b border-border/80 bg-black/95 backdrop-blur-md">
          {/* Header Action Bar */}
          <div className="flex items-center justify-between px-3 py-3 border-b border-border/40">
            <button
              onClick={onClose}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface text-muted-foreground hover:text-gold transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            {/* Hardware-Accelerated Marquee Scrolling Title (Identical to BrandStrip) */}
            <div className="flex-1 relative overflow-hidden px-3 [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]">
              <div className="flex w-max animate-marquee items-center gap-6 pr-6">
                {marqueeLoop.map((itemText, idx) => (
                  <span
                    key={`${itemText}-${idx}`}
                    className="whitespace-nowrap font-display text-sm font-bold tracking-[0.2em] text-gold/90 uppercase"
                  >
                    {itemText} •
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 text-muted-foreground">
              <button onClick={onClose} className="p-1 hover:text-gold">
                <Heart className="h-5 w-5" />
              </button>
              <button onClick={onClose} className="p-1 hover:text-gold">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* 2. SUB-HEADER HORIZONTAL FILTER PILLS (Matching Screenshot 2) */}
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto px-4 py-2 text-xs">
            {/* Brand Filter */}
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="rounded-full border border-border bg-surface px-3 py-1 text-[0.65rem] font-bold text-foreground uppercase focus:border-gold focus:outline-none"
            >
              <option value="ALL">BRAND ▾</option>
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>

            {/* Price Filter */}
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="rounded-full border border-border bg-surface px-3 py-1 text-[0.65rem] font-bold text-foreground uppercase focus:border-gold focus:outline-none"
            >
              <option value="ALL">PRICE ▾</option>
              <option value="UNDER_3K">Under ₹3,000</option>
              <option value="3K_6K">₹3,000 - ₹6,000</option>
              <option value="ABOVE_6K">Above ₹6,000</option>
            </select>

            {/* Size Filter */}
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="rounded-full border border-border bg-surface px-3 py-1 text-[0.65rem] font-bold text-foreground uppercase focus:border-gold focus:outline-none"
            >
              <option value="ALL">SIZE ▾</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="8">UK 8</option>
              <option value="9">UK 9</option>
              <option value="10">UK 10</option>
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-full border border-border bg-surface px-3 py-1 text-[0.65rem] font-bold text-foreground uppercase focus:border-gold focus:outline-none"
            >
              <option value="RECOMMENDED">SORT: RECOMMENDED</option>
              <option value="PRICE_LOW">PRICE: LOW TO HIGH</option>
              <option value="PRICE_HIGH">PRICE: HIGH TO LOW</option>
              <option value="RATING">TOP RATED</option>
            </select>
          </div>
        </div>

        {/* 3. E-COMMERCE 2-COLUMN PRODUCT GRID (Matching Screenshot 2) */}
        <div className="flex-1 overflow-y-auto p-4 max-w-6xl mx-auto w-full">
          <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
            <span>Showing {filteredList.length} Items for {categoryGender}</span>
            <span className="text-gold font-bold">{title} Collection</span>
          </div>

          {filteredList.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-sm font-semibold text-muted-foreground">No matching products found.</p>
              <button
                onClick={() => {
                  setSelectedBrand("ALL");
                  setSelectedPrice("ALL");
                  setSelectedSize("ALL");
                }}
                className="mt-3 rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-black"
              >
                RESET FILTERS
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {filteredList.map((product) => {
                const discountedPrice = Math.round(product.price * 0.9);
                const isLiked = likedMap[product.id];

                return (
                  <article
                    key={product.id}
                    onClick={() => onQuickView?.(product)}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-surface-2/90 transition-all hover:border-gold/60 cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-black/40">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Top Badges */}
                      <span className="absolute left-2 top-2 rounded-md bg-gold-gradient px-2 py-0.5 text-[0.55rem] font-black text-black uppercase">
                        10% OFF
                      </span>

                      {/* Wishlist Heart Icon */}
                      <button
                        type="button"
                        onClick={(e) => toggleLike(product.id, e)}
                        aria-label="Wishlist"
                        className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-black/60 text-white backdrop-blur hover:text-rose-500"
                      >
                        <Heart
                          className={`h-4 w-4 ${isLiked ? "fill-rose-500 text-rose-500" : "text-white"}`}
                        />
                      </button>
                    </div>

                    {/* Meta Info (Matching Screenshot 2) */}
                    <div className="flex flex-col justify-between p-3 flex-1 space-y-2">
                      <div>
                        <p className="text-[0.55rem] font-bold text-gold uppercase tracking-wider">
                          {product.brand}
                        </p>
                        <h4 className="truncate text-xs font-bold text-foreground">
                          {product.name}
                        </h4>
                      </div>

                      {/* Price Rows (Matching Screenshot 2) */}
                      <div className="space-y-0.5 pt-1 border-t border-border/40">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-extrabold text-foreground">{inr(product.price)}</span>
                        </div>
                        <p className="text-[0.65rem] font-extrabold text-emerald-400">
                          Get it for <span className="text-emerald-400 font-black">{inr(discountedPrice)}</span>
                        </p>
                      </div>

                      {/* Add to Cart Action */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                        }}
                        className="flex w-full min-h-[36px] items-center justify-center gap-1.5 rounded-xl bg-gold text-black text-xs font-bold transition-transform hover:brightness-110 active:scale-95"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" /> ADD TO BAG
                      </button>
                    </div>

                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
}
