import { motion } from "framer-motion";
import heroArcadeImg from "@/assets/hero-couple-arcade.png";

interface HeroProps {
  onSelectGender?: (g: "MEN" | "WOMEN") => void;
}

export function Hero({ onSelectGender }: HeroProps) {
  const handleShopClick = (gender: "MEN" | "WOMEN") => {
    onSelectGender?.(gender);
    const el = document.getElementById("catalog-section") || document.getElementById("curated-drops");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#FDFCFA] p-0 m-0">
      {/* 1. MOBILE 100% FULL-BLEED ULTRA-LUXURY EDITORIAL CANVAS (max-md) */}
      <div className="md:hidden relative w-full h-[86dvh] overflow-hidden bg-[#171615] max-w-full mx-0 p-0">
        {/* Full-Bleed Background Image (Pristine & Uncluttered) */}
        <img
          src={heroArcadeImg}
          alt="Prime Outlet Ganaur Flagship"
          className="w-full h-full object-cover object-[center_18%]"
        />

        {/* Sheer Cinematic Lighting Scrim (Bottom 30% shadow) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 z-10 pointer-events-none" />

        {/* Whisper-Quiet Typography & Architectural Split Action */}
        <div className="absolute bottom-8 inset-x-0 z-20 px-6 text-center flex flex-col items-center">
          {/* Micro-Tag */}
          <span className="text-[10px] tracking-[0.28em] uppercase text-neutral-300 font-medium mb-2.5 drop-shadow-sm">
            AUTUMN / SPRING '26 • BESPOKE CURATION
          </span>

          {/* Headline */}
          <h1 className="font-serif text-3xl md:text-4xl text-white font-normal tracking-tight leading-snug mb-2 drop-shadow">
            The Art of Everyday Luxury.
          </h1>

          {/* Subtext */}
          <p className="text-[11px] text-neutral-300 tracking-wide font-light max-w-xs mb-6">
            Curated Flagship Multibrand Tailoring for Him & Her.
          </p>

          {/* Architectural Split Action */}
          <div className="flex items-center gap-3 w-full max-w-xs justify-center">
            <button
              onClick={() => handleShopClick("MEN")}
              className="flex-1 py-3 rounded-full bg-white/95 text-[#171615] text-[11px] font-semibold tracking-widest uppercase shadow-xl hover:bg-white active:scale-95 transition-all text-center cursor-pointer"
            >
              Shop Him
            </button>

            <button
              onClick={() => handleShopClick("WOMEN")}
              className="flex-1 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white text-[11px] font-semibold tracking-widest uppercase shadow-xl hover:bg-black/60 active:scale-95 transition-all text-center cursor-pointer"
            >
              Shop Her
            </button>
          </div>
        </div>
      </div>

      {/* 2. DESKTOP EDITORIAL BILLBOARD (md:flex) */}
      <div className="hidden md:flex w-full min-h-[calc(100vh-80px)] max-h-[850px] items-center justify-between px-8 md:px-14 py-4 relative overflow-hidden pt-20 md:pt-16">
        {/* Layer 0: Watermark Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-black uppercase text-black/[0.04] tracking-tighter select-none pointer-events-none z-0 whitespace-nowrap">
          FLAGSHIP EDIT
        </div>

        {/* Main Desktop Grid */}
        <div className="grid grid-cols-12 gap-8 items-center w-full max-w-7xl mx-auto z-10 my-auto">
          {/* Left Column: Typography & CTAs (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-5 flex flex-col justify-center items-start z-20"
          >
            <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-[#9E6738] mb-2 block">
              AUTUMN / SPRING '26 • BESPOKE CURATION
            </span>

            <h1 className="font-serif text-4xl lg:text-[50px] text-[#171615] leading-[1.08] tracking-tight mb-2">
              The Art of <br />
              <span className="font-bold">Everyday Luxury.</span>
            </h1>

            <h2 className="font-serif text-lg lg:text-xl font-semibold text-[#171615] italic mb-1.5">
              Unveiling the Autumn / Spring '26 Collections.
            </h2>

            <p className="text-xs text-[#7A7570] mb-6 tracking-wide leading-relaxed max-w-sm">
              Curated Flagship Multibrand Tailoring for Him & Her.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleShopClick("MEN")}
                className="bg-[#171615] text-white rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-[#9E6738] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Shop Him
              </button>

              <button
                onClick={() => handleShopClick("WOMEN")}
                className="bg-white/80 border border-[#ECE8E1] backdrop-blur-sm text-[#171615] rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-neutral-50 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Shop Her
              </button>
            </div>
          </motion.div>

          {/* Right Column: Visual Card (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-7 flex justify-center items-center z-10"
          >
            <div className="h-[520px] w-full rounded-[32px] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#ECE8E1] bg-[#F5F3EF] group">
              <img
                src={heroArcadeImg}
                alt="Prime Outlet The Arcade Autumn Spring 2026"
                className="w-full h-full object-cover object-[50%_18%] transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

              <div className="absolute top-5 right-5 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] uppercase tracking-[0.15em] font-medium shadow-sm flex items-center gap-1.5">
                <span>✦ ARMANI LAB • NIKE • ZARA • RALPH LAUREN</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/40 flex items-center justify-between shadow-lg text-white">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E5D2A0] block">
                    FLAGSHIP ARCADE COLLECTION
                  </span>
                  <span className="text-xs font-semibold text-white drop-shadow-sm">
                    The Autumn / Spring '26 Showcase
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#171615] text-white">
                  NCR SAME-DAY
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
