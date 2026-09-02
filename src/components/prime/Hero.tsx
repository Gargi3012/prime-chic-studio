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
      {/* 1. MOBILE EDITORIAL MASTHEAD (max-md) */}
      <div className="md:hidden relative w-full h-[90dvh] overflow-hidden bg-[#171615] max-w-full mx-0 p-0">
        <img
          src={heroArcadeImg}
          alt="Prime Outlet Ganaur Flagship"
          className="w-full h-full object-cover object-[center_15%]"
        />

        {/* Sheer Scrim ONLY behind bottom text */}
        <div className="bg-gradient-to-t from-black/85 via-black/30 to-transparent h-[38%] absolute inset-x-0 bottom-0 z-10 pointer-events-none" />

        <div className="absolute bottom-6 inset-x-0 z-20 px-6 text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-300 font-medium mb-1.5 drop-shadow-sm">
            COLLECTION N° 01 • FLAGSHIP TAILORING
          </span>

          <h1 className="font-serif text-3xl text-white font-normal tracking-tight leading-none mb-2 drop-shadow">
            The Art of Everyday Luxury.
          </h1>

          <p className="text-[11px] text-neutral-300 tracking-wide font-light mb-5">
            Curated multibrand linen & tailoring for Him & Her.
          </p>

          <div className="flex items-center gap-3 w-full max-w-xs mx-auto">
            <button
              onClick={() => handleShopClick("MEN")}
              className="flex-1 py-2.5 px-4 bg-white/90 backdrop-blur-md text-[#171615] text-[11px] font-semibold tracking-widest uppercase rounded-sm shadow-sm hover:bg-white active:scale-95 transition-all text-center cursor-pointer"
            >
              Shop Him ↗
            </button>

            <button
              onClick={() => handleShopClick("WOMEN")}
              className="flex-1 py-2.5 px-4 bg-white/15 backdrop-blur-md border border-white/40 text-white text-[11px] font-semibold tracking-widest uppercase rounded-sm shadow-sm hover:bg-white/25 active:scale-95 transition-all text-center cursor-pointer"
            >
              Shop Her ↗
            </button>
          </div>
        </div>
      </div>

      {/* 2. DESKTOP CINEMATIC MAGAZINE SPREAD (md:flex) */}
      <div className="hidden md:flex w-full md:min-h-[88vh] md:grid md:grid-cols-12 md:items-center px-8 lg:px-16 py-8 bg-[#FDFCFA] pt-24">
        {/* Left Column: Typography & Editorial Console (col-span-5) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-5 flex flex-col justify-center items-start z-20 pr-4 lg:pr-8"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#9E6738] font-semibold mb-4 block">
            COLLECTION N° 01 • FLAGSHIP TAILORING
          </span>

          <h1 className="font-serif text-4xl lg:text-6xl text-[#171615] font-normal tracking-tight leading-[1.08] mb-4">
            The Art of<br />
            Everyday Luxury.
          </h1>

          <p className="text-sm text-[#7A7570] font-light max-w-md mb-8 leading-relaxed">
            Unveiling the Autumn / Spring '26 Collections. Curated multibrand tailoring and leathercraft for Him & Her.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleShopClick("MEN")}
              className="px-8 py-3.5 bg-[#171615] text-white text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer shadow-sm"
            >
              Shop Him ↗
            </button>

            <button
              onClick={() => handleShopClick("WOMEN")}
              className="px-8 py-3.5 bg-transparent border border-[#171615]/30 text-[#171615] text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-black/5 active:scale-95 transition-all cursor-pointer"
            >
              Shop Her ↗
            </button>
          </div>
        </motion.div>

        {/* Right Column: Campaign Billboard (col-span-7) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-7 flex justify-center items-center z-10"
        >
          <div className="h-[620px] lg:h-[680px] w-full rounded-[24px] overflow-hidden relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] border border-[#ECE8E1] bg-[#F5F3EF]">
            {/* Pristine Arcade Couple Photo (Zero Cheap Overlays / Zero UI Bars) */}
            <img
              src={heroArcadeImg}
              alt="Prime Outlet Ganaur Flagship Arcade Collection"
              className="w-full h-full object-cover object-[center_15%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
