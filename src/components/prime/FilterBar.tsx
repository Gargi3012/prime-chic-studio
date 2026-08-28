import { useState } from "react";
import { SlidersHorizontal, X, ArrowUpDown, Check } from "lucide-react";
import { brands } from "@/data/catalog";

export interface FilterState {
  priceRange: "ALL" | "UNDER_3K" | "3K_6K" | "ABOVE_6K";
  color: string;
  size: string;
  selectedBrands: string[];
  sortBy: "RECOMMENDED" | "PRICE_LOW" | "PRICE_HIGH" | "RATING";
}

export const initialFilterState: FilterState = {
  priceRange: "ALL",
  color: "ALL",
  size: "ALL",
  selectedBrands: [],
  sortBy: "RECOMMENDED",
};

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  activeCount: number;
}

const colorSwatches = [
  { label: "ALL", value: "ALL", bg: "bg-surface" },
  { label: "Black", value: "Black", bg: "bg-black" },
  { label: "White", value: "White", bg: "bg-white" },
  { label: "Gold", value: "Gold", bg: "bg-amber-400" },
  { label: "Navy", value: "Navy", bg: "bg-slate-900" },
  { label: "Beige", value: "Beige", bg: "bg-amber-100" },
];

const sizeOptions = ["ALL", "S", "M", "L", "XL", "7", "8", "9", "10"];

export function FilterBar({ filters, onFilterChange, activeCount }: FilterBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const setPriceRange = (range: FilterState["priceRange"]) => {
    onFilterChange({ ...filters, priceRange: range });
  };

  const setColor = (color: string) => {
    onFilterChange({ ...filters, color });
  };

  const setSize = (size: string) => {
    onFilterChange({ ...filters, size });
  };

  const toggleBrand = (brand: string) => {
    const exists = filters.selectedBrands.includes(brand);
    const updated = exists
      ? filters.selectedBrands.filter((b) => b !== brand)
      : [...filters.selectedBrands, brand];
    onFilterChange({ ...filters, selectedBrands: updated });
  };

  const setSortBy = (sortBy: FilterState["sortBy"]) => {
    onFilterChange({ ...filters, sortBy });
  };

  const resetAll = () => {
    onFilterChange(initialFilterState);
  };

  return (
    <div className="mb-6 rounded-2xl border border-border/80 bg-surface/70 p-4 backdrop-blur-md shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Filter Toggle & Active Count */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex min-h-[44px] items-center gap-2 rounded-full border border-gold/60 bg-gold/10 px-5 py-2 text-xs font-bold tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-black active:scale-95"
          >
            <SlidersHorizontal className="h-4 w-4" />
            FILTERS
            {activeCount > 0 && (
              <span className="grid h-5 w-5 place-items-center rounded-full bg-gold text-[0.65rem] font-bold text-black">
                {activeCount}
              </span>
            )}
          </button>

          {activeCount > 0 && (
            <button
              type="button"
              onClick={resetAll}
              className="flex min-h-[44px] items-center gap-1.5 rounded-full border border-border/60 px-4 py-2 text-[0.65rem] font-semibold text-muted-foreground transition-colors hover:text-rose-400"
            >
              <X className="h-3.5 w-3.5" />
              RESET
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <ArrowUpDown className="h-4 w-4 text-gold" />
          <select
            value={filters.sortBy}
            onChange={(e) => setSortBy(e.target.value as FilterState["sortBy"])}
            className="min-h-[44px] rounded-xl border border-border bg-surface-2 px-3 py-2 text-xs font-semibold text-foreground focus:border-gold focus:outline-none cursor-pointer"
          >
            <option value="RECOMMENDED">Sort: Recommended</option>
            <option value="PRICE_LOW">Price: Low to High</option>
            <option value="PRICE_HIGH">Price: High to Low</option>
            <option value="RATING">Highest Rated ★</option>
          </select>
        </div>
      </div>

      {/* Expandable Filter Drawer */}
      {isOpen && (
        <div className="mt-4 space-y-5 border-t border-border/60 pt-4">
          {/* Price Range Filter */}
          <div>
            <p className="mb-2 text-[0.65rem] font-bold tracking-[0.2em] text-gold uppercase">
              PRICE RANGE
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "All Prices", value: "ALL" },
                { label: "Under ₹3,000", value: "UNDER_3K" },
                { label: "₹3,000 – ₹6,000", value: "3K_6K" },
                { label: "₹6,000+", value: "ABOVE_6K" },
              ].map((p) => (
                <button
                  key={p.value}
                  onClick={() => setPriceRange(p.value as FilterState["priceRange"])}
                  className={`min-h-[38px] rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                    filters.priceRange === p.value
                      ? "border-gold bg-gold text-black font-bold"
                      : "border-border/70 bg-surface-2/60 text-muted-foreground hover:border-gold/50"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div>
            <p className="mb-2 text-[0.65rem] font-bold tracking-[0.2em] text-gold uppercase">
              COLOR
            </p>
            <div className="flex flex-wrap gap-2">
              {colorSwatches.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setColor(c.value)}
                  className={`flex min-h-[38px] items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    filters.color === c.value
                      ? "border-gold bg-gold/20 text-gold font-bold shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                      : "border-border/70 bg-surface-2/60 text-muted-foreground hover:border-gold/50"
                  }`}
                >
                  {c.value !== "ALL" && (
                    <span className={`h-3 w-3 rounded-full border border-white/20 ${c.bg}`} />
                  )}
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div>
            <p className="mb-2 text-[0.65rem] font-bold tracking-[0.2em] text-gold uppercase">
              SIZE
            </p>
            <div className="flex flex-wrap gap-2">
              {sizeOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-h-[38px] min-w-[38px] rounded-xl border px-3 py-1.5 text-xs font-bold transition-colors ${
                    filters.size === s
                      ? "border-gold bg-gold text-black"
                      : "border-border/70 bg-surface-2/60 text-muted-foreground hover:border-gold/50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div>
            <p className="mb-2 text-[0.65rem] font-bold tracking-[0.2em] text-gold uppercase">
              BRANDS
            </p>
            <div className="flex flex-wrap gap-2">
              {brands.map((b) => {
                const isSelected = filters.selectedBrands.includes(b);
                return (
                  <button
                    key={b}
                    onClick={() => toggleBrand(b)}
                    className={`flex min-h-[38px] items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      isSelected
                        ? "border-gold bg-gold/20 text-gold font-bold"
                        : "border-border/70 bg-surface-2/60 text-muted-foreground hover:border-gold/50"
                    }`}
                  >
                    {isSelected && <Check className="h-3.5 w-3.5 text-gold" />}
                    {b}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
