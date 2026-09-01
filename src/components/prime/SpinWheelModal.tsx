import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Trophy } from "lucide-react";
import { useCart } from "@/context/CartContext";

const PRIZES = [
  { label: "10% OFF", code: "SPIN10", color: "#D4AF37", textColor: "#FFFFFF" },
  { label: "₹500 OFF", code: "VOUCHER500", color: "#F4EFE6", textColor: "#18181B" },
  { label: "FREE SOCKS", code: "FREESOCKS", color: "#C59B27", textColor: "#FFFFFF" },
  { label: "15% VIP", code: "VIPGOLD", color: "#E8DFC8", textColor: "#18181B" },
  { label: "FREE TRIAL", code: "PRIME10", color: "#B8860B", textColor: "#FFFFFF" },
  { label: "EXTRA 10%", code: "SPIN10", color: "#FAF9F6", textColor: "#18181B" },
];

interface SpinWheelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SpinWheelModal({ isOpen, onClose }: SpinWheelModalProps) {
  const { applyCoupon } = useCart();
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
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-black/[0.08] bg-white p-6 text-center shadow-2xl text-[#18181B] z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-[#FAF9F6] text-[#18181B] hover:scale-105"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex justify-center mb-1">
              <Sparkles className="h-5 w-5 text-[#C59B27]" />
            </div>
            <h3 className="text-base font-extrabold text-[#18181B] tracking-wider uppercase">
              LUCKY PRIVILEGE WHEEL
            </h3>
            <p className="text-xs text-[#71717A] mb-4">
              Spin to unlock your exclusive shopping privilege
            </p>

            {/* Wheel Container */}
            <div className="relative mx-auto my-3 h-56 w-56">
              {/* Pointer Arrow */}
              <div className="absolute -top-3 left-1/2 z-20 -translate-x-1/2">
                <div className="h-0 w-0 border-x-[10px] border-x-transparent border-t-[16px] border-t-[#C59B27] drop-shadow-md" />
              </div>

              {/* Wheel SVG */}
              <motion.div
                className="h-full w-full rounded-full border-4 border-[#C59B27] shadow-xl overflow-hidden"
                style={{ rotate: rotation }}
                transition={{ duration: 4, ease: [0.15, 0.99, 0.35, 1] }}
              >
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  {PRIZES.map((prize, i) => {
                    const sliceAngle = 360 / PRIZES.length;
                    const startAngle = i * sliceAngle;
                    const endAngle = (i + 1) * sliceAngle;

                    const x1 = 50 + 50 * Math.cos((Math.PI * (startAngle - 90)) / 180);
                    const y1 = 50 + 50 * Math.sin((Math.PI * (startAngle - 90)) / 180);
                    const x2 = 50 + 50 * Math.cos((Math.PI * (endAngle - 90)) / 180);
                    const y2 = 50 + 50 * Math.sin((Math.PI * (endAngle - 90)) / 180);

                    const textAngle = startAngle + sliceAngle / 2;
                    const tx = 50 + 32 * Math.cos((Math.PI * (textAngle - 90)) / 180);
                    const ty = 50 + 32 * Math.sin((Math.PI * (textAngle - 90)) / 180);

                    return (
                      <g key={i}>
                        <path
                          d={`M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`}
                          fill={prize.color}
                          stroke="#FFFFFF"
                          strokeWidth="0.8"
                        />
                        <text
                          x={tx}
                          y={ty}
                          fill={prize.textColor}
                          fontSize="4"
                          fontWeight="bold"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          transform={`rotate(${textAngle + 90}, ${tx}, ${ty})`}
                        >
                          {prize.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </motion.div>

              {/* Center Hub */}
              <div className="absolute left-1/2 top-1/2 z-10 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-[#C59B27] text-white shadow-md font-bold text-[0.6rem]">
                PRIME
              </div>
            </div>

            {/* Results or Spin CTA */}
            {wonPrize ? (
              <div className="mt-4 space-y-2">
                <div className="rounded-2xl border border-black/[0.06] bg-[#FAF9F6] p-3 text-center">
                  <Trophy className="mx-auto h-6 w-6 text-[#C59B27]" />
                  <p className="text-xs font-bold text-[#71717A] mt-1 uppercase">Congratulations!</p>
                  <p className="text-base font-extrabold text-[#800020]">{wonPrize.label}</p>
                  <p className="text-[0.65rem] text-[#71717A]">Promo Code Applied: {wonPrize.code}</p>
                </div>
                <button
                  onClick={handleClaim}
                  className="glow-gold flex min-h-[42px] w-full items-center justify-center rounded-full bg-gold-gradient text-xs font-bold text-white shadow-md"
                >
                  CLAIM & SHOP NOW
                </button>
              </div>
            ) : (
              <div className="mt-4">
                <button
                  disabled={spinning || hasSpun}
                  onClick={handleSpin}
                  className={`glow-gold flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-2.5 text-xs font-bold tracking-wider text-white shadow-md transition-transform ${
                    spinning || hasSpun ? "opacity-60 cursor-not-allowed" : "hover:scale-[1.02] active:scale-95"
                  }`}
                >
                  <Sparkles className="h-4 w-4" />
                  {spinning ? "SPINNING WHEEL..." : hasSpun ? "OFFER ALREADY CLAIMED" : "SPIN THE WHEEL"}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
