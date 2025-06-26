import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { agent } from "@/data/agent";

// PUBLIC_INTERFACE
const Hero: FC = () => (
  <section
    className="relative w-full py-14 sm:py-20 flex flex-col sm:flex-row gap-10 sm:gap-24 items-center justify-center bg-gradient-to-b from-primary/90 to-secondary"
    id="hero"
  >
    <div className="flex-shrink-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <Image
          src={agent.avatar}
          alt="Agent Profile"
          width={172}
          height={172}
          className="rounded-full border-8 border-accent shadow-xl"
          priority
        />
      </motion.div>
    </div>
    <div className="flex flex-col items-center sm:items-start gap-4 max-w-2xl">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        className="text-4xl md:text-5xl font-bold text-white mb-2 text-center sm:text-left"
      >
        {agent.heroTitle}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.85 }}
        className="text-lg text-secondary font-light text-center sm:text-left mb-3"
      >
        {agent.heroSubtitle}
      </motion.p>
      <a
        href="#contact"
        className="bg-accent text-primary text-lg font-semibold px-8 py-3 rounded-full shadow hover:-translate-y-1.5 transition-transform duration-300"
      >
        Book a Consultation
      </a>
    </div>
  </section>
);

export default Hero;
