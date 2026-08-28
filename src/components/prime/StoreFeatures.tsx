import { ShieldCheck, Sparkles, Clock, MessageSquare } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Authentic Multibrand",
    description: "Guaranteed genuine products direct from official Puma, Nike, Adidas & U.S. Polo distributors.",
  },
  {
    icon: Sparkles,
    title: "In-Store Trial & Fitting",
    description: "Spacious private fitting rooms and personalized styling assistance at our Ganaur outlet.",
  },
  {
    icon: Clock,
    title: "Open 7 Days (10 AM – 9 PM)",
    description: "Shop at your convenience every day of the week with hassle-free parking access.",
  },
  {
    icon: MessageSquare,
    title: "Reserve for Try-On",
    description: "Message us on WhatsApp to check live size availability & hold items before visiting.",
  },
];

export function StoreFeatures() {
  return (
    <section className="section-pad">
      <Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-surface/60 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gold/60 hover:bg-surface/90 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]"
            >
              <div>
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-gold/40 bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-foreground sm:text-base">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
