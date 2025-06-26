"use client";
import { FC } from "react";
import { achievements } from "@/data/achievements";
import { motion } from "framer-motion";

interface Props {
  className?: string;
}

// PUBLIC_INTERFACE
const Achievements: FC<Props> = ({ className }) => {
  return (
    <section
      className={`w-full flex flex-col items-center gap-7 mb-16 ${className || ""}`}
      id="achievements"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-accent">
        Achievements & Awards
      </h2>
      <div className="flex w-full max-w-5xl gap-7 overflow-x-auto scrollbar-thin py-2">
        {achievements.map((award, idx) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5, type: "spring" }}
            className="flex flex-col items-center min-w-[175px] max-w-[200px] bg-secondary dark:bg-primary text-primary dark:text-secondary rounded-lg shadow p-4 border-b-4 border-accent hover:scale-105 transition-transform"
          >
            <span className="text-4xl mb-2">{award.icon || "🏆"}</span>
            <div className="font-semibold">{award.title}</div>
            <small className="italic text-gray-600 dark:text-gray-300">{award.year}</small>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
