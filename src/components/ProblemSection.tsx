import { motion } from "framer-motion";

const painPoints = [
  {
    quote: "Nobody needs another task management tool.",
    insight: "The appetite is for something that makes the PM job easier — not another place to track tickets.",
  },
  {
    quote: "The real work happens somewhere else.",
    insight: "Discovery thinking lives in Miro, Notion, and Google Docs. Everything else receives the paperwork.",
  },
  {
    quote: "I'm the glue, and I'm exhausted by it.",
    insight: "PMs manually transfer context, groom data no-one else touches, and carry the thread in their heads.",
  },
  {
    quote: "AI is creating more work, not less.",
    insight: "Output that needs reviewing, editing, or deleting still costs time. The signal-to-noise ratio is broken.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProblemSection = () => (
  <section className="py-24 md:py-32 bg-gradient-subtle">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center mb-16"
      >
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Different companies. Different roles.{" "}
          <span className="text-gradient-coral">Same story.</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2"
      >
        {painPoints.map((p) => (
          <motion.div
            key={p.quote}
            variants={item}
            className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur p-8"
          >
            <p className="text-lg font-semibold text-foreground leading-snug mb-3">
              "{p.quote}"
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {p.insight}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
