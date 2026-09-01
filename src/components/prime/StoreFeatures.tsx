import { ShieldCheck, ShoppingBag, Clock, MessageSquare } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    label: "100% Genuine Multibrand",
  },
  {
    icon: ShoppingBag,
    label: "Trial & Instant Exchange",
  },
  {
    icon: Clock,
    label: "Open Daily 10 AM – 9 PM",
  },
  {
    icon: MessageSquare,
    label: "Instant WhatsApp Booking",
  },
];

export function StoreFeatures() {
  return (
    <section className="w-full border-y border-[#E8DFD0] bg-[#F4EFE6] py-3 shadow-sm">
      <div className="no-scrollbar flex w-full items-center overflow-x-auto px-4">
        <div className="flex min-w-max items-center gap-4">
          {trustItems.map(({ icon: Icon, label }, index) => (
            <div key={label} className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 shrink-0 text-[#C59B27]" />
                <span className="whitespace-nowrap text-[0.68rem] font-bold tracking-wide text-[#6B5E4D]">
                  {label}
                </span>
              </div>
              {index < trustItems.length - 1 && (
                <span className="select-none text-[0.6rem] text-[#C59B27]">✦</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
