import { useState } from "react";
import { motion } from "framer-motion";
import { type Category } from "@/data/catalog";
import { SectionHeading } from "./Reveal";

// Sample avatars images from assets
import menJacket from "@/assets/p-men-jacket.jpg";
import womenSet from "@/assets/p-women-set.jpg";
import kidsDenim from "@/assets/p-kids-denim.jpg";
import sneakerWhite from "@/assets/p-sneaker-white.jpg";
import sneakerBlack from "@/assets/p-sneaker-black.jpg";

export interface SubCategoryItem {
  id: string;
  name: string;
  image: string;
  query: string;
}

const CATEGORY_MAP: Record<Category, SubCategoryItem[]> = {
  MEN: [
    { id: "m_jackets", name: "Jackets & Outerwear", image: menJacket, query: "Jacket" },
    { id: "m_sneakers", name: "Sneakers & Kicks", image: sneakerWhite, query: "Sneaker" },
    { id: "m_runners", name: "Runners & Trainers", image: sneakerBlack, query: "Runner" },
    { id: "m_bottoms", name: "Bottoms & Pants", image: menJacket, query: "Pants" },
  ],
  WOMEN: [
    { id: "w_coords", name: "Co-ord Sets", image: womenSet, query: "Set" },
    { id: "w_sneakers", name: "Studio Sneakers", image: sneakerWhite, query: "Sneaker" },
    { id: "w_suits", name: "Linen Suits & Tops", image: womenSet, query: "Suit" },
    { id: "w_trainers", name: "Noir Fitness Trainers", image: sneakerBlack, query: "Trainer" },
  ],
  KIDS: [
    { id: "k_denim", name: "Junior Denim", image: kidsDenim, query: "Denim" },
    { id: "k_sneakers", name: "Play Day Sneakers", image: sneakerWhite, query: "Sneaker" },
    { id: "k_combos", name: "Denim & Tee Combos", image: kidsDenim, query: "Combo" },
    { id: "k_runners", name: "Mini Runners", image: sneakerBlack, query: "Runner" },
  ],
};

interface CategoryAvatarsProps {
  category: Category;
  onSelectSubCategory: (genderCat: Category, subCat: SubCategoryItem) => void;
}

export function CategoryAvatars({ category, onSelectSubCategory }: CategoryAvatarsProps) {
  const items = CATEGORY_MAP[category] || CATEGORY_MAP["MEN"];

  return (
    <section className="my-6 px-4 sm:px-6">
      <SectionHeading
        eyebrow="BROWSE BY VARIETY"
        title={`${category} Categories`}
        subtitle={`Explore curated ${category.toLowerCase()} sub-categories with dedicated filter views`}
        className="text-left mb-6"
      />

      {/* Circular Avatars Grid (Matching Screenshot 1) */}
      <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2 pt-1">
        {items.map((subCat) => (
          <motion.button
            key={subCat.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectSubCategory(category, subCat)}
            className="flex flex-col items-center gap-2.5 shrink-0 group cursor-pointer w-24 sm:w-28 text-center"
          >
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full border-2 border-gold/50 bg-black/60 p-1 shadow-lg transition-transform group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] overflow-hidden">
              <img
                src={subCat.image}
                alt={subCat.name}
                className="h-full w-full rounded-full object-cover select-none transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="text-xs font-bold text-foreground group-hover:text-gold transition-colors leading-tight truncate w-full">
              {subCat.name}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
