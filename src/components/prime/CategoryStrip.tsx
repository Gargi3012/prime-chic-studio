import { motion } from "framer-motion";
import { type Category } from "@/data/catalog";

interface CategoryStripProps {
  category?: Category;
  onSelectCategory?: (categoryQuery: string) => void;
}

const MEN_CATEGORIES = [
  {
    id: "m_sneakers",
    label: "SNEAKERS",
    query: "Sneaker",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "m_blazers",
    label: "BLAZERS",
    query: "Blazer",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "m_coats",
    label: "COATS",
    query: "Coat",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "m_bombers",
    label: "BOMBERS",
    query: "Bomber",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "m_shirts",
    label: "SHIRTS",
    query: "Shirt",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "m_runners",
    label: "RUNNERS",
    query: "Runner",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "m_leather",
    label: "LEATHER",
    query: "Leather",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "m_knitwear",
    label: "KNITWEAR",
    query: "Knit",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=300&auto=format&fit=crop",
  },
];

const WOMEN_CATEGORIES = [
  {
    id: "w_sets",
    label: "SUITING",
    query: "Set",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "w_trenches",
    label: "TRENCHES",
    query: "Coat",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "w_sneakers",
    label: "KICKS",
    query: "Sneaker",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "w_dresses",
    label: "GOWNS",
    query: "Dress",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "w_totes",
    label: "TOTES",
    query: "Bag",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "w_coords",
    label: "CO-ORDS",
    query: "Knit",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "w_heels",
    label: "HEELS",
    query: "Heels",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "w_acc",
    label: "ACCESSORIES",
    query: "Accessory",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=300&auto=format&fit=crop",
  },
];

export function CategoryStrip({ category = "MEN", onSelectCategory }: CategoryStripProps) {
  const items = category === "MEN" ? MEN_CATEGORIES : WOMEN_CATEGORIES;

  return (
    <section className="w-full py-4 bg-[#FDFCFA] border-y border-black/[0.04]">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-3 overflow-x-auto no-scrollbar px-5 py-2">
          {items.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onSelectCategory?.(cat.query)}
              className="aspect-[4/5] w-24 sm:w-28 rounded-2xl overflow-hidden bg-[#F5F3EF] border border-[#ECE8E1] flex flex-col justify-end p-2 relative shrink-0 group cursor-pointer shadow-2xs"
            >
              {/* Category Visual */}
              <img
                src={cat.image}
                alt={cat.label}
                loading="lazy"
                className="w-full h-full object-cover rounded-xl absolute inset-0 transition-transform duration-500 group-hover:scale-108"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-2xl" />

              {/* Micro Text Label Overlaid At Base */}
              <span className="relative z-10 text-[10px] sm:text-[11px] font-semibold text-[#171615] bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md truncate max-w-full text-center shadow-2xs uppercase tracking-wider">
                {cat.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
