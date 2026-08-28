import { inr, type Product } from "@/data/catalog";

const tagColor: Record<string, string> = {
  MEN: "bg-gold/20 text-gold border-gold/40",
  WOMEN: "bg-foreground/10 text-foreground border-foreground/25",
  KIDS: "bg-gold-soft/15 text-gold-soft border-gold-soft/35",
};

export function ProductCard({ product, showTag = false }: { product: Product; showTag?: boolean }) {
  return (
    <article className="group w-[62vw] max-w-[230px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-2">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {showTag ? (
          <span
            className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[0.55rem] font-semibold tracking-[0.15em] backdrop-blur ${tagColor[product.category]}`}
          >
            {product.category}
          </span>
        ) : null}
      </div>
      <div className="space-y-1 p-4">
        <p className="text-[0.55rem] tracking-[0.25em] text-muted-foreground">{product.brand}</p>
        <h3 className="truncate text-sm font-semibold">{product.name}</h3>
        <p className="pt-1 text-sm font-bold text-gold">{inr(product.price)}</p>
      </div>
    </article>
  );
}
