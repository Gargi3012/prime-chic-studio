import { Eye, Star, ShoppingBag } from "lucide-react";
import { inr, type Product } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

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
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

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

        {/* Quick View & Add to Cart Hover Actions */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-3 text-center">
          <span className="flex items-center gap-1.5 rounded-full border border-gold bg-gold/90 px-3.5 py-1.5 text-xs font-bold tracking-[0.15em] text-black shadow-lg">
            <Eye className="h-3.5 w-3.5" />
            QUICK VIEW
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between p-4">
        <div className="space-y-0.5 max-w-[130px]">
          <p className="text-[0.55rem] font-bold tracking-[0.25em] text-gold uppercase">{product.brand}</p>
          <h3 className="truncate text-xs font-semibold text-foreground sm:text-sm">{product.name}</h3>
          <div className="flex items-center gap-1.5 pt-0.5">
            <p className="text-xs font-extrabold text-gold sm:text-sm">{inr(product.price)}</p>
            <span className="text-[0.55rem] font-bold text-amber-400/90">+ {Math.floor(product.price / 10)} pts</span>
          </div>
        </div>

        {/* Add to Cart Floating Quick Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          aria-label="Add to cart"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-gold/50 bg-gold/10 text-gold transition-all duration-300 hover:scale-110 hover:bg-gold hover:text-black active:scale-95"
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
