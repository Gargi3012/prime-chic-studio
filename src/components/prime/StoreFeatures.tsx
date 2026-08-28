import { ShieldCheck, Sparkles, Clock, MessageSquare } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Authentic Multibrand",
    subtitle: "Puma, Nike, Adidas & U.S. Polo",
  },
  {
    icon: Sparkles,
    title: "In-Store Trial & Fitting",
    subtitle: "Private fitting rooms in Ganaur",
  },
  {
    icon: Clock,
    title: "Open 7 Days (10 AM – 9 PM)",
    subtitle: "All days open with parking",
  },
  {
    icon: MessageSquare,
    title: "Reserve via WhatsApp",
    subtitle: "Hold size before visiting",
  },
];

export function StoreFeatures() {
  return (
    <section className="px-5 py-4 sm:px-10">
      <Reveal>
        <div className="no-scrollbar flex items-center justify-between gap-4 overflow-x-auto rounded-2xl border border-gold/30 bg-surface/40 p-4 backdrop-blur-md">
          {features.map(({ icon: Icon, title, subtitle }, idx) => (
            <div
              key={title}
              className={`flex shrink-0 items-center gap-3 pr-4 ${
                idx !== features.length - 1 ? "border-r border-border/60" : ""
              }`}
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-gold/40 bg-gold/10 text-gold">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="whitespace-nowrap text-xs font-bold text-foreground sm:text-sm">
                  {title}
                </h4>
                <p className="whitespace-nowrap text-[0.65rem] font-medium text-muted-foreground">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
