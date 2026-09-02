import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ShoppingBag, Check, ArrowRight, X, ArrowLeft, Shirt } from "lucide-react";
import { inr, products, footwear, type Category, type Product } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

export function OutfitBuilderBanner({ onOpenStudio }: { onOpenStudio: () => void }) {
  return (
    <div className="my-8 px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-5 shadow-[0_12px_36px_rgba(0,0,0,0.04)] sm:p-7">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 rounded-full border border-[#C59B27]/30 bg-[#FAF9F6] px-2.5 py-0.5 text-[0.6rem] font-bold tracking-wider text-[#C59B27] uppercase">
                <Sparkles className="h-3 w-3" /> EXCLUSIVE COMBOS
              </span>
              <span className="rounded-full border border-[#800020]/20 bg-[#800020]/10 px-2 py-0.5 text-[0.6rem] font-bold text-[#800020]">
                FLAT 10% EXTRA OFF
              </span>
            </div>

            <h3 className="text-lg font-extrabold text-[#18181B] sm:text-xl tracking-tight">
              Create Your Complete Outfit Combo
            </h3>
            <p className="max-w-md text-xs text-[#71717A] leading-relaxed">
              Pair Topwear, Bottoms & Sneakers in our interactive Studio for a 10% Bundle Privilege.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenStudio}
            className="glow-gold flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-xs font-bold tracking-wider text-white shadow-md transition-all uppercase"
          >
            <Shirt className="h-3.5 w-3.5" />
            <span>BUILD OUTFIT</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export function OutfitStudioModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { addMultipleToCart } = useCart();
  const [category, setCategory] = useState<Category>("MEN");

  const categoryProducts = products.filter((p) => p.category === category);
  const categoryFootwear = footwear.filter((f) => f.category === category);

  const topwears = categoryProducts.filter(
    (p) =>
      p.name.toLowerCase().includes("jacket") ||
      p.name.toLowerCase().includes("set") ||
      p.name.toLowerCase().includes("tee")
  );

  const bottomwears = categoryProducts.filter(
    (p) =>
      p.name.toLowerCase().includes("denim") ||
      p.name.toLowerCase().includes("suit") ||
      p.name.toLowerCase().includes("fit") ||
      !topwears.includes(p)
  );

  const [selectedTop, setSelectedTop] = useState<Product>(topwears[0] || categoryProducts[0]);
  const [selectedBottom, setSelectedBottom] = useState<Product>(
    bottomwears[1] || bottomwears[0] || categoryProducts[1] || categoryProducts[0]
  );
  const [selectedShoes, setSelectedShoes] = useState<Product>(
    categoryFootwear[0] || categoryProducts[2] || categoryProducts[0]
  );

  const [added, setAdded] = useState(false);

  const rawTotal = selectedTop.price + selectedBottom.price + selectedShoes.price;
  const bundleDiscount = Math.round(rawTotal * 0.1);
  const finalPrice = rawTotal - bundleDiscount;
  const pointsEarned = Math.floor(finalPrice / 10);

  const handleCategoryChange = (cat: Category) => {
    setCategory(cat);
    const catProds = products.filter((p) => p.category === cat);
    const catShoes = footwear.filter((f) => f.category === cat);
    setSelectedTop(catProds[0] || catProds[0]);
    setSelectedBottom(catProds[1] || catProds[0]);
    setSelectedShoes(catShoes[0] || catProds[2] || catProds[0]);
  };

  const handleAddOutfit = () => {
    addMultipleToCart([
      { product: selectedTop, size: selectedTop.sizes?.[0], color: selectedTop.colors?.[0] },
      { product: selectedBottom, size: selectedBottom.sizes?.[0], color: selectedBottom.colors?.[0] },
      { product: selectedShoes, size: selectedShoes.sizes?.[0], color: selectedShoes.colors?.[0] },
    ]);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-black/[0.08] bg-white p-5 shadow-2xl sm:p-7 text-[#18181B]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 mb-5">
            <button
              onClick={onClose}
              className="flex items-center gap-1 rounded-full border border-black/[0.08] bg-[#FAF9F6] px-3 py-1 text-xs font-bold text-[#71717A] hover:text-[#18181B]"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> BACK
            </button>

            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Sparkles className="h-3.5 w-3.5 text-[#C59B27]" />
                <h2 className="text-sm font-extrabold tracking-wider text-[#18181B] uppercase">
                  OUTFIT STUDIO
                </h2>
              </div>
              <p className="text-[0.62rem] text-[#71717A]">Select 3 items to unlock 10% Extra Bundle Discount</p>
            </div>

            <button
              onClick={onClose}
              className="grid h-8 w-8 place-items-center rounded-full bg-[#FAF9F6] text-[#18181B] hover:scale-105"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Category Selector */}
          <div className="mb-5 flex justify-center">
            <div className="flex gap-1 rounded-full border border-black/[0.06] bg-[#FAF9F6] p-1 shadow-xs">
              {(["MEN", "WOMEN"] as Category[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold tracking-wider transition-colors ${
                    category === cat
                      ? "bg-[#C59B27] text-white shadow-xs"
                      : "text-[#71717A] hover:text-[#18181B]"
                  }`}
                >
                  {cat} COMBOS
                </button>
              ))}
            </div>
          </div>

          {/* 3-Item Selector & Summary Grid */}
          <div className="grid gap-6 md:grid-cols-12">
            {/* Left: Selectors */}
            <div className="space-y-4 md:col-span-7">
              {/* Topwear */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[0.65rem] font-bold tracking-wider text-[#C59B27] uppercase">
                    1. TOPWEAR
                  </span>
                  <span className="text-xs text-[#71717A] font-semibold">{selectedTop.brand}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(topwears.length > 0 ? topwears : categoryProducts.slice(0, 3)).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedTop(item)}
                      className={`flex flex-col items-center rounded-xl border p-1.5 text-left transition-all ${
                        selectedTop.id === item.id
                          ? "border-[#C59B27] bg-[#FAF9F6] ring-1 ring-[#C59B27]"
                          : "border-black/[0.06] bg-white hover:border-[#C59B27]/40"
                      }`}
                    >
                      <img src={item.image} alt={item.name} className="h-16 w-full rounded-lg object-cover" />
                      <p className="mt-1 truncate w-full text-[0.62rem] font-bold text-[#18181B]">{item.name}</p>
                      <p className="text-[0.62rem] font-bold text-[#C59B27]">{inr(item.price)}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottomwear */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[0.65rem] font-bold tracking-wider text-[#C59B27] uppercase">
                    2. BOTTOMWEAR
                  </span>
                  <span className="text-xs text-[#71717A] font-semibold">{selectedBottom.brand}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(bottomwears.length > 0 ? bottomwears : categoryProducts.slice(1, 4)).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedBottom(item)}
                      className={`flex flex-col items-center rounded-xl border p-1.5 text-left transition-all ${
                        selectedBottom.id === item.id
                          ? "border-[#C59B27] bg-[#FAF9F6] ring-1 ring-[#C59B27]"
                          : "border-black/[0.06] bg-white hover:border-[#C59B27]/40"
                      }`}
                    >
                      <img src={item.image} alt={item.name} className="h-16 w-full rounded-lg object-cover" />
                      <p className="mt-1 truncate w-full text-[0.62rem] font-bold text-[#18181B]">{item.name}</p>
                      <p className="text-[0.62rem] font-bold text-[#C59B27]">{inr(item.price)}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Footwear */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[0.65rem] font-bold tracking-wider text-[#C59B27] uppercase">
                    3. FOOTWEAR
                  </span>
                  <span className="text-xs text-[#71717A] font-semibold">{selectedShoes.brand}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(categoryFootwear.length > 0 ? categoryFootwear : categoryProducts.slice(2, 5)).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedShoes(item)}
                      className={`flex flex-col items-center rounded-xl border p-1.5 text-left transition-all ${
                        selectedShoes.id === item.id
                          ? "border-[#C59B27] bg-[#FAF9F6] ring-1 ring-[#C59B27]"
                          : "border-black/[0.06] bg-white hover:border-[#C59B27]/40"
                      }`}
                    >
                      <img src={item.image} alt={item.name} className="h-16 w-full rounded-lg object-cover" />
                      <p className="mt-1 truncate w-full text-[0.62rem] font-bold text-[#18181B]">{item.name}</p>
                      <p className="text-[0.62rem] font-bold text-[#C59B27]">{inr(item.price)}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Outfit Live Preview & Checkout */}
            <div className="flex flex-col justify-between rounded-3xl border border-black/[0.06] bg-[#FAF9F6] p-4.5 md:col-span-5 sm:p-5">
              <div>
                <span className="text-[0.62rem] font-bold tracking-wider text-[#C59B27] uppercase">
                  OUTFIT SUMMARY
                </span>
                
                <div className="mt-3 flex gap-2 justify-center">
                  <img src={selectedTop.image} alt="Top" className="h-20 w-16 rounded-xl object-cover border border-black/[0.06]" />
                  <img src={selectedBottom.image} alt="Bottom" className="h-20 w-16 rounded-xl object-cover border border-black/[0.06]" />
                  <img src={selectedShoes.image} alt="Shoes" className="h-20 w-16 rounded-xl object-cover border border-black/[0.06]" />
                </div>

                <div className="mt-4 space-y-1.5 border-t border-black/[0.06] pt-3 text-xs">
                  <div className="flex justify-between text-[#71717A]">
                    <span>Standard MRP Total:</span>
                    <span>{inr(rawTotal)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-[#800020]">
                    <span>Combo Discount (10%):</span>
                    <span>-{inr(bundleDiscount)}</span>
                  </div>
                  <div className="flex items-center justify-between text-base font-extrabold text-[#18181B] pt-2 border-t border-black/[0.06]">
                    <span>COMBO PRICE</span>
                    <span className="text-lg text-[#18181B]">{inr(finalPrice)}</span>
                  </div>
                  <p className="text-[0.62rem] font-semibold text-[#8C6D1F]">
                    +{pointsEarned} VIP Loyalty Points
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddOutfit}
                disabled={added}
                className="glow-gold mt-4 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-gold-gradient py-2.5 text-xs font-bold tracking-wider text-white shadow-md transition-transform hover:scale-[1.02] active:scale-95"
              >
                {added ? (
                  <>
                    <Check className="h-4 w-4" />
                    OUTFIT ADDED TO BAG!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-4 w-4" />
                    ADD ENTIRE COMBO TO BAG
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
