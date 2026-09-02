import { Eye, ShoppingBag } from "lucide-react";
import { inr, type Product } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  className?: string;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({ product, className = "", onQuickView }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <article
      onClick={() => onQuickView?.(product)}
      className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-[#E5DFD7] bg-[#F2EEE9] shadow-xs transition-all duration-500 hover:border-[#9E6738]/50 hover:shadow-md ${className}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#EAE5DF]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Quick View Overlay on Hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 p-3">
          <span className="flex items-center gap-1.5 rounded-full border border-[#E5DFD7] bg-[#FAF8F5]/95 px-3.5 py-1.5 text-[0.65rem] font-serif font-bold tracking-wider text-[#181614] shadow-sm">
            <Eye className="h-3 w-3 text-[#9E6738]" />
            QUICK VIEW
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-[#F2EEE9]">
        <div className="space-y-0.5 max-w-[150px]">
          <p className="text-[0.62rem] font-serif uppercase tracking-[0.2em] text-[#9E6738] font-semibold">{product.brand}</p>
          <h3 className="truncate text-xs font-serif text-[#181614] font-medium">{product.name}</h3>
          <p className="text-xs font-serif font-bold text-[#181614] pt-0.5">{inr(product.price)}</p>
        </div>

        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          aria-label="Add to cart"
          className="grid h-8.5 w-8.5 shrink-0 place-items-center rounded-full border border-[#E5DFD7] bg-[#FAF8F5] text-[#181614] transition-all duration-300 hover:bg-[#181614] hover:text-white shadow-xs"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}
