import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function CrownP({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M14 20 L20 27 L26 15 L32 26 L38 15 L44 27 L50 20 L47 34 H17 Z"
        fill="#C59B27"
      />
      <path
        d="M24 38 h13 a9 9 0 0 1 0 18 h-6 v8 M31 56 v-18"
        stroke="#C59B27"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function LogoLockup({ animated = false, size = "lg" }: { animated?: boolean; size?: "sm" | "lg" }) {
  const word = "PRIME OUTLET".split("");
  const big = size === "lg";

  const Wrapper = animated ? motion.div : "div";

  return (
    <div className="flex flex-col items-center gap-2">
      <Wrapper
        {...(animated
          ? {
              initial: { opacity: 0, scale: 0.6, y: -20 },
              animate: { opacity: 1, scale: 1, y: 0 },
              transition: { duration: 0.7, ease },
            }
          : {})}
      >
        <CrownP className={big ? "h-12 w-12" : "h-7 w-7"} />
      </Wrapper>

      <div className={`flex ${big ? "text-2xl sm:text-3xl" : "text-base"} font-extrabold tracking-[0.16em] text-[#18181B]`}>
        {word.map((c, i) =>
          animated ? (
            <motion.span
              key={i}
              className="font-display"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.03, duration: 0.5, ease }}
            >
              {c === " " ? "\u00A0" : c}
            </motion.span>
          ) : (
            <span key={i} className="font-display">
              {c === " " ? "\u00A0" : c}
            </span>
          ),
        )}
      </div>

      {animated ? (
        <motion.p
          className="text-[0.6rem] font-bold tracking-[0.35em] text-[#71717A] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease }}
        >
          FLAGSHIP MULTIBRAND
        </motion.p>
      ) : (
        <p className="text-[0.55rem] font-bold tracking-[0.3em] text-[#71717A] uppercase">FLAGSHIP MULTIBRAND</p>
      )}
    </div>
  );
}
