import { motion } from "framer-motion";

interface PrivilegeEditsProps {
  onSelectOffer?: (query: string) => void;
  onOpenStylist?: () => void;
}

const LOOKBOOK_ITEMS = [
  {
    id: "linen-tailoring",
    title: "Linen Tailoring",
    subtext: "Bespoke Fits",
    query: "Blazer",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "leathercraft",
    title: "Leathercraft",
    subtext: "Italian Totes & Bags",
    query: "Bag",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "silk-satin",
    title: "Silk & Satin",
    subtext: "Evening Silhouettes",
    query: "Dress",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "footwear-archive",
    title: "Footwear Archive",
    subtext: "Curated Kicks & Loafers",
    query: "Sneaker",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
  },
];

export function PrivilegeEdits({ onSelectOffer, onOpenStylist }: PrivilegeEditsProps) {
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
    <section id="curated-drops" className="w-full bg-[#FDFCFA] px-4 py-8 max-w-7xl mx-auto">
      {/* 2. Header */}
      <div className="text-center mb-6">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E6738] font-medium block mb-2">
          ✦ THE SEASON EDIT
        </span>
        <h2 className="font-serif text-2xl md:text-3xl text-[#171615] font-normal">
          Quiet Tailoring & Craft.
        </h2>
      </div>

      {/* 3. Clean 2x2 Lookbook Grid (Beige, Camel, Silk, Black Palette) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        {LOOKBOOK_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -3 }}
            onClick={() => onSelectOffer?.(item.query)}
            className="aspect-[3/4] w-full rounded-2xl overflow-hidden relative bg-[#F5F3EF] border border-[#ECE8E1] group cursor-pointer"
          >
            {/* Curated Luxury Image */}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
            />

            {/* Overlay Label on Photo's Bottom */}
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end z-10">
              <span className="text-[13px] font-medium text-white tracking-wide">
                {item.title}
              </span>
              <span className="text-[10px] text-neutral-300">
                {item.subtext}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4. Bottom Concierge Touchpoint */}
      <div className="mt-8 p-6 rounded-3xl bg-[#F5F3EF] border border-[#ECE8E1] text-center max-w-xl mx-auto">
        <h3 className="font-serif text-base md:text-lg font-bold text-[#171615]">
          Private Styling at Ganaur Flagship
        </h3>
        <p className="text-[11px] text-[#7A7570] mb-4 mt-1">
          Reserve a private fitting suite with our in-house stylist.
        </p>
        <button
          onClick={handleWhatsAppClick}
          className="bg-[#171615] text-white px-6 py-2.5 rounded-full text-xs font-medium inline-block hover:bg-[#9E6738] transition-colors cursor-pointer shadow-sm active:scale-95"
        >
          Book via WhatsApp ↗
        </button>
      </div>
    </section>
  );
}
