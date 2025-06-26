"use client";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import AgentProfile from "@/components/AgentProfile";
import PropertyGrid from "@/components/PropertyGrid";
import Achievements from "@/components/Achievements";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ContactForm from "@/components/ContactForm";

const Page = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-[family-name:var(--font-geist-sans)] transition-colors">
      {/* Hero/Banner */}
      <Hero />
      {/* Main site grid */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto w-full px-3 sm:px-8 gap-14 py-12">
        <div className="flex-1 flex flex-col gap-16">
          <PropertyGrid />
          <Achievements />
          <TestimonialsCarousel />
          <ContactForm />
        </div>
        <div className="w-full md:w-[340px] flex-shrink-0 md:sticky md:top-10">
          <AgentProfile />
        </div>
      </div>
      <footer className="flex flex-col items-center gap-2 py-6 text-sm border-t border-secondary bg-background/80">
        <div>
          &copy; {new Date().getFullYear()} Alexandra Bennett, Elegance Estate Realty &mdash; Portfolio Site
        </div>
        <a
          href="#hero"
          className="underline text-accent hover:text-primary transition"
        >
          Back to Top
        </a>
      </footer>
    </div>
  );
};

export default Page;
