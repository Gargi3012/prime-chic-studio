import heroStore from "@/assets/hero-store.jpg";
import exterior from "@/assets/g-exterior.jpg";
import shelf from "@/assets/g-shelf.jpg";
import { Reveal, SectionHeading } from "./Reveal";

const shots = [
  { src: exterior, alt: "Prime Outlet store exterior at dusk" },
  { src: heroStore, alt: "Prime Outlet store interior racks" },
  { src: shelf, alt: "Folded shirts on lit shelf" },
  { src: heroStore, alt: "Store aisle with warm lighting" },
  { src: shelf, alt: "Premium shelving detail" },
  { src: exterior, alt: "Storefront signage glow" },
];

export function Gallery() {
  return (
    <section className="section-pad">
      <SectionHeading eyebrow="INSIDE THE STORE" title="Store Gallery" />
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {shots.map((s, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="aspect-square overflow-hidden rounded-xl border border-border">
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110 active:scale-110"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
