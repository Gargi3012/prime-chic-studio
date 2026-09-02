import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { type Category } from "@/data/catalog";

interface PrivilegeEditsProps {
  category?: Category;
  onSelectOffer?: (query: string) => void;
  onApplyPrivilege?: () => void;
}

export function PrivilegeEdits({
  category = "MEN",
  onSelectOffer,
  onApplyPrivilege,
}: PrivilegeEditsProps) {
  const [privilegeApplied, setPrivilegeApplied] = useState(false);

  const handleClaim = () => {
    setPrivilegeApplied(true);
    onApplyPrivilege?.();
  };

  const isMen = category === "MEN";

  const data = isMen
    ? {
        microTag: "✦ EXCLUSIVE CURATION",
        title: "Curated Seasonal Edits.",
        subtitle: "Handpicked flagship tailoring and luxury footwear for Him.",
        card1: {
          badge: "Tailoring Edit",
          title: "Double-Breasted Wool Coat",
          subtitle: "Italian structured camel wool double-breasted tailoring cut from fine Italian wool blend.",
          priceTag: "Up to 40% Off • View Drop →",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
          query: "Coat",
        },
        card2: {
          badge: "Vault Footwear",
          title: "Vault Footwear",
          priceTag: "Starting ₹2,799",
          image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
          query: "Sneaker",
        },
        card3: {
          badge: "Suede & Outerwear",
          title: "Suede & Outerwear",
          priceTag: "Up to 50% Off",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
          query: "Blazer",
        },
      }
    : {
        microTag: "✦ EXCLUSIVE CURATION",
        title: "Curated Seasonal Edits.",
        subtitle: "Handpicked flagship tailoring and luxury footwear for Her.",
        card1: {
          badge: "Couture Edit",
          title: "Oatmeal Tailored Blazer Set",
          subtitle: "High-fashion structured linen blazer paired with high-waisted pleated trousers.",
          priceTag: "Up to 40% Off • View Drop →",
          image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
          query: "Blazer",
        },
        card2: {
          badge: "Vault Footwear",
          title: "Vault Footwear",
          priceTag: "Starting ₹3,299",
          image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
          query: "Sneaker",
        },
        card3: {
          badge: "Leather & Trench",
          title: "Suede & Leathercraft",
          priceTag: "Min 30% Off",
          image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
          query: "Bag",
        },
      };

  return (
    <section id="curated-drops" className="w-full bg-[#FDFCFA] px-5 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6 text-left">
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#9E6738] font-semibold mb-1 block">
          {data.microTag}
        </span>
        <h2 className="font-serif text-2xl md:text-3xl text-[#171615] font-normal leading-tight mb-1">
          {data.title}
        </h2>
        <p className="text-xs text-[#7A7570] mb-6">
          {data.subtitle}
        </p>
      </div>

      {/* Avera Editorial Bento Composition */}
      <div className="space-y-4 md:space-y-6">
        
        {/* Card 1: Featured Editorial Look (Full Width / Hero Card) */}
        <motion.div
          key={category + "-card1"}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
          onClick={() => onSelectOffer?.(data.card1.query)}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[#F5F3EF] border border-[#ECE8E1] rounded-3xl overflow-hidden group cursor-pointer shadow-2xs"
        >
          {/* Main Visual */}
          <img
            src={data.card1.image}
            alt={data.card1.title}
            loading="lazy"
            className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-104"
          />

          {/* Scrim Lighting Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

          {/* Micro Badge (Top-left) */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-white/80 backdrop-blur-md text-[#171615] text-[10px] px-3 py-1 rounded-full font-medium border border-black/5 uppercase tracking-wider shadow-2xs">
              {data.card1.badge}
            </span>
          </div>

          {/* Bottom Content Bar */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold drop-shadow-xs">
                {data.card1.title}
              </h3>
              <p className="text-xs text-white/80 hidden sm:block max-w-md">
                {data.card1.subtitle}
              </p>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-[#171615] text-[11px] font-semibold px-4 py-2 rounded-full border border-black/5 shadow-sm group-hover:bg-[#171615] group-hover:text-white transition-colors">
                <span>{data.card1.priceTag}</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Card 2 & Card 3: Dual Minimalist Product Cutouts (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          
          {/* Card 2: Vault Footwear */}
          <motion.div
            key={category + "-card2"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ y: -3 }}
            onClick={() => onSelectOffer?.(data.card2.query)}
            className="bg-[#F5F3EF] border border-[#ECE8E1] rounded-3xl overflow-hidden group cursor-pointer shadow-2xs flex flex-col justify-between p-4"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white/50 mb-3">
              <img
                src={data.card2.image}
                alt={data.card2.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
              />
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-white/80 backdrop-blur-md text-[#171615] text-[10px] px-3 py-1 rounded-full font-medium border border-black/5 uppercase tracking-wider">
                  {data.card2.badge}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div>
                <h4 className="text-[12px] font-medium text-[#171615] uppercase tracking-wide">
                  {data.card2.title}
                </h4>
                <p className="text-[11px] text-[#7A7570]">
                  Verified flagship pricing
                </p>
              </div>
              <span className="bg-white/80 backdrop-blur-md text-[#171615] text-[11px] font-medium border border-black/5 rounded-full px-3 py-1 flex items-center gap-1 group-hover:bg-[#171615] group-hover:text-white transition-colors">
                <span>{data.card2.priceTag}</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </motion.div>

          {/* Card 3: Suede & Outerwear */}
          <motion.div
            key={category + "-card3"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            whileHover={{ y: -3 }}
            onClick={() => onSelectOffer?.(data.card3.query)}
            className="bg-[#F5F3EF] border border-[#ECE8E1] rounded-3xl overflow-hidden group cursor-pointer shadow-2xs flex flex-col justify-between p-4"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white/50 mb-3">
              <img
                src={data.card3.image}
                alt={data.card3.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
              />
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-white/80 backdrop-blur-md text-[#171615] text-[10px] px-3 py-1 rounded-full font-medium border border-black/5 uppercase tracking-wider">
                  {data.card3.badge}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div>
                <h4 className="text-[12px] font-medium text-[#171615] uppercase tracking-wide">
                  {data.card3.title}
                </h4>
                <p className="text-[11px] text-[#7A7570]">
                  Discerning selections
                </p>
              </div>
              <span className="bg-white/80 backdrop-blur-md text-[#171615] text-[11px] font-medium border border-black/5 rounded-full px-3 py-1 flex items-center gap-1 group-hover:bg-[#171615] group-hover:text-white transition-colors">
                <span>{data.card3.priceTag}</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </motion.div>

        </div>

        {/* Prime Concierge Privilege Claim Card */}
        <div className="bg-[#F5F3EF] border border-[#ECE8E1] rounded-3xl p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9E6738] block">
              PRIME CONCIERGE PRIVILEGE
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#171615]">
              CLAIM ₹1,000 PRIVILEGE
            </h4>
            <p className="text-xs text-[#7A7570]">
              Apply instant VIP markdown on your initial {category.toLowerCase()} order at Ganaur Flagship.
            </p>
          </div>

          <button
            onClick={handleClaim}
            disabled={privilegeApplied}
            className={`rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer shrink-0 ${
              privilegeApplied
                ? "bg-[#9E6738] text-white flex items-center gap-1.5"
                : "bg-[#171615] text-[#FDFCFA] hover:bg-[#9E6738] active:scale-95"
            }`}
          >
            {privilegeApplied ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Privilege Applied</span>
              </>
            ) : (
              "Apply Privilege →"
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
