export function StudioServiceStrip() {
  return (
    <section className="w-full bg-transparent px-4 sm:px-6">
      <div className="max-w-6xl mx-auto py-12 border-t border-b border-[#E8E2D9] my-10 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#E8E2D9]">
          
          {/* Column 01: Atelier */}
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.3em] font-mono text-[#9E6738] block mb-2">
              01 / ATELIER
            </span>
            <h3 className="font-serif text-lg text-[#181614] tracking-wide mb-1.5 font-normal">
              Private Fitting Suite
            </h3>
            <p className="text-[11px] text-[#7A7570] font-light leading-relaxed">
              One-on-one styling and archive preview prior to global catalog release.
            </p>
          </div>

          {/* Column 02: Dispatch */}
          <div className="flex flex-col pt-6 md:pt-0 md:pl-8">
            <span className="text-[10px] tracking-[0.3em] font-mono text-[#9E6738] block mb-2">
              02 / DISPATCH
            </span>
            <h3 className="font-serif text-lg text-[#181614] tracking-wide mb-1.5 font-normal">
              Same-Day White-Glove Courier
            </h3>
            <p className="text-[11px] text-[#7A7570] font-light leading-relaxed">
              Dedicated doorstep courier delivery across Sonipat, Panipat, and Delhi-NCR within 4 hours.
            </p>
          </div>

          {/* Column 03: Provenance */}
          <div className="flex flex-col pt-6 md:pt-0 md:pl-8">
            <span className="text-[10px] tracking-[0.3em] font-mono text-[#9E6738] block mb-2">
              03 / PROVENANCE
            </span>
            <h3 className="font-serif text-lg text-[#181614] tracking-wide mb-1.5 font-normal">
              Verified Global Sourcing
            </h3>
            <p className="text-[11px] text-[#7A7570] font-light leading-relaxed">
              Direct European clearance sourcing with genuine manufacturer tags, hardware serials, and customs documentation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
