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
          className="fixed inset-0 bg-black/40 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-h-[90vh] w-full max-w-xl overflow-hidden rounded-3xl border border-black/[0.08] bg-white p-5 shadow-2xl text-[#18181B] sm:p-7"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-black/[0.06] pb-3.5">
            <div className="flex items-center gap-2">
              <Ruler className="h-4.5 w-4.5 text-[#C59B27]" />
              <h3 className="text-base font-extrabold text-[#18181B] tracking-tight">
                Brand Size Guide & Fit Finder
              </h3>
            </div>
            <button
              onClick={onClose}
              className="grid h-8 w-8 place-items-center rounded-full bg-[#FAF9F6] text-[#18181B] hover:scale-105"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 space-y-5 overflow-y-auto max-h-[70vh] pr-1">
            {/* Brand Pills */}
            <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
              {brands.slice(0, 6).map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`rounded-full px-3.5 py-1 text-xs font-bold tracking-wider transition-all whitespace-nowrap ${
                    selectedBrand === b
                      ? "bg-[#C59B27] text-white shadow-xs"
                      : "border border-black/[0.06] bg-[#FAF9F6] text-[#71717A] hover:border-[#C59B27]"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>

            {/* Clothing vs Footwear Switcher */}
            <div className="flex justify-center border-b border-black/[0.06] pb-3">
              <div className="flex gap-1 rounded-full border border-black/[0.06] bg-[#FAF9F6] p-1">
                <button
                  onClick={() => setActiveTab("clothing")}
                  className={`rounded-full px-4 py-1 text-xs font-bold tracking-wider transition-colors ${
                    activeTab === "clothing" ? "bg-[#C59B27] text-white shadow-xs" : "text-[#71717A]"
                  }`}
                >
                  CLOTHING SIZES
                </button>
                <button
                  onClick={() => setActiveTab("footwear")}
                  className={`rounded-full px-4 py-1 text-xs font-bold tracking-wider transition-colors ${
                    activeTab === "footwear" ? "bg-[#C59B27] text-white shadow-xs" : "text-[#71717A]"
                  }`}
                >
                  FOOTWEAR SIZES
                </button>
              </div>
            </div>

            {/* Size Table */}
            {activeTab === "clothing" ? (
              <div className="overflow-x-auto rounded-2xl border border-black/[0.06] bg-[#FAF9F6] p-1">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-black/[0.06] bg-white text-[0.65rem] font-bold text-[#C59B27] uppercase">
                    <tr>
                      <th className="p-2.5">Size</th>
                      <th className="p-2.5">Chest (Inches)</th>
                      <th className="p-2.5">Waist (Inches)</th>
                      <th className="p-2.5">Fit Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/[0.04] text-[#18181B]">
                    <tr>
                      <td className="p-2.5 font-bold">S (Small)</td>
                      <td className="p-2.5">36 – 38</td>
                      <td className="p-2.5">28 – 30</td>
                      <td className="p-2.5 text-[#71717A]">Tailored Fit</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">M (Medium)</td>
                      <td className="p-2.5">38 – 40</td>
                      <td className="p-2.5">31 – 33</td>
                      <td className="p-2.5 text-[#71717A]">Regular Fit</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">L (Large)</td>
                      <td className="p-2.5">40 – 42</td>
                      <td className="p-2.5">34 – 36</td>
                      <td className="p-2.5 text-[#71717A]">Comfort Fit</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">XL (Extra Large)</td>
                      <td className="p-2.5">42 – 44</td>
                      <td className="p-2.5">37 – 39</td>
                      <td className="p-2.5 text-[#71717A]">Relaxed Fit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-black/[0.06] bg-[#FAF9F6] p-1">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-black/[0.06] bg-white text-[0.65rem] font-bold text-[#C59B27] uppercase">
                    <tr>
                      <th className="p-2.5">UK / India</th>
                      <th className="p-2.5">US Size</th>
                      <th className="p-2.5">EU Size</th>
                      <th className="p-2.5">Foot Length (CM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/[0.04] text-[#18181B]">
                    <tr>
                      <td className="p-2.5 font-bold">UK 7</td>
                      <td className="p-2.5">US 8</td>
                      <td className="p-2.5">EU 41</td>
                      <td className="p-2.5">25.5 cm</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">UK 8</td>
                      <td className="p-2.5">US 9</td>
                      <td className="p-2.5">EU 42.5</td>
                      <td className="p-2.5">26.5 cm</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">UK 9</td>
                      <td className="p-2.5">US 10</td>
                      <td className="p-2.5">EU 44</td>
                      <td className="p-2.5">27.5 cm</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">UK 10</td>
                      <td className="p-2.5">US 11</td>
                      <td className="p-2.5">EU 45</td>
                      <td className="p-2.5">28.5 cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Smart Fit Finder Quiz */}
            <div className="rounded-2xl border border-black/[0.06] bg-[#FAF9F6] p-4">
              <div className="flex items-center gap-1.5 mb-3">
                <Sparkles className="h-4 w-4 text-[#C59B27]" />
                <h4 className="text-xs font-bold text-[#18181B] tracking-wider uppercase">
                  AI Fit Recommendation Quiz
                </h4>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 text-xs">
                <div>
                  <label className="block text-[0.62rem] font-bold text-[#71717A] mb-1 uppercase">Height</label>
                  <select
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full rounded-xl border border-black/[0.08] bg-white p-2 text-[#18181B]"
                  >
                    <option>5'4" - 5'7"</option>
                    <option>5'8" - 5'10"</option>
                    <option>5'11" - 6'1"</option>
                    <option>6'2"+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[0.62rem] font-bold text-[#71717A] mb-1 uppercase">Weight</label>
                  <select
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full rounded-xl border border-black/[0.08] bg-white p-2 text-[#18181B]"
                  >
                    <option>50 - 60 kg</option>
                    <option>65 - 75 kg</option>
                    <option>75 - 85 kg</option>
                    <option>85 - 95 kg</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[0.62rem] font-bold text-[#71717A] mb-1 uppercase">Preferred Fit</label>
                  <select
                    value={fitPref}
                    onChange={(e) => setFitPref(e.target.value as any)}
                    className="w-full rounded-xl border border-black/[0.08] bg-white p-2 text-[#18181B]"
                  >
                    <option value="Slim">Slim Fit</option>
                    <option value="Regular">Regular Fit</option>
                    <option value="Relaxed">Relaxed Fit</option>
                  </select>
                </div>
              </div>

              <button
                type="button"
                onClick={calculateRecommendedSize}
                className="glow-gold mt-3 flex min-h-[38px] w-full items-center justify-center rounded-full bg-gold-gradient text-xs font-bold text-white shadow-xs"
              >
                FIND MY PERFECT SIZE
              </button>

              {recommendedSize && (
                <div className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-[#C59B27]/30 bg-white p-2.5 text-xs text-[#18181B]">
                  <Check className="h-4 w-4 text-[#C59B27]" />
                  <span>
                    Your Recommended Size for {selectedBrand}:{" "}
                    <strong className="text-sm font-extrabold text-[#C59B27]">{recommendedSize}</strong>
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
