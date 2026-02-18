import { motion } from "framer-motion";

const quotes = [
  "I need my job to be simpler so I can focus on customers — not grooming backlogs.",
  "I want a tool that makes my decision-making better. I'd start using that yesterday.",
  "Opportunity management is very manual in my head — that's the biggest pain point.",
  "I want traceability — but as the story of an idea growing, not an audit trail.",
  "We need a consistent operating model. One place everyone works from.",
  "I want to feel proud of what we shipped. I want that story to live somewhere.",
];

const QuotesSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center mb-16"
      >
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          In Their Own Words
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          What PMs are{" "}
          <span className="text-gradient-coral">actually asking for.</span>
        </h2>
      </motion.div>

      <div className="mx-auto max-w-4xl columns-1 md:columns-2 gap-6 space-y-6">
        {quotes.map((q, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="break-inside-avoid rounded-2xl border border-border/40 bg-card/40 p-6"
          >
            <p className="text-base text-foreground/90 italic leading-relaxed">
              "{q}"
            </p>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default QuotesSection;
