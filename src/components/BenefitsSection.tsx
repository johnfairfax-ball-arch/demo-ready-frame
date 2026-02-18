import { motion } from "framer-motion";

const benefits = [
  {
    title: "10X Faster Decision Making",
    description: "Go from insight to decision in minutes, not weeks. All context is connected and AI-ready.",
    metric: "10X",
    subtext: "faster decisions",
  },
  {
    title: "Zero Context Switching",
    description: "Stop jumping between tools. Everything you need lives in one organized workspace.",
    metric: "0",
    subtext: "tools to juggle",
  },
  {
    title: "Complete Visibility",
    description: "See how every customer conversation connects to your roadmap and delivery.",
    metric: "100%",
    subtext: "traceability",
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

const BenefitsSection = () => (
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
          Why teams call Timebook{" "}
          <span className="text-gradient-coral">their product home</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Stop being the glue between disconnected tools. Start building products with clarity and speed.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-5xl grid gap-8 md:grid-cols-3"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            variants={item}
            className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur p-8 text-center"
          >
            <div className="text-5xl font-bold text-gradient-coral mb-4">
              {benefit.metric}
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {benefit.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {benefit.description}
            </p>
            <p className="text-xs font-medium text-primary uppercase tracking-wider">
              {benefit.subtext}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default BenefitsSection;
