import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { INSTAGRAM, PHONE, WHATSAPP } from "@/data/catalog";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  return (
    <section id="visit" className="section-pad">
      <SectionHeading eyebrow="FIND US" title="Location & Contact" />
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="space-y-6 rounded-2xl border border-border bg-surface p-6">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <div className="min-w-0">
                <p className="text-sm font-semibold">Sonipat, Ganaur MC Road</p>
                <p className="text-xs text-muted-foreground">Haryana, India</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <div className="min-w-0">
                <p className="text-sm font-semibold">10:00 AM – 9:00 PM</p>
                <p className="text-xs text-muted-foreground">All 7 Days Open</p>
              </div>
            </div>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <div className="min-w-0">
                <p className="text-sm font-semibold">{PHONE}</p>
                <p className="text-xs text-muted-foreground">Tap to call</p>
              </div>
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex gap-3">
              <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <div className="min-w-0">
                <p className="text-sm font-semibold">@primeoutlet</p>
                <p className="text-xs text-muted-foreground">Follow for new drops</p>
              </div>
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="glow-gold block rounded-full bg-gold-gradient px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-[320px] overflow-hidden rounded-2xl border border-border md:h-full">
            <iframe
              title="Prime Outlet location map"
              src="https://www.google.com/maps?q=Ganaur%2C%20Sonipat%2C%20Haryana&output=embed"
              className="h-full w-full grayscale-[0.6] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
