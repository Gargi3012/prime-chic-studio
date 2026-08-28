import { brands } from "@/data/catalog";
import { Reveal } from "./Reveal";

export function BrandStrip() {
  const loop = [...brands, ...brands];
  return (
    <section className="border-y border-border/60 bg-surface/40 py-10">
      <Reveal>
        <p className="mb-6 text-center text-[0.6rem] font-medium tracking-[0.4em] text-gold">
          PREMIUM BRANDS · BEST PRICES
        </p>
      </Reveal>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12 pr-12">
          {loop.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="whitespace-nowrap font-display text-lg font-bold tracking-[0.18em] text-muted-foreground/70"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
