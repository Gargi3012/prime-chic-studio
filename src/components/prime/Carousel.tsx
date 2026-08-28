import type { Product } from "@/data/catalog";
import { ProductCard } from "./ProductCard";
import { Reveal, SectionHeading } from "./Reveal";

export function Carousel({
  id,
  eyebrow,
  title,
  items,
  showTags = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  items: Product[];
  showTags?: boolean;
}) {
  return (
    <section id={id} className="section-pad">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <Reveal delay={0.1}>
        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 sm:gap-4 md:-mx-10 md:px-10">
          {items.map((p) => (
            <ProductCard key={`${title}-${p.id}`} product={p} showTag={showTags} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
