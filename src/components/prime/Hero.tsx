import { motion } from "framer-motion";
import heroArcadeImg from "@/assets/hero-couple-arcade.png";
import { type Category } from "@/data/catalog";

interface HeroProps {
  currentCategory?: Category;
  onSelectGender?: (g: Category) => void;
}

export function Hero({ onSelectGender }: HeroProps) {
  const handleGenderClick = (gender: Category) => {
    onSelectGender?.(gender);
    const el = document.getElementById("catalog-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[88vh] md:h-[92vh] overflow-hidden bg-[#181614] m-0 p-0">
      {/* 1. Full-Bleed 100% Background Image */}
      <img
        src={heroArcadeImg}
        alt="Prime Outlet Ganaur Flagship Campaign"
        className="w-full h-full object-cover object-[center_20%]"
      />

      {/* 2. Cinema-Grade Dual Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35 z-10 pointer-events-none" />

      {/* 3. Top-Right Corner Stamp */}
      <div className="absolute top-24 md:top-28 right-6 md:right-16 z-20">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/90 border border-white/30 px-3.5 py-1.5 backdrop-blur-sm select-none font-medium">
          AUTUMN / SPRING '26 SHOWCASE
        </span>
      </div>

      {/* 4. Magazine Editorial Overlay (Bottom-Left) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 sm:bottom-14 left-6 sm:left-10 md:left-16 z-20 max-w-2xl text-white pr-4"
      >
        {/* Micro-Eyebrow */}
        <span className="text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] font-medium mb-3 block drop-shadow-sm">
          COLLECTION N° 01 • GANAUR FLAGSHIP STUDIO • SS'26
        </span>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.02] tracking-tight mb-4 drop-shadow-md">
          The Art of <span className="italic font-serif font-light text-neutral-200">Everyday</span> Luxury.
        </h1>

        {/* Minimal Tagline */}
        <p className="text-xs md:text-sm text-neutral-300 font-light tracking-wide max-w-md mb-8 drop-shadow leading-relaxed">
          Curated multibrand tailoring and handcrafted leather goods for Him & Her.
        </p>

        {/* Sleek Architectural Action Dock */}
        <div className="flex items-center gap-4 flex-wrap">
          <button
            onClick={() => handleGenderClick("WOMEN")}
            className="px-8 py-3.5 bg-white text-[#181614] text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-neutral-200 active:scale-95 transition-all text-center shadow-lg cursor-pointer"
          >
            Explore Her ↗
          </button>

          <button
            onClick={() => handleGenderClick("MEN")}
            className="px-8 py-3.5 bg-black/40 backdrop-blur-md border border-white/40 text-white text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-black/70 active:scale-95 transition-all text-center shadow-lg cursor-pointer"
          >
            Explore Him ↗
          </button>
        </div>
      </motion.div>
    </section>
  );
}
