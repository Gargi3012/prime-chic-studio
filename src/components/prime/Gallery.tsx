import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  X,
  Compass,
  ShoppingBag,
} from "lucide-react";
import { SectionHeading } from "./Reveal";
import { products, inr, type Product } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

interface ZoneData {
  id: string;
  name: string;
  icon: string;
  image: string;
  description: string;
  hotspots: {
    id: string;
    label: string;
    position: string; // Tailwind positioning
    product: Product;
  }[];
}

const ZONES: ZoneData[] = [
  {
    id: "mens-vault",
    name: "Men's Vault",
    icon: "👔",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600&auto=format&fit=crop",
    description: "Structured tailoring, wool overcoats & luxury streetwear",
    hotspots: [
      {
        id: "hs-men-1",
        label: "👑 Cashmere Double-Breasted Coat",
        position: "top-[35%] left-[22%]",
        product: products[0],
      },
      {
        id: "hs-men-2",
        label: "✦ Espresso Brushed Suede Bomber",
        position: "top-[48%] right-[25%]",
        product: products[0],
      },
    ],
  },
  {
    id: "womens-studio",
    name: "Women's Studio",
    icon: "👗",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1600&auto=format&fit=crop",
    description: "Silk co-ords, linen tailoring & evening couture dresses",
    hotspots: [
      {
        id: "hs-women-1",
        label: "✨ Oatmeal Tailored Blazer Set",
        position: "top-[30%] left-[25%]",
        product: products[1],
      },
      {
        id: "hs-women-2",
        label: "👑 Sand Classic Storm Trench",
        position: "top-[45%] right-[22%]",
        product: products[1],
      },
    ],
  },
  {
    id: "sneaker-hub",
    name: "Sneaker Hub",
    icon: "👟",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1600&auto=format&fit=crop",
    description: "Authenticated sneaker drops, retro kicks & trainers",
    hotspots: [
      {
        id: "hs-snk-1",
        label: "👟 Air Force 1 Premium Craft",
        position: "top-[42%] left-[30%]",
        product: products[2],
      },
      {
        id: "hs-snk-2",
        label: "⚡ Limited Runner Vault",
        position: "top-[50%] right-[28%]",
        product: products[3] || products[2],
      },
    ],
  },
];

export function Gallery() {
  const [activeZoneIdx, setActiveZoneIdx] = useState(0);
  const [activePreviewProduct, setActivePreviewProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  const currentZone = ZONES[activeZoneIdx];

  return (
    <section id="gallery" className="my-10 px-4 sm:px-6 md:px-8">
      {/* 1. Section Heading */}
      <SectionHeading
        eyebrow="FLAGSHIP EXPERIENCE"
        title="Inside The Store."
        subtitle="Explore our curated multibrand departments and boutique interiors in Ganaur"
        className="text-left mb-6"
      />

      {/* 2. Main Interactive Flagship Walkthrough Card */}
      <div className="relative w-full h-[480px] md:h-[540px] rounded-3xl overflow-hidden shadow-xl border border-neutral-200/80 bg-neutral-900 group">
        
        {/* Background Store Visual with Smooth Zoom Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentZone.id}
            initial={{ opacity: 0.6, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={currentZone.image}
              alt={currentZone.name}
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* 3. Top-Left Floating Badge */}
        <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wider uppercase text-[0.68rem] sm:text-xs">
              ✦ GANAUR BOUTIQUE WALKTHROUGH
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/15 bg-white/15 px-3 py-1.5 text-[0.65rem] font-medium text-white backdrop-blur-md">
            <Compass className="h-3 w-3 text-[#E5D2A0]" />
            <span>{currentZone.name}</span>
          </div>
        </div>

        {/* 4. Interactive Pulsing Hotspots Direct on Store Image */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {currentZone.hotspots.map((hs) => (
            <div
              key={hs.id}
              className={`absolute ${hs.position} pointer-events-auto`}
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePreviewProduct(hs.product)}
                className="group/pin relative flex items-center gap-2 rounded-full border border-[#D4AF37]/80 bg-black/80 py-2 px-3.5 text-xs font-bold text-white shadow-[0_0_25px_rgba(212,175,55,0.5)] backdrop-blur-md transition-all hover:bg-white hover:text-[#18181B] hover:border-white cursor-pointer"
              >
                {/* Pulsing Aura */}
                <span className="absolute -inset-1 rounded-full bg-[#D4AF37]/30 animate-ping pointer-events-none" />

                <span className="relative z-10 text-[0.7rem] sm:text-xs tracking-wide whitespace-nowrap">
                  {hs.label}
                </span>
                <ArrowRight className="relative z-10 h-3 w-3 transition-transform group-hover/pin:translate-x-0.5" />
              </motion.button>
            </div>
          ))}
        </div>

        {/* 5. Bottom Floating Zone Switcher Dock */}
        <div className="absolute bottom-5 inset-x-0 z-30 flex justify-center px-4 pointer-events-none">
          <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-white/50 bg-white/90 p-1.5 shadow-lg backdrop-blur-md">
            {ZONES.map((zone, idx) => (
              <button
                key={zone.id}
                onClick={() => setActiveZoneIdx(idx)}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  activeZoneIdx === idx
                    ? "bg-[#18181B] text-white shadow-sm"
                    : "text-[#52525B] hover:bg-neutral-100 hover:text-[#18181B]"
                }`}
              >
                <span>{zone.icon}</span>
                <span>{zone.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 6. Product Quick Preview Modal from Hotspots */}
        <AnimatePresence>
          {activePreviewProduct && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-sm rounded-3xl border border-[#D4AF37]/40 bg-white p-5 shadow-2xl backdrop-blur-2xl text-[#18181B]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-[#FAF9F6] border border-black/[0.06] px-2.5 py-0.5 text-[0.62rem] font-bold text-[#C59B27] tracking-wider uppercase">
                  ✦ {activePreviewProduct.brand}
                </span>
                <button
                  onClick={() => setActivePreviewProduct(null)}
                  className="grid h-6 w-6 place-items-center rounded-full bg-neutral-100 text-[#18181B] hover:bg-neutral-200 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="mt-3 flex gap-3.5 items-center">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#FAF9F6] border border-black/[0.06]">
                  <img
                    src={activePreviewProduct.image}
                    alt={activePreviewProduct.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-extrabold text-[#18181B] leading-snug truncate">
                    {activePreviewProduct.name}
                  </h4>
                  <p className="mt-1 text-sm font-black text-[#18181B]">
                    {inr(activePreviewProduct.price)}
                  </p>
                  <p className="text-[0.65rem] text-[#71717A] mt-0.5">
                    Available in Ganaur Flagship for instant fitting
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    addToCart(activePreviewProduct);
                    setActivePreviewProduct(null);
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-full bg-[#18181B] py-2.5 text-xs font-bold text-white hover:bg-[#27272A] transition-colors cursor-pointer"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  <span>Add to Bag</span>
                </button>
                <a
                  href="#visit"
                  onClick={() => setActivePreviewProduct(null)}
                  className="flex-1 flex items-center justify-center rounded-full border border-neutral-300 bg-white py-2.5 text-xs font-bold text-[#18181B] hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  Reserve In Store
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
