import { motion } from "framer-motion";

const features = [
  {
    icon: "📡",
    title: "Capture Insights",
    description: "Turn user research into actionable ideas. Consolidate feedback from customers, internal teams, and market research in one searchable hub.",
  },
  {
    icon: "🧭",
    title: "Discover What to Build",
    description: "Connect goals to opportunities and make evidence-based product decisions. Map customer needs directly to outcomes using Opportunity Solution Trees.",
  },
  {
    icon: "📣",
    title: "Communicate Your Plan",
    description: "Share your product vision and roadmap. Show everyone what you're building and why. Connect business goals to user needs, experiments, and delivery.",
  },
  {
    icon: "🚀",
    title: "Manage Delivery",
    description: "Transform requirements into executable tasks while maintaining strategic alignment. Manage timeframes, plan sprints and track tasks, features, and bugs.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => (
  <section className="py-24 md:py-32 bg-gradient-subtle">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center mb-16"
      >
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          End-to-End Platform
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Uniting product teams{" "}
          <span className="text-gradient-coral">at every step.</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur p-8 transition-colors hover:border-primary/30"
          >
            <div className="text-3xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {f.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {f.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
