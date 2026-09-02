import { inr, WHATSAPP, type Product } from "@/data/catalog";
import { ArrowUpRight, Eye } from "lucide-react";

interface VaultDropsProps {
  onQuickView?: (product: Product) => void;
}

const VAULT_ITEMS = [
  {
    id: "vault_1",
    name: "Sand Wool Trench Coat",
    brand: "MASSIMO DUTTI",
    price: 6499,
    originalPrice: 12999,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop",
    category: "WOMEN" as const,
    colors: ["Sand Camel"],
    sizes: ["S", "M", "L", "XL"],
    description: "Tailored belted trench coat crafted from fine virgin wool gabardine.",
  },
  {
    id: "vault_2",
    name: "Sculpted Cognac Leather Tote",
    brand: "POLÈNE PARIS",
    price: 7899,
    originalPrice: 13999,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop",
    category: "WOMEN" as const,
    colors: ["Cognac", "Noir"],
    sizes: ["One Size"],
    description: "Full-grain Italian calfskin tote with folded architectural contours.",
  },
  {
    id: "vault_3",
    name: "Crisp Resort Linen Shirt",
    brand: "RALPH LAUREN",
    price: 3299,
    originalPrice: 6899,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop",
    category: "MEN" as const,
    colors: ["Ecru White", "Sky Blue"],
    sizes: ["S", "M", "L", "XL"],
    description: "Garment-washed pure European linen resort button-down shirt.",
  },
  {
    id: "vault_4",
    name: "Minimalist Leather Court Lows",
    brand: "VAULT ARCHIVE",
    price: 4499,
    originalPrice: 7999,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
    category: "MEN" as const,
    colors: ["White / Gold", "Triple Black"],
    sizes: ["7", "8", "9", "10", "11"],
    description: "Minimalist luxury leather court trainer with gold serial stamping.",
  },
];

export function VaultDrops({ onQuickView }: VaultDropsProps) {
  return (
    <section className="w-full bg-[#FAF8F5] pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#9E6738] font-semibold block mb-1">
            ✦ IN-STUDIO THIS WEEK
          </span>
          <h2 className="font-serif text-3xl text-[#181614] font-normal tracking-wide">
            Curated Autumn / Spring Arrivals.
          </h2>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {VAULT_ITEMS.map((item) => (
            <article
              key={item.id}
              onClick={() => onQuickView?.(item)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-[#E5DFD7] bg-[#F5F3EF] shadow-xs transition-all duration-300 hover:border-[#9E6738]/60 hover:shadow-md flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-xl bg-[#EAE5DF]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Quick View Tag on Hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 p-3">
                  <span className="flex items-center gap-1.5 rounded-full border border-[#E5DFD7] bg-[#FAF8F5]/95 px-3 py-1.5 text-[0.65rem] font-serif font-bold tracking-wider text-[#181614] shadow-sm">
                    <Eye className="h-3 w-3 text-[#9E6738]" />
                    QUICK VIEW
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3.5 bg-[#F5F3EF]">
                <span className="text-[10px] tracking-widest uppercase text-[#9E6738] font-semibold block mt-1">
                  {item.brand}
                </span>
                <h3 className="text-xs md:text-sm font-serif text-[#181614] font-medium truncate mt-0.5">
                  {item.name}
                </h3>
                
                {/* Price & Quick Order */}
                <div className="flex justify-between items-center mt-2 pt-2 border-t border-[#E5DFD7]/80">
                  <span className="text-xs font-serif font-bold text-[#181614]">
                    {inr(item.price)}
                  </span>
                  
                  <a
                    href={`${WHATSAPP}?text=${encodeURIComponent(`I would like to order ${item.brand} - ${item.name} (${inr(item.price)}) from Weekly Vault Drops.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#181614] hover:text-[#9E6738] font-semibold transition-colors"
                  >
                    <span>Order</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9E6738]" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
