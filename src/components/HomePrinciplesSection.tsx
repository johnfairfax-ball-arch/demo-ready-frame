import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "You remember everything",
    description: "Every interview, insight, and decision is traceable. Nothing lives only in someone's head.",
  },
  {
    number: "02",
    title: "You come back here",
    description: "Not a tool you open to complete a task. A place you check in on. Your source of truth.",
  },
  {
    number: "03",
    title: "It knows you",
    description: "Your product context, your customers, your decision history. AI that gets smarter as you use it.",
  },
  {
    number: "04",
    title: "You're in control",
    description: "Human in the loop — you promote, you approve, you decide. No firehose. No noise.",
  },
  {
    number: "05",
    title: "Your team lives here too",
    description: "A home for the product trio. Shared language, shared evidence, shared decisions.",
  },
  {
    number: "06",
    title: "The nomad life is over",
    description: "Stop being the glue between Notion, Jira, Miro, Slack. One place. Your place.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const HomePrinciplesSection = () => (
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
          What Home Means in Product
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          From positioning to{" "}
          <span className="text-gradient-coral">product principles.</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {principles.map((p) => (
          <motion.div
            key={p.number}
            variants={item}
            className="group rounded-2xl border border-border/40 bg-card/40 p-8 transition-colors hover:border-primary/30 hover:bg-card/80"
          >
            <span className="text-sm font-bold text-primary">{p.number}</span>
            <h3 className="mt-3 text-xl font-bold text-foreground">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {p.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HomePrinciplesSection;
