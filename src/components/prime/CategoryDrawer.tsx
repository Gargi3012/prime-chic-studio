import { X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CategoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSubCategory?: (title: string, query: string) => void;
}

const CATEGORY_GROUPS = [
  {
    title: "WOMEN'S COLLECTION",
    items: [
      { label: "Oatmeal Blazers & Suits", query: "Blazer" },
      { label: "Storm Trench & Outerwear", query: "Coat" },
      { label: "Silk Wrap Evening Gowns", query: "Dress" },
      { label: "Pastel Air Force Vault Sneakers", query: "Sneaker" },
      { label: "Knitted Ivory Co-ords", query: "Knit" },
      { label: "Leather Shoulder Totes", query: "Bag" },
    ],
  },
  {
    title: "MEN'S COLLECTION",
    items: [
      { label: "Italian Cashmere Double Coats", query: "Coat" },
      { label: "Bespoke Navy Blazers", query: "Blazer" },
      { label: "Retro Court Low Sneakers", query: "Sneaker" },
      { label: "Espresso Brushed Suede Bombers", query: "Bomber" },
      { label: "Pure European Linen Overshirts", query: "Shirt" },
      { label: "Air Max Performance Runners", query: "Sneaker" },
    ],
  },
  {
    title: "CURATED PRIVILEGE EDITS",
    items: [
      { label: "The Vault: Limited Sneakers", query: "Sneaker" },
      { label: "Italian Wool Tailoring Clearance", query: "Blazer" },
      { label: "Leathercraft & Designer Totes", query: "Bag" },
    ],
  },
];

export function CategoryDrawer({ isOpen, onClose, onSelectSubCategory }: CategoryDrawerProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs"
        />

        {/* 2-Tier Category Drawer */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md bg-[#FDFCFA] h-full shadow-2xl p-6 overflow-y-auto flex flex-col z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9E6738] block">
                Flagship Catalog
              </span>
              <h3 className="font-serif text-xl font-bold text-[#171615]">
                Directory & Categories
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#171615] hover:text-[#9E6738] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 2-Tier List */}
          <div className="py-6 space-y-6 flex-1">
            {CATEGORY_GROUPS.map((group) => (
              <div key={group.title} className="space-y-3">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#171615] pb-1 border-b border-black/[0.04]">
                  {group.title}
                </h4>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        onSelectSubCategory?.(item.label, item.query);
                        onClose();
                      }}
                      className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-[#F5F3EF] text-left text-xs text-[#171615] font-medium transition-colors group cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#7A7570] group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Contact */}
          <div className="pt-4 border-t border-black/[0.06] text-center text-xs text-[#7A7570]">
            <p>✦ Ganaur Flagship Studio · Delhi-NCR Dispatch</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
