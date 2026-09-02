export function StudioServiceStrip() {
  return (
    <section className="w-full bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-[#ECE8E1] mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Private Fitting Suite */}
          <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#ECE8E1] shadow-xs">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#181614] mb-2">
              ✦ PRIVATE FITTING SUITE
            </h3>
            <p className="text-xs text-[#7A7570] leading-relaxed">
              Reserve personal styling and try archive garments at our Ganaur flagship studio.
            </p>
          </div>

          {/* Column 2: NCR Same-Day Dispatch */}
          <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#ECE8E1] shadow-xs">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#181614] mb-2">
              ⚡ NCR SAME-DAY DISPATCH
            </h3>
            <p className="text-xs text-[#7A7570] leading-relaxed">
              Direct white-glove delivery to Sonipat, Panipat, and Delhi within 4 hours.
            </p>
          </div>

          {/* Column 3: 100% Genuine Provenance */}
          <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#ECE8E1] shadow-xs">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#181614] mb-2">
              🔒 100% GENUINE PROVENANCE
            </h3>
            <p className="text-xs text-[#7A7570] leading-relaxed">
              Sourced with authentic brand tags, hardware serials, and outlet clearance verification.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
