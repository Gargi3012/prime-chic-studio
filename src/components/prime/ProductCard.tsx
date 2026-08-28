import { Eye, Star } from "lucide-react";
import { inr, type Product } from "@/data/catalog";

const tagColor: Record<string, string> = {
  MEN: "bg-gold/20 text-gold border-gold/40",
  WOMEN: "bg-foreground/10 text-foreground border-foreground/25",
  KIDS: "bg-gold-soft/15 text-gold-soft border-gold-soft/35",
};

interface ProductCardProps {
  product: Product;
  showTag?: boolean;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({ product, showTag = false, onQuickView }: ProductCardProps) {
  return (
    <article
      onClick={() => onQuickView?.(product)}
      className="group relative w-[72vw] max-w-[210px] shrink-0 snap-start cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-gold/60 hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] sm:w-[62vw] sm:max-w-[230px]"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-2">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Category Tag */}
        {showTag ? (
          <span
            className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[0.55rem] font-semibold tracking-[0.15em] backdrop-blur ${tagColor[product.category]}`}
          >
            {product.category}
          </span>
        ) : null}

        {/* Rating Badge */}
        {product.rating && (
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-amber-400/40 bg-black/60 px-2 py-0.5 text-[0.6rem] font-bold text-amber-400 backdrop-blur">
            <Star className="h-2.5 w-2.5 fill-amber-400" />
            {product.rating}
          </span>
        )}

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-1.5 rounded-full border border-gold bg-gold/90 px-4 py-2 text-xs font-bold tracking-[0.15em] text-black shadow-lg">
            <Eye className="h-3.5 w-3.5" />
            QUICK VIEW
          </span>
        </div>
      </div>

      <div className="space-y-1 p-4">
        <p className="text-[0.55rem] font-bold tracking-[0.25em] text-gold uppercase">{product.brand}</p>
        <h3 className="truncate text-sm font-semibold text-foreground">{product.name}</h3>
        <p className="pt-1 text-sm font-extrabold text-gold">{inr(product.price)}</p>
      </div>
    </article>
  );
}
