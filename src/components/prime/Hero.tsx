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
      {/* 1. Full-Bleed 100% Background Image with Perfect Mobile Upper Framing */}
      <img
        src={heroArcadeImg}
        alt="Prime Outlet Ganaur Flagship Campaign"
        className="w-full h-full object-cover object-[center_8%] md:object-[center_20%]"
      />

      {/* 2. Cinema-Grade Dual Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 md:to-transparent z-10 pointer-events-none" />



      {/* 4. Magazine Editorial Overlay (Pushed to bottom on mobile so models stay completely unobstructed) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-24 sm:bottom-28 md:bottom-14 inset-x-0 md:inset-x-auto left-0 md:left-16 z-20 px-6 md:px-0 max-w-2xl text-white flex flex-col items-start text-left"
      >


        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.08] md:leading-[1.02] tracking-tight mb-2 md:mb-4 drop-shadow-md">
          The Art of <span className="italic font-serif font-light text-neutral-200">Everyday</span> Luxury.
        </h1>

        {/* Minimal Tagline */}
        <p className="text-[11px] sm:text-xs md:text-sm text-neutral-300 font-light tracking-wide max-w-md mb-4 md:mb-8 drop-shadow leading-relaxed">
          Curated multibrand tailoring for Him & Her.
        </p>

        {/* Side-by-Side Action Buttons */}
        <div className="grid grid-cols-2 gap-3 w-full sm:w-auto sm:flex sm:items-center">
          <button
            onClick={() => handleGenderClick("WOMEN")}
            className="py-3 sm:px-8 sm:py-3.5 bg-white text-[#181614] text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-neutral-200 active:scale-95 transition-all text-center rounded-full sm:rounded-none shadow-lg cursor-pointer"
          >
            EXPLORE HER ↗
          </button>

          <button
            onClick={() => handleGenderClick("MEN")}
            className="py-3 sm:px-8 sm:py-3.5 bg-black/50 backdrop-blur-md border border-white/40 text-white text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-black/70 active:scale-95 transition-all text-center rounded-full sm:rounded-none shadow-lg cursor-pointer"
          >
            EXPLORE HIM ↗
          </button>
        </div>
      </motion.div>
    </section>
  );
}
