import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM, WHATSAPP } from "@/data/catalog";
import { LogoLockup } from "./Logo";
import { Reveal } from "./Reveal";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Footwear", href: "#footwear" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit Store", href: "#visit" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 px-6 py-14">
      <Reveal className="flex flex-col items-center gap-8 text-center">
        <LogoLockup size="sm" />
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </nav>
        <div className="flex gap-4">
          {[
            { icon: Instagram, href: INSTAGRAM, label: "Instagram" },
            { icon: MessageCircle, href: WHATSAPP, label: "WhatsApp" },
            { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold/10"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-[0.65rem] tracking-[0.15em] text-muted-foreground">
          © 2026 Prime Outlet. All rights reserved.
        </p>
      </Reveal>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Prime Outlet on WhatsApp"
      className="glow-gold fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gold-gradient transition-transform duration-300 hover:scale-110 active:scale-95"
    >
      <MessageCircle className="h-6 w-6 text-primary-foreground" />
    </a>
  );
}
