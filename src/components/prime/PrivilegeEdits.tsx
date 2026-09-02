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
          badge: "TAILORING EDIT",
          title: "Structured Linen & Wool Blazers",
          price: "From ₹4,999",
          cta: "Explore Drop →",
          image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1200&auto=format&fit=crop",
          query: "Blazer",
        },
        card2: {
          badge: "VAULT FOOTWEAR",
          title: "Sneaker Archive",
          price: "From ₹2,799",
          image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
          query: "Sneaker",
        },
        card3: {
          badge: "SUEDE & OUTERWEAR",
          title: "Suede Bombers & Coats",
          price: "Flat 40% Off",
          image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop",
          query: "Coat",
        },
      }
    : {
        microTag: "✦ EXCLUSIVE CURATION",
        title: "Curated Seasonal Edits.",
        subtitle: "Handpicked flagship suiting and luxury leathercraft for Her.",
        card1: {
          badge: "COUTURE SUITING",
          title: "Oatmeal Linen Suit & Trousers",
          price: "From ₹5,499",
          cta: "Explore Drop →",
          image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
          query: "Blazer",
        },
        card2: {
          badge: "VAULT FOOTWEAR",
          title: "Pastel Luxury Court Kicks",
          price: "From ₹3,299",
          image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
          query: "Sneaker",
        },
        card3: {
          badge: "LEATHER & TRENCH",
          title: "Leather Totes & Storm Trenches",
          price: "Flat 30% Off",
          image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
          query: "Bag",
        },
      };

  return (
    <section id="curated-drops" className="w-full bg-[#FDFCFA] px-6 md:px-14 py-10 max-w-7xl mx-auto">
      {/* 1. Section Header */}
      <div className="mb-8 text-left">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E6738] font-semibold mb-2 block">
          {data.microTag}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#171615] font-normal leading-tight mb-2">
          {data.title}
        </h2>
        <p className="text-xs md:text-sm text-[#7A7570] mb-8">
          {data.subtitle}
        </p>
      </div>

      {/* 2. Editorial 3-Card Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Card 1: Featured Tailoring Lookbook (Span 7 Columns, Tall Aspect) */}
        <motion.div
          key={category + "-card1"}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
          onClick={() => onSelectOffer?.(data.card1.query)}
          className="md:col-span-7 h-[460px] md:h-[540px] rounded-3xl overflow-hidden relative group bg-[#F5F3EF] border border-[#ECE8E1] shadow-sm cursor-pointer"
        >
          {/* High-end tailoring image */}
          <img
            src={data.card1.image}
            alt={data.card1.title}
            loading="lazy"
            className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-all duration-700"
          />

          {/* Top Badge */}
          <div className="absolute top-5 left-5 z-10">
            <span className="bg-white/80 backdrop-blur-md text-[#171615] text-[10px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-black/5 shadow-xs">
              {data.card1.badge}
            </span>
          </div>

          {/* Bottom Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6 flex justify-between items-end z-10">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                {data.card1.title}
              </h3>
              <p className="text-xs text-neutral-200 mt-1 font-medium">
                {data.card1.price}
              </p>
            </div>

            <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-neutral-100 transition-colors shadow-sm cursor-pointer shrink-0">
              {data.card1.cta}
            </button>
          </div>
        </motion.div>

        {/* Right Stack (Span 5 Columns, Two Stacked Cards) */}
        <div className="md:col-span-5 flex flex-col gap-6">
          
          {/* Card 2: Vault Footwear (Top Half, ~255px) */}
          <motion.div
            key={category + "-card2"}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ y: -3 }}
            onClick={() => onSelectOffer?.(data.card2.query)}
            className="h-[255px] rounded-3xl overflow-hidden relative group bg-[#F5F3EF] border border-[#ECE8E1] cursor-pointer shadow-xs"
          >
            <img
              src={data.card2.image}
              alt={data.card2.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white/80 backdrop-blur-md text-[#171615] text-[10px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-black/5 shadow-xs">
                {data.card2.badge}
              </span>
            </div>

            {/* Bottom Label */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-5 flex items-end justify-between z-10 text-white">
              <div>
                <h4 className="font-serif text-lg font-bold text-white">
                  {data.card2.title}
                </h4>
                <p className="text-xs text-white/80">
                  {data.card2.price}
                </p>
              </div>
              <span className="text-xs font-semibold text-white/90 flex items-center gap-1 group-hover:text-white transition-colors">
                View <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>

          {/* Card 3: Suede & Outerwear (Bottom Half, ~255px) */}
          <motion.div
            key={category + "-card3"}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            whileHover={{ y: -3 }}
            onClick={() => onSelectOffer?.(data.card3.query)}
            className="h-[255px] rounded-3xl overflow-hidden relative group bg-[#F5F3EF] border border-[#ECE8E1] cursor-pointer shadow-xs"
          >
            <img
              src={data.card3.image}
              alt={data.card3.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white/80 backdrop-blur-md text-[#171615] text-[10px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-black/5 shadow-xs">
                {data.card3.badge}
              </span>
            </div>

            {/* Bottom Label */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-5 flex items-end justify-between z-10 text-white">
              <div>
                <h4 className="font-serif text-lg font-bold text-white">
                  {data.card3.title}
                </h4>
                <p className="text-xs text-white/80">
                  {data.card3.price}
                </p>
              </div>
              <span className="text-xs font-semibold text-white/90 flex items-center gap-1 group-hover:text-white transition-colors">
                View <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Prime Concierge Voucher Banner */}
      <div className="mt-8 bg-[#F5F3EF] border border-[#ECE8E1] rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
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
    </section>
  );
}
