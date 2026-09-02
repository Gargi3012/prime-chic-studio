import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/prime/Header";
import { Hero } from "@/components/prime/Hero";
import { CategoryStrip } from "@/components/prime/CategoryStrip";
import { PrivilegeEdits } from "@/components/prime/PrivilegeEdits";
import { ValueProps } from "@/components/prime/ValueProps";
import { FeaturedDeck } from "@/components/prime/FeaturedDeck";
import { Carousel } from "@/components/prime/Carousel";
import { QuickViewModal } from "@/components/prime/QuickViewModal";
import { VideoSection } from "@/components/prime/VideoSection";
import { ReviewsSection } from "@/components/prime/ReviewsSection";
import { Contact } from "@/components/prime/Contact";
import { Footer } from "@/components/prime/Footer";
import { Dock } from "@/components/prime/Dock";
import { CartDrawer } from "@/components/prime/CartDrawer";
import { OutfitBuilderBanner, OutfitStudioModal } from "@/components/prime/OutfitBuilder";
import { AIStyleAssistant } from "@/components/prime/AIStyleAssistant";
import { SizeGuideModal } from "@/components/prime/SizeGuideModal";
import { CategoryDetailModal } from "@/components/prime/CategoryDetailModal";
import { CategoryDrawer } from "@/components/prime/CategoryDrawer";
import { SearchModal } from "@/components/prime/SearchModal";
import { footwear, products, type Category, type Product } from "@/data/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PRIME OUTLET — Ganaur Flagship Studio | Quiet Luxury Multibrand Store" },
      {
        name: "description",
        content:
          "Prime Outlet Ganaur Flagship Studio: Quiet luxury multibrand apparel, footwear and leathercraft. Armani, Zara, Massimo Dutti, Nike Lab.",
      },
      { property: "og:title", content: "PRIME OUTLET — Ganaur Flagship Studio" },
      {
        property: "og:description",
        content:
          "Multibrand tailoring & leathercraft curated for Him & Her. Authentic global fashion labels.",
      },
      { property: "og:type", content: "website" },
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
  const [isAIStylistOpen, setIsAIStylistOpen] = useState(false);
  const [isCategoryDrawerOpen, setIsCategoryDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  const handleSelectOfferQuery = (query: string) => {
    setDetailModal({
      isOpen: true,
      title: `${query} Privileges`,
      gender: category,
      query,
    });
  };

  const handleCategoryNav = (catNav: "WOMEN" | "MEN" | "BAGS" | "ACCESSORIES") => {
    if (catNav === "WOMEN" || catNav === "MEN") {
      setCategory(catNav);
    } else {
      setDetailModal({
        isOpen: true,
        title: catNav,
        gender: category,
        query: catNav === "BAGS" ? "Bag" : "Accessory",
      });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#FDFCFA] text-[#171615] selection:bg-[#9E6738]/20 selection:text-[#171615] flex flex-col items-center">
      <main className="w-full max-w-[100vw] overflow-x-hidden min-h-screen bg-[#FDFCFA] relative flex flex-col pb-20">
        
        {/* 1. Minimal Header Bar (<Header />) */}
        <Header
          onSelectCategory={handleCategoryNav}
          onOpenStylist={() => setIsAIStylistOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* 2. Editorial Hero Billboard (<Hero />) */}
        <Hero
          onSelectGender={(g) => setCategory(g)}
        />

        {/* 3. The Unified Editorial Lookbook (Quiet Tailoring & Craft) */}
        <PrivilegeEdits
          onSelectOffer={handleSelectOfferQuery}
          onOpenStylist={() => setIsAIStylistOpen(true)}
        />

        {/* 6. Local Trust & Concierge (<ValueProps />) */}
        <ValueProps />

        {/* Runway & New Arrivals Lookbook Showcase */}
        <FeaturedDeck
          category={category}
          onCategoryChange={setCategory}
          onQuickView={setQuickViewProduct}
        />

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

        {/* VIP Concierge & Flagship Trust */}
        <Contact />

        {/* 7. Editorial Footer (<Footer />) */}
        <Footer />
        
        {/* 8. Floating Bottom Navigation Dock (<Dock />) */}
        <Dock
          onOpenCategoriesDrawer={() => setIsCategoryDrawerOpen(true)}
          onOpenStylist={() => setIsAIStylistOpen(true)}
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
        <AIStyleAssistant
          isOpen={isAIStylistOpen}
          onClose={() => setIsAIStylistOpen(false)}
          onQuickView={setQuickViewProduct}
        />
        <CategoryDrawer
          isOpen={isCategoryDrawerOpen}
          onClose={() => setIsCategoryDrawerOpen(false)}
          onSelectSubCategory={(title, query) => {
            setDetailModal({
              isOpen: true,
              title,
              gender: category,
              query,
            });
          }}
        />
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectProduct={(product) => setQuickViewProduct(product)}
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
