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
    label: "SUITS & BLAZERS",
    query: "Blazer",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "m_coats",
    label: "CASHMERE COATS",
    query: "Coat",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "m_bombers",
    label: "SUEDE BOMBERS",
    query: "Bomber",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "m_shirts",
    label: "LINEN SHIRTS",
    query: "Shirt",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "m_runners",
    label: "AIR RUNNERS",
    query: "Runner",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "m_leather",
    label: "LEATHER BELTS",
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
    label: "TAILORED SETS",
    query: "Set",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "w_trenches",
    label: "STORM TRENCHES",
    query: "Coat",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "w_sneakers",
    label: "PASTEL KICKS",
    query: "Sneaker",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "w_dresses",
    label: "SILK GOWNS",
    query: "Dress",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "w_totes",
    label: "LEATHER TOTES",
    query: "Bag",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "w_coords",
    label: "KNITTED CO-ORDS",
    query: "Knit",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "w_heels",
    label: "EVENT HEELS",
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
    <section className="w-full py-8 px-4 sm:px-8 bg-[#FDFCFA] border-y border-black/[0.04]">
      <div className="max-w-7xl mx-auto">
        <div className="no-scrollbar flex items-center justify-between gap-4 md:gap-6 overflow-x-auto pb-2">
          {items.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectCategory?.(cat.query)}
              className="group flex flex-col items-center shrink-0 cursor-pointer"
            >
              {/* Circular Soft Linen Frame #F5F3EF */}
              <div className="relative w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full bg-[#F5F3EF] border border-black/[0.05] p-2 flex items-center justify-center overflow-hidden shadow-sm transition-all duration-300 group-hover:border-[#9E6738] group-hover:shadow-md">
                <img
                  src={cat.image}
                  alt={cat.label}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Uniform 12px Sans-Serif Medium Uppercase Label */}
              <span className="mt-2.5 text-[12px] font-medium tracking-wider text-[#171615] group-hover:text-[#9E6738] transition-colors text-center uppercase whitespace-nowrap">
                {cat.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
