'use client';

import { motion } from 'framer-motion';

const properties = [
  {
    title: "Modern City Apartment",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=640&q=80",
    price: "$850,000",
    location: "Downtown, Metropolis",
    details: "3 Bed · 2 Bath · 1400 sf"
  },
  {
    title: "Luxury Villa Retreat",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?fit=crop&w=640&q=80",
    price: "$2,400,000",
    location: "Palm Coast, FL",
    details: "5 Bed · 4 Bath · 3900 sf"
  },
  {
    title: "Cozy Suburban Home",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?fit=crop&w=640&q=80",
    price: "$620,000",
    location: "Greenwood, TX",
    details: "4 Bed · 3 Bath · 2100 sf"
  }
];

const testimonials = [
  {
    name: "Jessica M.",
    content: "Outstanding service and attention to detail! Helped us find our dream home effortlessly.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Sanjay P.",
    content: "Highly professional and responsive throughout the sale process. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    name: "Linda H.",
    content: "The best real estate team in town! Personalized approach and great results.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const achievements = [
  {
    icon: "🏆",
    title: "Top Seller 2023",
    description: "Ranked #1 in overall sales in the district."
  },
  {
    icon: "⭐",
    title: "Zillow 5-Star Agent",
    description: "Consistent 5-star reviews from satisfied clients."
  },
  {
    icon: "🏅",
    title: "Best Local Team",
    description: "Voted as 'Best Real Estate Team' by HomeBuyers Magazine."
  }
];

// PUBLIC_INTERFACE
function HeroSection() {
  return (
    <section className="section flex flex-col md:flex-row justify-between items-center gap-8 fade-in">
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Elevate Your Home Journey with <span className="text-accent">EleganceEstate</span>
        </h1>
        <p className="mb-6 text-lg text-primary">
          Trusted real estate professionals guiding you through buying or selling, with expertise, integrity, and results that move you.
        </p>
        <a
          href="#contact"
          className="inline-block px-7 py-3 bg-primary text-white rounded-full font-semibold shadow-md transition hover:bg-accent hover:text-primary"
        >
          Schedule a Consultation
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-1 flex justify-center"
      >
        <img
          src="/agent-hero.png"
          alt="Agent Portrait"
          className="w-64 h-64 md:h-80 md:w-80 object-cover rounded-2xl shadow-xl border-4 border-accent"
          style={{ backgroundColor: "#bcd4e6" }}
        />
      </motion.div>
    </section>
  );
}

// PUBLIC_INTERFACE
function PropertiesSection() {
  return (
    <section className="section fade-in" id="properties">
      <h2 className="text-3xl font-semibold mb-6 text-center text-primary">Featured Properties</h2>
      <div className="grid md:grid-cols-3 gap-7">
        {properties.map((prop, i) => (
          <motion.div
            className="card flex flex-col"
            key={prop.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <img className="w-full h-44 object-cover rounded-t-xl" src={prop.image} alt={prop.title} />
            <div className="p-5 flex flex-col grow">
              <h3 className="text-xl font-bold mb-2 text-primary">{prop.title}</h3>
              <div className="mb-1 text-accent font-semibold">{prop.price}</div>
              <div className="mb-1 text-primary/70 text-sm">{prop.location}</div>
              <div className="mb-4 text-secondary/90 text-xs">{prop.details}</div>
              <a
                className="mt-auto text-primary font-medium hover:text-accent"
                href="#contact"
              >
                View Details &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
function AchievementsSection() {
  return (
    <section className="section fade-in" id="achievements">
      <h2 className="text-3xl font-semibold mb-6 text-center text-primary">Achievements & Accolades</h2>
      <div className="flex flex-wrap gap-7 justify-center">
        {achievements.map((ach, idx) => (
          <motion.div
            key={ach.title}
            className="card py-7 px-5 w-72 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.13 + 0.13 }}
            viewport={{ once: true }}
          >
            <span className="text-5xl mb-3">{ach.icon}</span>
            <div className="text-lg font-semibold mb-1 text-primary">{ach.title}</div>
            <div className="text-primary/70 text-sm text-center">{ach.description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
function TestimonialsSection() {
  return (
    <section className="section fade-in" id="testimonials">
      <h2 className="text-3xl font-semibold mb-8 text-center text-primary">Our Satisfied Clients</h2>
      <div className="overflow-x-auto flex gap-6 py-2 px-1 hide-scrollbar">
        {testimonials.map((test, idx) => (
          <motion.div
            key={test.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.22 }}
            viewport={{ once: true }}
            className="card min-w-[340px] max-w-xs flex flex-col items-center p-5"
          >
            <img src={test.avatar} alt={test.name} className="w-20 h-20 rounded-full border-4 border-accent mb-3 shadow-lg" />
            <p className="italic text-center text-primary mb-3">&quot;{test.content}&quot;</p>
            <span className="font-medium text-accent">{test.name}</span>
          </motion.div>
        ))}
      </div>
      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none;}`}</style>
    </section>
  );
}

// PUBLIC_INTERFACE
function AgentProfileSection() {
  return (
    <motion.section
      className="section flex flex-col-reverse md:flex-row gap-8 items-center fade-in"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.08 }}
      id="profile"
    >
      <div className="flex-1 flex flex-col">
        <h2 className="text-3xl font-semibold mb-2 text-primary">About The Agent</h2>
        <p className="mb-4 text-lg text-primary/90" style={{ lineHeight: 1.7 }}>
          Alex Stone brings over 15 years of local real estate experience, a passion for finding “the right fit,” and a commitment to transparent, relationship-driven service.
        </p>
        <ul className="mb-4 pl-6 list-disc text-primary/80 text-base">
          <li>Licensed Realtor® since 2008</li>
          <li>Expert Negotiator & Market Analyst</li>
          <li>Member, National Association of Realtors</li>
          <li>Fluent in English and Spanish</li>
        </ul>
        <div>
          <a href="mailto:alex.stone@eleganceestate.com" className="inline-block px-5 py-2 bg-accent text-primary font-semibold rounded-full shadow-md hover:bg-primary hover:text-white transition">
            Email Alex
          </a>
        </div>
      </div>
      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.07 }}
      >
        <img
          src="/agent-profile.png"
          alt="Agent Alex Stone"
          className="w-60 h-60 object-cover rounded-2xl shadow-xl border-4 border-accent"
          style={{ backgroundColor: "#bcd4e6" }}
        />
      </motion.div>
    </motion.section>
  );
}

// PUBLIC_INTERFACE
function ContactSection() {
  return (
    <section className="section fade-in" id="contact">
      <motion.div
        className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 mx-auto max-w-xl border border-secondary"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-3 text-primary">
          Schedule a Conversation
        </h2>
        <p className="mb-6 text-primary/80">
          Let’s get started on your next real estate journey. Fill in the form below or email us directly!
        </p>
        <form
          action="https://formspree.io/f/xknkvrlz"
          method="POST"
          className="space-y-5"
        >
          <div>
            <input
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-3 border border-secondary rounded bg-secondary text-primary focus:outline-accent"
              autoComplete="name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-3 border border-secondary rounded bg-secondary text-primary focus:outline-accent"
              autoComplete="email"
            />
          </div>
          <div>
            <textarea
              name="message"
              required
              placeholder="Tell us about your needs..."
              className="w-full p-3 border border-secondary rounded bg-secondary text-primary focus:outline-accent"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-primary text-white rounded font-semibold hover:bg-accent hover:text-primary transition"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <a
            href="mailto:alex.stone@eleganceestate.com"
            className="text-accent hover:underline"
          >
            Or email us directly &rarr;
          </a>
        </div>
      </motion.div>
    </section>
  );
}

// PUBLIC_INTERFACE
function Footer() {
  return (
    <footer className="bg-primary text-secondary/95 py-8 mt-4 fade-in">
      <div className="max-w-6xl mx-auto px-4 flex flex-col justify-between items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
        <div className="text-xs">© {new Date().getFullYear()} EleganceEstate. All rights reserved.</div>
        <nav className="flex gap-5 text-xs">
          <a href="#properties" className="hover:text-accent">Properties</a>
          <a href="#testimonials" className="hover:text-accent">Testimonials</a>
          <a href="#profile" className="hover:text-accent">Agent</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

// PUBLIC_INTERFACE
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero/Banner Section */}
      <HeroSection />

      {/* Property Listings */}
      <PropertiesSection />

      {/* Achievements */}
      <AchievementsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Agent Profile */}
      <AgentProfileSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
