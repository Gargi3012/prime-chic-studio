import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { type Product, type Category } from "@/data/catalog";

const springPhysics = {
  type: "spring" as const,
  stiffness: 360,
  damping: 32,
  mass: 0.5,
};

interface DeckCardItem {
  id: string;
  brand: string;
  title: string;
  badge: string;
  price: string;
  image: string;
  category: Category;
}

const CATEGORY_DECKS: Record<Category, DeckCardItem[]> = {
  MEN: [
    {
      id: "deck-m1",
      brand: "RALPH LAUREN",
      title: "Cashmere Double-Breasted Coat",
      badge: "✦ Runway Edit",
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=600&auto=format&fit=crop",
      category: "MEN",
    },
    {
      id: "deck-m2",
      brand: "ARMANI EXCHANGE",
      title: "Italian Structured Navy Blazer",
      badge: "✦ Tailored Suit",
      price: "₹4,599",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
      category: "MEN",
    },
    {
      id: "deck-m3",
      brand: "NIKE LAB",
      title: "Air Max & Court Low Kicks",
      badge: "✦ Vault Drop",
      price: "₹3,499",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
      category: "MEN",
    },
    {
      id: "deck-m4",
      brand: "ZARA MAN",
      title: "Espresso Brushed Suede Bomber",
      badge: "✦ Limited Drop",
      price: "₹3,999",
      image:
        "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=600&auto=format&fit=crop",
      category: "MEN",
    },
    {
      id: "deck-m5",
      brand: "CALVIN KLEIN",
      title: "Relaxed Linen Overshirt",
      badge: "✦ New Arrival",
      price: "₹2,899",
      image:
        "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=600&auto=format&fit=crop",
      category: "MEN",
    },
  ],
  WOMEN: [
    {
      id: "deck-w1",
      brand: "ZARA STUDIO",
      title: "Oatmeal Tailored Blazer Set",
      badge: "✦ Runway Edit",
      price: "₹3,899",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
      category: "WOMEN",
    },
    {
      id: "deck-w2",
      brand: "MASSIMO DUTTI",
      title: "Sand Classic Storm Trench",
      badge: "✦ Couture Drop",
      price: "₹4,199",
      image:
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop",
      category: "WOMEN",
    },
    {
      id: "deck-w3",
      brand: "NIKE LUXE",
      title: "Air Force 1 Velvet Pastel",
      badge: "✦ Kicks Vault",
      price: "₹3,299",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
      category: "WOMEN",
    },
    {
      id: "deck-w4",
      brand: "MANGO LUXE",
      title: "Ivory Knitted Co-ord Set",
      badge: "✦ Spring Capsule",
      price: "₹3,499",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop",
      category: "WOMEN",
    },
    {
      id: "deck-w5",
      brand: "VERO MODA",
      title: "Emerald Silk Wrap Gown",
      badge: "✦ Evening Edit",
      price: "₹4,499",
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=600&auto=format&fit=crop",
      category: "WOMEN",
    },
  ],
  KIDS: [
    {
      id: "deck-k1",
      brand: "TOMMY HILFIGER",
      title: "Varsity Colorblock Bomber",
      badge: "✦ Junior Drop",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=600&auto=format&fit=crop",
      category: "KIDS",
    },
    {
      id: "deck-k2",
      brand: "LEVI'S KIDS",
      title: "Distressed Comfort Denim Set",
      badge: "✦ Everyday Edit",
      price: "₹1,999",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop",
      category: "KIDS",
    },
    {
      id: "deck-k3",
      brand: "PUMA KIDS",
      title: "Softride Retro Court Runners",
      badge: "✦ Kicks Vault",
      price: "₹2,199",
      image:
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=600&auto=format&fit=crop",
      category: "KIDS",
    },
    {
      id: "deck-k4",
      brand: "ZARA KIDS",
      title: "Pastel Hoodie & Cargo Joggers",
      badge: "✦ Street Casual",
      price: "₹1,799",
      image:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=600&auto=format&fit=crop",
      category: "KIDS",
    },
    {
      id: "deck-k5",
      brand: "GAP KIDS",
      title: "Striped Organic Cotton Dungaree",
      badge: "✦ Playtime Edit",
      price: "₹1,699",
      image:
        "https://images.unsplash.com/photo-1471286174890-9c112ffca564?q=80&w=600&auto=format&fit=crop",
      category: "KIDS",
    },
  ],
};

// Preload all deck images on idle
if (typeof window !== "undefined") {
  Object.values(CATEGORY_DECKS).forEach((deck) => {
    deck.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  });
}

interface FeaturedDeckProps {
  category?: Category;
  onCategoryChange?: (cat: Category) => void;
  onQuickView?: (product: Product) => void;
}

export function FeaturedDeck({
  category = "MEN",
  onCategoryChange,
  onQuickView,
}: FeaturedDeckProps) {
  const deckRef = useRef<HTMLDivElement>(null);
  const inView = useInView(deckRef, { once: true, amount: 0.2 });

  const [activeIdx, setActiveIdx] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset active index smoothly when category changes
  useEffect(() => {
    setActiveIdx(1);
  }, [category]);

  const cards = CATEGORY_DECKS[category] || CATEGORY_DECKS.MEN;
  const totalCards = cards.length;

  const move = (dir: number) => {
    setActiveIdx((i) => (i + dir + totalCards) % totalCards);
  };

  return (
    <section id="collection" className="my-10 px-4 sm:px-6 md:px-8">
      {/* Section Header */}
      <SectionHeading
        eyebrow={`✦ ${category} ARCHIVE SHOWCASE`}
        title={`The Prime Deck · ${category}`}
        subtitle={`Swipe to browse quiet luxury tailoring, apparel & footwear exclusively curated for ${category}`}
        className="text-left mb-6"
      />

      {/* Main Luxury Showcase Card */}
      <Reveal delay={0.05}>
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-[#FAF9F6] shadow-xl">
          {/* Top Bar with Category Selector */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.06] bg-white px-5 py-3.5 sm:px-7">
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-[#B8860B]" />
              <span className="text-xs font-extrabold tracking-[0.2em] text-[#18181B] uppercase">
                {category} QUIET LUXURY LINEUP
              </span>
            </div>

            {/* In-Deck Gender Switcher */}
            <div className="flex items-center gap-1 rounded-full bg-[#FAF9F6] p-1 border border-neutral-200">
              {(["MEN", "WOMEN", "KIDS"] as Category[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange?.(cat)}
                  className={`rounded-full px-3 py-1 text-[0.65rem] font-bold tracking-wider transition-colors cursor-pointer ${
                    category === cat
                      ? "bg-[#18181B] text-white shadow-xs"
                      : "text-[#71717A] hover:text-[#18181B]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 3D Quiet Luxury Card Deck Carousel */}
          <div className="relative bg-gradient-to-b from-white to-[#FAF9F6] pt-6 pb-6 overflow-hidden select-none">
            <motion.div
              ref={deckRef}
              className="relative h-[420px] sm:h-[460px] w-full touch-pan-y flex items-center justify-center cursor-grab active:cursor-grabbing"
              onPanEnd={(_, info) => {
                if (info.offset.x < -25 || info.velocity.x < -120) {
                  move(1);
                } else if (info.offset.x > 25 || info.velocity.x > 120) {
                  move(-1);
                }
              }}
            >
              {cards.map((card, i) => {
                let relativeOffset = i - activeIdx;
                const half = totalCards / 2;
                while (relativeOffset > half) relativeOffset -= totalCards;
                while (relativeOffset < -half) relativeOffset += totalCards;

                const isCenter = relativeOffset === 0;
                const absOffset = Math.abs(relativeOffset);

                // Calculate horizontal displacement with GPU hardware positioning
                const spacing = isMobile ? 120 : 180;
                const xOffset = relativeOffset * spacing;
                const rotate = relativeOffset * 5.5;
                const scale = isCenter ? 1.05 : Math.max(0.85, 0.94 - absOffset * 0.08);
                const opacity = isCenter ? 1 : Math.max(0.4, 0.72 - absOffset * 0.2);
                const zIndex = isCenter ? 30 : 20 - absOffset;

                return (
                  <motion.div
                    key={card.id}
                    onClick={() => {
                      if (!isCenter) {
                        setActiveIdx(i);
                      } else {
                        onQuickView?.({
                          id: card.id,
                          name: card.title,
                          brand: card.brand,
                          price: parseInt(card.price.replace(/[^\d]/g, "")) || 3999,
                          originalPrice: 7999,
                          category: card.category,
                          image: card.image,
                          rating: 4.9,
                          reviewsCount: 28,
                          tags: [card.badge],
                          description: `${card.title} by ${card.brand}. Available at Prime Outlet Flagship Ganaur for ${category}.`,
                          inStock: true,
                        });
                      }
                    }}
                    className={`absolute w-[250px] sm:w-[280px] md:w-[290px] aspect-[9/14] rounded-3xl overflow-hidden cursor-pointer ${
                      isCenter
                        ? "bg-white shadow-[0_20px_50px_rgba(0,0,0,0.14)] ring-1 ring-[#B8860B]/40"
                        : "bg-[#F4EFEA] border border-neutral-200/80"
                    }`}
                    style={{
                      zIndex,
                      willChange: "transform, opacity",
                      transform: "translateZ(0)",
                    }}
                    animate={
                      inView
                        ? {
                            x: xOffset,
                            rotate,
                            scale,
                            opacity,
                          }
                        : {
                            x: xOffset,
                            opacity: 0,
                            scale: 0.85,
                          }
                    }
                    transition={springPhysics}
                  >
                    {/* Background Studio Photography */}
                    <img
                      src={card.image}
                      alt={card.title}
                      decoding="async"
                      className="h-full w-full object-cover object-center pointer-events-none"
                    />

                    {/* Subtle Top & Bottom Gradient Protection */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {/* Top-Left Floating Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-[#18181B] backdrop-blur-md border border-white/50 shadow-xs">
                        {card.badge}
                      </span>
                    </div>

                    {/* Bottom Floating Info Glass Card */}
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/70 shadow-sm text-left z-10">
                      <div className="flex items-center justify-between">
                        <div className="min-w-0 flex-1 pr-2">
                          <p className="text-[10px] tracking-widest text-[#71717A] uppercase font-bold truncate">
                            {card.brand}
                          </p>
                          <h4 className="text-xs sm:text-sm font-semibold text-[#18181B] truncate leading-snug">
                            {card.title}
                          </h4>
                          <p className="text-xs font-black text-[#18181B] mt-0.5">
                            {card.price}
                          </p>
                        </div>

                        {/* Gold Arrow Button */}
                        <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#18181B] text-white shadow-xs">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Left & Right Chevron Controls */}
            <button
              onClick={() => move(-1)}
              aria-label="Previous Drop"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border border-black/[0.08] bg-white/95 text-[#18181B] shadow-md transition-colors hover:bg-[#18181B] hover:text-white cursor-pointer active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => move(1)}
              aria-label="Next Drop"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border border-black/[0.08] bg-white/95 text-[#18181B] shadow-md transition-colors hover:bg-[#18181B] hover:text-white cursor-pointer active:scale-95"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Bottom Interactive Thumbnail Selector Strip */}
          <div className="border-t border-black/[0.06] bg-white p-3.5 sm:p-4">
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="text-[0.62rem] font-bold tracking-[0.2em] text-[#18181B] uppercase">
                {category} CURATED PIECES ({totalCards})
              </span>
              <span className="text-[0.62rem] font-medium text-[#71717A]">
                TAP ANY PIECE TO FOCUS
              </span>
            </div>

            <div className="no-scrollbar flex snap-x snap-mandatory gap-2.5 overflow-x-auto pb-1 pt-1 md:justify-center">
              {cards.map((card, i) => {
                const isSelected = i === activeIdx;
                return (
                  <button
                    key={card.id}
                    onClick={() => setActiveIdx(i)}
                    className={`group relative flex w-[140px] sm:w-[170px] shrink-0 snap-start items-center gap-2.5 rounded-2xl border p-2 text-left transition-colors cursor-pointer ${
                      isSelected
                        ? "border-[#B8860B] bg-[#FAF9F6] shadow-xs ring-1 ring-[#B8860B]/40"
                        : "border-black/[0.06] bg-white hover:border-neutral-300"
                    }`}
                  >
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-neutral-100">
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[0.55rem] font-bold tracking-wider text-[#71717A] uppercase">
                        {card.brand}
                      </p>
                      <h5 className="truncate text-[0.68rem] font-semibold text-[#18181B]">
                        {card.title}
                      </h5>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
