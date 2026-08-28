import { ShieldCheck, ShoppingBag, Clock, MessageSquare } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    label: "100% Authentic Multibrand",
  },
  {
    icon: ShoppingBag,
    label: "In-Store Trial & Fitting",
  },
  {
    icon: Clock,
    label: "Open 7 Days (10 AM – 9 PM)",
  },
  {
    icon: MessageSquare,
    label: "Reserve Size on WhatsApp",
  },
];

export function StoreFeatures() {
  return (
    <section className="h-11 w-full border-y border-neutral-800 bg-[#0c0c0c]">
      <div className="no-scrollbar flex h-full w-full items-center overflow-x-auto px-4 md:justify-center">
        <div className="flex min-w-max items-center gap-5 md:gap-7">
          {trustItems.map(({ icon: Icon, label }, index) => (
            <div key={label} className="flex items-center gap-5 md:gap-7">
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 shrink-0 text-amber-400" />
                <span className="whitespace-nowrap text-xs font-medium tracking-wide text-neutral-300">
                  {label}
                </span>
              </div>
              {index < trustItems.length - 1 && (
                <span className="select-none font-bold text-amber-400/50">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
