import { brands } from "@/data/catalog";
import { Sparkles } from "lucide-react";

export function BrandStrip() {
  const loop = [...brands, ...brands, ...brands];
  return (
    <section className="border-y border-neutral-200/70 bg-[#F4EFE6]/50 py-4.5">
      <div className="mb-2.5 flex items-center justify-center gap-1.5 text-center">
        <Sparkles className="h-2.5 w-2.5 text-[#C59B27]" />
        <p className="text-[0.58rem] font-bold tracking-[0.3em] text-[#8C7A58] uppercase">
          Curated Luxury Houses · Ganaur Flagship
        </p>
        <Sparkles className="h-2.5 w-2.5 text-[#C59B27]" />
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-8 pr-8">
          {loop.map((b, i) => (
            <div key={`${b}-${i}`} className="flex items-center gap-8">
              <span className="whitespace-nowrap font-display text-xs font-bold tracking-[0.22em] text-[#71717A] transition-colors hover:text-[#18181B]">
                {b.toUpperCase()}
              </span>
              <span className="text-[0.65rem] text-[#C59B27]">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
