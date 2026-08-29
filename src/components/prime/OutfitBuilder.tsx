import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ShoppingBag, Check, ArrowRight, X, ArrowLeft, Shirt } from "lucide-react";
import { inr, products, footwear, type Category, type Product } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

export function OutfitBuilderBanner({ onOpenStudio }: { onOpenStudio: () => void }) {
  return (
    <div className="my-8 px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-r from-black via-surface-2 to-black p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-[0.65rem] font-extrabold tracking-widest text-gold uppercase">
                <Sparkles className="h-3 w-3" /> EXCLUSIVE COMBOS
              </span>
              <span className="text-[0.65rem] font-bold text-emerald-400">FLAT 10% EXTRA OFF</span>
            </div>

            <h3 className="text-xl font-extrabold text-white sm:text-2xl tracking-wide">
              Create Your Complete Outfit Combo
            </h3>
            <p className="max-w-xl text-xs text-muted-foreground leading-relaxed">
              Mix & match Topwear, Pants & Sneakers in our dedicated Studio to get a 10% Bundle Discount + VIP Loyalty Points.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenStudio}
            className="flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-2xl bg-gold-gradient px-6 py-3 text-xs font-extrabold tracking-wider text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:brightness-110 uppercase"
          >
            <Shirt className="h-4 w-4" />
            EXPLORE & BUILD COMBOS
            <ArrowRight className="h-4 w-4" />
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
          className="fixed inset-0 bg-black/90 backdrop-blur-lg"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-gold/40 bg-surface-2 p-5 shadow-2xl sm:p-8 text-foreground"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-bold text-muted-foreground transition-colors hover:text-gold hover:border-gold/40"
            >
              <ArrowLeft className="h-4 w-4" /> BACK TO STORE
            </button>

            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5">
                <Sparkles className="h-4 w-4 text-gold" />
                <h2 className="text-base font-extrabold tracking-widest text-gold uppercase">
                  PRIME OUTFIT STUDIO
                </h2>
              </div>
              <p className="text-[0.65rem] text-muted-foreground">Select 3 items to unlock 10% Extra Discount</p>
            </div>

            <button
              onClick={onClose}
              className="grid h-9 w-9 place-items-center rounded-full bg-surface text-muted-foreground hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Category Selector */}
          <div className="mb-6 flex justify-center">
            <div className="flex gap-1 rounded-full border border-border bg-surface p-1 shadow-md">
              {(["MEN", "WOMEN", "KIDS"] as Category[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wider transition-colors ${
                    category === cat
                      ? "bg-gold-gradient text-black font-bold shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat} COMBOS
                </button>
              ))}
            </div>
          </div>

          {/* 3-Item Selector & Summary Grid */}
          <div className="grid gap-8 lg:grid-cols-12">
            
            {/* Left: Selectors */}
            <div className="space-y-6 lg:col-span-7">
              {/* Topwear */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-extrabold tracking-widest text-gold uppercase">
                    1. TOPWEAR
                  </span>
                  <span className="text-xs text-muted-foreground">{selectedTop.brand}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(topwears.length > 0 ? topwears : categoryProducts.slice(0, 3)).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedTop(item)}
                      className={`flex flex-col items-center rounded-xl border p-2 text-left transition-all ${
                        selectedTop.id === item.id
                          ? "border-gold bg-gold/15 shadow-[0_0_15px_rgba(212,175,55,0.25)] ring-1 ring-gold"
                          : "border-border/60 bg-surface hover:border-gold/40"
                      }`}
                    >
                      <img src={item.image} alt={item.name} className="h-16 w-full rounded-lg object-cover sm:h-20" />
                      <p className="mt-1.5 truncate text-[0.65rem] font-bold text-foreground text-center w-full">
                        {item.name}
                      </p>
                      <p className="text-[0.65rem] font-extrabold text-gold">{inr(item.price)}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottomwear */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-extrabold tracking-widest text-gold uppercase">
                    2. BOTTOMWEAR / PANTS
                  </span>
                  <span className="text-xs text-muted-foreground">{selectedBottom.brand}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(bottomwears.length > 0 ? bottomwears : categoryProducts.slice(1, 4)).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedBottom(item)}
                      className={`flex flex-col items-center rounded-xl border p-2 text-left transition-all ${
                        selectedBottom.id === item.id
                          ? "border-gold bg-gold/15 shadow-[0_0_15px_rgba(212,175,55,0.25)] ring-1 ring-gold"
                          : "border-border/60 bg-surface hover:border-gold/40"
                      }`}
                    >
                      <img src={item.image} alt={item.name} className="h-16 w-full rounded-lg object-cover sm:h-20" />
                      <p className="mt-1.5 truncate text-[0.65rem] font-bold text-foreground text-center w-full">
                        {item.name}
                      </p>
                      <p className="text-[0.65rem] font-extrabold text-gold">{inr(item.price)}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Footwear */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-extrabold tracking-widest text-gold uppercase">
                    3. FOOTWEAR / SNEAKERS
                  </span>
                  <span className="text-xs text-muted-foreground">{selectedShoes.brand}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(categoryFootwear.length > 0 ? categoryFootwear : categoryProducts.slice(2, 5)).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedShoes(item)}
                      className={`flex flex-col items-center rounded-xl border p-2 text-left transition-all ${
                        selectedShoes.id === item.id
                          ? "border-gold bg-gold/15 shadow-[0_0_15px_rgba(212,175,55,0.25)] ring-1 ring-gold"
                          : "border-border/60 bg-surface hover:border-gold/40"
                      }`}
                    >
                      <img src={item.image} alt={item.name} className="h-16 w-full rounded-lg object-cover sm:h-20" />
                      <p className="mt-1.5 truncate text-[0.65rem] font-bold text-foreground text-center w-full">
                        {item.name}
                      </p>
                      <p className="text-[0.65rem] font-extrabold text-gold">{inr(item.price)}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Summary Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-gold/40 bg-black/80 p-5 lg:col-span-5 sm:p-6">
              <div>
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-gold" />
                    <span className="text-xs font-bold tracking-widest text-gold uppercase">
                      COMBO SUMMARY
                    </span>
                  </div>
                  <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-[0.65rem] font-extrabold text-gold uppercase border border-gold/40">
                    SAVE 10% EXTRA
                  </span>
                </div>

                <div className="my-4 space-y-3">
                  {[selectedTop, selectedBottom, selectedShoes].map((item, idx) => (
                    <div key={`${item.id}-${idx}`} className="flex items-center gap-3 rounded-xl bg-surface/70 p-2.5 border border-border/50">
                      <img src={item.image} alt={item.name} className="h-10 w-10 rounded-lg object-cover" />
                      <div className="min-w-0 flex-1">
                        <p className="text-[0.6rem] font-bold text-gold uppercase tracking-wider">{item.brand}</p>
                        <p className="truncate text-xs font-semibold text-foreground">{item.name}</p>
                      </div>
                      <span className="text-xs font-bold text-foreground">{inr(item.price)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-border/60">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Regular Total:</span>
                  <span className="line-through">{inr(rawTotal)}</span>
                </div>
                <div className="flex justify-between text-xs text-emerald-400 font-semibold">
                  <span>10% Combo Discount:</span>
                  <span>-{inr(bundleDiscount)}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-extrabold text-white pt-1">
                  <span>Special Combo Price:</span>
                  <span className="text-lg text-gold">{inr(finalPrice)}</span>
                </div>

                <div className="rounded-lg bg-gold/10 p-2 text-center text-[0.7rem] font-semibold text-gold border border-gold/20">
                  ✨ Plus earn +{pointsEarned} Prime Gold Reward Points!
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={handleAddOutfit}
                  className="flex w-full min-h-[46px] items-center justify-center gap-2 rounded-xl bg-gold-gradient text-black font-extrabold text-xs tracking-wider shadow-lg transition-transform hover:brightness-110 uppercase"
                >
                  {added ? (
                    <>
                      <Check className="h-4 w-4" /> ADDED TO CART!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-4 w-4" /> ADD COMPLETE OUTFIT ({inr(finalPrice)})
                    </>
                  )}
                </motion.button>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
