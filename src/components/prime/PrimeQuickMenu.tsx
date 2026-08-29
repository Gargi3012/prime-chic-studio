import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Gift, Bot, ShoppingBag, MessageCircle, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { WHATSAPP } from "@/data/catalog";

interface PrimeQuickMenuProps {
  onOpenSpinWheel: () => void;
  onOpenAIStylist: () => void;
}

export function PrimeQuickMenu({ onOpenSpinWheel, onOpenAIStylist }: PrimeQuickMenuProps) {
  const { totalItems, setIsCartOpen } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Speed Dial Menu items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="mb-3 space-y-2 text-right"
          >
            {/* Action 1: Spin & Win */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsOpen(false);
                onOpenSpinWheel();
              }}
              className="flex items-center gap-2.5 rounded-full border border-gold/50 bg-black/90 px-4 py-2 text-xs font-bold text-gold shadow-xl backdrop-blur-md hover:bg-gold/15"
            >
              <span>Spin & Win Wheel</span>
              <div className="grid h-7 w-7 place-items-center rounded-full bg-gold/20 text-gold">
                <Gift className="h-4 w-4" />
              </div>
            </motion.button>

            {/* Action 2: AI Stylist */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsOpen(false);
                onOpenAIStylist();
              }}
              className="flex items-center gap-2.5 rounded-full border border-gold/50 bg-black/90 px-4 py-2 text-xs font-bold text-gold shadow-xl backdrop-blur-md hover:bg-gold/15"
            >
              <span>AI Style Assistant</span>
              <div className="grid h-7 w-7 place-items-center rounded-full bg-gold/20 text-gold">
                <Bot className="h-4 w-4" />
              </div>
            </motion.button>

            {/* Action 3: Shopping Bag */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsOpen(false);
                setIsCartOpen(true);
              }}
              className="flex items-center gap-2.5 rounded-full border border-gold/50 bg-black/90 px-4 py-2 text-xs font-bold text-gold shadow-xl backdrop-blur-md hover:bg-gold/15"
            >
              <span>Shopping Bag ({totalItems})</span>
              <div className="grid h-7 w-7 place-items-center rounded-full bg-gold/20 text-gold">
                <ShoppingBag className="h-4 w-4" />
              </div>
            </motion.button>

            {/* Action 4: WhatsApp */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 rounded-full border border-emerald-500/50 bg-black/90 px-4 py-2 text-xs font-bold text-emerald-400 shadow-xl backdrop-blur-md hover:bg-emerald-500/15"
            >
              <span>WhatsApp Store Chat</span>
              <div className="grid h-7 w-7 place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
                <MessageCircle className="h-4 w-4" />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Single Floating Launcher Pill */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="glow-gold relative flex items-center gap-2.5 rounded-full border border-gold/60 bg-black/95 px-5 py-3 shadow-[0_0_30px_rgba(212,175,55,0.4)] backdrop-blur-xl hover:border-gold"
      >
        {isOpen ? (
          <X className="h-5 w-5 text-gold" />
        ) : (
          <Sparkles className="h-5 w-5 text-gold animate-spin-slow" />
        )}
        <span className="text-xs font-extrabold tracking-widest text-gold uppercase">
          {isOpen ? "CLOSE" : "PRIME MENU"}
        </span>

        {/* Cart Item Counter Badge if > 0 */}
        {!isOpen && totalItems > 0 && (
          <span className="grid h-5 w-5 place-items-center rounded-full bg-gold text-[0.65rem] font-extrabold text-black">
            {totalItems}
          </span>
        )}
      </motion.button>
    </div>
  );
}
