import { Clock, MapPin, Phone, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { PHONE, WHATSAPP } from "@/data/catalog";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  return (
    <section id="visit" className="my-10 px-4 sm:px-6">
      <SectionHeading
        eyebrow="FLAGSHIP EXPERIENCE"
        title="VIP Concierge & Store Fitting"
        subtitle="Visit our Ganaur flagship or reserve customized size fittings ahead of time"
        className="text-left mb-5"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {/* Luxury Gold-Foil Bordered VIP Concierge Card (Slide 4) */}
        <Reveal>
          <div className="flex flex-col justify-between rounded-3xl border border-[#D4AF37]/40 bg-white p-6 shadow-[0_12px_40px_rgba(212,175,55,0.12)]">
            <div>
              {/* Trust Badge */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/40 bg-[#FAF9F6] px-3.5 py-1 text-[0.62rem] font-extrabold tracking-wider text-[#141414] uppercase">
                  <Sparkles className="h-3 w-3 text-[#D4AF37]" />
                  FLAGSHIP PRIVILEGE
                </span>
                <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 text-[0.6rem] font-bold">
                  Open Now
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#141414]">
                Try Before You Buy in <span className="font-serif italic font-normal text-[#D4AF37]">Ganaur.</span>
              </h3>
              <p className="mt-1.5 text-xs text-[#52525B] leading-relaxed">
                Experience physical try-ons, size verification, and authenticated multibrand selections with zero compromises.
              </p>

              {/* Timing & Location Info */}
              <div className="mt-5 space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs text-[#141414] font-bold">
                  <Clock className="h-4 w-4 text-[#D4AF37] shrink-0" />
                  <span>Open All 7 Days • 10:00 AM – 9:00 PM</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#52525B]">
                  <MapPin className="h-4 w-4 text-[#D4AF37] shrink-0" />
                  <span>Railway Road / MC Road, Ganaur, Sonipat</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#52525B]">
                  <ShieldCheck className="h-4 w-4 text-[#D4AF37] shrink-0" />
                  <span>100% Authenticated Global Fashion Labels</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Concierge Action CTA */}
            <div className="mt-6 space-y-2.5">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#141414] py-3.5 px-6 text-center text-xs font-bold tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#27272A] hover:shadow-lg active:scale-95"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>Reserve Size & Fitting on WhatsApp</span>
              </a>

              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-neutral-200 bg-[#FAF9F6] py-2.5 px-6 text-center text-xs font-bold text-[#141414] transition-colors hover:bg-neutral-100"
              >
                <Phone className="h-3.5 w-3.5 text-[#52525B]" />
                <span>Call Store: {PHONE}</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Embedded Map Visual */}
        <Reveal delay={0.1}>
          <div className="h-[280px] overflow-hidden rounded-3xl border border-black/[0.06] shadow-sm md:h-full bg-[#FAF9F6]">
            <iframe
              title="Prime Outlet location map"
              src="https://www.google.com/maps?q=Ganaur%2C%20Sonipat%2C%20Haryana&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
