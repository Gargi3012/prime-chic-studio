import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Bot, ShoppingBag, Gift, Sparkles } from "lucide-react";
import { CrownP } from "./Logo";
import { Reveal } from "./Reveal";
import { useCart } from "@/context/CartContext";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.05] bg-[#FAF9F6] py-12 px-5 text-center sm:px-8">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <CrownP className="h-6 w-6 text-[#141414]" />
          <span className="font-display text-sm font-extrabold tracking-[0.2em] text-[#141414]">
            PRIME OUTLET
          </span>
        </div>

        <p className="max-w-md text-xs leading-relaxed text-[#52525B]">
          Ganaur's premier multibrand luxury fashion destination. Genuine authenticated apparel, premium footwear, and seasonal collections.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#141414]">
          <a href="#curated-drops" className="hover:text-[#D4AF37] transition-colors">Edits</a>
          <span>·</span>
          <a href="#category-avatars" className="hover:text-[#D4AF37] transition-colors">Categories</a>
          <span>·</span>
          <a href="#collection" className="hover:text-[#D4AF37] transition-colors">Runway</a>
          <span>·</span>
          <a href="#visit" className="hover:text-[#D4AF37] transition-colors">VIP Concierge</a>
        </div>

        <div className="space-y-1 pt-2">
          <p className="text-[0.65rem] font-medium tracking-wider text-[#71717A]">
            Prime Outlet · Multibrand Luxury Fashion Store
          </p>
          <p className="text-[0.6rem] tracking-wider text-[#71717A]/70">
            Railway Road, Ganaur, Sonipat, Haryana · © 2026 Prime Outlet
          </p>
        </div>
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
  const [activeTab, setActiveTab] = useState<string>("drops");

  const scrollToSection = (id: string, tabName: string) => {
    setActiveTab(tabName);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-4 left-4 right-4 max-w-md mx-auto z-50 pointer-events-auto block md:hidden">
      <div className="flex items-center justify-around rounded-full border border-white/60 bg-white/85 py-2 px-3 shadow-[0_12px_36px_rgba(0,0,0,0.12)] backdrop-blur-xl">
        {/* 1. Curated Drops Tab */}
        <button
          onClick={() => scrollToSection("curated-drops", "drops")}
          className={`relative flex flex-col items-center gap-0.5 px-3 py-1 text-[0.62rem] font-bold transition-colors ${
            activeTab === "drops" ? "text-[#141414]" : "text-[#71717A] hover:text-[#141414]"
          }`}
        >
          <div
            className={`grid h-6 w-6 place-items-center rounded-full transition-colors ${
              activeTab === "drops"
                ? "bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-[#141414]"
                : "bg-transparent text-[#71717A]"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <span>Edits</span>
        </button>

        {/* 2. Categories Tab */}
        <button
          onClick={() => scrollToSection("category-avatars", "categories")}
          className={`relative flex flex-col items-center gap-0.5 px-3 py-1 text-[0.62rem] font-bold transition-colors ${
            activeTab === "categories" ? "text-[#141414]" : "text-[#71717A] hover:text-[#141414]"
          }`}
        >
          <div
            className={`grid h-6 w-6 place-items-center rounded-full transition-colors ${
              activeTab === "categories"
                ? "bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-[#141414]"
                : "bg-transparent text-[#71717A]"
            }`}
          >
            <LayoutGrid className="h-3.5 w-3.5" />
          </div>
          <span>Categories</span>
        </button>

        {/* 3. AI Stylist */}
        <button
          onClick={() => {
            setActiveTab("stylist");
            onOpenAIStylist?.();
          }}
          className={`relative flex flex-col items-center gap-0.5 px-3 py-1 text-[0.62rem] font-bold transition-colors ${
            activeTab === "stylist" ? "text-[#141414]" : "text-[#71717A] hover:text-[#141414]"
          }`}
        >
          <div
            className={`grid h-6 w-6 place-items-center rounded-full transition-colors ${
              activeTab === "stylist"
                ? "bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-[#141414]"
                : "bg-transparent text-[#71717A]"
            }`}
          >
            <Bot className="h-3.5 w-3.5" />
          </div>
          <span>Stylist</span>
        </button>

        {/* 4. Bag / Checkout */}
        <button
          onClick={() => {
            setActiveTab("bag");
            setIsCartOpen(true);
          }}
          className="relative flex flex-col items-center gap-0.5 px-3 py-1 text-[0.62rem] font-bold text-[#141414]"
        >
          <div className="relative grid h-6 w-6 place-items-center rounded-full bg-[#141414] text-white shadow-xs">
            <ShoppingBag className="h-3.5 w-3.5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-[#800020] text-[0.55rem] font-bold text-white">
                {totalItems}
              </span>
            )}
          </div>
          <span>Bag</span>
        </button>

        {/* 5. Spin Wheel / VIP Reward */}
        <button
          onClick={() => {
            setActiveTab("spin");
            onOpenSpinWheel?.();
          }}
          className={`relative flex flex-col items-center gap-0.5 px-3 py-1 text-[0.62rem] font-bold transition-colors ${
            activeTab === "spin" ? "text-[#141414]" : "text-[#71717A] hover:text-[#141414]"
          }`}
        >
          <div
            className={`grid h-6 w-6 place-items-center rounded-full transition-colors ${
              activeTab === "spin"
                ? "bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-[#141414]"
                : "bg-transparent text-[#71717A]"
            }`}
          >
            <Gift className="h-3.5 w-3.5" />
          </div>
          <span>Rewards</span>
        </button>
      </div>
    </nav>
  );
}
