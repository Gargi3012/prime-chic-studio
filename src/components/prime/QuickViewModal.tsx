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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-black/[0.08] bg-white p-5 shadow-2xl sm:p-7"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-4 top-4 z-10 grid h-8.5 w-8.5 place-items-center rounded-full border border-black/[0.08] bg-[#FAF9F6] text-[#18181B] transition-transform hover:scale-105"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="grid gap-5 md:grid-cols-2 md:gap-7">
            {/* Image Preview Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-black/[0.06] bg-[#FAF9F6]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full border border-black/[0.06] bg-white/90 px-3 py-1 text-[0.6rem] font-bold tracking-[0.2em] text-[#C59B27] backdrop-blur-md">
                {product.brand.toUpperCase()}
              </span>
            </div>

            {/* Product Meta & Interactive Controls */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Brand & Rating */}
                <div className="flex items-center justify-between">
                  <p className="text-[0.62rem] font-bold tracking-[0.25em] text-[#C59B27] uppercase">
                    {product.brand}
                  </p>
                  <span className="flex items-center gap-1 rounded-full border border-black/[0.06] bg-[#FAF9F6] px-2 py-0.5 text-xs font-bold text-[#18181B]">
                    <Star className="h-3 w-3 fill-[#C59B27] text-[#C59B27]" />
                    {product.rating ?? 4.8}
                  </span>
                </div>

                {/* Name & Price */}
                <h3 className="mt-1 text-lg font-bold text-[#18181B] sm:text-xl">
                  {product.name}
                </h3>
                <p className="mt-2 text-2xl font-extrabold text-[#18181B] flex items-center gap-2">
                  {inr(product.price)}
                  <span className="rounded-full bg-[#FAF9F6] border border-black/[0.06] px-2 py-0.5 text-[0.65rem] font-bold text-[#8C6D1F]">
                    +{Math.floor(product.price / 10)} Gold Points
                  </span>
                </p>

                {/* Stock Status */}
                <div className="mt-3 flex items-center gap-2 rounded-xl border border-black/[0.06] bg-[#FAF9F6] px-3 py-1.5 text-xs font-semibold text-[#18181B]">
                  <ShieldCheck className="h-4 w-4 text-[#C59B27]" />
                  Available in Ganaur Store — Ready for Try-On
                </div>

                {/* Color Selector */}
                <div className="mt-4">
                  <p className="text-[0.65rem] font-bold tracking-[0.15em] text-[#71717A] uppercase">
                    COLOR: <span className="text-[#18181B]">{currentColor}</span>
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-2">
                    {colors.map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedColor(c)}
                        className={`flex min-h-[34px] items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-semibold transition-all ${
                          currentColor === c
                            ? "border-[#C59B27] bg-[#C59B27] text-white font-bold shadow-xs"
                            : "border-black/[0.08] bg-[#FAF9F6] text-[#71717A] hover:border-[#C59B27]"
                        }`}
                      >
                        {currentColor === c && <Check className="h-3 w-3 text-white" />}
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selector & Size Guide Link */}
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[0.65rem] font-bold tracking-[0.15em] text-[#71717A] uppercase">
                      SIZE: <span className="text-[#18181B]">{currentSize}</span>
                    </p>
                    <button
                      type="button"
                      onClick={() => setShowSizeGuide(!showSizeGuide)}
                      className="flex items-center gap-1 text-[0.65rem] font-bold text-[#C59B27] underline"
                    >
                      <Ruler className="h-3 w-3" />
                      Size Guide
                    </button>
                  </div>

                  <div className="mt-1.5 flex flex-wrap gap-2">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`flex min-h-[36px] min-w-[36px] items-center justify-center rounded-xl border px-3 py-1.5 text-xs font-bold transition-all ${
                          currentSize === s
                            ? "border-[#C59B27] bg-[#C59B27] text-white shadow-xs"
                            : "border-black/[0.08] bg-[#FAF9F6] text-[#18181B] hover:border-[#C59B27]"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Guide Popover Table */}
                {showSizeGuide && (
                  <div className="mt-3 rounded-2xl border border-black/[0.06] bg-[#FAF9F6] p-3 text-xs">
                    <p className="mb-1.5 font-bold text-[#18181B]">Measurement Guide:</p>
                    <div className="grid grid-cols-4 gap-1.5 text-center text-[0.62rem] text-[#71717A]">
                      <span className="font-bold text-[#18181B]">Size</span>
                      <span>Chest/Foot</span>
                      <span>Length</span>
                      <span>Fit</span>
                      <span className="font-bold text-[#18181B]">S / 7</span>
                      <span>36–38 in</span>
                      <span>27 in</span>
                      <span>Regular</span>
                      <span className="font-bold text-[#18181B]">M / 8</span>
                      <span>38–40 in</span>
                      <span>28 in</span>
                      <span>Regular</span>
                      <span className="font-bold text-[#18181B]">L / 9</span>
                      <span>40–42 in</span>
                      <span>29 in</span>
                      <span>Tailored</span>
                      <span className="font-bold text-[#18181B]">XL / 10</span>
                      <span>42–44 in</span>
                      <span>30 in</span>
                      <span>Relaxed</span>
                    </div>
                  </div>
                )}
              </div>

              {/* CTAs */}
              <div className="mt-5 space-y-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="glow-gold flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-2.5 text-xs font-bold tracking-wider text-white shadow-md transition-transform hover:scale-[1.02] active:scale-95"
                >
                  <ShoppingBag className="h-4 w-4" />
                  ADD TO SHOPPING BAG
                </button>

                <button
                  type="button"
                  onClick={handleDirectWhatsAppChat}
                  className="flex min-h-[40px] w-full items-center justify-center gap-2 rounded-full border border-black/[0.08] bg-[#FAF9F6] px-6 py-2 text-xs font-bold tracking-wider text-[#18181B] transition-colors hover:border-[#C59B27] hover:text-[#C59B27] active:scale-95"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-[#C59B27]" />
                  RESERVE ON WHATSAPP
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
