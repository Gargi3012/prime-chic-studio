import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/prime/Hero";
import { BrandStrip } from "@/components/prime/BrandStrip";
import { FeaturedDeck } from "@/components/prime/FeaturedDeck";
import { Carousel } from "@/components/prime/Carousel";
import { Gallery } from "@/components/prime/Gallery";
import { Contact } from "@/components/prime/Contact";
import { Footer, WhatsAppFab } from "@/components/prime/Footer";
import { footwear, products, suggestions, type Category } from "@/data/catalog";

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

  // Dynamically filter suggestions & footwear for the selected category (MEN / WOMEN / KIDS)
  const categorySuggestions = products.filter((p) => p.category === category);
  const categoryFootwear = footwear.filter((f) => f.category === category);

  const displaySuggestions = categorySuggestions.length > 0 ? categorySuggestions : suggestions;
  const displayFootwear = categoryFootwear.length > 0 ? categoryFootwear : footwear;

  return (
    <main className="mx-auto w-full max-w-6xl">
      <Hero />
      <BrandStrip />
      <FeaturedDeck category={category} onCategoryChange={setCategory} />
      <Carousel
        eyebrow={`CURATED FOR ${category}`}
        title="You May Also Like"
        items={displaySuggestions}
        showTags
      />
      <Carousel
        id="footwear"
        eyebrow={`${category} FOOTWEAR DROP`}
        title="Footwear Edit"
        items={displayFootwear}
      />
      <div id="gallery">
        <Gallery />
      </div>
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
