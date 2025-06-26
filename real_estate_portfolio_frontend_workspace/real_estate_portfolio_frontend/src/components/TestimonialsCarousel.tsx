"use client";
import { FC, useState, useEffect, useRef } from "react";
import { testimonials } from "@/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  className?: string;
}

// PUBLIC_INTERFACE
const TestimonialsCarousel: FC<Props> = ({ className }) => {
  const [idx, setIdx] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIdx((i) => (i + 1) % testimonials.length);
    }, 4500);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [idx]);

  return (
    <section
      className={`w-full flex flex-col items-center gap-6 ${className || ""}`}
      id="testimonials"
    >
      <h2 className="text-2xl text-primary font-bold dark:text-accent mb-2">Client Testimonials</h2>
      <div className="relative w-full max-w-xl min-h-[210px] flex items-center">
        {/* Arrow Left */}
        <button
          aria-label="Previous testimonial"
          className="absolute left-0 z-10 bg-secondary hover:bg-accent text-primary rounded-full p-2 transition"
          onClick={() => setIdx((idx + testimonials.length - 1) % testimonials.length)}
          style={{ top: "40%" }}
        >
          &#8592;
        </button>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={testimonials[idx].client}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            className="mx-auto bg-white dark:bg-primary border border-secondary rounded-2xl p-6 w-full shadow"
          >
            <blockquote className="italic text-lg text-gray-600 dark:text-gray-100 mb-4">
              &ldquo;{testimonials[idx].statement}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <span className="block w-10 h-10 bg-accent rounded-full flex items-center justify-center text-lg font-bold text-primary">
                {testimonials[idx].client[0]}
              </span>
              <span className="font-semibold text-primary">{testimonials[idx].client}</span>
              <span className="text-sm text-secondary ml-2">{testimonials[idx].location}</span>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Arrow Right */}
        <button
          aria-label="Next testimonial"
          className="absolute right-0 z-10 bg-secondary hover:bg-accent text-primary rounded-full p-2 transition"
          onClick={() => setIdx((idx + 1) % testimonials.length)}
          style={{ top: "40%" }}
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={`rounded-full w-3 h-3 transition ${
              i === idx ? "bg-accent" : "bg-gray-300 dark:bg-gray-600"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
