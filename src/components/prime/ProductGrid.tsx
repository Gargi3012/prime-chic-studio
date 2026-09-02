import type { Product } from "@/data/catalog";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  id?: string;
  eyebrow?: string;
  title: string;
  items: Product[];
  onQuickView?: (product: Product) => void;
}

export function ProductGrid({ id, eyebrow, title, items, onQuickView }: ProductGridProps) {
  return (
    <section id={id} className="w-full max-w-7xl mx-auto px-6 py-10 bg-[#FAF8F5]">
      <div className="mb-8 flex flex-col items-start">
        {eyebrow && (
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E6738] font-semibold mb-1">
            {eyebrow}
          </span>
        )}
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#181614] font-normal tracking-wide">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onQuickView={onQuickView}
          />
        ))}
      </div>
    </section>
  );
}
