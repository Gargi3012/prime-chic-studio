import { useState } from "react";
import { Search, Crown, ShoppingBag, Sparkles, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  onSelectCategory?: (category: "WOMEN" | "MEN" | "BAGS" | "ACCESSORIES") => void;
  onOpenStylist?: () => void;
  onOpenSearch?: () => void;
}

export function Header({ onSelectCategory, onOpenStylist, onOpenSearch }: HeaderProps) {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (cat: "WOMEN" | "MEN" | "BAGS" | "ACCESSORIES") => {
    onSelectCategory?.(cat);
    setMobileMenuOpen(false);
    const el = document.getElementById("curated-drops") || document.getElementById("collection");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-[#FDFCFA]/95 backdrop-blur-md border-b border-black/[0.06] px-4 md:px-8 py-3 flex items-center justify-between z-50 transition-all duration-300">
      {/* Left: Minimalist Nav Links */}
      <nav className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-[0.15em] font-medium text-[#7A7570]">
        <button
          onClick={() => handleNavClick("WOMEN")}
          className="hover:text-[#171615] transition-colors cursor-pointer"
        >
          WOMEN
        </button>
        <button
          onClick={() => handleNavClick("MEN")}
          className="hover:text-[#171615] transition-colors cursor-pointer"
        >
          MEN
        </button>
        <button
          onClick={() => handleNavClick("BAGS")}
          className="hover:text-[#171615] transition-colors cursor-pointer"
        >
          BAGS
        </button>
        <button
          onClick={() => handleNavClick("ACCESSORIES")}
          className="hover:text-[#171615] transition-colors cursor-pointer"
        >
          ACCESSORIES
        </button>
      </nav>

      {/* Mobile Hamburger / Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-1.5 text-[#171615] hover:text-[#9E6738] transition-colors"
        aria-label="Toggle menu"
      >
        <div className="w-5 h-4 flex flex-col justify-between">
          <span className="w-full h-[1.5px] bg-current rounded-full" />
          <span className="w-full h-[1.5px] bg-current rounded-full" />
          <span className="w-full h-[1.5px] bg-current rounded-full" />
        </div>
      </button>

      {/* Center Logo */}
      <div className="flex flex-col items-center text-center cursor-pointer">
        <a href="/" className="group flex flex-col items-center">
          <span className="font-serif text-xl md:text-[24px] font-bold uppercase tracking-[0.2em] text-[#171615] leading-none">
            PRIME OUTLET
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#9E6738] font-semibold mt-0.5">
            GANAUR FLAGSHIP STUDIO
          </span>
        </a>
      </div>

      {/* Right: Luxury Icons */}
      <div className="flex items-center gap-4 md:gap-5">
        {/* Search Icon */}
        <button
          onClick={onOpenSearch}
          aria-label="Search"
          className="p-1.5 text-[#171615] hover:text-[#9E6738] transition-colors cursor-pointer"
        >
          <Search className="w-4 h-4 stroke-[1.5]" />
        </button>

        {/* Personal Stylist Icon (Crowned Avatar) */}
        <button
          onClick={onOpenStylist}
          aria-label="Personal Stylist"
          className="group relative p-1.5 text-[#171615] hover:text-[#9E6738] transition-colors cursor-pointer flex items-center justify-center"
          title="Personal Stylist Concierge"
        >
          <div className="relative flex items-center justify-center">
            <Crown className="w-4 h-4 text-[#9E6738] stroke-[1.75]" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9E6738] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9E6738]"></span>
            </span>
          </div>
        </button>

        {/* Outline Shopping Bag with Bubble Counter */}
        <button
          onClick={() => setIsCartOpen(true)}
          aria-label="Shopping Bag"
          className="relative p-1.5 text-[#171615] hover:text-[#9E6738] transition-colors cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-[#171615] text-[9px] font-semibold text-white shadow-sm">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[53px] bg-[#FDFCFA] border-b border-black/[0.08] p-6 shadow-xl md:hidden z-40 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
          <div className="flex justify-between items-center pb-2 border-b border-black/[0.05]">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#9E6738]">Navigation</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-[#171615]">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.15em] font-medium text-[#171615]">
            <button onClick={() => handleNavClick("WOMEN")} className="text-left py-1 hover:text-[#9E6738]">
              WOMEN
            </button>
            <button onClick={() => handleNavClick("MEN")} className="text-left py-1 hover:text-[#9E6738]">
              MEN
            </button>
            <button onClick={() => handleNavClick("BAGS")} className="text-left py-1 hover:text-[#9E6738]">
              BAGS
            </button>
            <button onClick={() => handleNavClick("ACCESSORIES")} className="text-left py-1 hover:text-[#9E6738]">
              ACCESSORIES
            </button>
          </div>
          <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between text-[11px] text-[#7A7570]">
            <span>✦ Ganaur Flagship Studio</span>
            <button onClick={() => { setMobileMenuOpen(false); onOpenStylist?.(); }} className="text-[#9E6738] font-bold">
              WhatsApp Concierge →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
