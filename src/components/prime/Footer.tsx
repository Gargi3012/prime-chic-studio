import { MessageSquare } from "lucide-react";
import { WHATSAPP } from "@/data/catalog";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#FDFCFA] border-t border-black/[0.06] pt-16 pb-28 px-4 sm:px-8 overflow-hidden">
      {/* Background Subtle Large Brand Watermark */}
      <div className="absolute inset-x-0 bottom-12 flex justify-center pointer-events-none select-none z-0">
        <span className="font-serif text-[16vw] font-bold uppercase text-black/[0.035] tracking-widest leading-none">
          PRIME
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Header & WhatsApp CTA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-black/[0.06] gap-6">
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.15em] text-[#171615] block uppercase">
              PRIME OUTLET
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E6738] font-semibold">
              GANAUR FLAGSHIP STUDIO · NCR
            </span>
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#171615] text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#9E6738] transition-colors shadow-md w-fit"
          >
            <MessageSquare className="w-4 h-4 stroke-[1.75]" />
            <span>Chat with Personal Stylist →</span>
          </a>
        </div>

        {/* Clean 4-Column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-black/[0.06]">
          {/* Column 1: Shop */}
          <div className="space-y-3">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#171615]">
              Shop
            </h5>
            <ul className="space-y-2 text-xs text-[#7A7570]">
              <li><a href="#curated-drops" className="hover:text-[#9E6738] transition-colors">Women's Runway</a></li>
              <li><a href="#curated-drops" className="hover:text-[#9E6738] transition-colors">Men's Tailoring</a></li>
              <li><a href="#footwear" className="hover:text-[#9E6738] transition-colors">Vault Sneakers</a></li>
              <li><a href="#curated-drops" className="hover:text-[#9E6738] transition-colors">Leather Accessories</a></li>
            </ul>
          </div>

          {/* Column 2: About */}
          <div className="space-y-3">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#171615]">
              About
            </h5>
            <ul className="space-y-2 text-xs text-[#7A7570]">
              <li><a href="#visit" className="hover:text-[#9E6738] transition-colors">Ganaur Flagship</a></li>
              <li><a href="#visit" className="hover:text-[#9E6738] transition-colors">Our Heritage</a></li>
              <li><a href="#visit" className="hover:text-[#9E6738] transition-colors">Brand Directory</a></li>
              <li><a href="#visit" className="hover:text-[#9E6738] transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Column 3: Process */}
          <div className="space-y-3">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#171615]">
              Process
            </h5>
            <ul className="space-y-2 text-xs text-[#7A7570]">
              <li><a href="#visit" className="hover:text-[#9E6738] transition-colors">Private Concierge</a></li>
              <li><a href="#visit" className="hover:text-[#9E6738] transition-colors">Same-Day NCR Dispatch</a></li>
              <li><a href="#visit" className="hover:text-[#9E6738] transition-colors">Authenticity Guarantee</a></li>
              <li><a href="#visit" className="hover:text-[#9E6738] transition-colors">Returns & Exchanges</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & FAQs */}
          <div className="space-y-3">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#171615]">
              Contact & FAQs
            </h5>
            <ul className="space-y-2 text-xs text-[#7A7570]">
              <li>Railway Road, Ganaur, Sonipat</li>
              <li>Open Daily: 10:00 AM – 9:00 PM</li>
              <li>WhatsApp: +91 99999 99999</li>
              <li>Email: concierge@primeoutlet.in</li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A7570] gap-4">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p>© 2026 PRIME OUTLET GANAUR FLAGSHIP STUDIO. ALL RIGHTS RESERVED.</p>
            <p className="text-[10px] text-[#9E6738] font-medium tracking-wide">
              Crafted in Ganaur Flagship Studio · Direct Concierge WhatsApp:{" "}
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="underline font-bold">
                +91 99999 99999
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-medium tracking-widest uppercase">
            <span>TERMS</span>
            <span>·</span>
            <span>PRIVACY</span>
            <span>·</span>
            <span>DELHI-NCR DISPATCH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
