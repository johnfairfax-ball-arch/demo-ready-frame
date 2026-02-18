import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.png";

const SIGNUP_URL = "https://app.timebook.net/login/signup";
const DEMO_URL = "http://early-access.timebook.ai/book_a_demo";

const HeroSection = () => (
  <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
    {/* Gradient glow behind hero */}
    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-vibrant-coral/5 blur-[120px]" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl leading-[1.08]">
          Product Managers:
          <br />
          <span className="text-gradient-coral">welcome home.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          For product managers who are done being nomads, Timebook is the first platform built as their home — where customer conversations, insights, opportunities, goals, and decisions all live together.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-gradient-coral px-8 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 glow-coral"
          >
            Book a Demo
          </a>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl border border-border px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
          >
            Get Early Access
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 mx-auto max-w-5xl"
      >
        <div className="rounded-2xl border border-border/50 overflow-hidden glow-coral">
          <img
            src={heroVisual}
            alt="Timebook product management platform showing connected insights, opportunities and delivery"
            className="w-full"
            loading="eager"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
