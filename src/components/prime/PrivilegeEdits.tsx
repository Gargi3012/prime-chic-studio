import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { type Category } from "@/data/catalog";

interface PrivilegeEditsProps {
  category?: Category;
  onSelectOffer?: (query: string) => void;
  onOpenStylist?: () => void;
}

const WOMEN_OFFERS = [
  {
    id: "w_slip",
    title: "Silk Slip Dresses",
    subtext: "Verified flagship markdown drop",
    tag: "FLAT 40% OFF",
    query: "Dress",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "w_couture",
    title: "Evening Couture Edit",
    subtext: "Curated silk & gown silhouettes",
    tag: "UP TO 50% OFF",
    query: "Dress",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "w_coords",
    title: "Summer Linen Co-Ords",
    subtext: "Bespoke linen sets for Her",
    tag: "FROM ₹1,899",
    query: "Set",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "w_totes",
    title: "Designer Leather Totes",
    subtext: "Italian leathercraft archive",
    tag: "EXTRA 20% OFF",
    query: "Bag",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop",
  },
];

const MEN_OFFERS = [
  {
    id: "m_tailoring",
    title: "Italian Wool Tailoring",
    subtext: "Bespoke double-breasted suits",
    tag: "FLAT 45% OFF",
    query: "Blazer",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m_shirts",
    title: "Resort Linen Shirts",
    subtext: "Breathable Italian linen fits",
    tag: "UNDER ₹1,999",
    query: "Shirt",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m_bombers",
    title: "Suede Bombers & Coats",
    subtext: "Brushed espresso suede outerwear",
    tag: "UP TO 50% OFF",
    query: "Coat",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m_sneakers",
    title: "Vault Sneakers Archive",
    subtext: "Limited retro kicks & court lows",
    tag: "STARTING ₹2,999",
    query: "Sneaker",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
  },
];

export function PrivilegeEdits({
  category = "WOMEN",
  onSelectOffer,
  onOpenStylist,
}: PrivilegeEditsProps) {
  const [privilegeApplied, setPrivilegeApplied] = useState(false);
  const isMen = category === "MEN";
  const offers = isMen ? MEN_OFFERS : WOMEN_OFFERS;

  const handleClaim = () => {
    setPrivilegeApplied(true);
  };

  const handleWhatsAppClick = () => {
    if (onOpenStylist) {
      onOpenStylist();
    } else {
      window.open(
        "https://wa.me/919999999999?text=Hello%20Prime%20Outlet%20Flagship,%20I%20would%20like%20to%20reserve%20a%20private%20fitting%20suite.",
        "_blank"
      );
    }
  };

  return (
    <section id="curated-drops" className="w-full bg-[#FDFCFA] px-6 md:px-12 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-left">
        <span className="text-xs tracking-[0.2em] text-[#9E6738] uppercase font-semibold mb-1 block">
          ✦ PRIVILEGE MARKDOWNS
        </span>
        <h2 className="font-serif text-2xl md:text-3xl text-[#171615] font-normal">
          {isMen ? "The Men's Private Archive." : "The Women's Private Archive."}
        </h2>
      </div>

      {/* Grid: 2 cols on mobile, 4 cols on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {offers.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -3 }}
            onClick={() => onSelectOffer?.(item.query)}
            className="aspect-[3/4] rounded-3xl overflow-hidden relative group bg-[#F5F3EF] border border-[#ECE8E1] cursor-pointer shadow-sm flex flex-col justify-between"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />

            {/* Discount Pill (Top-Left) */}
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#171615] border border-black/5 shadow-sm uppercase">
                {item.tag}
              </span>
            </div>

            {/* Bottom Scrim Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end text-white z-10">
              <h3 className="text-[13px] md:text-[14px] font-medium leading-snug text-white">
                {item.title}
              </h3>
              <p className="text-[11px] text-neutral-300 font-light mt-0.5">
                {item.subtext}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Prime Concierge Banner */}
      <div className="mt-10 bg-[#F5F3EF] border border-[#ECE8E1] rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
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

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <button
            onClick={handleClaim}
            disabled={privilegeApplied}
            className={`rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer ${
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

          <button
            onClick={handleWhatsAppClick}
            className="border border-[#171615] text-[#171615] hover:bg-[#171615] hover:text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Book Concierge ↗
          </button>
        </div>
      </div>
    </section>
  );
}
