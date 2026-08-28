import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/prime/Hero";
import { BrandStrip } from "@/components/prime/BrandStrip";
import { FeaturedDeck } from "@/components/prime/FeaturedDeck";
import { Carousel } from "@/components/prime/Carousel";
import { Gallery } from "@/components/prime/Gallery";
import { Contact } from "@/components/prime/Contact";
import { Footer, WhatsAppFab } from "@/components/prime/Footer";
import { footwear, suggestions } from "@/data/catalog";

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
  return (
    <main className="mx-auto w-full max-w-6xl">
      <Hero />
      <BrandStrip />
      <FeaturedDeck />
      <Carousel
        eyebrow="CURATED FOR YOU"
        title="You May Also Like"
        items={suggestions}
        showTags
      />
      <Carousel id="footwear" eyebrow="SNEAKER DROP" title="Footwear Edit" items={footwear} />
      <div id="gallery">
        <Gallery />
      </div>
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
