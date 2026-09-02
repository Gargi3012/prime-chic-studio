import { Truck, ShieldCheck, MessageSquare } from "lucide-react";
import { WHATSAPP } from "@/data/catalog";

export function ValueProps() {
  const props = [
    {
      icon: Truck,
      title: "Delhi-NCR Same-Day Dispatch",
      subtitle: "Sonipat & NCR express delivery within 4 hours",
    },
    {
      icon: ShieldCheck,
      title: "100% Genuine Authenticity",
      subtitle: "Verified global brand tags & flagship guarantee",
    },
    {
      icon: MessageSquare,
      title: "In-Store WhatsApp Concierging",
      subtitle: "Reserve outfits & arrange trial before visiting",
    },
  ];

  return (
    <section className="w-full my-12 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="rounded-2xl border border-black/[0.08] bg-[#FDFCFA] p-6 md:p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-black/[0.06]">
          {props.map(({ icon: Icon, title, subtitle }, idx) => (
            <div
              key={title}
              className={`flex items-start gap-4 ${
                idx > 0 ? "pt-6 md:pt-0 md:pl-8" : ""
              }`}
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F5F3EF] border border-black/[0.05] text-[#9E6738]">
                <Icon className="h-5 w-5 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg font-bold text-[#171615]">
                  {title}
                </h4>
                <p className="text-xs text-[#7A7570] leading-relaxed">
                  {subtitle}
                </p>
                {title.includes("WhatsApp") && (
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block pt-1 text-[11px] font-semibold text-[#9E6738] hover:underline"
                  >
                    Chat with Stylist →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
