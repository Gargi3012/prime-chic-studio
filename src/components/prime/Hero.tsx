import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroArcadeImg from "@/assets/hero-couple-arcade.png";

interface HeroProps {
  onSelectGender?: (g: "MEN" | "WOMEN") => void;
}

export function Hero({ onSelectGender }: HeroProps) {
  const handleShopClick = (gender: "MEN" | "WOMEN") => {
    onSelectGender?.(gender);
    const el = document.getElementById("curated-drops") || document.getElementById("collection");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#FDFCFA]">
      {/* 1. MOBILE FULL-BLEED MAGAZINE COVER HERO (max-md) */}
      <div className="md:hidden relative w-full h-[84dvh] overflow-hidden rounded-b-[32px] bg-[#171615]">
        {/* Full-Bleed Background Image */}
        <img
          src={heroArcadeImg}
          alt="Prime Outlet Ganaur Flagship"
          className="w-full h-full object-cover object-[center_20%]"
        />

        {/* Delicate Scrim Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/90 z-10 pointer-events-none" />

        {/* Micro-Tag Top-Left */}
        <div className="absolute top-20 left-5 z-20">
          <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white border border-white/20 tracking-widest font-semibold uppercase">
            <Sparkles className="w-3 h-3 text-[#E5D2A0]" />
            ✦ GANAUR FLAGSHIP EXCLUSIVE
          </span>
        </div>

        {/* Multibrand Overlay Badge Top-Right */}
        <div className="absolute top-20 right-5 z-20">
          <span className="bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] text-white/90 border border-white/20 uppercase tracking-widest font-medium">
            ARMANI • NIKE • ZARA
          </span>
        </div>

        {/* Text & CTAs Positioned at Bottom Inside Hero Image */}
        <div className="absolute bottom-8 left-6 right-6 z-20 flex flex-col items-start text-white">
          <h1 className="font-serif text-2xl font-bold leading-tight mb-1.5 text-white drop-shadow-sm">
            The Art of Everyday Luxury.
          </h1>
          <p className="text-xs text-neutral-300 mb-4 max-w-[280px] leading-relaxed">
            Curated Autumn / Spring '26 multibrand drop for Him & Her.
          </p>

          <div className="flex items-center gap-3 w-full">
            <button
              onClick={() => handleShopClick("MEN")}
              className="flex-1 bg-white text-black text-xs font-semibold px-5 py-2.5 rounded-full shadow-md active:scale-95 transition-transform flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Shop Him</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => handleShopClick("WOMEN")}
              className="flex-1 bg-white/20 backdrop-blur-md border border-white/40 text-white text-xs font-semibold px-5 py-2.5 rounded-full active:scale-95 transition-transform flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Shop Her</span>
              <ArrowRight className="w-3.5 h-3.5" />
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
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9E6738] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#9E6738]" />
              ✦ GANAUR FLAGSHIP EXCLUSIVE
            </span>

            <h1 className="font-serif text-4xl lg:text-[50px] text-[#171615] leading-[1.08] tracking-tight mb-2">
              The Art of <br />
              <span className="font-bold">Everyday Luxury.</span>
            </h1>

            <h2 className="font-serif text-lg lg:text-xl font-semibold text-[#171615] italic mb-1.5">
              Unveiling the Autumn / Spring '26 Collections.
            </h2>

            <p className="text-xs text-[#7A7570] mb-6 tracking-wide leading-relaxed max-w-sm">
              Verified Designer Labels • Discerning Selections.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleShopClick("MEN")}
                className="bg-[#171615] text-white rounded-full px-6 py-3 text-xs font-semibold shadow-sm hover:bg-[#9E6738] transition-all duration-300 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Shop Him</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleShopClick("WOMEN")}
                className="bg-white/80 border border-[#ECE8E1] backdrop-blur-sm text-[#171615] rounded-full px-6 py-3 text-xs font-semibold shadow-sm hover:bg-neutral-50 transition-all duration-300 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Shop Her</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
