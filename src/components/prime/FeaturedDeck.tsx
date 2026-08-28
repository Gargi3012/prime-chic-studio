import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { inr, products, type Category, type Product } from "@/data/catalog";
import { Reveal, SectionHeading } from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;
const spring = { type: "spring" as const, damping: 20, stiffness: 90 };
const tabs: Category[] = ["MEN", "WOMEN", "KIDS"];

function DeckCard({
  product,
  offset,
  index,
  onSelect,
}: {
  product: Product;
  offset: number;
  index: number;
  onSelect: () => void;
}) {
  const abs = Math.abs(offset);
  const active = abs === 0;

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-label={product.name}
      className="absolute left-1/2 top-1/2 h-[300px] w-[190px] cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface-2 text-left sm:h-[360px] sm:w-[230px]"
      style={{ zIndex: 10 - abs }}
      initial={{ opacity: 0, y: -220, x: "-50%", scale: 0.7, rotate: 0 }}
      whileInView={{
        opacity: abs > 2 ? 0 : 1,
        x: `calc(-50% + ${offset * 78}px)`,
        y: `calc(-50% + ${abs * 16}px)`,
        scale: 1 - abs * 0.12,
        rotate: offset * 8,
        filter: `blur(${abs * 1.4}px) brightness(${1 - abs * 0.22})`,
      }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ ...spring, delay: 0.15 + abs * 0.18 }}
      animate={{
        opacity: abs > 2 ? 0 : 1,
        x: `calc(-50% + ${offset * 78}px)`,
        y: `calc(-50% + ${abs * 16}px)`,
        scale: 1 - abs * 0.12,
        rotate: offset * 8,
        filter: `blur(${abs * 1.4}px) brightness(${1 - abs * 0.22})`,
      }}
      key={product.id + index}
    >
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
        <p className="text-[0.5rem] tracking-[0.25em] text-gold">{product.brand}</p>
        <p className="truncate text-xs font-semibold">{product.name}</p>
      </div>
      {active ? (
        <span className="pointer-events-none absolute inset-0 rounded-2xl border border-gold/70 shadow-[0_0_50px_-8px_var(--gold)]" />
      ) : null}
    </motion.button>
  );
}

export function FeaturedDeck() {
  const [category, setCategory] = useState<Category>("MEN");
  const [activeIdx, setActiveIdx] = useState(2);

  const deck = products.filter((p) => p.category === category).slice(0, 5);
  const active = deck[activeIdx] ?? deck[0];

  const move = (dir: number) =>
    setActiveIdx((i) => Math.min(deck.length - 1, Math.max(0, i + dir)));

  return (
    <section id="collection" className="section-pad">
      {/* Category tabs */}
      <Reveal className="mb-10 flex justify-center">
        <div className="flex gap-1 rounded-full border border-border bg-surface p-1.5">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => {
                setCategory(t);
                setActiveIdx(2);
              }}
              className="relative rounded-full px-6 py-2.5 text-xs font-semibold tracking-[0.18em] transition-colors"
            >
              {category === t ? (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-gold-gradient"
                  transition={spring}
                />
              ) : null}
              <span className={`relative ${category === t ? "text-primary-foreground" : "text-muted-foreground"}`}>
                {t}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <SectionHeading eyebrow="FEATURED COLLECTION" title="The Prime Deck" className="text-center" />

      {/* Deck */}
      <Reveal delay={0.05}>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-black px-4 py-6">
          <motion.div
            className="relative h-[400px] touch-pan-y sm:h-[460px]"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.16}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) move(1);
              else if (info.offset.x > 50) move(-1);
            }}
          >
            <AnimatePresence mode="popLayout">
              {deck.map((p, i) => (
                <DeckCard
                  key={p.id}
                  product={p}
                  index={i}
                  offset={i - activeIdx}
                  onSelect={() => setActiveIdx(i)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-2 flex items-center justify-center gap-2">
            {deck.map((p, i) => (
              <button
                key={p.id}
                aria-label={`Show ${p.name}`}
                onClick={() => setActiveIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeIdx ? "w-7 bg-gold" : "w-1.5 bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
          <p className="mt-4 text-center text-[0.6rem] tracking-[0.3em] text-muted-foreground">
            SWIPE TO EXPLORE
          </p>
        </div>
      </Reveal>

      {/* Product detail strip */}
      <Reveal delay={0.1}>
        <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-surface p-4">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease }}
                className="flex items-center gap-4"
              >
                <img
                  src={active.image}
                  alt={active.name}
                  loading="lazy"
                  className="h-16 w-16 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[0.55rem] tracking-[0.25em] text-muted-foreground">{active.brand}</p>
                  <h3 className="truncate text-sm font-semibold">{active.name}</h3>
                  <p className="text-sm font-bold text-gold">{inr(active.price)}</p>
                </div>
                <a
                  href="#visit"
                  className="shrink-0 rounded-full border border-gold/60 px-4 py-2 text-[0.65rem] font-semibold tracking-[0.15em] text-gold transition-colors hover:bg-gold/10"
                >
                  VIEW
                </a>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
