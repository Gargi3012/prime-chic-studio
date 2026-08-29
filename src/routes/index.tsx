import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CartProvider } from "@/context/CartContext";
import { Hero } from "@/components/prime/Hero";
import { BrandStrip } from "@/components/prime/BrandStrip";
import { StoreFeatures } from "@/components/prime/StoreFeatures";
import { FeaturedDeck } from "@/components/prime/FeaturedDeck";
import { FilterBar, initialFilterState, type FilterState } from "@/components/prime/FilterBar";
import { Carousel } from "@/components/prime/Carousel";
import { QuickViewModal } from "@/components/prime/QuickViewModal";
import { Gallery } from "@/components/prime/Gallery";
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
import { CategoryAvatars, type SubCategoryItem } from "@/components/prime/CategoryAvatars";
import { CategoryDetailModal } from "@/components/prime/CategoryDetailModal";
import { footwear, products, type Category, type Product } from "@/data/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Outlet — Multibrand Fashion Store in Ganaur, Sonipat" },
      {
        name: "description",
        content:
          "Prime Outlet, Ganaur (Sonipat): premium multibrand clothing, footwear and accessories — Puma, Adidas, Nike, U.S. Polo Assn. Open 10 AM–9 PM, all 7 days.",
      },
      { property: "og:title", content: "Prime Outlet — Style That Fits You" },
      {
        property: "og:description",
        content:
          "Premium multibrand clothing, footwear and accessories in Ganaur, Sonipat. Best brands, best prices.",
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
  const [filters, setFilters] = useState<FilterState>(initialFilterState);
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

  // Active filter count
  const activeCount = useMemo(() => {
    let count = 0;
    if (filters.priceRange !== "ALL") count++;
    if (filters.color !== "ALL") count++;
    if (filters.size !== "ALL") count++;
    if (filters.selectedBrands.length > 0) count += filters.selectedBrands.length;
    if (filters.sortBy !== "RECOMMENDED") count++;
    return count;
  }, [filters]);

  // Dynamic Page-Wide Product Filtering Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category Match
        if (p.category !== category) return false;

        // Price Range Match
        if (filters.priceRange === "UNDER_3K" && p.price >= 3000) return false;
        if (filters.priceRange === "3K_6K" && (p.price < 3000 || p.price > 6000)) return false;
        if (filters.priceRange === "ABOVE_6K" && p.price <= 6000) return false;

        // Color Match
        if (filters.color !== "ALL" && p.colors && !p.colors.includes(filters.color)) return false;

        // Size Match
        if (filters.size !== "ALL" && p.sizes && !p.sizes.includes(filters.size)) return false;

        // Brand Match
        if (
          filters.selectedBrands.length > 0 &&
          !filters.selectedBrands.map((b) => b.toUpperCase()).includes(p.brand.toUpperCase())
        ) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === "PRICE_LOW") return a.price - b.price;
        if (filters.sortBy === "PRICE_HIGH") return b.price - a.price;
        if (filters.sortBy === "RATING") return (b.rating ?? 0) - (a.rating ?? 0);
        return 0;
      });
  }, [category, filters]);

  // Dynamic Footwear Filtering Logic
  const filteredFootwear = useMemo(() => {
    return footwear
      .filter((f) => {
        if (f.category !== category) return false;
        if (filters.priceRange === "UNDER_3K" && f.price >= 3000) return false;
        if (filters.priceRange === "3K_6K" && (f.price < 3000 || f.price > 6000)) return false;
        if (filters.priceRange === "ABOVE_6K" && f.price <= 6000) return false;
        if (
          filters.selectedBrands.length > 0 &&
          !filters.selectedBrands.map((b) => b.toUpperCase()).includes(f.brand.toUpperCase())
        ) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === "PRICE_LOW") return a.price - b.price;
        if (filters.sortBy === "PRICE_HIGH") return b.price - a.price;
        if (filters.sortBy === "RATING") return (b.rating ?? 0) - (a.rating ?? 0);
        return 0;
      });
  }, [category, filters]);

  const handleSelectSpecialOffer = (offerType: string) => {
    if (offerType === "COMBO") {
      setIsOutfitStudioOpen(true);
    } else if (offerType === "UNDER_3K") {
      setDetailModal({
        isOpen: true,
        title: "Deals Under ₹3,000",
        gender: category,
        query: "",
      });
    } else if (offerType === "CLEARANCE") {
      setDetailModal({
        isOpen: true,
        title: "Clearance Up to 50% OFF",
        gender: category,
        query: "",
      });
    } else if (offerType === "SNEAKERS") {
      setDetailModal({
        isOpen: true,
        title: "Sneakers & Footwear",
        gender: category,
        query: "Sneaker",
      });
    }
  };

  return (
    <main className="mx-auto w-full max-w-6xl pb-20">
      <Hero />
      <BrandStrip />

      {/* Single Master Category Selector Bar */}
      <div className="my-6 flex justify-center px-4">
        <div className="flex gap-1.5 rounded-full border border-gold/50 bg-black/90 p-2 shadow-[0_0_25px_rgba(212,175,55,0.25)] backdrop-blur-md">
          {(["MEN", "WOMEN", "KIDS"] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`relative flex min-h-[46px] min-w-[100px] items-center justify-center rounded-full px-6 py-2.5 text-xs font-extrabold tracking-[0.2em] transition-all sm:min-w-[120px] ${
                category === cat
                  ? "bg-gold-gradient text-black shadow-lg"
                  : "text-muted-foreground hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 1. SPECIAL OFFERS Grid (Matching Screenshot 1) */}
      <SpecialOffers onSelectOffer={handleSelectSpecialOffer} />

      {/* 2. CATEGORIES Circular Avatars (Matching Screenshot 1) */}
      <div id="category-avatars">
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
      </div>

      <StoreFeatures />
      <FeaturedDeck category={category} onCategoryChange={setCategory} />

      {/* Compact Banner triggering full Outfit Studio */}
      <OutfitBuilderBanner onOpenStudio={() => setIsOutfitStudioOpen(true)} />

      {/* Global Interactive Filter Bar */}
      <div className="px-5 sm:px-10">
        <FilterBar
          filters={filters}
          onFilterChange={setFilters}
          activeCount={activeCount}
        />
      </div>

      <Carousel
        eyebrow={`CURATED FOR ${category}`}
        title="You May Also Like"
        items={filteredProducts.length > 0 ? filteredProducts : products.filter((p) => p.category === category)}
        showTags
        onQuickView={setQuickViewProduct}
      />
      <Carousel
        id="footwear"
        eyebrow={`${category} FOOTWEAR DROP`}
        title="Footwear Edit"
        items={filteredFootwear.length > 0 ? filteredFootwear : footwear.filter((f) => f.category === category)}
        onQuickView={setQuickViewProduct}
      />
      <div id="gallery">
        <Gallery />
      </div>

      {/* Video section placed directly above Location & Contact */}
      <VideoSection />

      {/* Dedicated Customer Reviews & Feedback Section */}
      <ReviewsSection />

      <Contact />
      <Footer />
      
      {/* Fixed Bottom Navigation Bar (Matching Screenshot 1) */}
      <BottomNavBar
        onOpenSpinWheel={() => setIsSpinWheelOpen(true)}
        onOpenAIStylist={() => setIsAIStylistOpen(true)}
      />

      {/* Interactive Modals & Drawers */}
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

      {/* 3. Sub-Category Marquee Detail View Modal (Matching Screenshot 2) */}
      <CategoryDetailModal
        isOpen={detailModal.isOpen}
        onClose={() => setDetailModal((prev) => ({ ...prev, isOpen: false }))}
        title={detailModal.title}
        categoryGender={detailModal.gender}
        filterQuery={detailModal.query}
        onQuickView={setQuickViewProduct}
      />
    </main>
  );
}
