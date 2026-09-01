import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SectionHeading } from "./Reveal";

interface SpecialOffersProps {
  onSelectOffer: (offerType: string) => void;
}

const HAPPENING_CATEGORIES = [
  {
    id: "blazers",
    title: "Tailored Blazers",
    badge: "STRUCTURED BLAZERS",
    discount: "Up to 50% off",
    bgGradient: "from-[#FFEDD5] via-[#FED7AA] to-[#FDBA74]", // warm peach champagne
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop",
    offerType: "UNDER_3K",
  },
  {
    id: "sneakers",
    title: "Vault Sneakers",
    badge: "VAULT SNEAKERS",
    discount: "Starting ₹2,799",
    bgGradient: "from-[#E0F2FE] via-[#BAE6FD] to-[#7DD3FC]", // ice blue sky
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=500&auto=format&fit=crop",
    offerType: "SNEAKERS",
  },
  {
    id: "dresses",
    title: "Evening Dresses",
    badge: "EVENING COUTURE",
    discount: "Flat 40% off",
    bgGradient: "from-[#FCE7F3] via-[#FBCFE8] to-[#F472B6]", // soft rose petal
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=500&auto=format&fit=crop",
    offerType: "CLEARANCE",
  },
  {
    id: "bombers",
    title: "Streetwear Bombers",
    badge: "LUXURY BOMBERS",
    discount: "Up to 60% off",
    bgGradient: "from-[#FEF3C7] via-[#FDE68A] to-[#F59E0B]", // golden glow
    image:
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=500&auto=format&fit=crop",
    offerType: "UNDER_3K",
  },
  {
    id: "heels",
    title: "Event-Ready Heels",
    badge: "EVENT-READY HEELS",
    discount: "Up to 55% off",
    bgGradient: "from-[#FEF9C3] via-[#FEF08A] to-[#FACC15]", // champagne gold
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=500&auto=format&fit=crop",
    offerType: "SNEAKERS",
  },
  {
    id: "totes",
    title: "Leather Totes",
    badge: "LEATHER TOTES",
    discount: "Min 30% off",
    bgGradient: "from-[#F3E8FF] via-[#E9D5FF] to-[#C084FC]", // soft lavender
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=500&auto=format&fit=crop",
    offerType: "CLEARANCE",
  },
];

export function SpecialOffers({ onSelectOffer }: SpecialOffersProps) {
  return (
    <section className="my-10 px-4 sm:px-6 md:px-8">
      {/* 1. Section Header */}
      <SectionHeading
        eyebrow="✦ HOT & HAPPENING DROPS"
        title="Curated Privilege Edits."
        subtitle="Explore trending multibrand styles with verified flagship markdowns"
        className="text-left mb-6"
      />

      {/* 2. Nykaa Fashion Style Stamp-Bordered Category Carousel */}
      <div className="relative">
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 sm:gap-5 overflow-x-auto px-4 pb-4 pt-2 md:mx-0 md:px-0">
          {HAPPENING_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => onSelectOffer(cat.offerType)}
              className="group flex flex-col items-center shrink-0 snap-start cursor-pointer w-[160px] sm:w-[185px] md:w-[200px]"
            >
              {/* Postage Stamp Card Container */}
              <div
                className={`relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gradient-to-b ${cat.bgGradient} p-2 shadow-md transition-all duration-300 group-hover:shadow-xl`}
                style={{
                  // Stamp serrated jagged border aesthetic
                  boxShadow: "0 8px 24px rgba(0,0,0,0.07)",
                }}
              >
                {/* Decorative Postage Stamp Perforation Border Pattern */}
                <div className="absolute inset-1 rounded-xl border-2 border-dashed border-white/60 pointer-events-none z-10" />

                {/* Inner Cutout Image Container */}
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-white/40">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  {/* Subtle lighting shine */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/20 pointer-events-none" />
                </div>

                {/* Center Parchment Ribbon / Sticker Label (Nykaa Fashion Style) */}
                <div className="absolute bottom-3 inset-x-3 z-20 flex justify-center">
                  <div className="rounded-md bg-white/95 px-3 py-1 shadow-md border border-neutral-200/80 backdrop-blur-sm transition-transform group-hover:scale-105">
                    <span className="font-serif italic font-bold text-[0.62rem] sm:text-[0.68rem] tracking-wider text-[#18181B] uppercase whitespace-nowrap">
                      {cat.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bold Offer Discount Label Directly Below Stamp Card */}
              <div className="mt-2.5 text-center">
                <p className="text-xs sm:text-sm font-extrabold text-[#18181B] tracking-tight group-hover:text-[#B8860B] transition-colors">
                  {cat.discount}
                </p>
                <p className="text-[0.65rem] font-medium text-[#71717A] flex items-center justify-center gap-0.5">
                  <span>Shop Collection</span>
                  <ChevronRight className="h-3 w-3 text-[#71717A] group-hover:translate-x-0.5 transition-transform" />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
