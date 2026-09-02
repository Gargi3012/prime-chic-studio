import { useState } from "react";
import { Home, LayoutGrid, ShoppingBag, Crown, ChevronUp } from "lucide-react";
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
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-xl border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-full px-6 py-2 flex items-center justify-between gap-6 pointer-events-auto min-w-[340px] sm:min-w-[400px]">
      {/* 1. Home */}
      <button
        onClick={() => handleTab("home", scrollToTop)}
        className={`flex flex-col items-center gap-0.5 text-[9px] uppercase font-semibold tracking-wider transition-colors cursor-pointer ${
          activeTab === "home" ? "text-[#9E6738]" : "text-[#7A7570] hover:text-[#171615]"
        }`}
      >
        <Home className="w-4 h-4 stroke-[1.75]" />
        <span>Home</span>
      </button>

      {/* 2. Categories */}
      <button
        onClick={() => handleTab("categories", onOpenCategoriesDrawer)}
        className={`flex flex-col items-center gap-0.5 text-[9px] uppercase font-semibold tracking-wider transition-colors cursor-pointer ${
          activeTab === "categories" ? "text-[#9E6738]" : "text-[#7A7570] hover:text-[#171615]"
        }`}
      >
        <LayoutGrid className="w-4 h-4 stroke-[1.75]" />
        <span>Categories</span>
      </button>

      {/* 3. Bag */}
      <button
        onClick={() => handleTab("bag", () => setIsCartOpen(true))}
        className={`relative flex flex-col items-center gap-0.5 text-[9px] uppercase font-semibold tracking-wider transition-colors cursor-pointer ${
          activeTab === "bag" ? "text-[#9E6738]" : "text-[#7A7570] hover:text-[#171615]"
        }`}
      >
        <div className="relative">
          <ShoppingBag className="w-4 h-4 stroke-[1.75]" />
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-2 grid h-3.5 w-3.5 place-items-center rounded-full bg-[#171615] text-[8px] font-bold text-white">
              {totalItems}
            </span>
          )}
        </div>
        <span>Bag</span>
      </button>

      {/* 4. My Profile / Stylist */}
      <button
        onClick={() => handleTab("profile", onOpenStylist)}
        className={`flex flex-col items-center gap-0.5 text-[9px] uppercase font-semibold tracking-wider transition-colors cursor-pointer ${
          activeTab === "profile" ? "text-[#9E6738]" : "text-[#7A7570] hover:text-[#171615]"
        }`}
      >
        <Crown className="w-4 h-4 stroke-[1.75] text-[#9E6738]" />
        <span>Profile</span>
      </button>

      {/* 5. Back to top capsule */}
      <button
        onClick={scrollToTop}
        className="flex items-center gap-1 rounded-full bg-[#171615] text-white px-3 py-1 text-[9px] uppercase font-semibold tracking-wider hover:bg-[#9E6738] transition-colors shadow-sm cursor-pointer ml-1"
      >
        <ChevronUp className="w-3 h-3" />
        <span>Top</span>
      </button>
    </div>
  );
}
