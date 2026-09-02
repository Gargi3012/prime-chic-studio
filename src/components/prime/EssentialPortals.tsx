import { ArrowUpRight } from "lucide-react";
import { type Category } from "@/data/catalog";

interface EssentialPortalsProps {
  category?: Category;
  onSelectPortal?: (query: string) => void;
}

interface PortalCard {
  title: string;
  tag: string;
  image: string;
  query: string;
}

const PORTALS: PortalCard[] = [
  {
    title: "Evening Silhouettes",
    tag: "COUTURE",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop",
    query: "Dress",
  },
  {
    title: "Structured Tailoring",
    tag: "BESPOKE",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    query: "Blazer",
  },
  {
    title: "Artisanal Leathercraft",
    tag: "LEATHER GOODS",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    query: "Bag",
  },
  {
    title: "Vault Footwear",
    tag: "FOOTWEAR ARCHIVE",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    query: "Shoes",
  },
];

export function EssentialPortals({ onSelectPortal }: EssentialPortalsProps) {
  return (
    <section id="portals-section" className="w-full bg-[#FAF8F5]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto px-6 py-12">
        {PORTALS.map((portal, index) => (
          <div
            key={index}
            onClick={() => onSelectPortal?.(portal.query)}
            className="aspect-[3/4] rounded-3xl overflow-hidden relative group bg-[#F2EEE9] border border-[#E5DFD7] cursor-pointer shadow-sm transition-all duration-500 hover:shadow-md hover:border-[#9E6738]/40"
          >
            {/* Top Micro Pill */}
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider text-[#181614] border border-black/5 shadow-xs uppercase">
              {portal.tag}
            </div>

            {/* Background Image with Zoom on Hover */}
            <img
              src={portal.image}
              alt={portal.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />

            {/* Bottom Gradient Scrim */}
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end justify-between text-white z-10">
              <span className="font-serif text-base sm:text-lg tracking-wide text-white drop-shadow-sm">
                {portal.title}
              </span>
              <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md grid place-items-center text-white group-hover:bg-white group-hover:text-[#181614] transition-colors shrink-0 shadow-xs">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
