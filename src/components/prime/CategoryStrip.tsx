import { motion } from "framer-motion";
import { type Category } from "@/data/catalog";

interface CategoryStripProps {
  category?: Category;
  onSelectCategory?: (categoryQuery: string) => void;
}

const WOMEN_12_CATEGORIES = [
  {
    id: "w_dresses",
    label: "Dresses & Gowns",
    query: "Dress",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_blazers",
    label: "Tailored Blazers",
    query: "Blazer",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_coords",
    label: "Co-ord Sets",
    query: "Set",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_blouses",
    label: "Silk Blouses",
    query: "Shirt",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_denim",
    label: "Denim & Trousers",
    query: "Pants",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_trenches",
    label: "Storm Trenches",
    query: "Coat",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_totes",
    label: "Leather Totes",
    query: "Bag",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_heels",
    label: "Footwear & Heels",
    query: "Heels",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_kicks",
    label: "Luxury Kicks",
    query: "Sneaker",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_knitwear",
    label: "Knitwear",
    query: "Knit",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_clutches",
    label: "Evening Clutches",
    query: "Bag",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_jewelry",
    label: "Accessories",
    query: "Accessory",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop",
  },
];

const MEN_12_CATEGORIES = [
  {
    id: "m_suits",
    label: "Suits & Blazers",
    query: "Blazer",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_overshirts",
    label: "Linen Overshirts",
    query: "Shirt",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_chinos",
    label: "Tailored Chinos",
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
    id: "m_overcoats",
    label: "Wool Overcoats",
    query: "Coat",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_knitwear",
    label: "Cashmere Knit",
    query: "Knit",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_loafers",
    label: "Italian Loafers",
    query: "Shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_belts",
    label: "Leather Belts",
    query: "Accessory",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_polos",
    label: "Polo Shirts",
    query: "Shirt",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_accessories",
    label: "Sunglasses",
    query: "Accessory",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  },
];

export function CategoryStrip({ category = "WOMEN", onSelectCategory }: CategoryStripProps) {
  const items = category === "MEN" ? MEN_12_CATEGORIES : WOMEN_12_CATEGORIES;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6 bg-[#FDFCFA]">
      <div className="flex items-center gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2">
        {items.map((cat) => (
          <motion.button
            key={cat.id}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCategory?.(cat.query)}
            className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group snap-start"
          >
            {/* Circular Frame */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#F5F3EF] border border-[#ECE8E1] p-1 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#9E6738]/40 group-hover:shadow-md overflow-hidden relative">
              <img
                src={cat.image}
                alt={cat.label}
                loading="lazy"
                className="w-full h-full rounded-full object-cover object-center"
              />
            </div>

            {/* Label Below */}
            <span className="text-[11px] md:text-xs font-medium text-[#171615] text-center tracking-tight max-w-[85px] truncate group-hover:text-[#9E6738] transition-colors">
              {cat.label}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
