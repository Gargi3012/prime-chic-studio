import type { Product } from "@/data/catalog";
import { ProductCard } from "./ProductCard";
import { Reveal, SectionHeading } from "./Reveal";

export function Carousel({
  id,
  eyebrow,
  title,
  items,
  showTags = false,
  onQuickView,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  items: Product[];
  showTags?: boolean;
  onQuickView?: (product: Product) => void;
}) {
  return (
    <section id={id} className="my-8 px-4 sm:px-6">
      <SectionHeading eyebrow={eyebrow} title={title} className="text-left mb-4" />
      <Reveal delay={0.1}>
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:gap-3.5">
          {items.map((p) => (
            <ProductCard
              key={`${title}-${p.id}`}
              product={p}
              showTag={showTags}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
