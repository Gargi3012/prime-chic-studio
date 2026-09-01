import { motion } from "framer-motion";
import { type Category } from "@/data/catalog";
import { SectionHeading } from "./Reveal";

export interface SubCategoryItem {
  id: string;
  name: string;
  image: string;
  query: string;
}

const CATEGORY_MAP: Record<Category, SubCategoryItem[]> = {
  MEN: [
    {
      id: "m_blazers",
      name: "Blazers & Suits",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=300&auto=format&fit=crop",
      query: "Jacket",
    },
    {
      id: "m_jackets",
      name: "Jackets & Coats",
      image:
        "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=300&auto=format&fit=crop",
      query: "Jacket",
    },
    {
      id: "m_sneakers",
      name: "Sneakers & Kicks",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=300&auto=format&fit=crop",
      query: "Sneaker",
    },
    {
      id: "m_shirts",
      name: "Shirts & Polos",
      image:
        "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=300&auto=format&fit=crop",
      query: "Pants",
    },
    {
      id: "m_streetwear",
      name: "Streetwear",
      image:
        "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=300&auto=format&fit=crop",
      query: "Jacket",
    },
  ],
  WOMEN: [
    {
      id: "w_coords",
      name: "Co-ord Sets",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&auto=format&fit=crop",
      query: "Set",
    },
    {
      id: "w_dresses",
      name: "Dresses & Gowns",
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=300&auto=format&fit=crop",
      query: "Set",
    },
    {
      id: "w_trenches",
      name: "Trenches & Coats",
      image:
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=300&auto=format&fit=crop",
      query: "Suit",
    },
    {
      id: "w_sneakers",
      name: "Sneakers & Heels",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=300&auto=format&fit=crop",
      query: "Trainer",
    },
    {
      id: "w_bags",
      name: "Bags & Access.",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=300&auto=format&fit=crop",
      query: "Set",
    },
  ],
  KIDS: [
    {
      id: "k_bombers",
      name: "Varsity Jackets",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=300&auto=format&fit=crop",
      query: "Combo",
    },
    {
      id: "k_denim",
      name: "Denim & Jeans",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=300&auto=format&fit=crop",
      query: "Denim",
    },
    {
      id: "k_sneakers",
      name: "Kids Sneakers",
      image:
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=300&auto=format&fit=crop",
      query: "Sneaker",
    },
    {
      id: "k_hoodies",
      name: "Hoodies & Sets",
      image:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=300&auto=format&fit=crop",
      query: "Combo",
    },
    {
      id: "k_dungarees",
      name: "Dungarees & Tops",
      image:
        "https://images.unsplash.com/photo-1471286174890-9c112ffca564?q=80&w=300&auto=format&fit=crop",
      query: "Runner",
    },
  ],
};

interface CategoryAvatarsProps {
  category?: Category;
  onSelectSubCategory: (genderCat: Category, subCat: SubCategoryItem) => void;
}

export function CategoryAvatars({ category = "MEN", onSelectSubCategory }: CategoryAvatarsProps) {
  const items = CATEGORY_MAP[category] || CATEGORY_MAP.MEN;

  return (
    <section id="category-avatars" className="my-6 px-4 sm:px-6">
      <SectionHeading
        eyebrow={`QUICK BROWSE · ${category}`}
        title={`${category} Departments`}
        subtitle={`Explore curated apparel, footwear & accessories tailored exclusively for ${category}`}
        className="text-left mb-3.5"
      />

      {/* Sleek Circular Story Bubbles */}
      <div className="no-scrollbar flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 pt-1 md:justify-center">
        {items.map((subCat) => (
          <motion.button
            key={subCat.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectSubCategory(category, subCat)}
            className="group flex flex-col items-center gap-1.5 shrink-0 cursor-pointer w-16 sm:w-20 text-center"
          >
            {/* Story Circle Avatar Frame */}
            <div className="relative h-15 w-15 sm:h-18 sm:w-18 rounded-full border-2 border-[#C59B27]/40 p-0.5 bg-white shadow-sm transition-all duration-300 group-hover:border-[#C59B27] group-hover:shadow-[0_4px_16px_rgba(197,155,39,0.25)]">
              <div className="h-full w-full rounded-full overflow-hidden bg-neutral-100">
                <img
                  src={subCat.image}
                  alt={subCat.name}
                  className="h-full w-full object-cover select-none transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Concise Title Label */}
            <span className="text-[0.65rem] sm:text-xs font-bold text-[#18181B] group-hover:text-[#C59B27] transition-colors truncate w-full">
              {subCat.name}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
