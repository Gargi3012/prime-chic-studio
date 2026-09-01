import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  ChevronRight,
  Heart,
  ChevronLeft,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CrownP } from "./Logo";
import heroCoupleArcade from "@/assets/hero-couple-arcade.png";

interface HeroProps {
  onOpenAIStylist?: () => void;
  onSelectGender?: (g: "MEN" | "WOMEN" | "KIDS") => void;
  onSelectCategoryTile?: (title: string) => void;
}

const CATEGORY_TILES = [
  {
    id: "cat-1",
    title: "Westernwear",
    gender: "WOMEN" as const,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "cat-2",
    title: "Men's Suits",
    gender: "MEN" as const,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "cat-3",
    title: "Sneakers",
    gender: "MEN" as const,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "cat-4",
    title: "Streetwear",
    gender: "MEN" as const,
    image:
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "cat-5",
    title: "Dresses",
    gender: "WOMEN" as const,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "cat-6",
    title: "Footwear",
    gender: "WOMEN" as const,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "cat-7",
    title: "Kids",
    gender: "KIDS" as const,
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "cat-8",
    title: "Bags",
    gender: "WOMEN" as const,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "cat-9",
    title: "Jackets",
    gender: "MEN" as const,
    image:
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=300&auto=format&fit=crop",
  },
];

export function Hero({
  onOpenAIStylist,
  onSelectGender,
  onSelectCategoryTile,
}: HeroProps) {
  const { totalItems, setIsCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleGenderClick = (gender: "MEN" | "WOMEN" | "KIDS") => {
    onSelectGender?.(gender);
    const el = document.getElementById("collection");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollCategories = (dir: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 240, behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex w-full flex-col bg-[#FAF9F6] px-3 pt-2 pb-5 sm:px-6 md:px-8">
      
      {/* 1. TOP LUXURY NAVBAR (Nykaa Fashion Layout) */}
      <header className="flex w-full items-center justify-between pb-3 pt-1 border-b border-neutral-200/80">
        
        {/* Brand Lockup */}
        <div className="flex items-center gap-6">
          <a href="/" className="group flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded-full bg-[#18181B] text-white">
              <CrownP className="h-4 w-4 text-[#E5D2A0]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-black tracking-[0.14em] text-[#18181B] leading-none">
                PRIME<span className="text-[#B8860B] font-sans font-bold text-sm tracking-normal ml-0.5">OUTLET</span>
              </span>
              <span className="text-[0.48rem] font-bold tracking-[0.3em] text-[#71717A] uppercase">
                GANAUR FLAGSHIP
              </span>
            </div>
          </a>

          {/* Center Category Links */}
          <nav className="hidden lg:flex items-center gap-5 text-[0.8rem] font-semibold tracking-wide text-[#27272A]">
            <button
              onClick={() => handleGenderClick("WOMEN")}
              className="hover:text-[#B8860B] transition-colors cursor-pointer"
            >
              Women
            </button>
            <button
              onClick={() => handleGenderClick("MEN")}
              className="hover:text-[#B8860B] transition-colors cursor-pointer"
            >
              Men
            </button>
            <button
              onClick={() => handleGenderClick("KIDS")}
              className="hover:text-[#B8860B] transition-colors cursor-pointer"
            >
              Kids
            </button>
            <a
              href="#footwear"
              className="hover:text-[#B8860B] transition-colors cursor-pointer"
            >
              Footwear
            </a>
            <a
              href="#collection"
              className="hover:text-[#B8860B] transition-colors cursor-pointer"
            >
              The Vault
            </a>
            <a
              href="#brands"
              className="hover:text-[#B8860B] transition-colors cursor-pointer text-[#B8860B] font-bold"
            >
              All Brands
            </a>
          </nav>
        </div>

        {/* Search Bar & Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Search Box */}
          <div className="hidden sm:flex items-center w-52 md:w-68">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#71717A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, styles, brands..."
                className="w-full rounded-full border border-neutral-200/90 bg-white py-1.5 pl-9 pr-4 text-xs text-[#18181B] placeholder-[#A1A1AA] focus:border-[#18181B] focus:outline-none shadow-2xs"
              />
            </div>
          </div>

          {/* AI Stylist Pill */}
          <button
            onClick={onOpenAIStylist}
            className="flex items-center gap-1.5 rounded-full border border-[#B8860B]/40 bg-white px-3 py-1 text-xs font-bold text-[#18181B] shadow-2xs hover:border-[#B8860B] hover:bg-[#FAF9F6] transition-all cursor-pointer"
          >
            <Sparkles className="h-3 w-3 text-[#B8860B]" />
            <span className="hidden xs:inline text-[0.7rem] sm:text-xs">AI Stylist</span>
          </button>

          {/* Wishlist Icon */}
          <button
            onClick={() => {
              const el = document.getElementById("collection");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Wishlist"
            className="grid h-8 w-8 place-items-center rounded-full border border-neutral-200 bg-white text-[#52525B] hover:text-[#800020] hover:border-neutral-300 transition-colors shadow-2xs cursor-pointer"
          >
            <Heart className="h-3.5 w-3.5" />
          </button>

          {/* Shopping Bag */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-1.5 rounded-full bg-[#18181B] px-3.5 py-1.5 text-xs font-medium text-white shadow-2xs transition-transform hover:scale-105 cursor-pointer"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Bag</span>
            {totalItems > 0 && (
              <span className="grid h-4 w-4 place-items-center rounded-full bg-[#800020] text-[0.55rem] font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Search Bar */}
      <div className="mt-2.5 sm:hidden">
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#71717A]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products, styles, brands..."
            className="w-full rounded-full border border-neutral-200 bg-white py-2 pl-9 pr-4 text-xs text-[#18181B] placeholder-[#A1A1AA] shadow-2xs"
          />
        </div>
      </div>

      {/* 2. PANORAMIC EDITORIAL HERO BILLBOARD (Nykaa Fashion Wide Landscape Format) */}
      <div className="mt-3 relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[340px] rounded-2xl overflow-hidden shadow-sm border border-neutral-200/80 bg-neutral-900">
        
        {/* Full-Bleed Couple Visual with Clean Upper Positioning */}
        <img
          src={heroCoupleArcade}
          alt="Prime Outlet Autumn Spring 2026 Collection"
          className="h-full w-full object-cover object-[50%_15%] sm:object-[50%_20%]"
        />

        {/* Minimal Gradient Overlays (Preserving Face & Outfit Visibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Left Editorial Branding & Offer Overlay */}
        <div className="absolute inset-y-0 left-0 p-5 sm:p-7 md:p-8 z-10 flex flex-col justify-center items-start max-w-sm sm:max-w-md text-left">
          
          {/* Micro Pill */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/40 px-3 py-0.5 text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.2em] text-[#E5D2A0] uppercase backdrop-blur-md">
            <Sparkles className="h-2.5 w-2.5" />
            <span>FLAGSHIP EXCLUSIVE</span>
          </div>

          {/* Nykaa Style Big Typography Lockup */}
          <h1 className="mt-1.5 font-display text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase leading-[1.08] drop-shadow-md">
            AUTUMN / SPRING '26
          </h1>

          {/* Big Discount Tagline */}
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-serif italic text-lg sm:text-2xl md:text-3xl font-bold text-[#E5D2A0] drop-shadow-sm">
              UPTO 60% OFF
            </span>
            <span className="text-[0.65rem] sm:text-xs text-white/85 font-medium">
              • Verified Designer Labels
            </span>
          </div>

          {/* Dual Action Buttons */}
          <div className="mt-3 flex items-center gap-2.5">
            <button
              onClick={() => handleGenderClick("MEN")}
              className="flex items-center gap-1.5 rounded-full bg-white text-black hover:bg-neutral-100 px-4 py-1.5 text-[0.7rem] sm:text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Shop Him</span>
              <ArrowRight className="h-3 w-3" />
            </button>

            <button
              onClick={() => handleGenderClick("WOMEN")}
              className="flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md text-black hover:bg-white px-4 py-1.5 text-[0.7rem] sm:text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Shop Her</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Right Corner Brand Badge */}
        <div className="absolute top-4 right-4 hidden md:block">
          <span className="rounded-full border border-white/30 bg-black/40 px-3 py-1 text-[0.62rem] font-bold tracking-widest text-white backdrop-blur-md shadow-xs uppercase">
            ✦ ZARA · NIKE · ARMANI · RALPH LAUREN
          </span>
        </div>
      </div>

      {/* 3. INSTANT CATEGORY QUICK STRIP (Nykaa Fashion Style Square/Clean Portrait Tiles) */}
      <div className="mt-4 w-full relative">
        <div className="no-scrollbar flex items-center gap-2.5 sm:gap-3.5 overflow-x-auto pb-1 pt-1" ref={scrollRef}>
          {CATEGORY_TILES.map((tile) => (
            <motion.button
              key={tile.id}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                onSelectGender?.(tile.gender);
                onSelectCategoryTile?.(tile.title);
                const el = document.getElementById("collection");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex flex-col items-center shrink-0 text-center cursor-pointer"
            >
              {/* Clean Landscape/Square Tile (Nykaa Style) */}
              <div className="relative aspect-[4/3] w-20 sm:w-24 md:w-28 overflow-hidden rounded-xl border border-neutral-200/90 bg-white shadow-2xs transition-all duration-300 group-hover:border-[#B8860B] group-hover:shadow-sm">
                <img
                  src={tile.image}
                  alt={tile.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
              </div>

              {/* Crisp 11-12px Category Label */}
              <span className="mt-1.5 text-[0.72rem] sm:text-xs font-medium text-[#18181B] group-hover:text-[#B8860B] transition-colors truncate max-w-[80px] sm:max-w-[105px]">
                {tile.title}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Next Scroll Arrow Button */}
        <button
          onClick={() => scrollCategories(1)}
          aria-label="Scroll Categories"
          className="hidden md:grid absolute -right-3 top-[38%] -translate-y-1/2 z-20 h-8 w-8 place-items-center rounded-full border border-neutral-300 bg-white text-[#18181B] shadow-md hover:bg-neutral-50 transition-all cursor-pointer"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

    </section>
  );
}
