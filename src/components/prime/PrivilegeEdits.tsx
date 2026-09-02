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
    id: "w_dress",
    title: "The Dress Edit • Under ₹2,499",
    tag: "Flat 40% Off",
    query: "Dress",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "w_silk",
    title: "Silk & Evening Couture",
    tag: "Up to 50% Off",
    query: "Dress",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "w_coords",
    title: "Summer Co-Ords & Sets",
    tag: "Starting ₹1,799",
    query: "Set",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "w_bags",
    title: "Designer Handbags Archive",
    tag: "Up to 35% Off",
    query: "Bag",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop",
  },
];

const MEN_OFFERS = [
  {
    id: "m_suits",
    title: "Italian Tailoring & Linen Suits",
    tag: "Flat 45% Off",
    query: "Blazer",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m_linen",
    title: "Linen & Resort Shirts",
    tag: "Under ₹1,999",
    query: "Shirt",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m_suede",
    title: "Suede Bombers & Overshirts",
    tag: "Up to 50% Off",
    query: "Coat",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m_sneakers",
    title: "Vault Sneaker Drops",
    tag: "Starting ₹2,999",
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
    <section id="curated-drops" className="w-full bg-[#FDFCFA] px-4 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-5 text-left">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#171615]">
          {isMen ? "Curated Men's Edits & Offers" : "Curated Women's Edits & Offers"}
        </h2>
        <p className="text-xs text-[#7A7570] mt-0.5 font-normal">
          Verified flagship pricing & private member markdowns.
        </p>
      </div>

      {/* Grid Layout (2x2 on mobile, 4 columns on desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        {offers.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -3 }}
            onClick={() => onSelectOffer?.(item.query)}
            className="aspect-[3/4] rounded-2xl overflow-hidden relative bg-[#F5F3EF] border border-[#ECE8E1] group cursor-pointer shadow-2xs flex flex-col justify-between"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
            />

            {/* Badge top-left */}
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-white/85 backdrop-blur-md text-[#171615] text-[10px] font-bold px-2.5 py-1 rounded-full border border-black/5 uppercase tracking-wider shadow-2xs">
                {item.tag}
              </span>
            </div>

            {/* Bottom Overlay Scrim */}
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end text-white z-10">
              <span className="text-[13px] font-semibold text-white leading-tight">
                {item.title}
              </span>
              <span className="text-[10px] text-neutral-300 font-medium mt-0.5">
                Shop Collection →
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Concierge & Privilege Touchpoint */}
      <div className="mt-8 bg-[#F5F3EF] border border-[#ECE8E1] rounded-3xl p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
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

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleClaim}
            disabled={privilegeApplied}
            className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer shrink-0 ${
              privilegeApplied
                ? "bg-[#9E6738] text-white flex items-center gap-1.5"
                : "bg-[#171615] text-[#FDFCFA] hover:bg-[#9E6738] active:scale-95"
            }`}
          >
            {privilegeApplied ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Applied</span>
              </>
            ) : (
              "Apply Privilege →"
            )}
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="border border-[#171615] text-[#171615] hover:bg-[#171615] hover:text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Book Concierge ↗
          </button>
        </div>
      </div>
    </section>
  );
}
