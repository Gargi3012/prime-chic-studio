import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Ruler, Sparkles, Check } from "lucide-react";
import { brands } from "@/data/catalog";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBrand?: string;
}

export function SizeGuideModal({ isOpen, onClose, initialBrand }: SizeGuideModalProps) {
  const [selectedBrand, setSelectedBrand] = useState(initialBrand?.toUpperCase() || "NIKE");
  const [activeTab, setActiveTab] = useState<"clothing" | "footwear">("clothing");

  // Fit finder quiz state
  const [height, setHeight] = useState("5'8\" - 5'10\"");
  const [weight, setWeight] = useState("65 - 75 kg");
  const [fitPref, setFitPref] = useState<"Slim" | "Regular" | "Relaxed">("Regular");
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);

  if (!isOpen) return null;

  const calculateRecommendedSize = () => {
    let size = "M";
    if (weight.includes("85") || weight.includes("90+")) {
      size = fitPref === "Relaxed" ? "XXL" : "XL";
    } else if (weight.includes("75") || weight.includes("80")) {
      size = fitPref === "Slim" ? "M" : "L";
    } else if (weight.includes("55") || weight.includes("60")) {
      size = fitPref === "Relaxed" ? "M" : "S";
    } else {
      size = fitPref === "Relaxed" ? "L" : fitPref === "Slim" ? "S" : "M";
    }
    setRecommendedSize(size);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-gold/40 bg-surface-2 p-6 shadow-2xl text-foreground"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/60 pb-4">
            <div className="flex items-center gap-2">
              <Ruler className="h-5 w-5 text-gold" />
              <h3 className="text-lg font-bold text-foreground tracking-wide">
                Brand Size Guide & Fit Finder
              </h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-full bg-surface p-1.5 text-muted-foreground transition-colors hover:bg-gold/20 hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 space-y-6 overflow-y-auto max-h-[70vh] pr-1">
            {/* Brand Pills */}
            <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
              {brands.slice(0, 6).map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold tracking-wider transition-all whitespace-nowrap ${
                    selectedBrand === b
                      ? "bg-gold-gradient text-black shadow-md"
                      : "border border-border/70 bg-surface text-muted-foreground hover:border-gold/40"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>

            {/* Clothing vs Footwear Switcher */}
            <div className="flex justify-center border-b border-border/40 pb-3">
              <div className="flex gap-1 rounded-full border border-border bg-surface p-1">
                <button
                  onClick={() => setActiveTab("clothing")}
                  className={`rounded-full px-5 py-1.5 text-xs font-bold tracking-wider transition-colors ${
                    activeTab === "clothing" ? "bg-gold text-black" : "text-muted-foreground"
                  }`}
                >
                  CLOTHING SIZES
                </button>
                <button
                  onClick={() => setActiveTab("footwear")}
                  className={`rounded-full px-5 py-1.5 text-xs font-bold tracking-wider transition-colors ${
                    activeTab === "footwear" ? "bg-gold text-black" : "text-muted-foreground"
                  }`}
                >
                  FOOTWEAR SIZES
                </button>
              </div>
            </div>

            {/* Size Table */}
            {activeTab === "clothing" ? (
              <div className="overflow-x-auto rounded-2xl border border-border/60 bg-black/40 p-1">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-border/60 text-gold uppercase text-[0.65rem] tracking-wider">
                      <th className="p-2.5">Size</th>
                      <th className="p-2.5">Chest (inches)</th>
                      <th className="p-2.5">Waist (inches)</th>
                      <th className="p-2.5">Shoulder (inches)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30 font-medium text-muted-foreground">
                    <tr className="hover:bg-gold/5">
                      <td className="p-2.5 font-bold text-white">S (Small)</td>
                      <td className="p-2.5">36" - 38"</td>
                      <td className="p-2.5">30" - 32"</td>
                      <td className="p-2.5">17.5"</td>
                    </tr>
                    <tr className="hover:bg-gold/5">
                      <td className="p-2.5 font-bold text-white">M (Medium)</td>
                      <td className="p-2.5">38" - 40"</td>
                      <td className="p-2.5">32" - 34"</td>
                      <td className="p-2.5">18.2"</td>
                    </tr>
                    <tr className="hover:bg-gold/5">
                      <td className="p-2.5 font-bold text-white">L (Large)</td>
                      <td className="p-2.5">40" - 42"</td>
                      <td className="p-2.5">34" - 36"</td>
                      <td className="p-2.5">19.0"</td>
                    </tr>
                    <tr className="hover:bg-gold/5">
                      <td className="p-2.5 font-bold text-white">XL (X-Large)</td>
                      <td className="p-2.5">42" - 44"</td>
                      <td className="p-2.5">36" - 38"</td>
                      <td className="p-2.5">19.8"</td>
                    </tr>
                    <tr className="hover:bg-gold/5">
                      <td className="p-2.5 font-bold text-white">XXL (2X-Large)</td>
                      <td className="p-2.5">44" - 46"</td>
                      <td className="p-2.5">38" - 40"</td>
                      <td className="p-2.5">20.5"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-border/60 bg-black/40 p-1">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-border/60 text-gold uppercase text-[0.65rem] tracking-wider">
                      <th className="p-2.5">UK / India</th>
                      <th className="p-2.5">US Size</th>
                      <th className="p-2.5">EU Size</th>
                      <th className="p-2.5">Foot Length (CM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30 font-medium text-muted-foreground">
                    <tr className="hover:bg-gold/5">
                      <td className="p-2.5 font-bold text-white">UK 7</td>
                      <td className="p-2.5">US 8</td>
                      <td className="p-2.5">EU 41</td>
                      <td className="p-2.5">25.5 cm</td>
                    </tr>
                    <tr className="hover:bg-gold/5">
                      <td className="p-2.5 font-bold text-white">UK 8</td>
                      <td className="p-2.5">US 9</td>
                      <td className="p-2.5">EU 42.5</td>
                      <td className="p-2.5">26.5 cm</td>
                    </tr>
                    <tr className="hover:bg-gold/5">
                      <td className="p-2.5 font-bold text-white">UK 9</td>
                      <td className="p-2.5">US 10</td>
                      <td className="p-2.5">EU 44</td>
                      <td className="p-2.5">27.5 cm</td>
                    </tr>
                    <tr className="hover:bg-gold/5">
                      <td className="p-2.5 font-bold text-white">UK 10</td>
                      <td className="p-2.5">US 11</td>
                      <td className="p-2.5">EU 45</td>
                      <td className="p-2.5">28.5 cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Smart Fit Quiz Box */}
            <div className="rounded-2xl border border-gold/40 bg-surface/90 p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold" />
                <h4 className="text-xs font-bold text-gold uppercase tracking-wider">
                  Interactive Fit Finder Quiz
                </h4>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 text-xs">
                <div>
                  <label className="block text-[0.65rem] text-muted-foreground uppercase font-bold mb-1">
                    Height
                  </label>
                  <select
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full rounded-xl border border-border bg-black/60 p-2 text-foreground"
                  >
                    <option value="5'4&quot; - 5'7&quot;">5'4" - 5'7"</option>
                    <option value="5'8&quot; - 5'10&quot;">5'8" - 5'10"</option>
                    <option value="5'11&quot; - 6'2&quot;">5'11" - 6'2"</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[0.65rem] text-muted-foreground uppercase font-bold mb-1">
                    Weight
                  </label>
                  <select
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full rounded-xl border border-border bg-black/60 p-2 text-foreground"
                  >
                    <option value="55 - 65 kg">55 - 65 kg</option>
                    <option value="65 - 75 kg">65 - 75 kg</option>
                    <option value="75 - 85 kg">75 - 85 kg</option>
                    <option value="85+ kg">85+ kg</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[0.65rem] text-muted-foreground uppercase font-bold mb-1">
                    Preferred Fit
                  </label>
                  <select
                    value={fitPref}
                    onChange={(e) => setFitPref(e.target.value as any)}
                    className="w-full rounded-xl border border-border bg-black/60 p-2 text-foreground"
                  >
                    <option value="Slim">Slim / Tailored</option>
                    <option value="Regular">Regular Fit</option>
                    <option value="Relaxed">Relaxed / Oversized</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={calculateRecommendedSize}
                  className="rounded-xl bg-gold px-4 py-2 text-xs font-bold text-black hover:bg-gold/90 transition-colors"
                >
                  FIND MY BEST FIT
                </button>

                {recommendedSize && (
                  <div className="flex items-center gap-2 rounded-xl bg-gold/15 px-3 py-1.5 border border-gold/40 text-gold text-xs font-bold">
                    <Check className="h-4 w-4" /> Recommended Size: {recommendedSize} ({selectedBrand})
                  </div>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
