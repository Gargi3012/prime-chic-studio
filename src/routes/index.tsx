import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CartProvider } from "@/context/CartContext";
import { Hero } from "@/components/prime/Hero";
import { BrandStrip } from "@/components/prime/BrandStrip";
import { StoreFeatures } from "@/components/prime/StoreFeatures";
import { FeaturedDeck } from "@/components/prime/FeaturedDeck";
import { Carousel } from "@/components/prime/Carousel";
import { QuickViewModal } from "@/components/prime/QuickViewModal";
import { VideoSection } from "@/components/prime/VideoSection";
import { ReviewsSection } from "@/components/prime/ReviewsSection";
import { Contact } from "@/components/prime/Contact";
import { Footer, BottomNavBar } from "@/components/prime/Footer";
import { CartDrawer } from "@/components/prime/CartDrawer";
import { OutfitBuilderBanner, OutfitStudioModal } from "@/components/prime/OutfitBuilder";
import { SpinWheelModal } from "@/components/prime/SpinWheelModal";
import { AIStyleAssistant } from "@/components/prime/AIStyleAssistant";
import { SizeGuideModal } from "@/components/prime/SizeGuideModal";
import { SpecialOffers } from "@/components/prime/SpecialOffers";
import { CategoryAvatars } from "@/components/prime/CategoryAvatars";
import { CategoryDetailModal } from "@/components/prime/CategoryDetailModal";
import { footwear, products, type Category, type Product } from "@/data/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Outlet — Ultra-Luxury Fashion Magazine & Flagship Store in Ganaur" },
      {
        name: "description",
        content:
          "Prime Outlet, Ganaur: High-fashion multibrand clothing, footwear and accessories — Zara, Nike, Adidas, Armani. Open 10 AM–9 PM, all 7 days.",
      },
      { property: "og:title", content: "Prime Outlet — The Art of Modern Dressing" },
      {
        property: "og:description",
        content:
          "Curated luxury multibrand apparel, footwear and accessories in Ganaur, Sonipat. Authentic global fashion labels.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndexWrapper,
});

function IndexWrapper() {
  return (
    <CartProvider>
      <Index />
    </CartProvider>
  );
}

function Index() {
  const [category, setCategory] = useState<Category>("MEN");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isOutfitStudioOpen, setIsOutfitStudioOpen] = useState(false);
  const [isSpinWheelOpen, setIsSpinWheelOpen] = useState(false);
  const [isAIStylistOpen, setIsAIStylistOpen] = useState(false);

  // Sub-category detail modal state
  const [detailModal, setDetailModal] = useState<{
    isOpen: boolean;
    title: string;
    gender: Category;
    query: string;
  }>({
    isOpen: false,
    title: "",
    gender: "MEN",
    query: "",
  });

  const filteredProducts = useMemo(() => {
    return products.filter((p) => p.category === category);
  }, [category]);

  const filteredFootwear = useMemo(() => {
    return footwear.filter((f) => f.category === category);
  }, [category]);

  const handleSelectSpecialOffer = (offerType: string) => {
    if (offerType === "COMBO") {
      setIsOutfitStudioOpen(true);
    } else if (offerType === "UNDER_3K") {
      setDetailModal({
        isOpen: true,
        title: "Luxury Tailoring & Shirts",
        gender: category,
        query: "Shirt",
      });
    } else if (offerType === "CLEARANCE") {
      setDetailModal({
        isOpen: true,
        title: "Private Clearance (Up to 40% OFF)",
        gender: category,
        query: "",
      });
    } else if (offerType === "SNEAKERS") {
      setDetailModal({
        isOpen: true,
        title: "The Vault: Sneakers & Streetwear",
        gender: category,
        query: "Sneaker",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex justify-center text-[#141414] selection:bg-[#D4AF37]/20 selection:text-[#141414]">
      <main className="w-full max-w-6xl min-h-screen bg-[#FAF9F6] relative flex flex-col pb-24 overflow-x-hidden">
        
        {/* SLIDE 1: The Magazine Hero (Height: 92vh) */}
        <Hero
          onSelectGender={(g) => setCategory(g)}
          onExplore={() => {
            const el = document.getElementById("curated-drops");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Minimal Brand Ribbon */}
        <div className="my-2">
          <BrandStrip />
        </div>

        {/* Master Floating Gender Tab */}
        <div className="my-6 flex justify-center px-4">
          <div className="flex w-full max-w-sm items-center justify-between rounded-full border border-neutral-200/80 bg-white p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            {(["MEN", "WOMEN", "KIDS"] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`relative flex min-h-[40px] flex-1 items-center justify-center rounded-full px-4 py-1.5 text-xs font-extrabold tracking-wider transition-all duration-300 cursor-pointer ${
                  category === cat
                    ? "bg-[#18181B] text-white shadow-md font-extrabold"
                    : "text-[#64748B] hover:text-[#18181B]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Special Offers Cards */}
        <SpecialOffers onSelectOffer={handleSelectSpecialOffer} />

        {/* Visual Category Grid */}
        <CategoryAvatars
          category={category}
          onSelectSubCategory={(genderCat, subCat) => {
            setDetailModal({
              isOpen: true,
              title: subCat.name,
              gender: genderCat,
              query: subCat.query,
            });
          }}
        />

        {/* Runway & New Arrivals Lookbook Showcase */}
        <FeaturedDeck
          category={category}
          onCategoryChange={setCategory}
          onQuickView={setQuickViewProduct}
        />

        {/* Store Trust Ribbon */}
        <StoreFeatures />

        {/* Outfit Studio Banner */}
        <OutfitBuilderBanner onOpenStudio={() => setIsOutfitStudioOpen(true)} />

        {/* Carousels */}
        <Carousel
          eyebrow={`CURATED FOR ${category}`}
          title="You May Also Like"
          items={filteredProducts}
          showTags
          onQuickView={setQuickViewProduct}
        />
        <Carousel
          id="footwear"
          eyebrow={`${category} FOOTWEAR DROP`}
          title="Footwear Edit"
          items={filteredFootwear}
          onQuickView={setQuickViewProduct}
        />

        {/* Video Tour Section */}
        <VideoSection />

        {/* Client Reviews */}
        <ReviewsSection />

        {/* SLIDE 4: VIP Concierge & Flagship Trust */}
        <Contact />

        {/* Footer */}
        <Footer />
        
        {/* Mobile-First Floating Glass Navigation Dock with Gold Active Indicator */}
        <BottomNavBar
          onOpenSpinWheel={() => setIsSpinWheelOpen(true)}
          onOpenAIStylist={() => setIsAIStylistOpen(true)}
        />

        {/* Interactive Drawers & Modals */}
        <CartDrawer />
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
        <SizeGuideModal
          isOpen={isSizeGuideOpen}
          onClose={() => setIsSizeGuideOpen(false)}
        />
        <OutfitStudioModal
          isOpen={isOutfitStudioOpen}
          onClose={() => setIsOutfitStudioOpen(false)}
        />
        <SpinWheelModal
          isOpen={isSpinWheelOpen}
          onClose={() => setIsSpinWheelOpen(false)}
        />
        <AIStyleAssistant
          isOpen={isAIStylistOpen}
          onClose={() => setIsAIStylistOpen(false)}
          onQuickView={setQuickViewProduct}
        />

        {/* Sub-Category Detail View Modal */}
        <CategoryDetailModal
          isOpen={detailModal.isOpen}
          onClose={() => setDetailModal((prev) => ({ ...prev, isOpen: false }))}
          title={detailModal.title}
          categoryGender={detailModal.gender}
          filterQuery={detailModal.query}
          onQuickView={setQuickViewProduct}
        />
      </main>
    </div>
  );
}
