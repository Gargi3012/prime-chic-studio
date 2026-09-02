import { WHATSAPP } from "@/data/catalog";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#FAF8F5] pt-0 pb-16 px-4 md:px-12">
      {/* 1. COMPACT 1-LINE TRUST BAR */}
      <div className="w-full max-w-7xl mx-auto py-6 border-t border-[#ECE8E1] mb-8 flex items-center justify-center text-center">
        <p className="text-[11px] md:text-xs font-serif text-[#7A7570] tracking-wide">
          ⚡ Same-Day NCR Dispatch &nbsp;•&nbsp; ✦ 100% Genuine Brands &nbsp;•&nbsp; 📍 Ganaur Studio Trials
        </p>
      </div>

      {/* 2. MINIMAL QUIET LUXURY FOOTER DIRECTORY */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-[#E5DFD7] gap-6">
          <div>
            <span className="font-serif text-2xl font-normal tracking-[0.2em] text-[#181614] block uppercase">
              PRIME OUTLET
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#9E6738] font-semibold">
              GANAUR FLAGSHIP STUDIO · NCR
            </span>
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#181614] text-[#FAF8F5] px-6 py-3 text-xs font-serif uppercase tracking-widest hover:bg-[#9E6738] transition-colors shadow-xs w-fit"
          >
            <span>Reserve Fitting Suite via WhatsApp ↗</span>
          </a>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6E6963] gap-4 font-serif">
          <p>© 2026 PRIME OUTLET GANAUR FLAGSHIP. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase text-[#6E6963]">
            <span>TERMS</span>
            <span>·</span>
            <span>PRIVACY</span>
            <span>·</span>
            <span>NCR DISPATCH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
