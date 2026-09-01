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
    <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end">
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
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setIsOpen(false);
                onOpenSpinWheel();
              }}
              className="flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 text-xs font-bold text-[#18181B] shadow-md backdrop-blur-md hover:border-[#C59B27]"
            >
              <span>Spin & Win Wheel</span>
              <div className="grid h-6 w-6 place-items-center rounded-full bg-[#FAF9F6] text-[#C59B27]">
                <Gift className="h-3.5 w-3.5" />
              </div>
            </motion.button>

            {/* Action 2: AI Stylist */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setIsOpen(false);
                onOpenAIStylist();
              }}
              className="flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 text-xs font-bold text-[#18181B] shadow-md backdrop-blur-md hover:border-[#C59B27]"
            >
              <span>AI Luxury Stylist</span>
              <div className="grid h-6 w-6 place-items-center rounded-full bg-[#FAF9F6] text-[#C59B27]">
                <Bot className="h-3.5 w-3.5" />
              </div>
            </motion.button>

            {/* Action 3: WhatsApp */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 text-xs font-bold text-[#18181B] shadow-md backdrop-blur-md hover:border-[#C59B27]"
            >
              <span>WhatsApp Concierge</span>
              <div className="grid h-6 w-6 place-items-center rounded-full bg-[#FAF9F6] text-[#C59B27]">
                <MessageCircle className="h-3.5 w-3.5" />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pill */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="glow-gold relative flex items-center gap-2 rounded-full border border-[#C59B27]/50 bg-white px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl hover:border-[#C59B27]"
      >
        {isOpen ? (
          <X className="h-4 w-4 text-[#18181B]" />
        ) : (
          <Sparkles className="h-4 w-4 text-[#C59B27]" />
        )}
        <span className="text-xs font-extrabold tracking-wider text-[#18181B] uppercase">
          {isOpen ? "CLOSE" : "MENU"}
        </span>

        {!isOpen && totalItems > 0 && (
          <span className="grid h-4.5 w-4.5 place-items-center rounded-full bg-[#800020] text-[0.55rem] font-extrabold text-white">
            {totalItems}
          </span>
        )}
      </motion.button>
    </div>
  );
}
