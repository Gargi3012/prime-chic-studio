import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import { Reveal } from "./Reveal";

export function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="section-pad">
      <Reveal delay={0.1}>
        {/* Single-Screen Video Card (Matching Reference Screenshot Design) */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="group relative flex aspect-[16/10] min-h-[380px] w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl border border-border/80 bg-black shadow-2xl transition-all duration-500 hover:border-gold/60 sm:aspect-[21/9] sm:min-h-[460px]"
        >
          {/* Background Video Preview */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 ease-out group-hover:scale-105"
          >
            <source src={heroVideo} type="video/mp4" />
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Luxury Dark Overlay & Radial Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_85%)]" />

          {/* Centered Glassmorphism Pulsing Play Button */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              aria-label="Play Store Video"
              className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-black/50 shadow-[0_0_35px_rgba(212,175,55,0.4)] backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] sm:h-20 sm:w-20"
            >
              {/* Pulsing Ring */}
              <span className="absolute inset-0 animate-ping rounded-full border border-gold/40 opacity-40 duration-1000" />
              <span className="absolute -inset-2 rounded-full border border-gold/20 opacity-30 blur-sm" />
              
              <Play className="ml-1 h-7 w-7 fill-gold text-gold transition-transform duration-300 group-hover:scale-110 sm:h-9 sm:w-9" />
            </button>

            {/* Overlaid Main Title & Subtitle (Exact Match to Screenshot Style) */}
            <h2 className="mt-6 max-w-2xl text-2xl font-serif font-extrabold tracking-tight text-white leading-tight sm:mt-8 sm:text-4xl md:text-5xl">
              Come In, Experience Style That Fits.
            </h2>
            <p className="mt-3 text-[0.65rem] font-bold tracking-[0.3em] text-gold uppercase sm:text-xs">
              PRIME OUTLET — GANAUR, SONIPAT
            </p>
          </div>
        </div>
      </Reveal>

      {/* Full-Screen Video Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-gold/40 bg-black shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close Video Modal"
                className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-black/70 text-gold transition-transform hover:scale-110 active:scale-95"
              >
                <X className="h-5 w-5" />
              </button>

              <video
                controls
                autoPlay
                className="aspect-video h-full w-full object-cover"
              >
                <source src={heroVideo} type="video/mp4" />
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
