"use client";
import { FC, useRef } from "react";

// PUBLIC_INTERFACE
const ContactForm: FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <section
      className="w-full relative flex flex-col items-center gap-7 py-12 my-10 bg-gradient-to-tl from-primary/80 to-secondary rounded-3xl shadow-lg"
      id="contact"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Contact the Agent</h2>
      <form
        ref={formRef}
        className="flex flex-col gap-5 w-full max-w-lg px-4"
        action="mailto:hello@elegancerealty.com"
        method="POST"
        encType="text/plain"
        onSubmit={() => {
          // Optionally could add notification/toast
          setTimeout(() => formRef.current?.reset(), 3000); // Reset after "sending"
        }}
      >
        <input
          className="rounded-md px-4 py-2 border-none text-primary font-medium"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className="rounded-md px-4 py-2 border-none text-primary font-medium"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="rounded-md px-4 py-2 border-none text-primary font-medium h-28"
          name="message"
          placeholder="Message"
          required
        />
        <button
          type="submit"
          className="bg-accent text-primary font-semibold rounded-full py-2 px-6 shadow hover:bg-primary hover:text-accent transition"
        >
          Send Message
        </button>
      </form>
      <span className="text-gray-200 text-sm mt-1">
        Or email directly:{" "}
        <a
          href="mailto:hello@elegancerealty.com"
          className="text-accent underline hover:text-white"
        >
          hello@elegancerealty.com
        </a>
      </span>
    </section>
  );
};

export default ContactForm;
