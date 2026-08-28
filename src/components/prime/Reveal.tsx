import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <Reveal className={`mb-8 ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-[0.6rem] font-medium tracking-[0.4em] text-gold">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
    </Reveal>
  );
}
