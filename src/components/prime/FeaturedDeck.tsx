import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Sparkles, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { inr, products, type Category, type Product } from "@/data/catalog";
import { Reveal, SectionHeading } from "./Reveal";

const springPhysics = { type: "spring" as const, stiffness: 260, damping: 25, mass: 0.8 };
const tabs: Category[] = ["MEN", "WOMEN", "KIDS"];

interface DeckCardProps {
  product: Product;
  index: number;
  activeIdx: number;
  totalCards: number;
  revealed: boolean;
  hasAnimatedIn: boolean;
  isMobile: boolean;
  onSelect: () => void;
}

function DeckCard({
  product,
  index,
  activeIdx,
  totalCards,
  revealed,
  hasAnimatedIn,
  isMobile,
  onSelect,
}: DeckCardProps) {
  let relativeOffset = index - activeIdx;
  if (totalCards > 0) {
    const half = totalCards / 2;
    while (relativeOffset > half) relativeOffset -= totalCards;
    while (relativeOffset < -half) relativeOffset += totalCards;
  }
  const absOffset = Math.abs(relativeOffset);
  const isCenter = relativeOffset === 0;

  const getCardProps = () => {
    if (relativeOffset === 0) {
      return {
        rotate: 0,
        scale: 1,
        opacity: 1,
        zIndex: 30,
        xOffset: 0,
      };
    } else if (relativeOffset === -1) {
      return {
        rotate: -8,
        scale: isMobile ? 0.88 : 0.9,
        opacity: 1,
        zIndex: 20,
        xOffset: isMobile ? -65 : -95,
      };
    } else if (relativeOffset === 1) {
      return {
        rotate: 8,
        scale: isMobile ? 0.88 : 0.9,
        opacity: 1,
        zIndex: 20,
        xOffset: isMobile ? 65 : 95,
      };
    } else if (relativeOffset === -2) {
      return {
        rotate: -16,
        scale: 0.8,
        opacity: isMobile ? 0 : 0.85,
        zIndex: 10,
        xOffset: isMobile ? -120 : -175,
      };
    } else if (relativeOffset === 2) {
      return {
        rotate: 16,
        scale: 0.8,
        opacity: isMobile ? 0 : 0.85,
        zIndex: 10,
        xOffset: isMobile ? 120 : 175,
      };
    } else {
      const sign = Math.sign(relativeOffset);
      return {
        rotate: sign * 24,
        scale: 0.7,
        opacity: 0,
        zIndex: Math.max(0, 5 - absOffset),
        xOffset: sign * (175 + (absOffset - 2) * 60),
      };
    }
  };

  const currentProps = getCardProps();
  const initialCenterOffset = Math.abs(index - 2);
  const entranceDelay = initialCenterOffset * 0.15;
  const delay = !hasAnimatedIn && revealed ? entranceDelay : 0;

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-label={product.name}
      className={`absolute left-1/2 top-1/2 h-[270px] w-[175px] cursor-pointer overflow-hidden rounded-2xl border bg-surface-2 text-left transition-shadow duration-300 sm:h-[350px] sm:w-[230px] ${
        isCenter
          ? "border-gold/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.35)]"
          : "border-border/80 shadow-lg hover:border-gold/40"
      }`}
      style={{ zIndex: currentProps.zIndex, pointerEvents: currentProps.opacity === 0 ? "none" : "auto" }}
      initial={{
        opacity: 0,
        y: "-160%",
        x: `calc(-50% + ${currentProps.xOffset}px)`,
        scale: 0.8,
        rotate: 0,
      }}
      animate={
        revealed
          ? {
              opacity: currentProps.opacity,
              y: "-50%",
              x: `calc(-50% + ${currentProps.xOffset}px)`,
              scale: currentProps.scale,
              rotate: currentProps.rotate,
            }
          : {
              opacity: 0,
              y: "-160%",
              x: `calc(-50% + ${currentProps.xOffset}px)`,
              scale: 0.8,
              rotate: 0,
            }
      }
      transition={{
        ...springPhysics,
        delay,
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="h-full w-full object-cover select-none"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3 sm:p-4">
        <p className="text-[0.55rem] font-bold tracking-[0.25em] text-gold uppercase">{product.brand}</p>
        <p className="truncate text-xs font-semibold text-white sm:text-sm">{product.name}</p>
      </div>

      {isCenter && (
        <span className="pointer-events-none absolute inset-0 rounded-2xl border border-gold/60 shadow-[inset_0_0_20px_rgba(212,175,55,0.2)]" />
      )}
    </motion.button>
  );
}

interface FeaturedDeckProps {
  category?: Category;
  onCategoryChange?: (cat: Category) => void;
}

export function FeaturedDeck({ category: externalCategory, onCategoryChange }: FeaturedDeckProps) {
  const deckRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const inView = useInView(deckRef, { once: true, amount: 0.3 });
  const [internalCategory, setInternalCategory] = useState<Category>("MEN");
  const category = externalCategory ?? internalCategory;

  const [activeIdx, setActiveIdx] = useState(2);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const deck = products.filter((p) => p.category === category).slice(0, 5);

  useEffect(() => {
    if (inView && !hasAnimatedIn) {
      const timer = setTimeout(() => {
        setHasAnimatedIn(true);
      }, 950);
      return () => clearTimeout(timer);
    }
  }, [inView, hasAnimatedIn]);

  const move = (dir: number) => {
    setHasAnimatedIn(true);
    setActiveIdx((i) => {
      if (deck.length === 0) return 0;
      return (i + dir + deck.length) % deck.length;
    });
  };

  const handleSelectCard = (i: number) => {
    setHasAnimatedIn(true);
    setActiveIdx(i);
  };

  const handleCategoryChange = (cat: Category) => {
    if (onCategoryChange) {
      onCategoryChange(cat);
    } else {
      setInternalCategory(cat);
    }
    setActiveIdx(2);
  };

  const toggleLike = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedMap((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  return (
    <section id="collection" className="section-pad">
      {/* Category Tabs BEFORE / ABOVE Heading */}
      <Reveal className="mb-6 flex justify-center">
        <div className="flex gap-1 rounded-full border border-border bg-surface p-1.5 shadow-md">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => handleCategoryChange(t)}
              className="relative flex min-h-[44px] items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold tracking-[0.18em] transition-colors sm:px-6"
            >
              {category === t ? (
                <motion.span
                  layoutId="tab-pill-main"
                  className="absolute inset-0 rounded-full bg-gold-gradient"
                  transition={springPhysics}
                />
              ) : null}
              <span className={`relative ${category === t ? "text-primary-foreground font-bold" : "text-muted-foreground"}`}>
                {t}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      {/* Section Heading */}
      <SectionHeading eyebrow="FEATURED COLLECTION" title="The Prime Deck" className="text-center mb-8" />

      {/* ZEVANA-Style Single-Screen Showcase Container */}
      <Reveal delay={0.05}>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-black/95 shadow-2xl backdrop-blur-md">
          {/* Showcase Top Bar */}
          <div className="flex items-center justify-between border-b border-border/60 px-4 py-3 sm:px-6 sm:py-4">
            {/* Brand Logo Badge */}
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold" />
              <span className="text-xs font-extrabold tracking-[0.25em] text-gold-gradient uppercase sm:text-sm">
                PRIME
              </span>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <a
                href="#visit"
                className="flex min-h-[36px] items-center justify-center rounded-full border border-gold/70 bg-gold/10 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-black"
              >
                VISIT STORE
              </a>
            </div>
          </div>

          {/* Upper Card Deck Showcase */}
          <div className="relative pt-4 pb-2 sm:pt-6">
            <motion.div
              ref={deckRef}
              className="relative h-[340px] w-full touch-pan-y sm:h-[430px]"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -35 || info.velocity.x < -180) move(1);
                else if (info.offset.x > 35 || info.velocity.x > 180) move(-1);
              }}
            >
              {deck.map((p, i) => (
                <DeckCard
                  key={p.id}
                  product={p}
                  index={i}
                  activeIdx={activeIdx}
                  totalCards={deck.length}
                  revealed={inView}
                  hasAnimatedIn={hasAnimatedIn}
                  isMobile={isMobile}
                  onSelect={() => handleSelectCard(i)}
                />
              ))}
            </motion.div>

            {/* Left / Right Nav Arrows */}
            <button
              onClick={() => move(-1)}
              aria-label="Previous card"
              className="absolute left-2 top-[45%] z-40 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-border/80 bg-black/60 text-foreground transition-all hover:bg-gold hover:text-black sm:left-4 sm:h-11 sm:w-11"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => move(1)}
              aria-label="Next card"
              className="absolute right-2 top-[45%] z-40 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-border/80 bg-black/60 text-foreground transition-all hover:bg-gold hover:text-black sm:right-4 sm:h-11 sm:w-11"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Integrated ZEVANA Bottom Product Thumbnail Strip */}
          <div className="border-t border-border/70 bg-surface/50 p-2 sm:p-4">
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="text-[0.6rem] font-bold tracking-[0.25em] text-gold uppercase">
                COLLECTION ITEMS ({deck.length})
              </span>
              <span className="text-[0.6rem] tracking-[0.18em] text-muted-foreground">
                TAP TO FOCUS
              </span>
            </div>

            <div
              ref={stripRef}
              className="no-scrollbar flex snap-x snap-mandatory gap-2.5 overflow-x-auto pb-1 pt-1 sm:gap-3"
            >
              {deck.map((p, i) => {
                const isSelected = i === activeIdx;
                const isLiked = likedMap[p.id];
                return (
                  <button
                    key={p.id}
                    onClick={() => handleSelectCard(i)}
                    className={`group relative flex w-[140px] shrink-0 snap-start items-center gap-2.5 rounded-xl border p-2 text-left transition-all duration-300 sm:w-[190px] sm:gap-3 sm:p-2.5 ${
                      isSelected
                        ? "border-gold bg-gold/15 shadow-[0_0_20px_rgba(212,175,55,0.25)] ring-1 ring-gold"
                        : "border-border/70 bg-surface-2/90 hover:border-gold/50 hover:bg-surface-2"
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-black/40 sm:h-14 sm:w-14">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Meta Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="truncate text-[0.55rem] font-bold tracking-[0.15em] text-gold uppercase">
                          {p.brand}
                        </p>
                        <span className="flex items-center gap-0.5 text-[0.55rem] font-semibold text-amber-400">
                          <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                          4.8
                        </span>
                      </div>
                      <h4 className="truncate text-xs font-bold text-foreground">
                        {p.name}
                      </h4>
                      <p className="text-xs font-extrabold text-gold">
                        {inr(p.price)}
                      </p>
                    </div>

                    {/* Favorite Heart Button */}
                    <button
                      type="button"
                      onClick={(e) => toggleLike(p.id, e)}
                      aria-label="Favorite product"
                      className="absolute right-1.5 top-1.5 text-muted-foreground transition-colors hover:text-rose-500"
                    >
                      <Heart
                        className={`h-3.5 w-3.5 ${
                          isLiked ? "fill-rose-500 text-rose-500" : "text-muted-foreground/60"
                        }`}
                      />
                    </button>
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
