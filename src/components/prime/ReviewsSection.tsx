import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, MessageSquarePlus, X, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

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
    comment: "Best multibrand store in Ganaur. Got original Puma sneakers and a U.S. Polo jacket at great prices. Trial room experience was smooth.",
  },
  {
    id: "r2",
    name: "Priya Malik",
    location: "Sonipat",
    rating: 5,
    comment: "Love the curated collection! Reserved my size on WhatsApp before driving down to Ganaur. Store staff is very helpful.",
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
    <section className="section-pad">
      {/* Editorial Header */}
      <Reveal>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-border/60 pb-6">
          <div>
            <p className="text-[0.65rem] font-bold tracking-[0.25em] text-gold uppercase">
              CLIENT STORIES
            </p>
            <h2 className="mt-1 text-2xl font-serif font-extrabold tracking-tight text-foreground sm:text-4xl">
              What Our Shoppers Say
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="flex min-h-[40px] items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-xs font-bold tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-black active:scale-95"
          >
            <MessageSquarePlus className="h-4 w-4" />
            SHARE YOUR EXPERIENCE
          </button>
        </div>
      </Reveal>

      {/* Editorial Testimonials Grid */}
      <Reveal delay={0.1}>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="flex flex-col justify-between border-l-2 border-gold/40 pl-5 py-1"
            >
              <div>
                <div className="mb-3 flex text-amber-400">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm font-serif italic leading-relaxed text-foreground/90">
                  "{r.comment}"
                </p>
              </div>

              <div className="mt-4 pt-2">
                <p className="text-xs font-bold text-foreground">
                  {r.name}{" "}
                  <span className="font-normal text-muted-foreground">
                    — {r.location}
                  </span>
                </p>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-gold/40 bg-black/95 p-6 shadow-2xl sm:p-8"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-2 text-gold hover:scale-105"
              >
                <X className="h-4 w-4" />
              </button>

              {submittedSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircle2 className="h-14 w-14 text-emerald-400 animate-bounce" />
                  <h3 className="mt-4 text-xl font-bold text-foreground">Thank You for Your Feedback!</h3>
                  <p className="mt-2 text-xs text-muted-foreground">Your experience helps fellow shoppers in Ganaur.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground">Share Your Experience</h3>
                    <p className="text-xs text-muted-foreground">Tell us about your store visit or product try-on at Prime Outlet.</p>
                  </div>

                  {/* Rating Picker */}
                  <div>
                    <label className="block text-[0.65rem] font-bold tracking-[0.15em] text-gold uppercase mb-1.5">
                      RATING
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="p-1 hover:scale-110 transition-transform"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              star <= newRating ? "fill-amber-400 text-amber-400" : "text-border"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Location */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-[0.65rem] font-bold text-muted-foreground uppercase mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="w-full rounded-xl border border-border bg-surface-2 px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[0.65rem] font-bold text-muted-foreground uppercase mb-1">Your City / Area</label>
                      <input
                        type="text"
                        placeholder="e.g. Ganaur / Sonipat"
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)}
                        className="w-full rounded-xl border border-border bg-surface-2 px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-[0.65rem] font-bold text-muted-foreground uppercase mb-1">Your Feedback</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Write your feedback..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full rounded-xl border border-border bg-surface-2 px-3 py-2 text-xs text-foreground focus:border-gold focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="glow-gold flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-xs font-bold tracking-[0.15em] text-primary-foreground hover:scale-[1.02] active:scale-95"
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
