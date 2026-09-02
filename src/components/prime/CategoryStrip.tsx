import { motion } from "framer-motion";
import { type Category } from "@/data/catalog";

interface CategoryStripProps {
  category?: Category;
  onSelectCategory?: (categoryQuery: string) => void;
}

const WOMEN_CATEGORIES = [
  {
    id: "w_dresses",
    label: "Dresses",
    query: "Dress",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_tops",
    label: "Tops & Blouses",
    query: "Shirt",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_coords",
    label: "Co-ords",
    query: "Set",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_denim",
    label: "Denim & Pants",
    query: "Pants",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_handbags",
    label: "Luxury Handbags",
    query: "Bag",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_heels",
    label: "Footwear & Heels",
    query: "Heels",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&auto=format&fit=crop",
  },
];

const MEN_CATEGORIES = [
  {
    id: "m_suits",
    label: "Suits & Blazers",
    query: "Blazer",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_linen",
    label: "Linen Shirts",
    query: "Shirt",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_trousers",
    label: "Trousers & Chinos",
    query: "Pants",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_suede",
    label: "Suede Jackets",
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
];

export function CategoryStrip({ category = "WOMEN", onSelectCategory }: CategoryStripProps) {
  const items = category === "MEN" ? MEN_CATEGORIES : WOMEN_CATEGORIES;

  return (
    <section className="w-full py-4 bg-[#FDFCFA] border-y border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-3.5 overflow-x-auto no-scrollbar py-2">
          {items.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onSelectCategory?.(cat.query)}
              className="flex flex-col items-center shrink-0 group cursor-pointer"
            >
              {/* Clean Circular Cutout Frame on #F5F3EF */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#F5F3EF] border border-[#ECE8E1] p-1.5 flex items-center justify-center overflow-hidden shadow-2xs transition-all duration-300 group-hover:border-[#9E6738]">
                <img
                  src={cat.image}
                  alt={cat.label}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-108"
                />
              </div>

              {/* Text Label Below */}
              <span className="mt-2 text-[11px] sm:text-xs font-semibold text-[#171615] tracking-tight group-hover:text-[#9E6738] transition-colors text-center whitespace-nowrap">
                {cat.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
