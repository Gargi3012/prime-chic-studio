import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Tag } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

interface SpecialOffersProps {
  onSelectOffer: (offerType: string) => void;
}

export function SpecialOffers({ onSelectOffer }: SpecialOffersProps) {
  return (
    <section className="my-8 px-4 sm:px-6">
      <SectionHeading
        eyebrow="EXCLUSIVE PROMOTIONS"
        title="Special Offers"
        subtitle="Tap any deal to instantly explore discounted brand drops!"
        className="text-left mb-6"
      />

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        
        {/* Offer Card 1: ALL AT ₹2,999 */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectOffer("UNDER_3K")}
          className="relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-amber-500/20 via-black to-zinc-900 p-4 text-left shadow-xl h-44 sm:h-52 flex flex-col justify-between group"
        >
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gold/30 blur-2xl pointer-events-none" />
          <div>
            <span className="inline-block rounded-full bg-gold/20 px-2.5 py-0.5 text-[0.6rem] font-bold text-gold uppercase tracking-wider mb-2 border border-gold/40">
              SPECIAL DROP
            </span>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">ALL AT</p>
            <p className="text-2xl font-black text-white sm:text-3xl tracking-tight">₹2,999</p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border/40">
            <span className="text-xs font-extrabold text-gold group-hover:underline">SHOP NOW</span>
            <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
          </div>
        </motion.button>

        {/* Offer Card 2: BUY 1 GET 1 / COMBO */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectOffer("COMBO")}
          className="relative overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/20 via-black to-zinc-900 p-4 text-left shadow-xl h-44 sm:h-52 flex flex-col justify-between group"
        >
          <span className="absolute right-3 top-3 rounded-full bg-emerald-500 text-[0.65rem] font-black text-black px-2 py-0.5 uppercase tracking-widest shadow-md">
            FREE DEALS
          </span>

          <div>
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">COMBO SAVER</p>
            <p className="text-xl font-black text-white sm:text-2xl tracking-tight leading-tight mt-1">
              Buy 1 Get 1 <br />
              <span className="text-emerald-400">10% Extra OFF</span>
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border/40">
            <span className="text-xs font-extrabold text-emerald-400 group-hover:underline">BUILD OUTFIT</span>
            <ArrowRight className="h-4 w-4 text-emerald-400 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.button>

        {/* Offer Card 3: UP TO 50% OFF */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectOffer("CLEARANCE")}
          className="relative overflow-hidden rounded-3xl border border-rose-500/40 bg-gradient-to-br from-rose-500/20 via-black to-zinc-900 p-4 text-left shadow-xl h-44 sm:h-52 flex flex-col justify-between group"
        >
          <div>
            <span className="inline-block rounded-full bg-rose-500/20 px-2.5 py-0.5 text-[0.6rem] font-bold text-rose-400 uppercase tracking-wider mb-2 border border-rose-500/40">
              FINAL CALL
            </span>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">FLAT DISCOUNTS</p>
            <p className="text-xl font-black text-white sm:text-2xl tracking-tight mt-1">
              UP TO <span className="text-rose-500">50% OFF</span>
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border/40">
            <span className="text-xs font-extrabold text-rose-400 group-hover:underline">EXPLORE DEALS</span>
            <ArrowRight className="h-4 w-4 text-rose-400 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.button>

        {/* Offer Card 4: SNEAKERS UNDER ₹4,999 */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectOffer("SNEAKERS")}
          className="relative overflow-hidden rounded-3xl border border-amber-400/40 bg-gradient-to-br from-amber-400/20 via-black to-zinc-900 p-4 text-left shadow-xl h-44 sm:h-52 flex flex-col justify-between group"
        >
          <div>
            <span className="inline-block rounded-full bg-amber-400/20 px-2.5 py-0.5 text-[0.6rem] font-bold text-amber-400 uppercase tracking-wider mb-2 border border-amber-400/40">
              FOOTWEAR DROP
            </span>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">SNEAKERS FROM</p>
            <p className="text-2xl font-black text-white sm:text-3xl tracking-tight">₹2,799</p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border/40">
            <span className="text-xs font-extrabold text-amber-400 group-hover:underline">VIEW SNEAKERS</span>
            <ArrowRight className="h-4 w-4 text-amber-400 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.button>

      </div>
    </section>
  );
}
