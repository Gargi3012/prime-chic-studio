import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/prime/Hero";
import { BrandStrip } from "@/components/prime/BrandStrip";
import { StoreFeatures } from "@/components/prime/StoreFeatures";
import { FeaturedDeck } from "@/components/prime/FeaturedDeck";
import { FilterBar, initialFilterState, type FilterState } from "@/components/prime/FilterBar";
import { Carousel } from "@/components/prime/Carousel";
import { QuickViewModal } from "@/components/prime/QuickViewModal";
import { Gallery } from "@/components/prime/Gallery";
import { VideoSection } from "@/components/prime/VideoSection";
import { Contact } from "@/components/prime/Contact";
import { Footer, WhatsAppFab } from "@/components/prime/Footer";
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
  component: Index,
});

function Index() {
  const [category, setCategory] = useState<Category>("MEN");
  const [filters, setFilters] = useState<FilterState>(initialFilterState);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

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
    return products.filter((p) => {
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
    }).sort((a, b) => {
      if (filters.sortBy === "PRICE_LOW") return a.price - b.price;
      if (filters.sortBy === "PRICE_HIGH") return b.price - a.price;
      if (filters.sortBy === "RATING") return (b.rating ?? 0) - (a.rating ?? 0);
      return 0;
    });
  }, [category, filters]);

  // Dynamic Footwear Filtering Logic
  const filteredFootwear = useMemo(() => {
    return footwear.filter((f) => {
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
    }).sort((a, b) => {
      if (filters.sortBy === "PRICE_LOW") return a.price - b.price;
      if (filters.sortBy === "PRICE_HIGH") return b.price - a.price;
      if (filters.sortBy === "RATING") return (b.rating ?? 0) - (a.rating ?? 0);
      return 0;
    });
  }, [category, filters]);

  return (
    <main className="mx-auto w-full max-w-6xl">
      <Hero />
      <BrandStrip />
      <StoreFeatures />
      <FeaturedDeck category={category} onCategoryChange={setCategory} />

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
      <Contact />
      <Footer />
      <WhatsAppFab />

      {/* Global Interactive Quick View & Size Guide Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </main>
  );
}
