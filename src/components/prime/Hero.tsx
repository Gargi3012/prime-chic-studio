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
    <section className="w-full min-h-[calc(100vh-80px)] max-h-[880px] flex items-center justify-between px-4 sm:px-8 md:px-14 py-4 relative overflow-hidden bg-[#FDFCFA] pt-20 md:pt-16">
      {/* Layer 0: Giant Ultra-Light Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black uppercase text-black/[0.04] tracking-tighter select-none pointer-events-none z-0 whitespace-nowrap">
        FLAGSHIP EDIT
      </div>

      {/* Main Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full max-w-7xl mx-auto z-10 my-auto">
        
        {/* Left Column: Typography & CTAs (lg:col-span-5) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-center items-start z-20"
        >
          {/* Micro-Tag */}
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9E6738] mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#9E6738]" />
            ✦ GANAUR FLAGSHIP EXCLUSIVE
          </span>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-[50px] text-[#171615] leading-[1.08] tracking-tight mb-2">
            The Art of <br />
            <span className="font-bold">Everyday Luxury.</span>
          </h1>

          {/* Sub-Headline (Grander Serif) */}
          <h2 className="font-serif text-lg md:text-xl font-semibold text-[#171615] italic mb-1.5">
            Unveiling the Autumn / Spring '26 Collections.
          </h2>

          {/* Descriptive Subtext (Minimal Sans-Serif) */}
          <p className="text-xs text-[#7A7570] mb-6 tracking-wide leading-relaxed max-w-sm">
            Verified Designer Labels • Discerning Selections.
          </p>

          {/* Dual Action CTAs */}
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

        {/* Right Column: Atmospheric Golden Hour Arcade Visual Card (lg:col-span-7) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex justify-center items-center z-10"
        >
          <div className="h-[480px] md:h-[520px] w-full rounded-[32px] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#ECE8E1] bg-[#F5F3EF] group">
            {/* High-Resolution Grand Arcade Visual */}
            <img
              src={heroArcadeImg}
              alt="Prime Outlet The Arcade Autumn Spring 2026 Collection"
              className="w-full h-full object-cover object-[50%_18%] transition-transform duration-700 group-hover:scale-105"
            />

            {/* Quiet Luxury Gradient Lighting Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

            {/* Minimalist Glassmorphism Multibrand Overlay Pill */}
            <div className="absolute top-5 right-5 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] uppercase tracking-[0.15em] font-medium shadow-sm flex items-center gap-1.5">
              <span>✦ ARMANI LAB • NIKE • ZARA • RALPH LAUREN</span>
            </div>

            {/* Bottom Floating Tag */}
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
    </section>
  );
}
