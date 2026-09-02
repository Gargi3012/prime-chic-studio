import { MessageCircle, ArrowUpRight } from "lucide-react";

export function FloatingStylistPill() {
  const whatsappUrl = "https://wa.me/919999999999?text=Hi%20Prime%20Outlet%2C%20I%20want%20to%20reserve%20pieces%20from%20the%20catalog.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Stylist Concierge on WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-50 bg-[#181614] text-white px-5 py-3 rounded-full shadow-2xl items-center gap-3 border border-[#ECE8E1]/20 hover:scale-105 transition-transform group cursor-pointer"
    >
      <div className="relative flex items-center justify-center">
        <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#25D366] rounded-full ring-2 ring-[#181614] animate-pulse" />
      </div>
      <span className="text-xs font-medium tracking-wide uppercase text-white group-hover:text-[#D4AF37] transition-colors">
        Stylist Concierge
      </span>
      <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </a>
  );
}
