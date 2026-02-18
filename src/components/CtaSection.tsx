import { motion } from "framer-motion";

const DEMO_URL = "http://early-access.timebook.ai/book_a_demo";
const SIGNUP_URL = "https://app.timebook.net/login/signup";

const CtaSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl rounded-3xl border border-primary/20 bg-card/60 backdrop-blur p-12 md:p-16 text-center glow-coral"
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Ready to come{" "}
          <span className="text-gradient-coral">home?</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
          Unlike Jira, Notion, or any discovery add-on, Timebook is the place you come back to — not the tool you leave behind.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-gradient-coral px-8 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
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
    </div>
  </section>
);

export default CtaSection;
