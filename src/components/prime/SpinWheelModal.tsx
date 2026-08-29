import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, X, Sparkles, Check, Trophy } from "lucide-react";
import { useCart } from "@/context/CartContext";

const PRIZES = [
  { label: "10% OFF COUPON", code: "SPIN10", color: "#D4AF37" },
  { label: "₹500 VOUCHER", code: "VOUCHER500", color: "#1E1E1E" },
  { label: "FREE SOCKS", code: "FREESOCKS", color: "#B8860B" },
  { label: "VIP 15% PASS", code: "VIPGOLD", color: "#2B2B2B" },
  { label: "FREE EXPRESS SHIPPING", code: "PRIME10", color: "#E6CA65" },
  { label: "EXTRA 10% OFF", code: "SPIN10", color: "#171717" },
];

export function SpinWheelModal() {
  const { applyCoupon } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<(typeof PRIZES)[0] | null>(null);
  const [hasSpun, setHasSpun] = useState(() => {
    try {
      return Boolean(localStorage.getItem("prime_wheel_spun"));
    } catch {
      return false;
    }
  });

  const handleSpin = () => {
    if (spinning || hasSpun) return;
    setSpinning(true);

    // Random prize 0-5
    const prizeIndex = Math.floor(Math.random() * PRIZES.length);
    const sliceAngle = 360 / PRIZES.length;
    const targetAngle = 360 * 5 + (360 - (prizeIndex * sliceAngle + sliceAngle / 2));

    setRotation(targetAngle);

    setTimeout(() => {
      setSpinning(false);
      setWonPrize(PRIZES[prizeIndex]);
      setHasSpun(true);
      try {
        localStorage.setItem("prime_wheel_spun", PRIZES[prizeIndex].code);
      } catch {
        // Ignore
      }
    }, 4000);
  };

  const handleClaim = () => {
    if (wonPrize) {
      applyCoupon(wonPrize.code);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Wheel Launcher Badge */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full border border-gold/60 bg-black/90 px-4 py-2.5 shadow-[0_0_25px_rgba(212,175,55,0.4)] backdrop-blur-md hover:border-gold"
      >
        <Gift className="h-5 w-5 text-gold animate-bounce" />
        <span className="text-xs font-extrabold tracking-wider text-gold uppercase">
          SPIN & WIN 🎁
        </span>
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-gold/50 bg-surface-2 p-6 text-center shadow-2xl text-foreground"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-full bg-surface p-1 text-muted-foreground hover:text-gold"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex justify-center mb-1">
                <Sparkles className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-extrabold text-gold tracking-wide uppercase">
                PRIME LUCKY WHEEL
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Spin the gold wheel to win exclusive in-store & online discounts!
              </p>

              {/* Wheel Container */}
              <div className="relative mx-auto my-4 h-64 w-64">
                {/* Wheel Pointer Arrow */}
                <div className="absolute top-0 left-1/2 z-20 h-0 w-0 -translate-x-1/2 -translate-y-2 border-x-8 border-t-[16px] border-x-transparent border-t-gold drop-shadow-md" />

                {/* Rotating Canvas Container */}
                <div
                  className="h-full w-full rounded-full border-4 border-gold shadow-[0_0_30px_rgba(212,175,55,0.4)] overflow-hidden transition-transform duration-[4000ms] cubic-bezier(0.15, 0.9, 0.2, 1)"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="relative h-full w-full rounded-full bg-black">
                    {PRIZES.map((prize, idx) => {
                      const angle = (360 / PRIZES.length) * idx;
                      return (
                        <div
                          key={idx}
                          className="absolute left-1/2 top-1/2 h-full w-full origin-top-left border-l border-gold/20 flex items-start justify-center pt-3"
                          style={{
                            transform: `rotate(${angle}deg)`,
                            backgroundColor: prize.color,
                          }}
                        >
                          <span className="text-[0.55rem] font-extrabold tracking-widest text-gold uppercase drop-shadow">
                            {prize.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Center Hub */}
                <div className="absolute left-1/2 top-1/2 z-10 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-gold bg-black text-gold shadow-lg font-bold text-xs">
                  PRIME
                </div>
              </div>

              {/* Action Buttons / Winner Display */}
              {wonPrize ? (
                <div className="mt-6 space-y-3 rounded-2xl border border-gold/40 bg-gold/10 p-4">
                  <Trophy className="mx-auto h-8 w-8 text-gold" />
                  <p className="text-xs text-muted-foreground uppercase font-bold">CONGRATULATIONS!</p>
                  <p className="text-lg font-extrabold text-gold">{wonPrize.label}</p>
                  <p className="text-xs text-white">Coupon Code: <span className="font-mono font-bold text-gold">{wonPrize.code}</span></p>

                  <button
                    onClick={handleClaim}
                    className="w-full min-h-[42px] rounded-xl bg-gold-gradient font-extrabold text-xs text-black uppercase tracking-wider hover:brightness-110"
                  >
                    CLAIM & AUTO-APPLY TO CART
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSpin}
                  disabled={spinning || hasSpun}
                  className="mt-4 w-full min-h-[44px] rounded-xl bg-gold-gradient font-extrabold text-xs text-black uppercase tracking-wider hover:brightness-110 disabled:opacity-50"
                >
                  {spinning ? "SPINNING..." : hasSpun ? "ALREADY SPUN TODAY" : "SPIN NOW 🎯"}
                </button>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
