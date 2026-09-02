import { useState } from "react";
import { Search, Crown, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { type Category } from "@/data/catalog";

interface HeaderProps {
  onSelectCategory?: (category: Category) => void;
  onOpenStylist?: () => void;
  onOpenSearch?: () => void;
}

export function Header({ onSelectCategory, onOpenStylist, onOpenSearch }: HeaderProps) {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (cat: Category) => {
    onSelectCategory?.(cat);
    setMobileMenuOpen(false);
    const el = document.getElementById("portals-section") || document.getElementById("catalog-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DFD7] px-6 md:px-12 py-4 flex items-center justify-between z-50 transition-all duration-300">
      {/* Left: Minimal Nav Links */}
      <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-serif text-[#181614]">
        <button
          onClick={() => handleNavClick("WOMEN")}
          className="hover:text-[#9E6738] transition-colors cursor-pointer"
        >
          WOMEN
        </button>
        <button
          onClick={() => handleNavClick("MEN")}
          className="hover:text-[#9E6738] transition-colors cursor-pointer"
        >
          MEN
        </button>
      </nav>

      {/* Mobile Hamburger Menu Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-1.5 text-[#181614] hover:text-[#9E6738] transition-colors"
        aria-label="Toggle menu"
      >
        <div className="w-5 h-4 flex flex-col justify-between">
          <span className="w-full h-[1px] bg-current rounded-full" />
          <span className="w-full h-[1px] bg-current rounded-full" />
          <span className="w-full h-[1px] bg-current rounded-full" />
        </div>
      </button>

      {/* Center Header Brand */}
      <div className="flex flex-col items-center text-center cursor-pointer">
        <a href="/" className="group flex flex-col items-center">
          <span className="font-serif text-xl md:text-2xl font-normal uppercase tracking-[0.25em] text-[#181614] leading-none">
            PRIME OUTLET
          </span>
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-[#9E6738] font-semibold mt-1">
            GANAUR FLAGSHIP
          </span>
        </a>
      </div>

      {/* Right: Simple Hairline Icons */}
      <div className="flex items-center gap-5">
        {/* Search Icon */}
        <button
          onClick={onOpenSearch}
          aria-label="Search"
          className="p-1 text-[#181614] hover:text-[#9E6738] transition-colors cursor-pointer"
        >
          <Search className="w-4 h-4 stroke-[1.2]" />
        </button>

        {/* Personal Stylist Concierge Icon */}
        <button
          onClick={onOpenStylist}
          aria-label="Personal Stylist"
          className="p-1 text-[#181614] hover:text-[#9E6738] transition-colors cursor-pointer"
          title="Private Concierge"
        >
          <Crown className="w-4 h-4 text-[#9E6738] stroke-[1.2]" />
        </button>

        {/* Shopping Bag */}
        <button
          onClick={() => setIsCartOpen(true)}
          aria-label="Shopping Bag"
          className="relative p-1 text-[#181614] hover:text-[#9E6738] transition-colors cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4 stroke-[1.2]" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-[#181614] text-[8px] font-semibold text-white shadow-xs">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] bg-[#FAF8F5] border-b border-[#E5DFD7] p-6 shadow-xl md:hidden z-40 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
          <div className="flex justify-between items-center pb-2 border-b border-[#E5DFD7]">
            <span className="text-[10px] uppercase tracking-[0.25em] font-serif font-bold text-[#9E6738]">Navigation</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-[#181614]">
              <X className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>
          <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.2em] font-serif text-[#181614]">
            <button onClick={() => handleNavClick("WOMEN")} className="text-left py-1 hover:text-[#9E6738]">
              WOMEN
            </button>
            <button onClick={() => handleNavClick("MEN")} className="text-left py-1 hover:text-[#9E6738]">
              MEN
            </button>
          </div>
          <div className="pt-3 border-t border-[#E5DFD7] flex items-center justify-between text-[11px] text-[#6E6963]">
            <span>✦ Ganaur Flagship Studio</span>
            <button onClick={() => { setMobileMenuOpen(false); onOpenStylist?.(); }} className="text-[#9E6738] font-semibold">
              WhatsApp Concierge →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
