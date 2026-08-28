import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function CrownP({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M14 20 L20 27 L26 15 L32 26 L38 15 L44 27 L50 20 L47 34 H17 Z"
        fill="var(--gold)"
      />
      <path
        d="M24 38 h13 a9 9 0 0 1 0 18 h-6 v8 M31 56 v-18"
        stroke="var(--gold)"
        strokeWidth="4"
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
    <div className="flex flex-col items-center gap-3">
      <Wrapper
        {...(animated
          ? {
              initial: { opacity: 0, scale: 0.6, y: -40 },
              animate: { opacity: 1, scale: 1, y: 0 },
              transition: { duration: 0.9, ease },
            }
          : {})}
      >
        <CrownP className={big ? "h-16 w-16" : "h-9 w-9"} />
      </Wrapper>

      <div className={`flex ${big ? "text-3xl sm:text-4xl" : "text-lg"} font-extrabold tracking-[0.16em]`}>
        {word.map((c, i) =>
          animated ? (
            <motion.span
              key={i}
              className="text-gold-gradient font-display"
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.6 + i * 0.045, duration: 0.6, ease }}
            >
              {c === " " ? "\u00A0" : c}
            </motion.span>
          ) : (
            <span key={i} className="text-gold-gradient font-display">
              {c === " " ? "\u00A0" : c}
            </span>
          ),
        )}
      </div>

      {animated ? (
        <motion.p
          className="text-[0.62rem] tracking-[0.5em] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35, duration: 0.8, ease }}
        >
          MULTIBRAND STORE
        </motion.p>
      ) : (
        <p className="text-[0.55rem] tracking-[0.42em] text-muted-foreground">MULTIBRAND STORE</p>
      )}
    </div>
  );
}
