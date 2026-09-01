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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = "",
}: {
  eyebrow?: string | undefined;
  title: string;
  subtitle?: string | undefined;
  className?: string;
}) {
  return (
    <Reveal className={`mb-5 ${className}`}>
      {eyebrow ? (
        <p className="mb-1 text-[0.62rem] font-bold tracking-[0.25em] text-[#C59B27] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-extrabold tracking-tight text-[#18181B] sm:text-3xl leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-1 text-xs text-[#71717A] leading-relaxed max-w-md">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
