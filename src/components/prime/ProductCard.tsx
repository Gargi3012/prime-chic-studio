import { Eye, Star, ShoppingBag } from "lucide-react";
import { inr, type Product } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

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
      className="group relative w-[72vw] max-w-[210px] shrink-0 snap-start cursor-pointer overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:border-[#C59B27]/50 hover:shadow-[0_12px_36px_rgba(197,155,39,0.12)] sm:w-[62vw] sm:max-w-[230px]"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#FAF9F6]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
        />

        {/* Category Tag */}
        {showTag && (
          <span className="absolute left-2.5 top-2.5 rounded-full border border-black/[0.06] bg-white/90 px-2 py-0.5 text-[0.55rem] font-bold tracking-widest text-[#71717A] backdrop-blur-md">
            {product.category}
          </span>
        )}

        {/* Rating Badge */}
        {product.rating && (
          <span className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full border border-black/[0.06] bg-white/90 px-2 py-0.5 text-[0.6rem] font-bold text-[#18181B] backdrop-blur-md shadow-xs">
            <Star className="h-2.5 w-2.5 fill-[#C59B27] text-[#C59B27]" />
            {product.rating}
          </span>
        )}

        {/* Quick View Overlay on Hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/15 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 p-3">
          <span className="flex items-center gap-1.5 rounded-full border border-white/80 bg-white/95 px-3.5 py-1.5 text-[0.65rem] font-bold tracking-wider text-[#18181B] shadow-md">
            <Eye className="h-3 w-3 text-[#C59B27]" />
            QUICK VIEW
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between p-3.5">
        <div className="space-y-0.5 max-w-[130px]">
          <p className="text-[0.58rem] font-bold tracking-[0.2em] text-[#C59B27] uppercase">{product.brand}</p>
          <h3 className="truncate text-xs font-semibold text-[#18181B] sm:text-sm">{product.name}</h3>
          <div className="flex items-center gap-1.5 pt-0.5">
            <p className="text-xs font-extrabold text-[#18181B] sm:text-sm">{inr(product.price)}</p>
            <span className="text-[0.55rem] font-bold text-[#8C6D1F]">+ {Math.floor(product.price / 10)} pts</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          aria-label="Add to cart"
          className="grid h-8.5 w-8.5 shrink-0 place-items-center rounded-xl border border-black/[0.08] bg-[#FAF9F6] text-[#18181B] transition-all duration-300 hover:scale-108 hover:border-[#C59B27] hover:bg-[#C59B27] hover:text-white active:scale-95 shadow-xs"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}
