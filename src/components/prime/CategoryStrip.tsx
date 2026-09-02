import { motion } from "framer-motion";
import { type Category } from "@/data/catalog";

interface CategoryStripProps {
  category: Category;
  onGenderChange?: (gender: Category) => void;
  onSelectCategory?: (categoryQuery: string) => void;
}

const WOMEN_12_CATEGORIES = [
  {
    id: "w_silk_dresses",
    label: "Silk Dresses",
    query: "Dress",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_tailored_blazers",
    label: "Tailored Blazers",
    query: "Blazer",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_silk_blouses",
    label: "Silk Blouses",
    query: "Shirt",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_linen_coords",
    label: "Linen Co-Ords",
    query: "Set",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_trousers",
    label: "High-Waist Trousers",
    query: "Pants",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_handbags",
    label: "Designer Handbags",
    query: "Bag",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_heels",
    label: "Stilettos & Heels",
    query: "Shoes",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_sneakers",
    label: "Luxury Sneakers",
    query: "Sneaker",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_jewelry",
    label: "Fine Jewellery",
    query: "Accessory",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_eyewear",
    label: "Luxury Eyewear",
    query: "Accessory",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_knitwear",
    label: "Cashmere Knitwear",
    query: "Knit",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_fragrances",
    label: "Rare Perfumes",
    query: "Accessory",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=400&auto=format&fit=crop",
  },
];

const MEN_12_CATEGORIES = [
  {
    id: "m_suits",
    label: "Tailored Suits",
    query: "Blazer",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_linen_shirts",
    label: "Linen Shirts",
    query: "Shirt",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_chinos",
    label: "Pleated Chinos",
    query: "Pants",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_bombers",
    label: "Suede Bombers",
    query: "Coat",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_sneakers",
    label: "Vault Sneakers",
    query: "Sneaker",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_duffles",
    label: "Leather Duffles",
    query: "Bag",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_loafers",
    label: "Italian Loafers",
    query: "Shoes",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_timepieces",
    label: "Luxury Timepieces",
    query: "Accessory",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_shades",
    label: "Designer Sunglasses",
    query: "Accessory",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_sweaters",
    label: "Knit Sweaters",
    query: "Knit",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_polos",
    label: "Pima Cotton Polos",
    query: "Shirt",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_belts",
    label: "Leather Belts",
    query: "Accessory",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400&auto=format&fit=crop",
  },
];

export function CategoryStrip({ category, onGenderChange, onSelectCategory }: CategoryStripProps) {
  const items = category === "MEN" ? MEN_12_CATEGORIES : WOMEN_12_CATEGORIES;

  return (
    <section id="catalog-section" className="w-full max-w-7xl mx-auto px-6 py-10 bg-[#FAF8F5]">
      {/* A. Segmented Gender Switch Bar */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-[#F2EEE9] p-1.5 rounded-full border border-[#E5DFD7] shadow-inner">
          <button
            onClick={() => onGenderChange?.("WOMEN")}
            className={`px-8 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
              category === "WOMEN"
                ? "bg-[#181614] text-white shadow-sm font-bold"
                : "text-[#6E6963] hover:text-[#181614]"
            }`}
          >
            FOR HER
          </button>
          <button
            onClick={() => onGenderChange?.("MEN")}
            className={`px-8 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
              category === "MEN"
                ? "bg-[#181614] text-white shadow-sm font-bold"
                : "text-[#6E6963] hover:text-[#181614]"
            }`}
          >
            FOR HIM
          </button>
        </div>
      </div>

      {/* B. The 12-Item Rich Category Strip (Circular Luxury Rails) */}
      <div className="flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x py-3">
        {items.map((cat) => (
          <motion.div
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCategory?.(cat.query)}
            className="flex flex-col items-center gap-2.5 shrink-0 cursor-pointer group snap-start"
          >
            {/* Circular Frame */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#F2EEE9] border border-[#E5DFD7] p-1 group-hover:border-[#9E6738] transition-all shadow-sm overflow-hidden">
              <img
                src={cat.image}
                alt={cat.label}
                loading="lazy"
                className="w-full h-full rounded-full object-cover object-center"
              />
            </div>

            {/* Label below */}
            <span className="text-[11px] md:text-xs font-medium text-[#181614] text-center tracking-tight max-w-[85px] truncate group-hover:text-[#9E6738] transition-colors">
              {cat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
