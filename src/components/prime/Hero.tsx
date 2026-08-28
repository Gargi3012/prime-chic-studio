import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import heroStore from "@/assets/hero-store.jpg";
import { LogoLockup } from "./Logo";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-24">
      <img
        src={heroStore}
        alt="Prime Outlet store interior in Ganaur, Sonipat"
        width={1024}
        height={1536}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_78%)]" />
      <div className="absolute inset-0 bg-background/45" />

      <motion.div
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease }}
        className="absolute left-5 top-6 z-10 flex items-center gap-2 rounded-full border border-gold/40 bg-surface/70 px-4 py-2 text-[0.62rem] font-medium tracking-[0.22em] backdrop-blur"
      >
        <MapPin className="h-3.5 w-3.5 text-gold" />
        GANAUR, SONIPAT
      </motion.div>

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        <LogoLockup animated />

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9, ease }}
          className="mt-10 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl"
        >
          <span className="text-gold-gradient">Style That</span>
          <br />
          <span className="text-foreground">Fits You</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.9, ease }}
          className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground"
        >
          Clothing, footwear and accessories from the brands you love — curated under one roof in Ganaur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.9, ease }}
          className="mt-9 flex w-full items-center justify-center gap-3"
        >
          <a
            href="#collection"
            className="glow-gold rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
          >
            Shop Now
          </a>
          <a
            href="#visit"
            className="rounded-full border border-gold/60 px-7 py-3.5 text-sm font-semibold tracking-wide text-gold transition-colors duration-300 hover:bg-gold/10"
          >
            Visit Store
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 2.4 }, y: { repeat: Infinity, duration: 2.2, ease: "easeInOut" } }}
        className="absolute bottom-8 z-10 text-gold"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
