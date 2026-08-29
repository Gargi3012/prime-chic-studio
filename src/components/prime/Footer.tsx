import { Facebook, Instagram, MessageCircle, ShoppingBag, ChevronUp, LayoutGrid, Gift, Bot } from "lucide-react";
import { INSTAGRAM, WHATSAPP } from "@/data/catalog";
import { useCart } from "@/context/CartContext";
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
    <footer className="border-t border-border bg-surface/40 px-6 pb-24 pt-14 sm:pb-14">
      <Reveal className="flex flex-col items-center gap-8 text-center">
        <LogoLockup size="sm" />
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="flex min-h-[44px] items-center px-3 py-2 text-xs tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
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
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold/10 active:scale-95"
            >
              <Icon className="h-5 w-5" />
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

export function BottomNavBar({
  onOpenSpinWheel,
  onOpenAIStylist,
}: {
  onOpenSpinWheel?: () => void;
  onOpenAIStylist?: () => void;
}) {
  const { totalItems, setIsCartOpen } = useCart();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToCategories = () => {
    const el = document.getElementById("category-avatars");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 flex items-center justify-around border-t border-border/80 bg-black/95 px-2 py-2 shadow-2xl backdrop-blur-lg">
      {/* 1. Categories */}
      <button
        onClick={scrollToCategories}
        className="flex flex-col items-center gap-1 text-[0.6rem] font-bold text-muted-foreground transition-colors hover:text-gold"
      >
        <div className="grid h-7 w-7 place-items-center rounded-full bg-surface">
          <LayoutGrid className="h-4 w-4" />
        </div>
        <span>Categories</span>
      </button>

      {/* 2. AI Stylist */}
      <button
        onClick={onOpenAIStylist}
        className="flex flex-col items-center gap-1 text-[0.6rem] font-bold text-muted-foreground transition-colors hover:text-gold"
      >
        <div className="grid h-7 w-7 place-items-center rounded-full bg-surface">
          <Bot className="h-4 w-4 text-gold" />
        </div>
        <span>AI Stylist</span>
      </button>

      {/* 3. Shopping Bag */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative flex flex-col items-center gap-1 text-[0.6rem] font-bold text-gold transition-colors"
      >
        <div className="grid h-7 w-7 place-items-center rounded-full bg-gold/20 text-gold border border-gold/40">
          <ShoppingBag className="h-4 w-4" />
        </div>
        <span>Bag</span>
        {totalItems > 0 && (
          <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-gold text-[0.55rem] font-black text-black">
            {totalItems}
          </span>
        )}
      </button>

      {/* 4. Offers / Spin */}
      <button
        onClick={onOpenSpinWheel}
        className="flex flex-col items-center gap-1 text-[0.6rem] font-bold text-muted-foreground transition-colors hover:text-gold"
      >
        <div className="grid h-7 w-7 place-items-center rounded-full bg-surface">
          <Gift className="h-4 w-4 text-gold" />
        </div>
        <span>Spin & Win</span>
      </button>
    </div>
  );
}
