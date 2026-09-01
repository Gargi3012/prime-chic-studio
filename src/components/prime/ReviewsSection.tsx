import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, MessageSquarePlus, X, CheckCircle2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
}

const initialReviews: Review[] = [
  {
    id: "r1",
    name: "Rahul Sharma",
    location: "Ganaur",
    rating: 5,
    comment: "Best multibrand store in Ganaur. Got original Puma sneakers and a U.S. Polo jacket at great outlet prices.",
  },
  {
    id: "r2",
    name: "Priya Malik",
    location: "Sonipat",
    rating: 5,
    comment: "Love the curated collection! Reserved my size on WhatsApp before driving down to Ganaur. Store staff is very courteous.",
  },
  {
    id: "r3",
    name: "Vikas Dahiya",
    location: "Panipat",
    rating: 5,
    comment: "100% genuine Nike & Adidas stock. No need to go to Delhi malls when Prime Outlet is right here in Ganaur.",
  },
];

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form State
  const [newName, setNewName] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newComment) return;

    const newReviewObj: Review = {
      id: Date.now().toString(),
      name: newName,
      location: newLocation || "Ganaur",
      rating: newRating,
      comment: newComment,
    };

    setReviews([newReviewObj, ...reviews]);
    setSubmittedSuccess(true);

    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsModalOpen(false);
      setNewName("");
      setNewLocation("");
      setNewComment("");
      setNewRating(5);
    }, 1800);
  };

  return (
    <section className="my-8 px-4 sm:px-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[0.62rem] font-bold tracking-[0.25em] text-[#C59B27] uppercase">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#18181B] sm:text-3xl">
            Shopper Stories
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex min-h-[36px] items-center gap-1.5 rounded-full border border-[#C59B27]/40 bg-white px-4 py-1.5 text-[0.65rem] font-bold tracking-wider text-[#18181B] shadow-xs transition-colors hover:border-[#C59B27] hover:text-[#C59B27] active:scale-95"
        >
          <MessageSquarePlus className="h-3.5 w-3.5 text-[#C59B27]" />
          WRITE REVIEW
        </button>
      </div>

      {/* Editorial Testimonials Grid */}
      <Reveal delay={0.1}>
        <div className="grid gap-3 sm:gap-4">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="flex flex-col justify-between rounded-2xl border border-black/[0.06] bg-white p-4.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div>
                <div className="mb-2 flex items-center gap-1">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#C59B27] text-[#C59B27]" />
                  ))}
                  <span className="ml-2 text-[0.65rem] font-bold text-[#8C6D1F]">Verified Shopper</span>
                </div>

                <p className="font-serif text-xs italic leading-relaxed text-[#18181B]/90 sm:text-sm">
                  "{r.comment}"
                </p>
              </div>

              <div className="mt-3.5 border-t border-black/[0.05] pt-2 flex items-center justify-between">
                <p className="text-xs font-bold text-[#18181B]">
                  {r.name}
                </p>
                <span className="text-[0.65rem] font-medium text-[#71717A]">
                  📍 {r.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Share Experience Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-black/[0.08] bg-white p-6 shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-black/[0.08] bg-[#FAF9F6] text-[#18181B] hover:scale-105"
              >
                <X className="h-4 w-4" />
              </button>

              {submittedSuccess ? (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <CheckCircle2 className="h-12 w-12 text-[#C59B27] animate-bounce" />
                  <h3 className="mt-3 text-lg font-bold text-[#18181B]">Thank You for Your Feedback!</h3>
                  <p className="mt-1 text-xs text-[#71717A]">Your experience helps fellow shoppers in Ganaur.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-3.5">
                  <div>
                    <h3 className="text-lg font-bold text-[#18181B]">Share Your Experience</h3>
                    <p className="text-xs text-[#71717A]">Tell us about your store visit at Prime Outlet Ganaur.</p>
                  </div>

                  {/* Rating Picker */}
                  <div>
                    <label className="block text-[0.62rem] font-bold tracking-wider text-[#C59B27] uppercase mb-1">
                      RATING
                    </label>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="p-0.5 hover:scale-110 transition-transform"
                        >
                          <Star
                            className={`h-5 w-5 ${
                              star <= newRating ? "fill-[#C59B27] text-[#C59B27]" : "text-neutral-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Location */}
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[0.62rem] font-bold text-[#71717A] uppercase mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Rahul Sharma"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="w-full rounded-xl border border-black/[0.1] bg-[#FAF9F6] px-3 py-2 text-xs text-[#18181B] focus:border-[#C59B27] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.62rem] font-bold text-[#71717A] uppercase mb-1">City / Town</label>
                      <input
                        type="text"
                        placeholder="Ganaur"
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)}
                        className="w-full rounded-xl border border-black/[0.1] bg-[#FAF9F6] px-3 py-2 text-xs text-[#18181B] focus:border-[#C59B27] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-[0.62rem] font-bold text-[#71717A] uppercase mb-1">Your Review</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Loved the clothing collection and trials..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full rounded-xl border border-black/[0.1] bg-[#FAF9F6] px-3 py-2 text-xs text-[#18181B] focus:border-[#C59B27] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="glow-gold flex min-h-[42px] w-full items-center justify-center rounded-full bg-gold-gradient py-2.5 text-xs font-bold tracking-wider text-white shadow-md transition-transform hover:scale-[1.02] active:scale-95"
                  >
                    SUBMIT FEEDBACK
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
