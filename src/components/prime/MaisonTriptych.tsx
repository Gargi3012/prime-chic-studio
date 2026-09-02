import { WHATSAPP } from "@/data/catalog";

export function MaisonTriptych() {
  return (
    <section className="w-full bg-[#FAF8F5] py-8 md:py-14">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* On mobile: scrollable snap-row or compact 3-col grid; on desktop: 3-column grid with strict capped height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-center">
          
          {/* Left Column: Model Lookbook Shot */}
          <div className="h-[200px] sm:h-[240px] md:h-[300px] w-full rounded-2xl overflow-hidden shadow-xs border border-[#E5DFD7] bg-[#F2EEE9]">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
              alt="Flagship Editorial Lookbook"
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Center Column: Compact Rich Espresso Velvet Card */}
          <div className="h-[220px] sm:h-[240px] md:h-[300px] w-full bg-[#1C1A17] text-white p-5 md:p-6 rounded-2xl flex flex-col justify-between items-center text-center border border-[#302D29] shadow-md relative overflow-hidden">
            {/* Subtle architectural background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Top Monogram */}
            <div className="z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#9E6738] font-semibold">
                ✦ PRIME OUTLET ✦
              </span>
            </div>

            {/* Center Title & Subtitle */}
            <div className="space-y-1.5 z-10 py-1">
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-white font-normal tracking-wide uppercase leading-tight">
                THE FLAGSHIP SALON
              </h3>
              <p className="text-[10px] sm:text-xs text-[#D4C5B9] font-light tracking-widest uppercase">
                Ganaur, Sonipat • Flagship Suite
              </p>
            </div>

            {/* Compact Refined Action Button */}
            <div className="z-10 w-full flex justify-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-white text-[#181614] px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#9E6738] hover:text-white shadow-xs"
              >
                Reserve Suite via WhatsApp ↗
              </a>
            </div>
          </div>

          {/* Right Column: Handcrafted Wardrobe Atmosphere Shot */}
          <div className="h-[200px] sm:h-[240px] md:h-[300px] w-full rounded-2xl overflow-hidden shadow-xs border border-[#E5DFD7] bg-[#F2EEE9]">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop"
              alt="Handcrafted Atelier Wardrobe"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
