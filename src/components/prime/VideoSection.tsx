import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import { Reveal, SectionHeading } from "./Reveal";

export function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="my-8 px-4 sm:px-6">
      <SectionHeading
        eyebrow="STORE WALKTHROUGH"
        title="Experience The Space"
        subtitle="Take an immersive virtual tour inside our Ganaur flagship studio"
        className="text-left mb-5"
      />

      <Reveal delay={0.1}>
        <div
          onClick={() => setIsModalOpen(true)}
          className="group relative flex aspect-[16/10] min-h-[340px] w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-[#C59B27]/50 sm:aspect-[21/9] sm:min-h-[400px]"
        >
          {/* Background Video Preview */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-700 ease-out group-hover:scale-104"
          >
            <source src={heroVideo} type="video/mp4" />
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

          {/* Centered Glassmorphism Pulsing Play Button */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              aria-label="Play Store Video"
              className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C59B27] group-hover:text-white sm:h-18 sm:w-18"
            >
              <Play className="ml-1 h-6 w-6 fill-[#C59B27] text-[#C59B27] transition-colors group-hover:fill-white group-hover:text-white sm:h-7 sm:w-7" />
            </button>

            <h2 className="mt-5 max-w-xl font-serif text-xl font-bold tracking-tight text-white leading-tight sm:mt-6 sm:text-3xl">
              Come In, Experience Style That Fits.
            </h2>
            <p className="mt-2 text-[0.62rem] font-bold tracking-[0.25em] text-[#E5D2A0] uppercase sm:text-xs">
              PRIME OUTLET · GANAUR, SONIPAT
            </p>
          </div>
        </div>
      </Reveal>

      {/* Video Modal Lightbox */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-black shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close Video Modal"
                className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#18181B] shadow-md transition-transform hover:scale-110 active:scale-95"
              >
                <X className="h-4 w-4" />
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
