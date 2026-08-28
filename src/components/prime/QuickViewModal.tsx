import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Star, Check, Ruler, MessageCircle, ShieldCheck, ShoppingBag } from "lucide-react";
import { inr, type Product } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  if (!product) return null;

  const colors = product.colors ?? ["Black", "White", "Gold"];
  const sizes = product.sizes ?? (product.name.includes("Sneaker") || product.name.includes("Runner") || product.name.includes("Kicks") || product.name.includes("Trainer") ? ["7", "8", "9", "10"] : ["S", "M", "L", "XL"]);
  
  const currentColor = selectedColor || colors[0];
  const currentSize = selectedSize || sizes[0];

  const handleAddToCart = () => {
    addToCart(product, currentColor, currentSize, 1);
    onClose();
  };

  const handleDirectWhatsAppChat = () => {
    const message = `Hi Prime Outlet! I'm interested in:
*${product.name}* (${product.brand})
Color: ${currentColor} | Size: ${currentSize} | Price: ${inr(product.price)}

Is this available at the Ganaur store today?`;

    const url = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-gold/40 bg-black/95 p-5 shadow-2xl sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-surface-2 text-gold transition-transform hover:scale-110 active:scale-95"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* Image Preview Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border bg-surface-2">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full border border-gold/40 bg-surface/80 px-3 py-1 text-[0.6rem] font-bold tracking-[0.2em] text-gold backdrop-blur">
                {product.brand.toUpperCase()}
              </span>
            </div>

            {/* Product Meta & Interactive Controls */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Brand & Rating */}
                <div className="flex items-center justify-between">
                  <p className="text-[0.6rem] font-bold tracking-[0.25em] text-gold uppercase">
                    {product.brand}
                  </p>
                  <span className="flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-0.5 text-xs font-bold text-amber-400">
                    <Star className="h-3 w-3 fill-amber-400" />
                    {product.rating ?? 4.8}
                  </span>
                </div>

                {/* Name & Price */}
                <h3 className="mt-1 text-xl font-bold text-foreground sm:text-2xl">
                  {product.name}
                </h3>
                <p className="mt-2 text-2xl font-extrabold text-gold">
                  {inr(product.price)}
                </p>

                {/* Stock Status */}
                <div className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                  <ShieldCheck className="h-4 w-4" />
                  In Stock at Ganaur Store — Ready for Try-On
                </div>

                {/* Color Selector */}
                <div className="mt-5">
                  <p className="text-xs font-bold tracking-[0.15em] text-gold uppercase">
                    SELECT COLOR: <span className="text-foreground">{currentColor}</span>
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {colors.map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedColor(c)}
                        className={`flex min-h-[38px] items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
                          currentColor === c
                            ? "border-gold bg-gold/20 text-gold font-bold ring-1 ring-gold"
                            : "border-border bg-surface-2 text-muted-foreground hover:border-gold/50"
                        }`}
                      >
                        {currentColor === c && <Check className="h-3.5 w-3.5 text-gold" />}
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selector & Size Guide Link */}
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold tracking-[0.15em] text-gold uppercase">
                      SELECT SIZE: <span className="text-foreground">{currentSize}</span>
                    </p>
                    <button
                      type="button"
                      onClick={() => setShowSizeGuide(!showSizeGuide)}
                      className="flex items-center gap-1 text-[0.65rem] font-bold text-gold underline hover:text-gold-soft"
                    >
                      <Ruler className="h-3 w-3" />
                      Size Guide
                    </button>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`flex min-h-[40px] min-w-[40px] items-center justify-center rounded-xl border px-3 py-2 text-xs font-bold transition-all ${
                          currentSize === s
                            ? "border-gold bg-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                            : "border-border bg-surface-2 text-muted-foreground hover:border-gold/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Guide Popover Table */}
                {showSizeGuide && (
                  <div className="mt-3 rounded-xl border border-border/80 bg-surface-2 p-3 text-xs">
                    <p className="mb-2 font-bold text-gold">Measurement Guide:</p>
                    <div className="grid grid-cols-4 gap-2 text-center text-[0.65rem] text-muted-foreground">
                      <span className="font-bold text-foreground">Size</span>
                      <span>Chest / Foot</span>
                      <span>Length</span>
                      <span>Fit</span>
                      <span className="font-bold text-foreground">S / 7</span>
                      <span>36–38 in</span>
                      <span>27 in</span>
                      <span>Regular</span>
                      <span className="font-bold text-foreground">M / 8</span>
                      <span>38–40 in</span>
                      <span>28 in</span>
                      <span>Regular</span>
                      <span className="font-bold text-foreground">L / 9</span>
                      <span>40–42 in</span>
                      <span>29 in</span>
                      <span>Tailored</span>
                      <span className="font-bold text-foreground">XL / 10</span>
                      <span>42–44 in</span>
                      <span>30 in</span>
                      <span>Relaxed</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Dual CTAs: Add to Cart & Direct WhatsApp Chat */}
              <div className="mt-6 space-y-2.5">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="glow-gold flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-xs font-bold tracking-[0.15em] text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95 sm:text-sm"
                >
                  <ShoppingBag className="h-4 w-4" />
                  ADD TO SHOPPING BAG
                </button>

                <button
                  type="button"
                  onClick={handleDirectWhatsAppChat}
                  className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-gold/60 bg-black/40 px-6 py-2.5 text-xs font-bold tracking-[0.12em] text-gold transition-colors hover:bg-gold/10 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                  DIRECT WHATSAPP CHAT
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
