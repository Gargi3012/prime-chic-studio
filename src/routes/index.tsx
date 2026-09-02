import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/prime/Header";
import { Hero } from "@/components/prime/Hero";
import { DepartmentGrid } from "@/components/prime/DepartmentGrid";
import { VaultDrops } from "@/components/prime/VaultDrops";
import { StudioServiceStrip } from "@/components/prime/StudioServiceStrip";
import { FloatingStylistPill } from "@/components/prime/FloatingStylistPill";
import { QuickViewModal } from "@/components/prime/QuickViewModal";
import { Footer } from "@/components/prime/Footer";
import { Dock } from "@/components/prime/Dock";
import { CartDrawer } from "@/components/prime/CartDrawer";
import { AIStyleAssistant } from "@/components/prime/AIStyleAssistant";
import { SizeGuideModal } from "@/components/prime/SizeGuideModal";
import { CategoryDetailModal } from "@/components/prime/CategoryDetailModal";
import { CategoryDrawer } from "@/components/prime/CategoryDrawer";
import { SearchModal } from "@/components/prime/SearchModal";
import { type Category, type Product } from "@/data/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PRIME OUTLET — Ganaur Flagship Studio | Quiet Luxury Multibrand Store" },
      {
        name: "description",
        content:
          "Prime Outlet Ganaur Flagship Studio: Quiet luxury multibrand apparel, footwear and leathercraft.",
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
  const [category, setCategory] = useState<Category>("WOMEN");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
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
    gender: "WOMEN",
    query: "",
  });

  const handleCategoryNav = (catNav: Category) => {
    setCategory(catNav);
    const el = document.getElementById("catalog-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#FAF8F5] text-[#181614] selection:bg-[#9E6738]/20 selection:text-[#181614] flex flex-col items-center">
      <main className="w-full max-w-[100vw] overflow-x-hidden bg-[#FAF8F5] relative flex flex-col">
        
        {/* 1. Minimal Top Header Bar */}
        <Header
          onSelectCategory={handleCategoryNav}
          onOpenStylist={() => setIsAIStylistOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* 2. Hero Section (Haute-Couture Full-Bleed Campaign) */}
        <Hero
          currentCategory={category}
          onSelectGender={setCategory}
        />

        {/* 3. Real Shoppable Collection Grid Directly Below Hero */}
        <DepartmentGrid
          category={category}
          onGenderChange={setCategory}
          onQuickView={setQuickViewProduct}
        />

        {/* 4. ADDITION 1: Weekly Vault Drops Showcase */}
        <VaultDrops onQuickView={setQuickViewProduct} />

        {/* 5. ADDITION 2: Flagship Studio Service Trust Console */}
        <StudioServiceStrip />

        {/* 6. Compact 1-Line Trust Bar & Footer */}
        <Footer />

        {/* ADDITION 3: Floating Stylist WhatsApp Pill */}
        <FloatingStylistPill />
        
        {/* Floating Bottom Navigation Dock */}
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
