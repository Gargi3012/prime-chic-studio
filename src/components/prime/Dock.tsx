import { useState } from "react";
import { Home, LayoutGrid, ShoppingBag, Crown } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface DockProps {
  onOpenCategoriesDrawer?: () => void;
  onOpenStylist?: () => void;
}

export function Dock({ onOpenCategoriesDrawer, onOpenStylist }: DockProps) {
  const { totalItems, setIsCartOpen } = useCart();
  const [activeTab, setActiveTab] = useState<string>("home");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTab = (tab: string, action?: () => void) => {
    setActiveTab(tab);
    if (action) action();
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-14 bg-[#FDFCFA]/95 backdrop-blur-xl border-t border-neutral-200/80 px-6 flex items-center justify-around pointer-events-auto">
      {/* 1. Home */}
      <button
        onClick={() => handleTab("home", scrollToTop)}
        className={`flex flex-col items-center gap-0.5 text-[9px] uppercase font-semibold tracking-wider transition-colors cursor-pointer ${
          activeTab === "home" ? "text-[#171615]" : "text-[#7A7570] hover:text-[#171615]"
        }`}
      >
        <Home className="w-4 h-4 stroke-[1.5]" />
        <span>Home</span>
      </button>

      {/* 2. Categories */}
      <button
        onClick={() => handleTab("categories", onOpenCategoriesDrawer)}
        className={`flex flex-col items-center gap-0.5 text-[9px] uppercase font-semibold tracking-wider transition-colors cursor-pointer ${
          activeTab === "categories" ? "text-[#171615]" : "text-[#7A7570] hover:text-[#171615]"
        }`}
      >
        <LayoutGrid className="w-4 h-4 stroke-[1.5]" />
        <span>Categories</span>
      </button>

      {/* 3. Bag */}
      <button
        onClick={() => handleTab("bag", () => setIsCartOpen(true))}
        className={`relative flex flex-col items-center gap-0.5 text-[9px] uppercase font-semibold tracking-wider transition-colors cursor-pointer ${
          activeTab === "bag" ? "text-[#171615]" : "text-[#7A7570] hover:text-[#171615]"
        }`}
      >
        <div className="relative">
          <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-2 grid h-3.5 w-3.5 place-items-center rounded-full bg-[#171615] text-[8px] font-bold text-white">
              {totalItems}
            </span>
          )}
        </div>
        <span>Bag</span>
      </button>

      {/* 4. Stylist Profile */}
      <button
        onClick={() => handleTab("profile", onOpenStylist)}
        className={`flex flex-col items-center gap-0.5 text-[9px] uppercase font-semibold tracking-wider transition-colors cursor-pointer ${
          activeTab === "profile" ? "text-[#9E6738]" : "text-[#7A7570] hover:text-[#171615]"
        }`}
      >
        <Crown className="w-4 h-4 stroke-[1.5] text-[#9E6738]" />
        <span>Stylist</span>
      </button>
    </nav>
  );
}
