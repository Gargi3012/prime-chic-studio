import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
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

  // Data dynamically configured per gender selection
  const content = isMen
    ? {
        eyebrow: "✦ FOR HIM · PRIVILEGE SELECTION",
        title: "Curated Privilege Edits for Men.",
        subtitle: "Explore verified multibrand men's tailoring and sneakers with flagship markdowns.",
        tallCard: {
          image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=800&auto=format&fit=crop",
          badge: "FLAGSHIP MEN'S SALE",
          headline: "The Final Call.",
          subhead: "UP TO 60% OFF.",
          desc: "Authentic Ralph Lauren, Armani & Zara tailoring clearance.",
          query: "Coat",
        },
        tiles: [
          {
            badge: "ITALIAN TAILORING",
            title: "STRUCTURED BLAZERS",
            price: "UP TO 50% OFF",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
            query: "Blazer",
          },
          {
            badge: "LIMITED KICKS",
            title: "VAULT SNEAKERS",
            price: "FROM ₹2,799",
            image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
            query: "Sneaker",
          },
          {
            badge: "CASHMERE EDIT",
            title: "OVERCOATS & JACKETS",
            price: "FLAT 40% OFF",
            image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=600&auto=format&fit=crop",
            query: "Coat",
          },
          {
            badge: "SUEDE STREETWEAR",
            title: "SUEDE BOMBERS",
            price: "UP TO 60% OFF",
            image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=600&auto=format&fit=crop",
            query: "Bomber",
          },
        ],
      }
    : {
        eyebrow: "✦ FOR HER · PRIVILEGE SELECTION",
        title: "Curated Privilege Edits for Women.",
        subtitle: "Explore verified multibrand women's gowns, trenches and leathercraft with flagship markdowns.",
        tallCard: {
          image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
          badge: "FLAGSHIP WOMEN'S SALE",
          headline: "The Final Call.",
          subhead: "UP TO 60% OFF.",
          desc: "Authentic Massimo Dutti, Zara Studio & Coach clearance.",
          query: "Coat",
        },
        tiles: [
          {
            badge: "COUTURE SUITING",
            title: "TAILORED BLAZER SETS",
            price: "UP TO 50% OFF",
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
            query: "Blazer",
          },
          {
            badge: "LUXE KICKS",
            title: "PASTEL SNEAKERS",
            price: "FROM ₹3,299",
            image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
            query: "Sneaker",
          },
          {
            badge: "EVENINGS",
            title: "SILK WRAP GOWNS",
            price: "FLAT 40% OFF",
            image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=600&auto=format&fit=crop",
            query: "Dress",
          },
          {
            badge: "LEATHERCRAFT",
            title: "SHOULDER TOTES",
            price: "MIN 30% OFF",
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop",
            query: "Bag",
          },
        ],
      };

  return (
    <section id="curated-drops" className="my-14 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Title Block */}
      <div className="mb-8 text-left">
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9E6738] block mb-1">
          {content.eyebrow}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171615]">
          {content.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#7A7570] mt-1 font-normal">
          {content.subtitle}
        </p>
      </div>

      {/* Reimagined Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
        {/* 1. Tall Offer Card (1x2 on desktop: cols 1 to 4) */}
        <motion.div
          key={category + "-tall"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          onClick={() => onSelectOffer?.(content.tallCard.query)}
          className="md:col-span-4 relative aspect-[3/4] md:aspect-auto md:min-h-[520px] rounded-3xl overflow-hidden bg-[#171615] group cursor-pointer shadow-md"
        >
          <img
            src={content.tallCard.image}
            alt={content.tallCard.headline}
            loading="lazy"
            className="w-full h-full object-cover object-top opacity-85 transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle quiet luxury dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Top Tag */}
          <div className="absolute top-5 left-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.15em] font-semibold border border-white/20">
              <Sparkles className="w-3 h-3 text-[#9E6738]" />
              {content.tallCard.badge}
            </span>
          </div>

          {/* Bottom Minimal Typography & CTA */}
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              {content.tallCard.headline} <br />
              <span className="text-[#9E6738] italic font-normal">
                {content.tallCard.subhead}
              </span>
            </h3>
            <p className="text-xs text-white/80">{content.tallCard.desc}</p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-[#9E6738] transition-colors">
                ✦ Explore Drops <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Section: 2x2 Product Tiles + 1 Privilege Card (cols 5 to 12) */}
        <div className="md:col-span-8 flex flex-col justify-between gap-4 lg:gap-6">
          {/* 2x2 Product/Offer Tiles Grid */}
          <div className="grid grid-cols-2 gap-4">
            {content.tiles.map((tile, idx) => (
              <motion.div
                key={category + "-tile-" + idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ y: -3 }}
                onClick={() => onSelectOffer?.(tile.query)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5F3EF] group cursor-pointer shadow-sm border border-black/[0.04]"
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

                {/* Glassmorphism Price Pill */}
                <div className="absolute top-3 right-3">
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20 shadow-sm font-medium">
                    {tile.price}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-white/80 block">
                    {tile.badge}
                  </span>
                  <span className="font-serif text-base sm:text-lg font-bold text-white">
                    {tile.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Privilege / Coupon Card (Reimagined Luxury Glass Modal) */}
          <div className="relative rounded-2xl p-6 bg-[#F5F3EF] border border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 overflow-hidden shadow-sm">
            {/* Background Frosted Glass Glow */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#9E6738]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-1 text-center sm:text-left z-10">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#9E6738] block">
                PRIME CONCIERGE PRIVILEGE
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#171615]">
                CLAIM ₹1,000 PRIVILEGE
              </h4>
              <p className="text-xs text-[#7A7570]">
                Apply instant VIP markdown on your initial {category.toLowerCase()} order at Ganaur Flagship.
              </p>
            </div>

            <div className="z-10 shrink-0">
              <button
                onClick={handleClaim}
                disabled={privilegeApplied}
                className={`rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer ${
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
        </div>
      </div>
    </section>
  );
}
