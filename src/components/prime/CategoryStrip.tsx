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
    id: "w_blouses",
    label: "Silk Blouses",
    query: "Shirt",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_coords",
    label: "Co-ord Sets",
    query: "Set",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_trousers",
    label: "Tailored Trousers",
    query: "Pants",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_denim",
    label: "Denim Archive",
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
    label: "Stilettos & Heels",
    query: "Heels",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_sneakers",
    label: "Designer Sneakers",
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
    label: "Cashmere & Knit",
    query: "Knit",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "w_fragrances",
    label: "Rare Fragrances",
    query: "Accessory",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=400&auto=format&fit=crop",
  },
];

const MEN_12_CATEGORIES = [
  {
    id: "m_blazers",
    label: "Tailored Blazers",
    query: "Blazer",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "m_shirts",
    label: "Linen Resort Shirts",
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
    id: "m_weekenders",
    label: "Leather Weekenders",
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
    label: "Designer Shades",
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

export function CategoryStrip({ category = "WOMEN", onSelectCategory }: CategoryStripProps) {
  const items = category === "MEN" ? MEN_12_CATEGORIES : WOMEN_12_CATEGORIES;

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-4 bg-[#FDFCFA]">
      <div className="flex items-center gap-5 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x py-4">
        {items.map((cat) => (
          <motion.button
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCategory?.(cat.query)}
            className="flex flex-col items-center shrink-0 cursor-pointer group snap-start"
          >
            {/* Circular Frame */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#F5F3EF] border border-[#ECE8E1] p-1 overflow-hidden shrink-0 group transition-transform duration-300 shadow-sm relative">
              <img
                src={cat.image}
                alt={cat.label}
                loading="lazy"
                className="w-full h-full rounded-full object-cover object-center"
              />
            </div>

            {/* Label Below */}
            <span className="text-[11px] md:text-xs font-medium text-[#171615] text-center tracking-tight max-w-[85px] truncate mt-2 group-hover:text-[#9E6738] transition-colors">
              {cat.label}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
